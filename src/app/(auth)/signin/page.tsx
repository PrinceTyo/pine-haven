import { FaG } from "react-icons/fa6";
import { signIn } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams?: Promise<{ redirect_url?: string }>;
}) {
  const params = (await searchParams)?.redirect_url;

  let redirectUrl;
  if (!params) {
    redirectUrl = "/";
  } else {
    redirectUrl = `/${params}`;
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-white w-96 mx-auto rounded-sm shadow p-8">
        <h1 className="text-4xl font-bold mb-1">Sign In</h1>
        <p className="font-medium mb-5 text-gray-500">
          Sign In to your account
        </p>
        <div className="py-4 text-center">
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: redirectUrl });
            }}
          >
            <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer">
              <FaG className="size-6" />
              Sign In With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
