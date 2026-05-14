import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Clock, GraduationCap, Laptop, Video } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, PRICING, SITE_NAME, TRAINING_TOPICS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Online Tilapia Training",
  description: `Learn tilapia farming online with ${SITE_NAME} — structured modules, live cohort calls, and practical assignments rooted in real pond management.`,
};

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Online program
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Tilapia farming training — built for busy growers
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Move from curiosity to confident decisions: pond siting, liners, stocking,
          feeding, water quality, and the business habits that keep a farm sustainable
          when weather and markets shift.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
            <Image
              src="/images/farm/20240216_073454.jpg"
              alt="On-farm training session at HappyFish Farmers — practical aquaculture learning."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            What you get
          </h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <Video className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Live cohort sessions</strong> for
                Q&A, stocking debates, and seasonal troubleshooting.
              </span>
            </li>
            <li className="flex gap-3">
              <Laptop className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Self-paced modules</strong> you can
                revisit before stocking or harvest windows.
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Assignments that map to your farm</strong>{" "}
                — numbers, sketches, and risk checks instead of vague essays.
              </span>
            </li>
            <li className="flex gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Study material</strong> for quick
                reference when you are beside the pond.
              </span>
            </li>
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-3xl font-semibold text-primary">
              {PRICING.currency} {PRICING.onlineZMW.toLocaleString()}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Per learner for the online training package — confirm upcoming cohort dates
              by email or phone when you are ready to enroll.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/contact">Request enrollment details</Link>
            </Button>
          </div>
        </FadeIn>
      </div>

      <Separator className="my-16" />

      <FadeIn>
        <h2 className="font-display text-3xl font-semibold text-foreground">
          Curriculum highlights
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Topics mirror what working farms negotiate weekly — not textbook trivia.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {TRAINING_TOPICS.map((topic, i) => (
          <FadeIn key={topic} delay={i * 0.03}>
            <Card className="border-border/80 shadow-card">
              <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <CardTitle className="font-display text-base font-semibold leading-snug">
                  {topic}
                </CardTitle>
              </CardHeader>
            </Card>
          </FadeIn>
        ))}
      </div>

      <Separator className="my-16" />

      <div className="grid gap-10 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Instructor snapshot
          </h2>
          <p className="mt-4 text-muted-foreground">
            Training is led by practitioners who spend time at the water — not only in
            slides. Expect direct feedback, conservative stocking advice when data is
            thin, and encouragement to measure before spending.
          </p>
          <p className="mt-4 text-muted-foreground">
            You will hear how we manage trade-offs: algae blooms versus clarity,
            cheap feed temptation versus conversion, expansion timing versus cash flow.
            Bring your context — soil type, seasonality, labor availability — so examples
            stay grounded.
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <Card className="h-full border-primary/20 bg-secondary/30 shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl">Upgrade path</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Pair online modules with a{" "}
                <Link href="/farm-visits" className="font-semibold text-primary hover:underline">
                  farm visit
                </Link>{" "}
                when you want tacit knowledge — smell of the pond, feeding posture of the
                fish, and harvest ergonomics.
              </p>
              <p>
                Physical training tier (listed on{" "}
                <Link href="/farm-visits" className="font-semibold text-primary hover:underline">
                  Farm visits
                </Link>
                ): {PRICING.currency} {PRICING.physicalZMW.toLocaleString()} — includes
                practical instruction and study material.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <FadeIn className="mt-16 rounded-3xl border border-border bg-card p-8 text-center shadow-card">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Ready to join the next cohort?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Tell us your goals — we will confirm pricing, schedule options, and anything you
          should prepare before day one. Reach us at{" "}
          <a className="font-semibold text-primary" href={`mailto:${BUSINESS.email}`}>
            {BUSINESS.email}
          </a>{" "}
          or phone {BUSINESS.phoneDisplay}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">Contact the team</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">Read the blog first</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
