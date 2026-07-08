import { auth } from "@/auth";
import HeaderPage from "@/components/header/header-page";
import { getReservationByUserId } from "@/lib/data/reservation";
import { getUserById } from "@/lib/data/user";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

const STATUS_STYLE: Record<string, { label: string; className: string }> = {
  paid: {
    label: "Lunas",
    className: "border-[#56705B] text-[#3E5240] bg-[#56705B]/[0.08]",
  },
  unpaid: {
    label: "Belum Dibayar",
    className: "border-[#9B4630] text-[#7A3625] bg-[#9B4630]/[0.08]",
  },
  pending: {
    label: "Menunggu Konfirmasi",
    className: "border-[#AD8148] text-[#8C6A38] bg-[#AD8148]/[0.08]",
  },
};

function StatusStamp({ status }: { status?: string }) {
  const style = STATUS_STYLE[status ?? ""] ?? {
    label: status ?? "Tidak diketahui",
    className: "border-gray-400 text-gray-600 bg-gray-50",
  };
  return (
    <span
      className={`inline-block -rotate-3 select-none rounded-sm border-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${style.className}`}
    >
      {style.label}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm border border-dashed border-[#1C2B3A]/20 bg-white py-20 text-center">
      <p className="font-serif text-lg text-[#1C2B3A]">Belum ada pemesanan</p>
      <p className="mt-1 max-w-sm text-sm text-[#1C2B3A]/60">
        Setiap kali Anda memesan kamar, tiketnya akan muncul di sini.
      </p>
      <Link
        href="/rooms"
        className="mt-6 rounded-sm bg-[#1C2B3A] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2A3D50] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#AD8148]"
      >
        Cari kamar
      </Link>
    </div>
  );
}

export default async function MyReservationPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/signin");
  }
  const user = await getUserById(session.user.id);
  const reservation = await getReservationByUserId();
  if (!user) redirect("/signin");
  if (!reservation) return notFound();

  return (
    <>
      <HeaderPage
        title="My Reservation"
        subtitle="Lorem ipsum dolor sit amet."
      />
      <div className="min-h-screen bg-[#F4F5F2]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#1C2B3A]/50">
              Riwayat Pemesanan
            </p>
            <h1 className="mt-1 font-serif text-3xl text-[#1C2B3A]">
              Halo, {user.name}
            </h1>
          </header>

          {reservation.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="flex flex-col gap-6">
              {reservation.map((item) => {
                const nights = differenceInCalendarDays(
                  item.endDate,
                  item.startDate,
                );
                const isUnpaid = item.Payment?.status === "unpaid";

                return (
                  <div
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-sm border border-[#1C2B3A]/8 bg-white shadow-sm sm:flex-row"
                  >
                    <div className="flex flex-1 flex-col sm:flex-row">
                      <div className="relative h-40 w-full shrink-0 bg-[#1C2B3A]/5 sm:h-auto sm:w-40">
                        {item.Room.RoomImages.length > 0 ? (
                          <Image
                            src={item.Room.RoomImages[0].image}
                            fill
                            className="object-cover"
                            alt={item.Room.name}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-wider text-[#1C2B3A]/30">
                            Tanpa foto
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-wider text-[#1C2B3A]/45">
                              Reservasi #{item.id}
                            </p>
                            <h2 className="mt-1 font-serif text-lg text-[#1C2B3A]">
                              {item.Room?.name ?? "Kamar"}
                            </h2>
                          </div>
                          <StatusStamp status={item.Payment?.status} />
                        </div>

                        <dl className="grid grid-cols-3 gap-x-4 gap-y-2 font-mono text-[13px]">
                          <div>
                            <dt className="text-[10px] uppercase tracking-wider text-[#1C2B3A]/40">
                              Check-in
                            </dt>
                            <dd className="text-[#1C2B3A]">
                              {formatDate(item.startDate.toISOString())}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[10px] uppercase tracking-wider text-[#1C2B3A]/40">
                              Check-out
                            </dt>
                            <dd className="text-[#1C2B3A]">
                              {formatDate(item.endDate.toISOString())}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[10px] uppercase tracking-wider text-[#1C2B3A]/40">
                              Durasi
                            </dt>
                            <dd className="text-[#1C2B3A]">{nights} Malam</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    {/* desktop */}
                    <div className="relative hidden w-0 shrink-0 border-l border-dashed border-[#1C2B3A]/20 before:absolute before:-top-2.5 before:-left-2.5 before:h-5 before:w-5 before:rounded-full before:bg-[#F4F5F2] before:content-[''] after:absolute after:-bottom-2.5 after:-left-2.5 after:h-5 after:w-5 after:rounded-full after:bg-[#F4F5F2] after:content-[''] sm:block" />
                    {/* mobile */}
                    <div className="relative h-0 shrink-0 border-t border-dashed border-[#1C2B3A]/20 before:absolute before:-top-2.5 before:-left-2.5 before:h-5 before:w-5 before:rounded-full before:bg-[#F4F5F2] before:content-[''] after:absolute after:-top-2.5 after:-right-2.5 after:h-5 after:w-5 after:rounded-full after:bg-[#F4F5F2] after:content-[''] sm:hidden" />

                    <div className="flex shrink-0 flex-row items-center justify-between gap-4 bg-[#1C2B3A] px-5 py-4 text-white sm:w-48 sm:flex-col sm:items-stretch sm:justify-center sm:py-5">
                      <div className="sm:text-center">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                          Subtotal
                        </p>
                        <p className="mt-0.5 font-mono text-lg">
                          {item.Payment
                            ? formatCurrency(item.Payment.amount)
                            : formatCurrency(item.price)}
                        </p>
                      </div>

                      <Link
                        href={
                          isUnpaid
                            ? `/checkout/${item.id}`
                            : `/myreservation/${item.id}`
                        }
                        className="rounded-sm bg-[#AD8148] px-4 py-2 text-center text-sm font-medium text-[#1C2B3A] transition hover:bg-[#C4964F] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {isUnpaid ? "Bayar Sekarang" : "Lihat Detail"}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
