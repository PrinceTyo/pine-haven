import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <div className="max-w-7xl w-full flex items-center gap-6">
          <div className="w-1/2 p-10">
            <div className="relative">
              <Image
                src="/about.jpg"
                alt="About Image"
                width={384}
                height={300}
                className="w-full h-146 object-cover"
              />
              <div>
                <div className="absolute top-28 -left-3 bg-emerald-900/95 backdrop-blur-sm text-white px-8 h-6 skew-x-45 -z-1"></div>
                <div className="absolute top-6 -left-6 bg-emerald-900/95 backdrop-blur-sm text-white px-8 py-5 rounded-r-3xl rounded-tl-md shadow">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-bold leading-none">16</span>

                    <div>
                      <p className="text-lg font-medium">Years</p>
                      <p className="text-xs tracking-wider uppercase">
                        of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p className="tracking-widest uppercase">About Us</p>
            <h2 className="text-5xl font-bold">
              Luxurious Comfort. Timeless Elegance Awaits
            </h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              quaerat delectus, optio quo eaque temporibus libero doloribus
              aspernatur? Molestiae tenetur soluta dolorem vitae aspernatur
              odio, laudantium voluptatibus dolor officia. Nisi.
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quisquam reiciendis saepe voluptatibus hic totam.
            </p>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <h3 className="text-3xl font-semibold">50</h3>
                <p>lorem ipsum</p>
              </div>
              <Separator orientation="vertical" className="bg-gray-300" />
              <div>
                <h3 className="text-3xl font-semibold">60.000</h3>
                <p>lorem ipsum</p>
              </div>
              <Separator orientation="vertical" className="bg-gray-300" />
              <div>
                <h3 className="text-3xl font-semibold">99%</h3>
                <p>lorem ipsum</p>
              </div>
            </div>
            <Link href="#properties">
              <button className="mt-6 cursor-pointer flex items-center gap-2 py-3 px-8 bg-white border border-black text-black text-md hover:bg-primary hover:border hover:border-primary hover:text-white transition duration-200">
                Explore More <IoIosArrowForward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
