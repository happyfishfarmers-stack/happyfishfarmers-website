import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { BUSINESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${SITE_NAME} website and related programs.`,
};

export default function TermsPage() {
  const updated = "May 9, 2026";

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
      </FadeIn>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display">
        <h2>Agreement</h2>
        <p>
          By using this website, contacting us, or enrolling in programs operated by{" "}
          {SITE_NAME}, you agree to these terms. If you disagree, do not use the site.
          Questions: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>

        <h2>Not professional advice</h2>
        <p>
          Educational content, blog articles, and farm visits provide general aquaculture
          education — not guaranteed outcomes. Farming involves
          biological and financial risk; apply guidance with local expertise and
          regulations.
        </p>

        <h2>Programs and pricing</h2>
        <p>
          Published prices on this site are offered in good faith and may change. Final
          fees, schedules, and attendance rules are confirmed at enrollment. Refund or
          reschedule policies are communicated with each offering.
        </p>

        <h2>Farm visits</h2>
        <p>
          Visitors must follow safety instructions. Participation near ponds may involve
          slipping hazards, sun exposure, and interaction with equipment — attend at your
          own risk to the extent permitted by law. Children must be supervised by a parent
          or guardian.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Site content, branding, and training materials are owned by {SITE_NAME} or
          licensors. Do not copy, scrape, or redistribute materials without permission.
        </p>

        <h2>Third-party services</h2>
        <p>
          Links and integrations (for example maps and analytics) are subject to third-party
          terms.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {SITE_NAME} is not liable for indirect,
          incidental, or consequential damages arising from use of the site or programs.
          Our total liability for any claim related to the site will not exceed the amount
          you paid us for the specific service giving rise to the claim during the prior
          twelve months (if any).
        </p>

        <h2>Governing approach</h2>
        <p>
          We aim to resolve disputes fairly by email first. Where courts have jurisdiction,
          you agree to local procedures applicable to contracts with {SITE_NAME} in Zambia
          unless another venue is legally required.
        </p>
      </div>
    </div>
  );
}
