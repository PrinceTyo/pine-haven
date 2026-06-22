import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getRooms = async () => {
  try {
    const result = await prisma.room.findMany({
      include: { RoomImages: true },
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
      include: {
        RoomAmenities: {
          select: {
            amenitiesId: true,
          },
        },
        RoomImages: true,
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
