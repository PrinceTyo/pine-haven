import HeaderPage from "@/components/header/header-page";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import ContactForm from "./_components/contact-form";

export default function ContactPage() {
  return (
    <section>
      <HeaderPage title="Contact Us" subtitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex items-center justify-center gap-4">
          <div className="w-80 text-center p-10 flex flex-col items-center justify-center gap-2 shadow-md border border-gray-100">
            <IoLocationOutline className="size-12" />
            <h2 className="text-xl font-semibold">Location</h2>
            <p>Coderx Street Rood 2026, Hallstat, Austria</p>
          </div>
          <div className="bg-primary text-white w-80 text-center p-10 flex flex-col items-center justify-center gap-2 shadow-md border border-gray-100">
            <IoMailOutline className="size-12" />
            <h2 className="text-xl font-semibold">pinehaven@email.com</h2>
            <p>Email us anytimefor anykind of quety.</p>
          </div>
          <div className="w-80 text-center p-10 flex flex-col items-center justify-center gap-2 shadow-md border border-gray-100">
            <IoCallOutline className="size-12" />
            <h2 className="text-xl font-semibold">Call: +8973 4592 6744</h2>
            <p>Call us any kind suppor, we will wait for it</p>
          </div>
        </div>

        <div className="mt-20 flex items-stretch gap-20">
          <div className="w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2250251129876!2d114.2203589741774!3d-8.078517980755175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14b8e1921a729%3A0x3f4be9995a9d7a88!2sBobocabin%20Ijen%2C%20Banyuwangi!5e0!3m2!1sid!2sid!4v1781008480761!5m2!1sid!2sid"
              className="w-full h-full grayscale"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
