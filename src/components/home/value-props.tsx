import { Fish, Leaf, Users, Wrench } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

const items = [
  {
    title: "Quality fish production",
    body: "Protocols grounded in tilapia biology — stocking, feeding, and growth checks that match your pond.",
    icon: Fish,
  },
  {
    title: "Sustainable practices",
    body: "Reduce waste, manage fertility responsibly, and keep water happier for fish and neighbors.",
    icon: Leaf,
  },
  {
    title: "Practical training",
    body: "Concepts tied to field demos — liners, aeration thinking, water tests you can repeat weekly.",
    icon: Wrench,
  },
  {
    title: "Farmer empowerment",
    body: "Leave with confidence to coach your team, track costs, and improve each production cycle.",
    icon: Users,
  },
];

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Why farmers choose HappyFish
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We combine classroom clarity with farm realism — so your next steps feel
          obvious, not theoretical.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <Card className="h-full border-border/80 shadow-card transition-shadow hover:shadow-soft">
              <CardHeader className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="font-display text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
