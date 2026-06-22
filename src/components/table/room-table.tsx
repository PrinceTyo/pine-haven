import { getRooms } from "@/lib/data/room";
import Image from "next/image";
import { formatDate, formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { ArrowUpDown } from "lucide-react";
import { deleteRoom } from "@/lib/action/room";

export default async function RoomTable({ sort }: { sort?: string }) {
  const rooms = await getRooms();
  if (!rooms?.length) return <p>No Room Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Image
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              <Link
                href="?sort=name"
                className="flex items-center gap-1 hover:text-primary"
              >
                Room Name
                <ArrowUpDown className="size-4" />
              </Link>
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              <Link
                href="?sort=price"
                className="flex items-center gap-1 hover:text-primary"
              >
                Price
                <ArrowUpDown className="size-4" />
              </Link>
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Created At
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rooms.map((room) => (
            <tr className="hover:bg-gray-100" key={room.id}>
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={room.RoomImages[0]?.image || "/no-image.jpg"}
                    fill
                    sizes="20vw"
                    alt="room image"
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{room.name}</td>
              <td className="px-6 py-4">{formatCurrency(room.price)}</td>
              <td className="px-6 py-4">
                {formatDate(room.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-center gap-1">
                  <Link
                    href={`/admin/room/edit/${room.id}`}
                    className="rounded-sm p-1 hover:bg-gray-200"
                  >
                    <IoPencil className="size-5" />
                  </Link>
                  <form action={deleteRoom.bind(null, room.id)}>
                    <button
                      type="submit"
                      className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer"
                    >
                      <IoTrashOutline className="size-5" />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
