import Alert from "@/components/alert/alert";
import RoomTable from "@/components/table/room-table";
import Link from "next/link";
import { Suspense } from "react";
import { getFlash } from "@/lib/flash";

export default async function RoomPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string }>;
}) {
  const { sort } = await searchParams;
  const flash = await getFlash();

  return (
    <div className="w-full px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Room List</h1>
        <Link
          href="/admin/room/create"
          className="bg-orange-400 px-6 py-2.5 hover:bg-orange-500 text-white font-bold"
        >
          Create New
        </Link>
      </div>
      {flash && <Alert type={flash.type} message={flash.message} />}
      <Suspense fallback={<p>Loading Data....</p>}>
        <RoomTable sort={sort} />
      </Suspense>
    </div>
  );
}
