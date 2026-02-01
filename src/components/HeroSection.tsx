import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Phone, Clock, MapPin, Stethoscope, Syringe, Heart, TestTube, Activity, Users, Sparkles } from "lucide-react";
import { useDemoDialog } from "@/contexts/DemoDialogContext";

const HeroSection = () => {
  const { isOpen, setIsOpen, openDemo } = useDemoDialog();

  const services = [
    { icon: Stethoscope, label: "Vorsorgeuntersuchungen" },
    { icon: Heart, label: "Akute & chronische Erkrankungen" },
    { icon: Syringe, label: "Impfungen" },
    { icon: TestTube, label: "Blut- & Laboruntersuchungen" },
    { icon: Activity, label: "EKG & Blutdruckdiagnostik" },
    { icon: Users, label: "Hausärztliche Betreuung" },
  ];

  return (
    <>
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
            <Button variant="neon" size="lg" className="group" onClick={openDemo}>
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

      {/* Demo Practice Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-primary/20">
          <DialogHeader>
            <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 rounded-full mb-4 w-fit">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">Live Demo – KI-Telefonassistent</span>
            </div>
            <DialogTitle className="font-heading text-2xl md:text-3xl">
              Praxis für Allgemeinmedizin
            </DialogTitle>
            <p className="text-xl font-heading text-primary neon-text">Dr. Max Mustermann</p>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Demo Explanation */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Dies ist ein Beispiel für unseren KI-Call Agent
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Diese fiktive Arztpraxis demonstriert, wie unser KI-Telefonassistent 
                      für Ihr Unternehmen arbeiten kann. Der Agent beantwortet Anrufe, 
                      gibt Informationen zu Öffnungszeiten, Leistungen und mehr – rund um die Uhr, 
                      professionell und ohne Wartezeit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Welcome */}
            <p className="text-muted-foreground leading-relaxed">
              Willkommen in der Praxis für Allgemeinmedizin von Dr. Max Mustermann.
              Wir bieten eine moderne, zuverlässige und patientenorientierte hausärztliche 
              Versorgung für die ganze Familie.
            </p>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold mb-3">Leistungen</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <service.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-heading font-bold mb-2">Über Dr. Max Mustermann</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dr. Mustermann ist erfahrener Hausarzt mit Schwerpunkt auf persönlicher, 
                verständlicher und evidenzbasierter Medizin. Eine vertrauensvolle 
                Arzt-Patient-Beziehung steht im Mittelpunkt seiner Arbeit.
              </p>
            </div>

            {/* Contact */}
            <Card className="bg-muted/30 border-primary/10">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-heading font-bold">Kontakt</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Musterstraße 12, 12345 Musterstadt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">01234 / 567890</span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <span className="font-medium text-foreground">Sprechzeiten: </span>
                      Mo–Fr: 08:00–12:00 | Mo, Di, Do: 14:00–17:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call Button */}
            <div className="text-center pt-2">
              <Button variant="neon" size="lg" disabled className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                KI-Rezeption anrufen (bald verfügbar)
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Hier wird bald ein KI-Telefonassistent integriert
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;
