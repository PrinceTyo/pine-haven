import { getReservationById } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HiCheckCircle } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Payment Successfull",
};

export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams: Promise<{ reservationId?: string }>;
}) {
  const { reservationId } = await searchParams;

  if (!reservationId) {
    return redirect("/payment/failed");
  }

  const reservation = await getReservationById(reservationId);

  if (!reservation) {
    return redirect("/payment/failed");
  }

  if (reservation.Payment?.status === "pending") {
    redirect("/payment/pending?reservationId=" + reservationId);
  } else if (reservation.Payment?.status === "failure") {
    redirect("/payment/failure?reservationId=" + reservationId);
  }

  return (
    <div className="max-w-7xl px-4 mx-auto py-20 mt-12 min-h-screen">
      <div className="p-6 md:mx-auto">
        <HiCheckCircle className="text-green-600 w-20 h-20 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Paymen Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
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
