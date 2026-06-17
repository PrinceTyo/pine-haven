import { Suspense } from "react";
import ReservationDetail from "./_components/reservation-detail";

export default async function MyReservationDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const reservationId = (await params).id;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto mt-10 py-20 px-4">
        <Suspense fallback={<p>Loading...</p>}>
          <ReservationDetail reservationId={reservationId} />
        </Suspense>
      </div>
    </div>
  );
}
