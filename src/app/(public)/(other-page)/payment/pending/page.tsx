import { getReservationById } from "@/lib/data";
import Link from "next/link";
import { HiClock } from "react-icons/hi2";

export default async function PendingPage({
  searchParams,
}: {
  searchParams: Promise<{ reservationId?: string }>;
}) {
  const { reservationId } = await searchParams;

  if (!reservationId) {
    return <h1>Invalid Reservation</h1>;
  }

  const reservation = await getReservationById(reservationId);

  if (!reservation) {
    return <h1>Reservation Not Found</h1>;
  }

  return (
    <div className="max-w-7xl px-4 mx-auto py-20 mt-12 min-h-screen">
      <div className="p-6 md:mx-auto">
        <HiClock className="text-gray-600 w-20 h-20 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Paymen Pending!
          </h3>
          <p className="text-gray-600 my-2">
            Please finishing the payment soon!.
          </p>
          <p>Have a greet day!</p>
          <div className="py-10 text-center">
            <Link
              href="/myreservation"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              GO TO MY RESERVATION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
