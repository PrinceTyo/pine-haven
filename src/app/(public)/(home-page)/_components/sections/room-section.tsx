import RoomCard from "@/components/card/room-card";
import { getRooms } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

export default async function RoomSection() {
  const rooms = await getRooms();
  if (!rooms) return notFound();

  return (
    <section className="py-20 text-black flex items-center justify-center gap-12">
      <div className="max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="tracking-widest uppercase">The Pleasure Of Luxury</p>
          <h2 className="text-5xl font-bold">Rooms & Suites</h2>
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            maiores? Architecto, dolores? Atque, ipsam quos.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/room">
            <button className="mt-10 cursor-pointer flex items-center gap-2 py-3 px-8 bg-transparent border border-black text-black text-md hover:bg-primary hover:border hover:border-primary hover:text-white transition duration-200">
              Explore More <IoIosArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
