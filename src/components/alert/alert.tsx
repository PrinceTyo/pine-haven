"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

type AlertProps = {
  type: "success" | "error" | "warning";
  message: string;
};

export default function Alert({ type, message }: AlertProps) {
  const [open, setOpen] = useState(true);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setOpen(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }, []);

  if (!open) return null;

  return (
    <div
      className={clsx(
        "my-5 flex items-center justify-between border px-4 py-3 shadow-sm",
        {
          "border-green-300 bg-green-50 text-green-700": type === "success",

          "border-red-300 bg-red-50 text-red-700": type === "error",

          "border-yellow-300 bg-yellow-50 text-yellow-700": type === "warning",
        },
      )}
    >
      <p className="font-medium">{message}</p>

      <button
        onClick={() => setOpen(false)}
        className="cursor-pointer rounded p-1 transition hover:bg-black/10"
      >
        <IoClose className="size-5" />
      </button>
    </div>
  );
}
