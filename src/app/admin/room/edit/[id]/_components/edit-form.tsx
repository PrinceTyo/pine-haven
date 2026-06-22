"use client";

import { updateRoom } from "@/lib/action/room";
import { Amenities } from "@prisma/client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Pattern } from "@/components/form/multiple-image";
import { RoomProps } from "@/types/room";
import clsx from "clsx";
import { useActionState, useEffect, useState } from "react";

export default function EditForm({
  roomId,
  amenities,
  room,
}: {
  roomId: string;
  amenities: Amenities[];
  room: RoomProps;
}) {
  const [images, setImages] = useState(
    room.RoomImages.map((item) => ({
      image: item.image,
      size: item.size,
    })),
  );

  const [state, formAction, isPending] = useActionState(
    updateRoom.bind(null, images, roomId),
    null,
  );

  const checkedAmenities = room.RoomAmenities.map((item) => item.amenitiesId);

  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <Field className="mb-4">
            <FieldLabel>Room Name</FieldLabel>
            <Input
              type="text"
              name="name"
              defaultValue={room.name}
              placeholder="Room Name..."
            />
            <FieldError>{state?.error?.name}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Description</FieldLabel>
            <Textarea
              name="description"
              rows={8}
              defaultValue={room.description}
              placeholder="Description..."
            />
            <FieldError>{state?.error?.description}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Capacity</FieldLabel>
            <Input
              type="text"
              name="capacity"
              defaultValue={room.capacity}
              placeholder="Capacity..."
            />
            <FieldError>{state?.error?.capacity}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Price</FieldLabel>
            <Input
              type="text"
              name="price"
              defaultValue={room.price}
              placeholder="Price..."
            />
            <FieldError>{state?.error?.price}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Amenities</FieldLabel>

            <div className="grid md:grid-cols-3 gap-2">
              {amenities.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox
                    id={item.id}
                    name="amenities"
                    value={item.id}
                    defaultChecked={checkedAmenities.includes(item.id)}
                  />

                  <label htmlFor={item.id} className="text-sm capitalize">
                    {item.name}
                  </label>
                </div>
              ))}
            </div>

            <FieldError>{state?.error?.amenities}</FieldError>
          </Field>
        </div>

        <div className="col-span-4 bg-white p-4">
          <Field className="mb-4">
            <FieldLabel>Room Images</FieldLabel>

            <Pattern images={images} setImages={setImages} />
          </Field>

          {state?.message && (
            <div className="mb-4 bg-red-200 p-2 rounded">
              <span className="text-sm text-gray-700">{state.message}</span>
            </div>
          )}

          <button
            type="submit"
            className={clsx(
              "bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-1 text-lg font-semibold cursor-pointer",
              {
                "opacity-50 cursor-progress": isPending,
              },
            )}
            disabled={isPending}
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
}
