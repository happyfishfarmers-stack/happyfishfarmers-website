import Link from "next/link";
import { BookOpen, Laptop, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { PRICING, TRAINING_TOPICS } from "@/lib/constants";

export function TrainingPreview() {
  return (
    <section className="border-y border-border bg-secondary/25">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Trainings
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Two ways to learn — online discipline, on-farm depth.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with structured modules and live Q&A, then reinforce with smell,
              sound, and stocking lessons you can only get beside the pond.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {TRAINING_TOPICS.slice(0, 6).map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
              <li className="text-foreground/80">
                + business sustainability tips for serious growers.
              </li>
            </ul>
            <Button className="mt-10" asChild>
              <Link href="/training">See full curriculum & pricing</Link>
            </Button>
          </FadeIn>

          <div className="grid gap-6">
            <FadeIn delay={0.08}>
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Laptop className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <CardTitle className="font-display text-xl">
                      Online Tilapia Farming Training
                    </CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Cohort calls, self-paced modules, templates, and feedback on your
                      farm plan drafts.
                    </p>
                    <p className="mt-4 font-display text-2xl font-semibold text-primary">
                      {PRICING.currency} {PRICING.onlineZMW.toLocaleString()}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link href="/training">How online enrollment works</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.14}>
              <Card className="shadow-card">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Users className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <CardTitle className="font-display text-xl">
                      Physical farm visitation
                    </CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Hands-on observation of stocking cues, feeding rhythm, and safety on
                      working ponds.
                    </p>
                    <p className="mt-4 font-display text-2xl font-semibold text-primary">
                      {PRICING.currency} {PRICING.physicalZMW.toLocaleString()}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground" aria-hidden />
                  <p className="text-sm text-muted-foreground">
                    Includes study material for easy reference after your visit.
                  </p>
                  <Button variant="outline" asChild className="mt-2 w-full sm:mt-0 sm:w-auto">
                    <Link href="/farm-visits">Plan a visit</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
