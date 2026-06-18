"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";
import { signOut } from "next-auth/react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";

export default function Navlink({ session }: { session: Session | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = (href: string) =>
    clsx("block py-2.5 px-6 transition-all duration-300", {
      // ACTIVE
      "bg-white/15 text-white": pathname === href && !scrolled,

      "bg-primary text-white": pathname === href && scrolled,

      // INACTIVE
      "text-white hover:bg-white/15": pathname !== href && !scrolled,

      "text-gray-800 hover:bg-primary hover:text-white":
        pathname !== href && scrolled,
    });

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        {
          "bg-transparent": !scrolled,
          "bg-white shadow-md": scrolled,
        },
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.png" width={128} height={49} alt="logo" priority />
        </Link>

        {session?.user && (
          <div className="flex items-center justify-end order-2 gap-3">
            <div className="hidden md:block">
              <Image
                className="size-8 rounded-full"
                src={session.user.image || "/avatar.svg"}
                width={64}
                height={64}
                alt="avatar"
              />
            </div>

            <button
              onClick={() => signOut()}
              className="hidden md:block py-2 px-4 bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className={clsx(
            "inline-flex items-center p-2 justify-center md:hidden",
            {
              "text-white": !scrolled,
              "text-gray-800": scrolled,
            },
          )}
        >
          {open ? (
            <IoClose className="size-8" />
          ) : (
            <IoMenu className="size-8" />
          )}
        </button>

        <div
          className={clsx("w-full md:block md:w-auto", {
            hidden: !open,
          })}
        >
          <ul
            className={clsx(
              "flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-md md:flex-row md:items-center md:space-x-2 md:p-0 md:mt-0",
              {
                "bg-gray-50 md:bg-transparent": !scrolled,
                "bg-white": scrolled,
              },
            )}
          >
            <li>
              <Link href="/" className={navClass("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className={navClass("/about")}>
                About
              </Link>
            </li>

            <li>
              <Link href="/room" className={navClass("/room")}>
                Rooms
              </Link>
            </li>

            <li>
              <Link href="/contact" className={navClass("/contact")}>
                Contact
              </Link>
            </li>

            {session && (
              <>
                <li>
                  <Link
                    href="/myreservation"
                    className={navClass("/myreservation")}
                  >
                    My Reservation
                  </Link>
                </li>

                {session.user.role === "admin" && (
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className={navClass("/admin/dashboard")}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </>
            )}

            {!session ? (
              <li className="pt-2 md:pt-0 md:ms-3">
                <Link
                  href="/signin"
                  className={clsx(
                    "inline-flex items-center justify-center py-2.5 px-6 transition-all duration-300",
                    {
                      "bg-transparent text-white border border-white/30 hover:bg-white/25":
                        !scrolled,

                      "bg-transparent text-black border border-primary hover:bg-primary hover:text-white":
                        scrolled,
                    },
                  )}
                >
                  Sign In
                </Link>
              </li>
            ) : (
              <li className="pt-2 md:hidden">
                <button
                  onClick={() => signOut()}
                  className="w-full py-2.5 px-4 bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
