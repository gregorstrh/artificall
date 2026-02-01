import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoPracticeSection from "@/components/DemoPracticeSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DemoPracticeSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
