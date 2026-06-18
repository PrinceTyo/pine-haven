import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <div className="max-w-5xl flex items-start relative">
          <div className="w-1/2 flex items-center justify-end">
            <Image
              src="/about.jpg"
              alt="About Image"
              width={384}
              height={556}
              className="w-126 h-176 object-cover"
            />
          </div>
          <div className="w-1/2 relative z-10">
            <div className="min-w-fit p-12 -ml-10 mt-10 bg-white shadow-lg border border-gray-100 space-y-4">
              <p className="tracking-widest uppercase">Welcome To Pine Haven</p>
              <h2 className="text-5xl font-semibold uppercase">
                Innovative Ideas Stylish Design
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur magnam excepturi enim quam voluptas, magni mollitia,
                natus architecto est blanditiis alias harum ipsam saepe
                distinctio numquam totam aperiam animi eum.
              </p>
              <Link href="#properties">
                <button className="mt-10 cursor-pointer flex items-center gap-2 py-3 px-8 bg-black border border-black text-white text-md hover:bg-primary/90 hover:border hover:border-primary hover:text-white transition duration-200">
                  Read More <IoIosArrowForward />
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center text-center gap-20 mt-20">
              <div>
                <h3 className="font-semibold text-4xl text-gray-900">24 +</h3>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div>
                <h3 className="font-semibold text-4xl text-gray-900">
                  1,254 +
                </h3>
                <p className="text-gray-700">Bookings Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
