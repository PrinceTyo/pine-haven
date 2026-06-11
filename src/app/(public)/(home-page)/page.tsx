import HeroSection from "@/app/(public)/(home-page)/_components/sections/hero-section";
import RoomSection from "./_components/sections/room-section";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <RoomSection />
    </div>
  );
}
