"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { RoomSchema } from "@/schema/room-schema";
import { deleteImage } from "@/lib/delete-image";
import path from "path";
import fs from "fs/promises";
import { ContactSchema } from "@/schema/contact-schema";
import { differenceInCalendarDays } from "date-fns";
import { ReserveSchema } from "@/schema/reserve-schema";
import { invoiceClient } from "@/lib/xendit";

export const saveRoom = async (
  images: {
    image: string;
    size: number;
  }[],
  prevState: unknown,
  formData: FormData,
) => {
  if (images.length === 0) {
    return {
      message: "At least one image is required.",
    };
  }

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validateFields = RoomSchema.safeParse(rawData);
  if (!validateFields.success) {
    return { error: validateFields.error.flatten().fieldErrors };
  }

  const { name, description, capacity, price, amenities } = validateFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        capacity,
        price,

        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },

        RoomImages: {
          createMany: {
            data: images.map((item) => ({
              image: item.image,
              size: item.size,
            })),
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/admin/room");
};

export const deleteRoom = async (id: string) => {
  try {
    const room = await prisma.room.findUnique({
      where: { id },
      include: {
        RoomImages: true,
      },
    });

    if (!room) return;

    for (const image of room.RoomImages) {
      await deleteImage(image.image);
    }

    await prisma.room.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/admin/room");
};

export const updateRoom = async (
  images: {
    image: string;
    size: number;
  }[],
  roomId: string,
  prevState: unknown,
  formData: FormData,
) => {
  if (images.length === 0) {
    return {
      message: "At least 1 image is required.",
    };
  }

  if (images.length > 5) {
    return {
      message: "Maximum 5 images allowed",
    };
  }

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validateFields = RoomSchema.safeParse(rawData);

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, description, capacity, price, amenities } = validateFields.data;

  try {
    const existingRoom = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
      include: {
        RoomImages: true,
      },
    });

    if (!existingRoom) {
      return {
        message: "Room not found.",
      };
    }
    const newImageUrls = images.map((item) => item.image);

    for (const item of existingRoom.RoomImages) {
      if (newImageUrls.includes(item.image)) continue;

      try {
        const filePath = path.join(
          process.cwd(),
          "public",
          item.image.replace(/^\/+/, ""),
        );
        await fs.unlink(filePath);
      } catch (error) {
        console.log("Delete image error:", error);
      }
    }

    await prisma.$transaction(async (tx) => {
      await tx.room.update({
        where: {
          id: roomId,
        },
        data: {
          name,
          description,
          capacity,
          price,
        },
      });

      await tx.roomAmenities.deleteMany({
        where: {
          roomId,
        },
      });

      await tx.roomAmenities.createMany({
        data: amenities.map((item) => ({
          roomId,
          amenitiesId: item,
        })),
      });

      await tx.roomImage.deleteMany({
        where: {
          roomId,
        },
      });

      await tx.roomImage.createMany({
        data: images.map((item) => ({
          roomId,
          image: item.image,
          size: item.size,
        })),
      });
    });
  } catch (error) {
    console.log(error);

    return {
      message: "Failed to update room.",
    };
  }

  revalidatePath("/admin/room");
  redirect("/admin/room");
};
