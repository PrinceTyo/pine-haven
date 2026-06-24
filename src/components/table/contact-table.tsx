import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";

export default async function ContactTable() {
  const contacts = await getContacts();
  if (!contacts?.length) return <p>No Room Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Name
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Email
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Subject
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
              Created At
            </th>
            <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
              Detail
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr className="hover:bg-gray-100" key={contact.id}>
              <td className="px-6 py-4">{contact.name}</td>
              <td className="px-6 py-4">{contact.email}</td>
              <td className="px-6 py-4">{contact.subject}</td>
              <td className="px-6 py-4">
                {formatDate(contact.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-center gap-1">
                  <Link
                    href={`/admin/contact/detail/${contact.id}`}
                    className="rounded-sm p-1 hover:bg-gray-200"
                  >
                    <IoMdEye className="size-5" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
