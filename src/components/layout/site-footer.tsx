import Image from "next/image";
import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { BUSINESS, SITE_NAME } from "@/lib/constants";

const footerLinks = [
  { href: "/training", label: "Online training" },
  { href: "/farm-visits", label: "Farm visits" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="HappyFish Farmers logo featuring a green tilapia fish silhouette with the company name inside."
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{BUSINESS.tagline}</span>
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Visit us
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  className="hover:text-primary"
                  href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, "")}`}
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  className="hover:text-primary"
                  href={`mailto:${BUSINESS.email}`}
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <p className="font-display text-sm font-semibold text-foreground">
              Trainings & visits
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email updates? Use the newsletter on the home page or write to{" "}
              <a className="font-medium text-primary" href={`mailto:${BUSINESS.email}`}>
                {BUSINESS.email}
              </a>
              .
            </p>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. Tilapia aquaculture training &
            sustainable farm education.
          </p>
          <p className="text-xs text-muted-foreground">{BUSINESS.hours}</p>
        </div>
      </div>
    </footer>
  );
}
