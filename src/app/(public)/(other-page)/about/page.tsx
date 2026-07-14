import HeaderPage from "@/components/header/header-page";
import AboutSection from "./_components/sections/about-section";
import FeaturesSection from "./_components/sections/features-seciton";
import AwwardSection from "./_components/sections/awward-section";

export default function AboutPage() {
  return (
    <div>
      <HeaderPage
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <AboutSection />
      <FeaturesSection />
      <AwwardSection />
    </div>
  );
}
