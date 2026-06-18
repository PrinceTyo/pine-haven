import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function CtaContactSection() {
  return (
    <div
      className="relative h-116 md:h-96 flex items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url("/cta-contact.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10 flex flex-col items-center justify-center text-center space-y-2">
        <p className="text-white/90 tracking-widest uppercase">Pine Haven</p>
        <h2 className="text-3xl md:text-5xl text-white font-medium">
          Have Questions Or Feedback?
        </h2>
        <Link href="/contact">
          <button className="mt-6 cursor-pointer flex items-center gap-2 py-3 px-8 bg-transparent border border-white text-white text-md hover:bg-primary hover:border hover:border-primary hover:text-white transition duration-200">
            Contact Us <IoIosArrowForward />
          </button>
        </Link>
      </div>
    </div>
  );
}
