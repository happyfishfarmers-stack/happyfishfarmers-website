import Link from "next/link";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS, SITE_NAME, getTelHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} for tilapia training enrollment, farm visit bookings, and partnerships — email, phone, or the form below.`,
};

export default function ContactPage() {
  const tel = getTelHref();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s talk tilapia
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Whether you are comparing training options, coordinating a cooperative visit, or
          planning your first pond season — send a note. We read every message.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <FadeIn>
            <Card className="border-border/80 shadow-card">
              <CardContent className="space-y-6 pt-6">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Farm address</p>
                    <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <a
                      className="mt-1 block text-sm text-primary hover:underline"
                      href={tel}
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a
                      className="mt-1 text-sm text-primary hover:underline"
                      href={`mailto:${BUSINESS.email}`}
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Hours</p>
                    <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="text-sm text-muted-foreground">
              Prefer a quick overview first?{" "}
              <Link href="/training" className="font-semibold text-primary hover:underline">
                See training details →
              </Link>
            </p>
          </FadeIn>
        </div>

        <FadeIn className="lg:col-span-2" delay={0.06}>
          <Card className="border-border/80 shadow-card">
            <CardContent className="pt-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically reply within two business days — phone calls can help for urgent
                scheduling questions.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
