import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

export default function RoomSection() {
  return (
    <section className="py-20 text-black flex flex-col items-center justify-center gap-12">
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl">Rooms & Suites</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          accusamus quo in architecto voluptatibus minus.
        </p>
      </div>
      <div className="max-w-7xl flex items-center">
        <div className="border border-gray-100 shadow-md">
          <div>
            <Image
              src="/hero.png"
              width={384}
              height={556}
              alt="Image Room"
              className="w-96 h-70 object-cover"
            />
          </div>
          <div className="p-8">
            <h4 className="text-2xl font-medium">
              <Link
                href="#"
                className="hover:text-gray-800 transition duration-150"
              >
                Double Suite
              </Link>
            </h4>
            <h4 className="text-2xl mb-7">
              <span className="font-semibold text-gray-600">600.000</span>
              <span className="text-gray-400 text-sm">/Night</span>
            </h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <IoPeopleOutline />
                <span>2 Person</span>
              </div>
              <Link
                href="#"
                className="px-6 py-2.5 md:px-10 md:py-3 font-semibold text-white bg-orange-400 hover:bg-orange-500 transition duration-150"
              >
                Book Now
              </Link>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
}
