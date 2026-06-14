import { getAmenities } from "@/lib/data";
import CreateForm from "./_components/create-form";

export default async function CreateRoomPage() {
  const amenities = await getAmenities();
  if (!amenities) return null;

  return (
    <div className="max-w-7xl px-4 py-4 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Create New Room
        </h1>
        <CreateForm amenities={amenities} />
      </div>
    </div>
  );
}
