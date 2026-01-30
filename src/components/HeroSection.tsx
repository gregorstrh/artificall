import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background animate-grid" />
      
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
          <Zap size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">KI-gestützte Lösungen</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-delay-1">
          <span className="text-foreground">artificall –</span>
          <br />
          <span className="text-primary neon-text">Future-Driven Freelancing</span>
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
          KI-gestützte Lösungen für Web, Automation & digitale Innovation.
          Wir verwandeln Ihre Ideen in leistungsstarke digitale Erlebnisse.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Button variant="neon" size="lg" className="group">
            Jetzt testen
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in-delay-3">
          {[
            { value: "50+", label: "Projekte" },
            { value: "100%", label: "Zufriedenheit" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 gradient-overlay" />
    </section>
  );
};

export default HeroSection;
