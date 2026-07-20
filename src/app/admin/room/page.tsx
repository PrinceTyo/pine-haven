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
    <div className="py-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm ">
          <div className="mx-auto px-4 pb-8 pt-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold mb-6 text-gray-800 pt-4">
                Room List
              </h1>
              <Link
                href="/admin/room/create"
                className="bg-gray-300 text-black hover:bg-blue-400 hover:text-white px-4 py-2"
              >
                Create New
              </Link>
            </div>
            {flash && <Alert type={flash.type} message={flash.message} />}
            <Suspense fallback={<p>Loading Data....</p>}>
              <RoomTable sort={sort} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
