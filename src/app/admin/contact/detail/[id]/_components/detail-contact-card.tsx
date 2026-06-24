import { getContactMessageById } from "@/lib/data/contact";
import { notFound } from "next/navigation";

export default async function DetailContactCard({
  contactId,
}: {
  contactId: string;
}) {
  const contact = await getContactMessageById(contactId);
  if (!contact) return notFound();

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-sm">
      <div className="bg-orange-500 px-6 py-4">
        <h1 className="text-xl font-semibold text-white tracking-wide">
          Detail Message
        </h1>
      </div>

      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            From
          </span>
          <p className="text-gray-800 font-medium">{contact.name}</p>
          <p className="text-sm text-gray-500">{contact.email}</p>
        </div>
      </div>

      <div className="px-6 py-5 border-b border-gray-100">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          Subject
        </span>
        <p className="mt-1 text-gray-800">{contact.subject}</p>
      </div>

      <div className="px-6 py-5">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          Message
        </span>
        <p className="mt-2 text-gray-700 leading-relaxed">{contact.message}</p>
      </div>
    </div>
  );
}
