import ReservationTable from "@/components/table/reservation-table";
import { Suspense } from "react";

export default function ReservationsPage() {
  return (
    <div className="w-full px-4 py-4">
      <h1 className="text-4xl font-bold text-gray-800">Reservation List</h1>
      <Suspense fallback={<p>Loading Data....</p>}>
        <ReservationTable />
      </Suspense>
    </div>
  );
}
