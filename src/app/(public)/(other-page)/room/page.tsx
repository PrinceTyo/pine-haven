import RoomCard from "@/components/card/room-card";
import HeaderPage from "@/components/header/header-page";
import { getRooms } from "@/lib/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function RoomPage() {
  const rooms = await getRooms();
  if (!rooms) return notFound();

  return (
    <div>
      <HeaderPage
        title="Rooms & Rates"
        subtitle="Lorem ipsum dolor sit amet."
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<p>Loading...</p>}>
          <div className="max-w-7xl py-6 pb-20 px-4 mx-auto">
            <div className="grid gap-7 md:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard room={room} key={room.id} />
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
