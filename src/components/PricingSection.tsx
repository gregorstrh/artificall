import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Website",
    price: "499",
    description: "Professionelle Webpräsenz für Ihr Unternehmen",
    features: [
      "1 Website oder Landingpage",
      "Responsive Design",
      "SEO-Optimierung",
      "Nach Ihren Wünschen designed",
    ],
    popular: false,
  },
  {
    name: "KI-Anrufagent",
    price: "1.499",
    description: "Ideal für wachsende Unternehmen",
    features: [
      "24/7 erreichbar",
      "Telefonnummer-Kosten (3 Jahre inklusive)",
      "Übernimmt eingehende Anrufe",
      "Inkl. Termineintragung",
      "Telefonatdauer-Kosten selbst zu zahlen",
    ],
    popular: true,
  },
  {
    name: "Website + KI-Anrufagent",
    price: "1.899",
    description: "Für maximale digitale Transformation",
    features: [
      {
        title: "1 Website oder Landingpage",
        subItems: ["Responsive Design", "SEO-Optimierung", "Nach Ihren Wünschen designed"],
      },
      {
        title: "1 KI-Anrufagent",
        subItems: ["24/7 erreichbar", "Telefonnummer-Kosten (3 Jahre inklusive)", "Übernimmt eingehende Anrufe", "Inkl. Termineintragung", "Telefonatdauer-Kosten selbst zu zahlen"],
      },
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const { toast } = useToast();

  const handleStartClick = () => {
    toast({
      title: "Bald verfügbar",
      description: "Die Zahlungsfunktion wird in Kürze freigeschaltet. Kontaktieren Sie uns gerne direkt!",
    });
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 section-gradient rotate-180" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Transparente <span className="text-primary neon-text">Preise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt.
            Alle Preise zzgl. MwSt.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 relative ${
                plan.popular ? "pricing-popular" : ""
              } hover-scale`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Beliebt
                </div>
              )}
              
              <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-heading font-bold">{plan.price}€</span>
                <span className="text-muted-foreground ml-2">/ Projekt</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => {
                  if (typeof feature === "string") {
                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={featureIndex} className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">{feature.title}</span>
                      </div>
                      <ul className="ml-8 space-y-1">
                        {feature.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary/50" />
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>

              <Button
                variant={plan.popular ? "neon" : "outline"}
                className="w-full"
                onClick={handleStartClick}
              >
                Jetzt starten
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
