import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Shield, Sun, Truck } from "lucide-react";

import { FarmBookingForm } from "@/components/forms/farm-booking-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, PRICING, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Farm Visits & Practical Training",
  description: `Book a hands-on tilapia farming session at ${SITE_NAME} in Chilanga — practical stocking, feeding, and pond walks with study material included.`,
};

export default function FarmVisitsPage() {
  const mapQuery = encodeURIComponent(
    "Makeni West, Chilanga, Zambia"
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          On-farm learning
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Practical tilapia lessons where your boots get muddy
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Walk real ponds with us — see feeding responses, practice observation skills,
          and leave with notes you can reuse at home. Ideal for anyone who learns fastest
          when the pond is in front of them.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
            <Image
              src="/images/farm/20240630_150930.jpg"
              alt="Guided walk beside the HappyFish Farmers tilapia ponds in Chilanga."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-3xl font-semibold text-primary">
              {PRICING.currency} {PRICING.physicalZMW.toLocaleString()}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Physical training visit — includes practical instruction and study material
              for later reference.
            </p>
            <Button className="mt-6" asChild variant="accent">
              <Link href="#book">Check availability</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            What to expect
          </h2>
          <ul className="mt-6 space-y-5 text-muted-foreground">
            <li className="flex gap-3">
              <Sun className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Season-aware demos</strong> — we
                connect what you see to weather, algae dynamics, and feeding adjustments.
              </span>
            </li>
            <li className="flex gap-3">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Safety first</strong> — pond edges,
                wading depth, and respectful handling when nets are in use.
              </span>
            </li>
            <li className="flex gap-3">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="text-foreground">Logistics note</strong> — visits are
                scheduled; walk-ins are not available. Bring sun protection and footwear
                you can rinse.
              </span>
            </li>
          </ul>

          <Card className="mt-8 border-primary/20 bg-secondary/30">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.address}</p>
                  <a
                    className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <Separator className="my-16" />

      <FadeIn>
        <h2 className="font-display text-3xl font-semibold text-foreground">
          Scenes from a typical farm visit
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/images/farm/20240702_090910.jpg",
              alt: "Morning pond conditions during a HappyFish Farmers training visit.",
            },
            {
              src: "/images/farm/20241016_123515.jpg",
              alt: "Trainees inspecting tilapia stock at the HappyFish Farmers farm.",
            },
            {
              src: "/images/farm/20250414_100204.jpg",
              alt: "Hands-on handling demonstration during a practical farm visit.",
            },
          ].map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </FadeIn>

      <Separator className="my-16" />

      <section id="book" className="scroll-mt-28">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Request a booking
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Share your preferred window and group size — we respond by email or phone
            with confirmation and preparation notes.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 grid gap-10 lg:grid-cols-2">
          <FarmBookingForm />
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-border bg-muted shadow-inner">
            <iframe
              title="Map of Chilanga area near HappyFish Farmers"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=12&output=embed`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
