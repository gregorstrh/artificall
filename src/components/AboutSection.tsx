import gregorImg from "@/assets/gregor-strohmayr.png";
import simonImg from "@/assets/simon-wimmer.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Über <span className="text-primary neon-text">artificall</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Wir sind eine spezialisierte Freelancing-Agentur, die modernste KI-Technologien 
            mit kreativem Design und technischer Exzellenz verbindet. Unser Ziel ist es, 
            Unternehmen dabei zu helfen, ihre digitale Präsenz auf das nächste Level zu heben. 
            Mit einem Fokus auf Innovation und Effizienz entwickeln wir maßgeschneiderte 
            Lösungen, die nicht nur beeindrucken, sondern auch messbare Ergebnisse liefern.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Gregor */}
          <div className="glass-card rounded-2xl p-8 text-center animated-border">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30">
              <img 
                src={gregorImg} 
                alt="Gregor Strohmayr" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Gregor Strohmayr
            </h3>
            <p className="text-primary font-medium mb-3">Founder & Developer</p>
            <p className="text-muted-foreground text-sm">
              Schüler an der HLW Haag<br />
              Zweig: Kommunikations- und Mediendesign
            </p>
          </div>

          {/* Simon */}
          <div className="glass-card rounded-2xl p-8 text-center animated-border">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30">
              <img 
                src={simonImg} 
                alt="Simon Wimmer" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              Simon Wimmer
            </h3>
            <p className="text-primary font-medium mb-3">Founder & Sales Manager</p>
            <p className="text-muted-foreground text-sm">
              Schüler an der HLW Haag
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
