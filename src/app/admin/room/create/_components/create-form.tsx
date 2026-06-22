"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Amenities } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";
import { Pattern } from "@/components/form/multiple-image";
import { saveRoom } from "@/lib/action/room";

interface RoomImageInput {
  image: string;
  size: number;
}

export default function CreateForm({ amenities }: { amenities: Amenities[] }) {
  const [images, setImages] = useState<RoomImageInput[]>([]);
  const isSubmittedRef = useRef(false);
  const imagesRef = useRef(images);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isSubmittedRef.current) return;
      if (imagesRef.current.length === 0) return;

      imagesRef.current.forEach((item) => {
        navigator.sendBeacon(
          "/api/upload/cleanup",
          JSON.stringify({ imageUrl: item.image }),
        );
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const [state, formAction, isPending] = useActionState(
    (prevState: unknown, formData: FormData) => {
      isSubmittedRef.current = true;
      return saveRoom.bind(null, images)(prevState, formData);
    },
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
            <FieldLabel>Capacity</FieldLabel>
            <Input type="text" name="capacity" placeholder="Capacity..." />
            <FieldError>{state?.error?.capacity}</FieldError>
          </Field>

          <Field className="mb-4">
            <FieldLabel>Price</FieldLabel>
            <Input type="text" name="price" placeholder="Price..." />
            <FieldError>{state?.error?.price}</FieldError>
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
