import { Prisma } from "@prisma/client";

export type RoomProps = Prisma.RoomGetPayload<{
  include: {
    RoomAmenities: {
      select: {
        amenitiesId: true;
      };
    };
    RoomImages: true;
  };
}>;

export type RoomDetailProps = Prisma.RoomGetPayload<{
  include: {
    RoomImages: true;
    RoomAmenities: {
      include: {
        Amenities: {
          select: {
            name: true;
          };
        };
      };
    };
  };
}>;

export type DisabledDateProps = Prisma.ReservationGetPayload<{
  select: {
    startDate: true;
    endDate: true;
  };
}>;
