import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { DemoDialogProvider } from "@/contexts/DemoDialogContext";

const Index = () => {
  return (
    <DemoDialogProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </DemoDialogProvider>
  );
};

export default Index;
