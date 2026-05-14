import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Heart, Sprout, Target } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${SITE_NAME} — tilapia aquaculture educators focused on sustainable pond management and farmer-first training in Zambia.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Our story
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Grounded in ponds. Focused on farmers.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          {SITE_NAME} exists because tilapia rewards consistency — and consistency is
          easier when training respects budgets, seasons, and the reality of small teams.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-card">
            <Image
              src="/images/farm/20250115_180457.jpg"
              alt="Evening light over the HappyFish Farmers tilapia ponds in Chilanga."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Founder lens
          </h2>
          <p className="mt-4 text-muted-foreground">
            The farm began with stubborn curiosity — testing liners in real soil, watching
            how neighbors stocked, and seeing where shortcuts turned expensive. Teaching
            became a natural extension: when farmers avoid rework, communities eat better
            protein and water stays cleaner.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today we split time between production and pedagogy — cohort calls for remote
            learners, mentored assignments for anyone documenting their dam or pond, and
            walk-abouts for teams who want tactile rhythm beside the water.
          </p>
        </FadeIn>
      </div>

      <Separator className="my-16" />

      <div className="grid gap-8 md:grid-cols-3">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Target className="h-8 w-8 text-primary" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              Mission
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Equip farmers with measurable skills — water checks, feeding judgement,
              harvest planning — so tilapia farming stays viable year after year.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Sprout className="h-8 w-8 text-primary" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              Sustainability
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We teach nutrient awareness, responsible expansion, and record keeping — the
              invisible infrastructure of ethical aquaculture.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Heart className="h-8 w-8 text-primary" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              Community
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Cooperatives, students, and solo operators share one trait — they move faster
              with honest feedback. We hold space for that.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="mt-16 rounded-3xl border border-border bg-secondary/30 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-foreground">
          {BUSINESS.bannerLine}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Train with us online, visit in person, or combine both — whichever respects your
          calendar and learning style.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/training">View training</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Talk to the team</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
