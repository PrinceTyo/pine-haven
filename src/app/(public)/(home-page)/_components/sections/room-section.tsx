import RoomCard from "@/components/card/room-card";
import { getRooms } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function RoomSection() {
  const rooms = await getRooms();
  if (!rooms) return notFound();

  return (
    <section className="py-20 text-black flex flex-col items-center justify-center gap-12">
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl">Rooms & Suites</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          accusamus quo in architecto voluptatibus minus.
        </p>
      </div>
      <div className="flex items-center gap-4">
        {rooms.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
      </div>
    </section>
  );
}
