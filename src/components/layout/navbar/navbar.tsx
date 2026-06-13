import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import Navlink from "./nav-link";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.png" width={128} height={49} alt="logo" priority />
        </Link>

        <Navlink session={session} />
      </div>
    </div>
  );
}
