import { Sparkles, Target, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Über <span className="text-primary neon-text">artificall</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Wir sind eine spezialisierte Freelancing-Agentur, die modernste KI-Technologien 
              mit kreativem Design und technischer Exzellenz verbindet. Unser Ziel ist es, 
              Unternehmen dabei zu helfen, ihre digitale Präsenz auf das nächste Level zu heben.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mit einem Fokus auf Innovation und Effizienz entwickeln wir maßgeschneiderte 
              Lösungen, die nicht nur beeindrucken, sondern auch messbare Ergebnisse liefern.
            </p>

            {/* Feature Points */}
            <div className="space-y-4">
              {[
                { icon: Sparkles, text: "Innovative KI-gestützte Workflows" },
                { icon: Target, text: "Maßgeschneiderte Lösungen für jede Branche" },
                { icon: Zap, text: "Schnelle Umsetzung & agile Methoden" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 animated-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "5+", label: "Jahre Erfahrung" },
                  { value: "50+", label: "Erfolgreiche Projekte" },
                  { value: "30+", label: "Zufriedene Kunden" },
                  { value: "100%", label: "Engagement" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
