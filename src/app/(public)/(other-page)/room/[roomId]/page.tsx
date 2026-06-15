import RoomDetail from "@/components/room-detail";
import { Suspense } from "react";

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const roomId = (await params).roomId;
  return (
    <div className="mt-16">
      <Suspense fallback={<p>Loading...</p>}>
        <RoomDetail roomId={roomId} />
      </Suspense>
    </div>
  );
}
