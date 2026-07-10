import { getReservationById } from "@/lib/data/reservation";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const STATUS_STYLE: Record<string, string> = {
  paid: "border-emerald-600 text-emerald-700",
  pending: "border-amber-600 text-amber-700",
  failed: "border-red-600 text-red-700",
  refunded: "border-stone-400 text-stone-600",
};

function statusStyle(status?: string) {
  return (
    STATUS_STYLE[status?.toLowerCase() ?? ""] ??
    "border-stone-400 text-stone-600"
  );
}

export default async function CheckoutDetail({
  reservationId,
}: {
  reservationId: string;
}) {
  const reservation = await getReservationById(reservationId);
  if (!reservation || !reservation.Payment)
    return (
      <div className="w-full rounded-xl border border-stone-200 bg-white p-8 text-center">
        <p className="text-sm text-stone-500">
          We couldn&apos;t find that reservation.
        </p>
      </div>
    );

  const nights = differenceInCalendarDays(
    reservation.endDate,
    reservation.startDate,
  );
  const isPaid = reservation.Payment.status === "paid";

  return (
    <div className="grid overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm md:grid-cols-5">
      {/* room stub */}
      <div className="flex flex-col justify-between gap-8 bg-stone-900 p-8 md:col-span-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
            Room
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-white">
            {reservation.Room.name}
          </h1>

          <div className="relative mt-6 aspect-video overflow-hidden rounded-lg bg-stone-800">
            <Image
              src={reservation.Room.RoomImages[0].image}
              fill
              className="object-cover"
              alt={reservation.Room.name}
            />
            <div className="flex h-full items-center justify-center text-xs uppercase tracking-widest text-stone-500">
              No photo
            </div>
          </div>

          <p className="mt-4 font-mono text-sm text-stone-300">
            {formatCurrency(reservation.price)} / night
          </p>
        </div>

        <Link
          href={
            isPaid ? "/myreservation" : reservation.Payment?.invoiceUrl || "#"
          }
          target={isPaid ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="block w-full rounded-lg bg-emerald-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
        >
          {isPaid ? "Go to my reservation" : "Pay now"}
        </Link>
      </div>

      {/* perforated details panel */}
      <div className="relative p-8 md:col-span-3">
        <div className="absolute left-0 top-0 hidden h-full border-l border-dashed border-stone-300 md:block" />
        <div className="absolute -left-3 -top-3 hidden h-6 w-6 rounded-full bg-white md:block" />
        <div className="absolute -bottom-3 -left-3 hidden h-6 w-6 rounded-full bg-white md:block" />

        <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-stone-500">
              Folio
            </p>
            <p className="mt-1 font-mono text-lg font-semibold text-stone-900">
              #{reservation.id}
            </p>
          </div>
          <div
            className={`shrink-0 -rotate-6 rounded-full border-2 border-dashed px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyle(
              reservation.Payment.status,
            )}`}
          >
            {reservation.Payment.status}
          </div>
        </div>

        <dl className="pt-2">
          <div className="flex items-center justify-between border-b border-stone-100 py-2.5 text-sm">
            <dt className="text-stone-500">Guest</dt>
            <dd className="font-medium text-stone-900">
              {reservation.User.name}
            </dd>
          </div>
          <div className="flex items-center justify-between border-b border-stone-100 py-2.5 text-sm">
            <dt className="text-stone-500">Email</dt>
            <dd className="text-stone-900">{reservation.User.email}</dd>
          </div>
          <div className="flex items-center justify-between border-b border-stone-100 py-2.5 text-sm">
            <dt className="text-stone-500">Phone</dt>
            <dd className="text-stone-900">{reservation.User.phone}</dd>
          </div>
          <div className="flex items-center justify-between border-b border-stone-100 py-2.5 text-sm">
            <dt className="text-stone-500">Arrival</dt>
            <dd className="text-stone-900">
              {formatDate(reservation.startDate.toISOString())}
            </dd>
          </div>
          <div className="flex items-center justify-between border-b border-stone-100 py-2.5 text-sm">
            <dt className="text-stone-500">Departure</dt>
            <dd className="text-stone-900">
              {formatDate(reservation.endDate.toISOString())}
            </dd>
          </div>
          <div className="flex items-center justify-between py-2.5 text-sm">
            <dt className="text-stone-500">Length of stay</dt>
            <dd className="text-stone-900">
              {nights} {nights <= 1 ? "night" : "nights"}
            </dd>
          </div>
        </dl>

        <div className="mt-2 flex items-baseline justify-between border-t-2 border-double border-amber-500 pt-4">
          <span className="text-sm font-medium text-stone-900">
            Total amount
          </span>
          <span className="font-serif text-xl font-bold text-stone-900">
            {formatCurrency(reservation.Payment.amount)}
          </span>
        </div>
      </div>
    </div>
  );
}
