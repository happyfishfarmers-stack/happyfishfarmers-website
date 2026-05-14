import { NewsletterForm } from "@/components/forms/newsletter-form";
import { FadeIn } from "@/components/motion/fade-in";

export function NewsletterSection() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Field notes in your inbox
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              Occasional tilapia tips, cohort announcements, and farm visit openings —
              no spam, unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
        <FadeIn
          className="mt-8 rounded-2xl border border-white/20 bg-card p-6 text-card-foreground shadow-card"
          delay={0.06}
        >
          <NewsletterForm />
        </FadeIn>
      </div>
    </section>
  );
}
