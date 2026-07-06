import ReserveForm from "@/app/(public)/(other-page)/room/[roomId]/_components/reserve-form";
import RoomGallery from "@/app/(public)/(other-page)/room/[roomId]/_components/room-gallery";
import { getAmenityIcon } from "@/lib/amenities-icon";
import { getDisabledRoomById, getRoomDetailById } from "@/lib/data/room";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";
import { IoPeopleOutline } from "react-icons/io5";

export default async function RoomDetail({ roomId }: { roomId: string }) {
  const [room, disabledDate] = await Promise.all([
    getRoomDetailById(roomId),
    getDisabledRoomById(roomId),
  ]);
  if (!room || !disabledDate) return notFound();

  return (
    <div className="max-w-7xl py-16 px-4 mx-auto">
      <RoomGallery images={room.RoomImages} roomName={room.name} />

      <div className="mt-12 grid lg:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <h1 className="text-4xl font-bold text-gray-900">{room.name}</h1>
          <h2 className="mb-4">
            <span className="font-semibold text-gray-600 text-2xl">
              {formatCurrency(room.price)}
            </span>
            <span className="text-gray-400 font-medium text-lg">/Night</span>
          </h2>
          <p>{room.description}</p>
          <h2 className="text-3xl font-bold py-4">Room Feature: </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {room.RoomAmenities.map((item) => {
              const Icon = getAmenityIcon(item.Amenities.name);

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 py-2 px-4 border border-gray-300 rounded-md"
                >
                  <Icon className="size-5 text-orange-500" />
                  <span>{item.Amenities.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="border border-gray-300 px-3 py-5 bg-slate-50 rounded-md">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <IoPeopleOutline className="size-4" />
                <span>
                  {room.capacity} {room.capacity === 1 ? "Person" : "People"}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-semibold text-gray-600">
                  {formatCurrency(room.price)}
                </span>
                <span className="text-gray-400 text-sm">/Night</span>
              </div>
            </div>
            {/* Reservation Form */}
            <ReserveForm room={room} disabledDate={disabledDate} />
          </div>
        </div>
      </div>
    </div>
  );
}
