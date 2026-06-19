"use client";

import { useActionState } from "react";
import { ContactMessage } from "@/lib/actions";
import clsx from "clsx";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(ContactMessage, null);

  return (
    <div className="bg-white">
      <p className="tracking-widest uppercase">Contact Us</p>
      <h1 className="text-5xl font-semibold">Get in Touch</h1>
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-green-50"
          role="alert"
        >
          <div className="font-medium">{state.message}</div>
        </div>
      ) : null}
      <form action={formAction}>
        <div className="grid md:grid-cols-2 gap-7 mt-10">
          <Field>
            <Input name="name" placeholder="John Doe" />
            <FieldError>{state?.error?.name}</FieldError>
          </Field>

          <Field>
            <Input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
            />
            <FieldError>{state?.error?.email?.[0]}</FieldError>
          </Field>

          <Field className="md:col-span-2">
            <Input name="subject" placeholder="Subject" />
            <FieldError>{state?.error?.subject}</FieldError>
          </Field>

          <Field className="md:col-span-2">
            <Textarea name="message" rows={5} placeholder="Your message..." />
            <FieldError>{state?.error?.message?.[0]}</FieldError>
          </Field>
        </div>
        <button
          type="submit"
          className={clsx(
            "mt-6 px-10 py-4 text-center font-semibold text-white w-full bg-orange-400 hover:bg-orange-500 transition duration-200 cursor-pointer",
            {
              "opacity-50 cursor-progress animate-pulse": isPending,
            },
          )}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
