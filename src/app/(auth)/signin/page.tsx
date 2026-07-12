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
    <div className="grid min-h-screen md:grid-cols-2">
      {/* brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-stone-900 p-12 md:flex">
        <span className="text-sm font-semibold uppercase tracking-widest text-stone-400">
          Guest Portal
        </span>

        <div>
          <h1 className="max-w-sm text-3xl font-semibold leading-snug text-white">
            Manage your reservations in one place.
          </h1>
          <p className="mt-3 max-w-sm text-sm text-stone-400">
            Sign in to view your bookings, payments, and stay details.
          </p>
        </div>

        <div className="flex items-center gap-3 text-stone-600">
          <span className="h-px w-10 border-t border-dashed border-stone-700" />
          <span className="text-xs uppercase tracking-widest">
            Est. for every stay
          </span>
        </div>
      </div>

      {/* sign in */}
      <div className="flex items-center justify-center bg-stone-50 p-8">
        <div className="w-full max-w-sm rounded-2xl border border-stone-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Sign in</h2>
          <p className="mt-1 text-sm text-stone-500">
            Sign in to your account to continue
          </p>

          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: redirectUrl });
            }}
            className="mt-8"
          >
            <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50">
              <FaG className="size-4" />
              Continue with Google
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-stone-400">
            By continuing, you agree to our terms and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
