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

export const saveRoom = async (
  image: string,
  prevState: unknown,
  formData: FormData,
) => {
  if (!image) return { message: "Image is required." };

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
        image,
        capacity,
        price,
        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
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
      select: {
        image: true,
      },
    });
    if (!room) return;
    if (room.image) {
      await deleteImage(room.image);
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
  image: string,
  roomId: string,
  prevState: unknown,
  formData: FormData,
) => {
  if (!image) return { message: "Image is required." };

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

  const existingRoom = await prisma.room.findUnique({
    where: { id: roomId },
    select: {
      image: true,
    },
  });

  if (existingRoom?.image && existingRoom.image !== image) {
    try {
      const filePath = path.join(
        process.cwd(),
        "public",
        existingRoom.image.replace(/^\/+/, ""),
      );

      await fs.unlink(filePath);
    } catch (error) {
      console.log("Delete old image error:", error);
    }
  }

  try {
    await prisma.$transaction([
      prisma.room.update({
        where: { id: roomId },
        data: {
          name,
          description,
          image,
          price,
          capacity,
          RoomAmenities: {
            deleteMany: {},
          },
        },
      }),
      prisma.roomAmenities.createMany({
        data: amenities.map((item) => ({
          roomId,
          amenitiesId: item,
        })),
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin/room");
  redirect("/admin/room");
};

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData,
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return { message: "Thanks for contact us." };
  } catch (error) {
    console.log(error);
  }
};

export const createReserve = async (
  roomId: string,
  price: number,
  startDate: Date,
  endDate: Date,
  prevState: unknown,
  formData: FormData,
) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id)
    redirect(`/signin?redirect_url=room/${roomId}`);

  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };

  const validatedFields = ReserveSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone } = validatedFields.data;
  const night = differenceInCalendarDays(endDate, startDate);
  if (night <= 0) return { messageDate: "Date must be at least 1 night" };
  const total = night * price;

  let reservationId;
  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        data: {
          name,
          phone,
        },
        where: { id: session.user.id },
      });
      const reservation = await tx.reservation.create({
        data: {
          startDate: startDate,
          endDate: endDate,
          price: price,
          roomId: roomId,
          userId: session.user.id as string,
          Payment: {
            create: {
              amount: total,
            },
          },
        },
      });
      reservationId = reservation.id;
    });
  } catch (error) {
    console.log(error);
  }
  redirect(`/checkout/${reservationId}`);
};
