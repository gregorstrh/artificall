import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer:
      "Die Erstellung einer Website dauert in der Regel 1-2 Wochen, abhängig von Umfang und Komplexität. Nach einem ersten Gespräch erhalten Sie einen genauen Zeitplan.",
  },
  {
    question: "Was kostet ein KI-Anrufagent monatlich nach den 3 Jahren?",
    answer:
      "Nach den ersten 3 Jahren, in denen wir die Telefonnummer-Kosten übernehmen, fallen je nach Anbieter ca. 5-15€ monatlich für die Telefonnummer an. Die KI-Nutzung bleibt ohne zusätzliche Kosten.",
  },
  {
    question: "Kann ich den KI-Anrufagenten selbst anpassen?",
    answer:
      "Ja! Sie erhalten Zugang zu einem Dashboard, in dem Sie Begrüßungstexte, Geschäftszeiten und häufige Fragen selbst anpassen können. Für größere Änderungen stehen wir Ihnen gerne zur Verfügung.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer:
      "Wir akzeptieren Überweisung, PayPal und Kreditkarte. Die Zahlung erfolgt nach Projektabschluss – Sie zahlen erst, wenn Sie zufrieden sind.",
  },
  {
    question: "Bietet ihr auch Support nach der Fertigstellung?",
    answer:
      "Selbstverständlich! Nach der Fertigstellung bieten wir 30 Tage kostenlosen Support für kleinere Anpassungen. Danach können Sie optional einen Wartungsvertrag abschließen.",
  },
  {
    question: "Sind die Preise einmalig oder monatlich?",
    answer:
      "Alle angegebenen Preise sind einmalige Projektkosten. Es gibt keine versteckten monatlichen Gebühren – außer Sie wünschen optionale Zusatzleistungen wie Hosting oder Wartung.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 section-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Häufig gestellte <span className="text-primary neon-text">Fragen</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;