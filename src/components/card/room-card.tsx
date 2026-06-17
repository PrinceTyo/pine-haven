import { formatCurrency } from "@/lib/utils";
import { Room } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="border border-gray-100 shadow-md">
      <div>
        <Image
          src={room.image}
          width={456}
          height={384}
          alt="Image Room"
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-bold">
          <Link
            href={`/room/${room.id}`}
            className="hover:text-gray-800 transition duration-150"
          >
            {room.name}
          </Link>
        </h4>
        <h4 className="text-xl mb-6">
          <span className="font-semibold text-gray-600">
            {formatCurrency(room.price)}
          </span>
          <span className="text-gray-400 text-md">/Night</span>
        </h4>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at aperiam
          amet quaerat quis commodi?
        </p>
        <Separator className="my-4" />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPeopleOutline />
            <span>
              {room.capacity} {room.capacity === 1 ? "Person" : "People"}
            </span>
          </div>
          <Link
            href={`/room/${room.id}`}
            className="px-6 py-2.5 md:px-10 md:py-3 font-semibold text-white bg-orange-400 hover:bg-orange-500 transition duration-150"
          >
            Book Now
          </Link>
        </div>
      </div>
      <p></p>
    </div>
  );
}
