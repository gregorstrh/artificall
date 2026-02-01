import { Phone, Clock, MapPin, Stethoscope, Syringe, Heart, TestTube, Activity, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DemoPracticeSection = () => {
  const services = [
    { icon: Stethoscope, label: "Vorsorgeuntersuchungen" },
    { icon: Heart, label: "Behandlung akuter und chronischer Erkrankungen" },
    { icon: Syringe, label: "Impfungen" },
    { icon: TestTube, label: "Blut- und Laboruntersuchungen" },
    { icon: Activity, label: "EKG & Blutdruckdiagnostik" },
    { icon: Users, label: "Hausärztliche Betreuung und Beratung" },
  ];

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Phone size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Live Demo – KI-Telefonassistent</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Praxis für Allgemeinmedizin
          </h2>
          <p className="text-2xl md:text-3xl font-heading text-primary neon-text">
            Dr. Max Mustermann
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Welcome Text */}
          <Card className="glass-card border-primary/20 mb-8">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Willkommen in der Praxis für Allgemeinmedizin von Dr. Max Mustermann.
                Wir bieten eine moderne, zuverlässige und patientenorientierte hausärztliche 
                Versorgung für die ganze Familie.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <div className="mb-8">
            <h3 className="font-heading text-xl font-bold text-center mb-6">Leistungen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-3">
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{service.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* About Doctor */}
          <Card className="glass-card border-primary/20 mb-8">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Über Dr. Max Mustermann</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Mustermann ist erfahrener Hausarzt mit Schwerpunkt auf persönlicher, 
                verständlicher und evidenzbasierter Medizin. Eine vertrauensvolle 
                Arzt-Patient-Beziehung steht im Mittelpunkt seiner Arbeit.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="glass-card border-primary/20 mb-8">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold mb-6">Kontakt</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Musterstraße 12, 12345 Musterstadt</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">01234 / 567890</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Sprechzeiten:</p>
                    <p>Mo–Fr: 08:00–12:00</p>
                    <p>Mo, Di, Do: 14:00–17:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call Button - Placeholder for future voice agent */}
          <div className="text-center">
            <Button variant="neon" size="lg" className="group" disabled>
              <Phone className="w-5 h-5 mr-2" />
              KI-Rezeption anrufen (bald verfügbar)
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Hier wird bald ein KI-Telefonassistent integriert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPracticeSection;
