import { Suspense } from "react";
import ReservationDetail from "./_components/reservation-detail";
import HeaderPage from "@/components/header/header-page";

export default async function MyReservationDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const reservationId = (await params).id;

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderPage
        title="Reservation Detail"
        subtitle="Lorem ipsum dolor sit amet."
      />
      <div className="max-w-5xl mx-auto py-20 px-4">
        <Suspense fallback={<p>Loading...</p>}>
          <ReservationDetail reservationId={reservationId} />
        </Suspense>
      </div>
    </div>
  );
}
