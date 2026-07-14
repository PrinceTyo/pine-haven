import CheckoutDetail from "@/components/checkout-detail";
import HeaderPage from "@/components/header/header-page";
import { Suspense } from "react";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const reservationId = (await params).id;

  return (
    <>
      <HeaderPage
        title="Checkout Detail"
        breadcrumbs={[{ label: "Checkout Detail" }]}
      />
      <div className="max-w-7xl px-4 mx-auto py-20">
        <h1 className="text-2xl font-semibold mb-8">Reservation Summary</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <CheckoutDetail reservationId={reservationId} />
        </Suspense>
      </div>
    </>
  );
}
