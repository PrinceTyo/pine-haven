import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import {
  PiBeachBall,
  PiBuilding,
  PiFlowerLotus,
  PiCoffee,
  PiSealPercent,
} from "react-icons/pi";

export default function AmenitiesSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="flex items-center justify-center">
        <div className="max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="tracking-widest uppercase">Amenities</p>
            <h2 className="text-5xl font-bold">The Homestay</h2>
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              maiores? Architecto, dolores? Atque, ipsam quos.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="relative p-8 bg-white space-y-2 shadow-md">
              <IoBedOutline className="absolute top-5 right-5 size-32 text-gray-50 z-0" />
              <div className="relative z-10 space-y-2">
                <IoBedOutline className="size-20 p-2 bg-gray-50" />
                <h3 className="text-2xl font-bold">Quality Room</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  magnam beatae officiis iste autem?
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white space-y-2 shadow-md">
              <PiBeachBall className="absolute top-5 right-5 size-32 text-gray-50 z-0" />
              <div className="relative z-10 space-y-2">
                <PiBeachBall className="size-20 p-2 bg-gray-50" />
                <h3 className="text-2xl font-bold">Private Beach</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  magnam beatae officiis iste autem?
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white overflow-hidden shadow-md">
              <PiBuilding className="absolute top-5 right-5 size-32 text-gray-50 z-0" />
              <div className="relative z-10 space-y-2">
                <PiBuilding className="size-20 p-2 bg-gray-50" />
                <h3 className="text-2xl font-bold">Best Accommodation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  magnam beatae officiis iste autem?
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white overflow-hidden shadow-md">
              <PiFlowerLotus className="absolute top-5 right-5 size-32 text-gray-50 z-0" />
              <div className="relative z-10 space-y-2">
                <PiFlowerLotus className="size-20 p-2 bg-gray-50" />
                <h3 className="text-2xl font-bold">Wellnes & Spa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  magnam beatae officiis iste autem?
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white overflow-hidden shadow-md">
              <PiCoffee className="absolute top-5 right-5 size-32 text-gray-50 z-0" />
              <div className="relative z-10 space-y-2">
                <PiCoffee className="size-20 p-2 bg-gray-50" />
                <h3 className="text-2xl font-bold">Coffee Bar</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  magnam beatae officiis iste autem?
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white overflow-hidden shadow-md">
              <PiSealPercent className="absolute top-5 right-5 size-32 text-gray-50 z-0" />
              <div className="relative z-10 space-y-2">
                <PiSealPercent className="size-20 p-2 bg-gray-50" />
                <h3 className="text-2xl font-bold">Special Offers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  magnam beatae officiis iste autem?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="#properties">
              <button className="mt-10 cursor-pointer flex items-center gap-2 py-3 px-8 bg-transparent border border-black text-black text-md hover:bg-primary hover:border hover:border-primary hover:text-white transition duration-200">
                Explore More <IoIosArrowForward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
