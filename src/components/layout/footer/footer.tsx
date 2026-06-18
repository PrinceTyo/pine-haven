import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-20 md:px-20 space-y-10 text-white">
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-10 md:gap-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-3">
          <div className="flex items-center gap-x-2">
            {/* <img src={logoImage} alt="Logo" className="h-16" /> */}
          </div>
          <blockquote className="italic">
            Artha Property offers modern and strategic living spaces, elegance,
            and long-term value for every homeowner and investor. [+]
          </blockquote>
          <div className="flex items-center gap-x-2">
            <a href="">
              <FaWhatsapp size={22} />
            </a>
            <a href="">
              <FaInstagram size={22} />
            </a>
            <a href="">
              <FaFacebook size={22} />
            </a>
            <a href="">
              <FaPinterest size={22} />
            </a>
            <a href="">
              <RiTwitterXFill size={22} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>
          <p className="text-md text-white/80">
            Forest View Road No. 8 Pine Valley, Ubud, Bali.
          </p>
          <p className="text-md text-white/80">+62-881-1661-7171</p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              pinehaven@gmail.com
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              www.pinehaven.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Pine Haven</h1>
          <p>
            <a
              href="/"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#about"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              About
            </a>
          </p>
          <p>
            <a
              href="#room"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Room
            </a>
          </p>
          <p>
            <a
              href="#review"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Contact
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          {/* <img src={footerImage} alt="Footer Image" className="w-50" /> */}
        </div>
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between text-center md:text-start text-lg md:text-md">
        <p className="text-white/80 w-full md:w-3/4 lg:w-full">
          © 2024 Artha Outdoor Homestay. All rights reserved.
        </p>
        <div className="flex items-center justify-center md:justify-end gap-x-3 w-full">
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-secondary transition duration-300"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-secondary transition duration-300"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
