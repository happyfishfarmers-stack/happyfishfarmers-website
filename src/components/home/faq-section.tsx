import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";

const faqs = [
  {
    q: "Do I need prior farming experience?",
    a: "No — beginners are welcome. We scaffold concepts from pond basics upward and pair theory with checks you can repeat weekly.",
  },
  {
    q: "What does online training include?",
    a: "Live cohort sessions (scheduled windows), self-paced modules, downloadable guides, and submission feedback on key assignments.",
  },
  {
    q: "How do farm visits work?",
    a: "You request a window and group size. We confirm availability, share safety notes, and walk practical demonstrations suited to your questions.",
  },
  {
    q: "Can teams or cooperatives join?",
    a: "Yes — tell us your group size and learning goals. We suggest formats that keep sessions interactive.",
  },
  {
    q: "What currencies do you quote?",
    a: "Public pricing on this site is listed in ZMW for local clarity. Ask us about alternatives if you are enrolling from outside Zambia.",
  },
];

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Straight answers — if yours is not listed, contact us by phone or email.
        </p>
      </FadeIn>

      <FadeIn className="mt-10" delay={0.06}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  );
}
