import { Bot, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "KI-Automatisierung",
    description: "Intelligente Automatisierungslösungen, die Ihre Workflows optimieren und Zeit sparen.",
  },
  {
    icon: Globe,
    title: "Webentwicklung",
    description: "Moderne, performante Webanwendungen mit neuesten Technologien und Best Practices.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Einzigartige Markenidentitäten und UI/UX-Design, die Ihre Zielgruppe begeistern.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 relative">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Unsere <span className="text-primary neon-text">Leistungen</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Von KI-Automatisierung bis hin zu maßgeschneiderten Weblösungen – 
            wir bieten alles, was Ihr Unternehmen digital nach vorne bringt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 hover-scale animated-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
