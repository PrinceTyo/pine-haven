import { prisma } from "@/lib/prisma";

export const getRooms = async () => {
  try {
    const result = await prisma.room.findMany({
      include: {
        RoomImages: true,
        RoomAmenities: true,
      },
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

export const getRoomDetailById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: {
        RoomImages: true,
        RoomAmenities: {
          include: {
            Amenities: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getDisabledRoomById = async (roomId: string) => {
  try {
    const result = await prisma.reservation.findMany({
      select: {
        startDate: true,
        endDate: true,
      },
      where: {
        roomId: roomId,
        Payment: { status: { not: "failure" } },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
