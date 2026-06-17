import HeroSection from "@/app/(public)/(home-page)/_components/sections/hero-section";
import RoomSection from "./_components/sections/room-section";
import AboutSection from "@/app/(public)/(home-page)/_components/sections/about-section";
import AmenitiesSection from "./_components/sections/amenities-section";
import CtaContactSection from "./_components/sections/cta-contact-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <RoomSection />
      <CtaContactSection />
    </div>
  );
}
