"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BarLoader } from "react-spinners";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useActionState, useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { saveRoom } from "@/lib/actions";
import clsx from "clsx";
import { Amenities } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";
import { Pattern } from "@/components/form/multiple-image";

export default function CreateForm({ amenities }: { amenities: Amenities[] }) {
  const [images, setImages] = useState<string[]>([]);
  const [state, formAction, isPending] = useActionState(
    saveRoom.bind(null, images),
    null,
  );
  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <Field className="mb-4">
            <FieldLabel>Room Name</FieldLabel>
            <Input type="text" name="name" placeholder="Room Name..." />
            <FieldError>{state?.error?.name}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Description</FieldLabel>
            <Textarea
              name="description"
              rows={8}
              placeholder="Description..."
            />
            <FieldError>{state?.error?.description}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Amenities</FieldLabel>
            <div className="grid md:grid-cols-3 gap-2">
              {amenities.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox id={item.id} name="amenities" value={item.id} />

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

          <Field className="mb-4">
            <FieldLabel>Capacity</FieldLabel>
            <Input type="text" name="capacity" placeholder="Capacity..." />
            <FieldError>{state?.error?.capacity}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Price</FieldLabel>
            <Input type="text" name="price" placeholder="Price..." />
            <FieldError>{state?.error?.price}</FieldError>
          </Field>

          {state?.message ? (
            <div className="mb-4 bg-red-200 p-2">
              <span className="text-sm text-gray-700 mt-2">
                {state.message}
              </span>
            </div>
          ) : null}
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
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}
