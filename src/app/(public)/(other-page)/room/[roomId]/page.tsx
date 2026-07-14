import HeaderPage from "@/components/header/header-page";
import RoomDetail from "@/components/room-detail";
import { Suspense } from "react";

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const roomId = (await params).roomId;
  return (
    <>
      <HeaderPage
        title="Room Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rooms", href: "/room" },
          { label: "Room Details" },
        ]}
      />
      <div className="mt-16">
        <Suspense fallback={<p>Loading...</p>}>
          <RoomDetail roomId={roomId} />
        </Suspense>
      </div>
    </>
  );
}
