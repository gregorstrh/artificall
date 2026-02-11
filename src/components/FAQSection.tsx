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
    question: "Was beinhaltet der monatliche Servicepreis beim KI-Anrufagenten?",
    answer:
      "Der monatliche Servicepreis von 74,99€ deckt die Telefonnummer, Hosting und Wartung des KI-Agenten sowie regelmäßige Updates ab. So bleibt Ihr Agent immer auf dem neuesten Stand.",
  },
  {
    question: "In welchen Sprachen kann der KI-Anrufagent sprechen?",
    answer:
      "Unser KI-Anrufagent beherrscht Deutsch, Englisch und viele weitere Sprachen. Er erkennt automatisch die Sprache des Anrufers und antwortet entsprechend – ideal für internationale Kunden.",
  },
  {
    question: "Wie viele Anrufe kann der KI-Agent gleichzeitig bearbeiten?",
    answer:
      "Der KI-Agent kann unbegrenzt viele Anrufe gleichzeitig entgegennehmen. Kein Anrufer muss mehr in einer Warteschleife warten – jeder wird sofort bedient.",
  },
  {
    question: "Wird meine Website auch auf Google gefunden?",
    answer:
      "Ja! Jede Website wird von uns SEO-optimiert erstellt. Das bedeutet schnelle Ladezeiten, mobile Optimierung und strukturierte Inhalte, damit Sie bei Google besser gefunden werden.",
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