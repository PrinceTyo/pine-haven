"use client";

import { DisabledDateProps, RoomDetailProps } from "@/types/room";
import { useActionState, useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import { createReserve } from "@/lib/action/reservation";

import { Input } from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

export default function ReserveForm({
  room,
  disabledDate,
}: {
  room: RoomDetailProps;
  disabledDate: DisabledDateProps[];
}) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 1));

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const [state, formAction, isPending] = useActionState(
    createReserve.bind(null, room.id, room.price, startDate!, endDate!),
    null,
  );

  const excludeDates = disabledDate.map((item) => {
    return {
      start: item.startDate,
      end: item.endDate,
    };
  });

  return (
    <form action={formAction} className="space-y-5">
      <Field>
        <FieldLabel>Arrival - Departure</FieldLabel>
        <FieldContent>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            onChange={handleDateChange}
            excludeDateIntervals={excludeDates}
            dateFormat="dd-MM-yyyy"
            wrapperClassName="w-full"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </FieldContent>
        <FieldError>{state?.messageDate}</FieldError>
      </Field>

      <Field>
        <FieldLabel>Your Name</FieldLabel>
        <FieldContent>
          <Input name="name" placeholder="Full Name..." autoComplete="off" />
        </FieldContent>
        <FieldError>{state?.error?.name}</FieldError>
      </Field>

      <Field>
        <FieldLabel>Phone Number</FieldLabel>
        <FieldContent>
          <Input
            name="phone"
            placeholder="Phone Number..."
            autoComplete="off"
          />
        </FieldContent>
        <FieldError>{state?.error?.phone}</FieldError>
      </Field>

      <button
        type="submit"
        disabled={isPending}
        className={clsx(
          "w-full rounded-md bg-orange-400 px-4 py-3 font-semibold text-white hover:bg-orange-500",
          {
            "opacity-50 cursor-progress": isPending,
          },
        )}
      >
        {isPending ? "Loading..." : "Reserve"}
      </button>
    </form>
  );
}
