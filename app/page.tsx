import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
