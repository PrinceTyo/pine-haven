import { prisma } from "@/lib/prisma";

export const getUserById = async (userId: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
