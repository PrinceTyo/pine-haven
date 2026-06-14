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

export default function CreateForm({ amenities }: { amenities: Amenities[] }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (response.ok) {
          setImage(result.imageUrl);
          setMessage("");
        } else {
          setMessage(result.message || "Upload gagal");
        }
      } catch {
        setMessage("Terjadi kesalahan saat upload");
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${encodeURIComponent(image)}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, isPending] = useActionState(
    saveRoom.bind(null, image),
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
          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative"
          >
            <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
              {pending ? <BarLoader /> : null}
              {image ? (
                <button
                  type="button"
                  onClick={() => deleteImage(image)}
                  className="flex items-center justify-center bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-400"
                >
                  <IoTrashOutline className="size-4 text-transparent hover:text-white" />
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <IoCloudUploadOutline className="size-8" />
                  <p className="mb-1 text-sm font-bold">Select Image</p>
                  {message ? (
                    <p className="text-xs text-red-500">{message}</p>
                  ) : (
                    <p className="text-xs">
                      SVG, PNG, JPG, GIF, or Others (Max: 4MB)
                    </p>
                  )}
                </div>
              )}
            </div>
            {!image ? (
              <input
                type="file"
                ref={inputFileRef}
                onChange={handleUpload}
                id="input-file"
                className="hidden"
              />
            ) : (
              <Image
                src={image}
                alt="image"
                width={640}
                height={360}
                className="rounded-md absolute aspect-video object-cover"
              />
            )}
          </label>

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
