import { notFound } from "next/navigation";
import { Suspense } from "react";
import EditForm from "./_components/edit-form";
import { getAmenities } from "@/lib/data/amenities";
import { getRoomById } from "@/lib/data/room";

export default async function UpdateRoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const roomId = (await params).id;
  if (!roomId) return notFound();
  const [amenities, room] = await Promise.all([
    getAmenities(),
    getRoomById(roomId),
  ]);
  if (!amenities || !room) return notFound();

  return (
    <div className="max-w-7xl px-4 py-4 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit a Room</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <EditForm roomId={roomId} amenities={amenities} room={room} />
        </Suspense>
      </div>
    </div>
  );
}
