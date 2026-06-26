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
