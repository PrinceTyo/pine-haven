import { getReservations } from "@/lib/data/reservation";
import { formatDate, formatCurrency } from "@/lib/utils";
import Link from "next/link";

export default async function ReservationTable() {
  const reservations = await getReservations();
  if (!reservations) return <p>No Reservation Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Arrival
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Departure
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Room Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Created At
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Detail
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reservations.map((reservation) => (
            <tr className="hover:bg-gray-100" key={reservation.id}>
              <td className="px-6 py-4">{reservation.User.name}</td>
              <td className="px-6 py-4">
                {formatDate(reservation.startDate.toISOString())}
              </td>
              <td className="px-6 py-4">
                {formatDate(reservation.endDate.toISOString())}
              </td>
              <td className="px-6 py-4">{reservation.Room.name}</td>
              <td className="px-6 py-4">{formatCurrency(reservation.price)}</td>
              <td className="px-6 py-4">
                {formatDate(reservation.createdAt.toString())}
              </td>
              <td className="px-6 py-4">{reservation.Payment?.status}</td>
              <td className="px-6 py-4 text-right">
                {/* <div className="flex items-center justify-center gap-1">
                  <Link
                    href={`/admin/contact/detail/${contact.id}`}
                    className="rounded-sm p-1 hover:bg-gray-200"
                  >
                    <IoMdEye className="size-5" />
                  </Link>
                </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
