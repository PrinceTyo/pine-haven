"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { RoomSchema } from "@/schema/room-schema";
import { deleteImage } from "@/lib/delete-image";
import path from "path";
import fs from "fs/promises";
import { ContactSchema } from "@/schema/contact-schema";
import { differenceInCalendarDays } from "date-fns";
import { ReserveSchema } from "@/schema/reserve-schema";
import { invoiceClient } from "@/lib/xendit";

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData,
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return { message: "Thanks for contact us." };
  } catch (error) {
    console.log(error);
  }
};

export const createReserve = async (
  roomId: string,
  price: number,
  startDate: Date,
  endDate: Date,
  prevState: unknown,
  formData: FormData,
) => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect(`/signin?redirect_url=room/${roomId}`);
  }

  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };

  const validatedFields = ReserveSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone } = validatedFields.data;

  const night = differenceInCalendarDays(endDate, startDate);

  if (night <= 0) {
    return {
      messageDate: "Date must be at least 1 night",
    };
  }

  const total = night * price;

  let reservationId;
  try {
    const result = await prisma.$transaction(async (tx) => {
      // update profile user
      await tx.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          name,
          phone,
        },
      });

      // create reservation
      const reservation = await tx.reservation.create({
        data: {
          startDate,
          endDate,
          price,
          roomId,
          userId: session.user.id!,
        },
      });
      reservationId = reservation.id;

      // create payment
      const payment = await tx.payment.create({
        data: {
          reservationId: reservation.id,
          amount: total,
        },
      });

      return {
        reservation,
        payment,
      };
    });
    const invoice = await invoiceClient.createInvoice({
      data: {
        externalId: result.reservation.id,
        amount: total,
        currency: "IDR",
        description: `Reservation ${result.reservation.id}`,
      },
    });

    await prisma.payment.update({
      where: {
        id: result.payment.id,
      },
      data: {
        invoiceId: invoice.id,
        invoiceUrl: invoice.invoiceUrl,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      message: "Failed to create reservation",
    };
  }
  redirect(`/checkout/${reservationId}`);
};
