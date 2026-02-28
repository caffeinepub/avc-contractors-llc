import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
