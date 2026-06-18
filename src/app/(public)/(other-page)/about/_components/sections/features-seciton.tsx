import Link from "next/link";
import {
  GiCeilingLight,
  GiClockwork,
  GiFamilyHouse,
  GiNotebook,
} from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="flex items-center justify-center">
        <div className="max-w-7xl flex items-center gap-12">
          <div className="w-[30%] space-y-4">
            <h2 className="text-3xl font-bold uppercase">Why Choose Us</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              maiores consequuntur nobis. Placeat voluptatibus cumque vel esse
              molestias nihil.
            </p>
            <Link href="#properties">
              <button className="cursor-pointer flex items-center gap-2 py-3 px-8 bg-black border border-black text-white text-md hover:bg-primary/90 hover:border hover:border-primary hover:text-white transition duration-200">
                View All <IoIosArrowForward />
              </button>
            </Link>
          </div>
          <div className="w-[70%] grid grid-cols-2 gap-4">
            <div className="flex items-start gap-4 bg-white p-8 shadow-md">
              <div>
                <GiClockwork className="size-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Fast Service</h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt molestiae soluta numquam sint.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-8 shadow-md">
              <div>
                <GiCeilingLight className="size-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Smart Design</h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt molestiae soluta numquam sint.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-8 shadow-md">
              <div>
                <GiNotebook className="size-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Easy Booking</h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt molestiae soluta numquam sint.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-8 shadow-md">
              <div>
                <GiFamilyHouse className="size-12" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Family Stay</h2>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt molestiae soluta numquam sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
