import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getContacts = async () => {
  try {
    const result = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
