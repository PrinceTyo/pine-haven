"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex justify-center items-center px-0 lg:px-20 text-white"
      style={{
        backgroundImage: `url(./hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="z-10 max-w-xl px-5 lg:px-0 h-screen flex flex-col lg:flex-row justify-center">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-lg tracking-widest font-normal">
            EXPLORE NUSA TRIP
          </p>
          <h1 className="text-4xl md:text-6xl font-medium text-center leading-tight">
            Enjoy the beautiful and romantic nature
          </h1>
          <div>
            <Link href="#properties">
              <button className="mt-6 cursor-pointer flex items-center gap-2 py-3 px-8 bg-tranparent border border-white text-white text-md hover:bg-primary hover:border hover:border-primary transition duration-200">
                Explore More <IoIosArrowForward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
