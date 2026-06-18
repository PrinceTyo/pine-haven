import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function AwwardSection() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center">
        <div className="max-w-7xl relative flex items-start justify-center gap-12">
          <div className="w-1/2 pe-10">
            <div className="space-y-3">
              <p className="tracking-widest uppercase">Awward Winning</p>
              <h2 className="text-5xl font-semibold uppercase">
                Cleanest Room
              </h2>
              <p className="mt-5 text-md text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                laborum alias, iusto ea ratione ipsa facilis quia, molestias
                commodi omnis architecto iste esse eum, fugiat unde odit
                laboriosam numquam dolorum. Nobis architecto suscipit eum
                corrupti ad distinctio quibusdam minima! Nostrum perferendis
                aliquid accusamus pariatur provident porro dolor.
              </p>
            </div>
            <div className="mt-12 relative z-10 flex items-end justify-between">
              <div>
                <p className="font-signature text-gray-400 text-4xl">
                  Kresna Ale
                </p>
                <h4 className="text-lg font-medium">Kresna Ale, CEO</h4>
                <Link href="#properties">
                  <button className="mt-8 cursor-pointer flex items-center gap-2 py-3 px-8 bg-black border border-black text-white text-md hover:bg-primary/90 hover:border hover:border-primary hover:text-white transition duration-200">
                    Read More <IoIosArrowForward />
                  </button>
                </Link>
              </div>
              <div className="w-[70%] -mr-48 bg-white p-6 shadow-md border border-gray-100">
                <div className=" flex items-center gap-4 h-16">
                  <div className="w-1.5 bg-black h-full"></div>
                  <blockquote>
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti id esse architecto dolores. Omnis, ducimus""
                  </blockquote>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Kresna A.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/awward.jpg"
              alt="About Image"
              width={456}
              height={384}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
