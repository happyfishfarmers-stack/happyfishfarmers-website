import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

const quotes = [
  {
    quote:
      "The water quality module alone paid for itself — I finally understood why my morning readings moved the way they did.",
    name: "Grace M.",
    role: "Cooperative lead, Southern Africa",
  },
  {
    quote:
      "Online lessons kept me accountable, and the farm day answered questions I did not know how to phrase.",
    name: "Brian T.",
    role: "First-time pond owner",
  },
  {
    quote:
      "We appreciated the sustainability angle — less wasted feed, clearer decisions on stocking.",
    name: "Amina K.",
    role: "Agripreneur",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Voices from the field
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Results vary by farm conditions — these are learner experiences shared during
          feedback sessions.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <FadeIn key={q.name} delay={i * 0.06}>
            <Card className="h-full border-border/80 bg-card shadow-card">
              <CardContent className="pt-8">
                <p className="text-sm leading-relaxed text-foreground">&ldquo;{q.quote}&rdquo;</p>
                <p className="mt-6 font-semibold text-foreground">{q.name}</p>
                <p className="text-xs text-muted-foreground">{q.role}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
