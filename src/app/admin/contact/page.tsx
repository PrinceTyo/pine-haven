import ContactTable from "@/components/table/contact-table";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="w-full px-4 py-4">
      <h1 className="text-4xl font-bold text-gray-800">Contact Message List</h1>
      <Suspense fallback={<p>Loading Data....</p>}>
        <ContactTable />
      </Suspense>
    </div>
  );
}
