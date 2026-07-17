import { cookies } from "next/headers";

export async function flash(
  type: "success" | "error" | "warning",
  message: string,
) {
  const cookieStore = await cookies();

  cookieStore.set(
    "__flash",
    JSON.stringify({
      type,
      message,
    }),
    {
      path: "/",
      maxAge: 10,
    },
  );
}

export async function getFlash() {
  const cookieStore = await cookies();

  const flash = cookieStore.get("__flash");

  if (!flash) return null;

  return JSON.parse(flash.value) as {
    type: "success" | "error" | "warning";
    message: string;
  };
}
