import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getContactMessageById = async (contactId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized Access");
  }
  try {
    const result = await prisma.contact.findUnique({
      where: { id: contactId },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
