import { Suspense } from "react";
import DetailContactCard from "./_components/detail-contact-card";

export default async function DetailContactPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const contactId = (await params).id;

  return (
    <section className="min-h-screen py-10 px-4">
      <Suspense fallback={<p>Loading...</p>}>
        <DetailContactCard contactId={contactId} />
      </Suspense>
    </section>
  );
}
