import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { BUSINESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects personal information on this website.`,
};

export default function PrivacyPage() {
  const updated = "May 9, 2026";

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
      </FadeIn>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display">
        <h2>Introduction</h2>
        <p>
          {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
          explains what we collect through this website and related services, how we use
          it, and the choices you have. Contact:{" "}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Contact and lead forms:</strong> name, email, phone (optional), and
            messages you submit.
          </li>
          <li>
            <strong>Newsletter:</strong> email and optional name when you opt in.
          </li>
          <li>
            <strong>Technical data:</strong> basic analytics events (for example Vercel
            Analytics or Google Analytics 4 when enabled) such as page views and device
            categories — not used to sell personal data.
          </li>
        </ul>

        <h2>How we use information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Respond to inquiries and schedule trainings or farm visits.</li>
          <li>Send operational emails related to programs you joined.</li>
          <li>Improve website content and respond to inquiries.</li>
          <li>Meet legal obligations where applicable.</li>
        </ul>

        <h2>Legal bases (where relevant)</h2>
        <p>
          Depending on your region, we rely on consent (newsletters), contractual necessity
          (delivering purchased training), or legitimate interests (responding to
          inquiries, securing our services).
        </p>

        <h2>Sharing</h2>
        <p>
          We use reputable processors — for example hosting (Vercel), database (Supabase),
          and email delivery (Resend). Processors act on our instructions and may be located
          outside your country.
        </p>

        <h2>Retention</h2>
        <p>
          We retain messages and lead records long enough to operate programs and honor
          legal requirements. You may request deletion where applicable law allows.
        </p>

        <h2>Security</h2>
        <p>
          We apply reasonable administrative and technical safeguards. No online service is
          perfectly secure — avoid sharing sensitive financial details in plain email unless we
          explicitly request them through a secure channel.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Opt out of marketing emails via the unsubscribe link when present.</li>
          <li>
            Request access, correction, or deletion by emailing{" "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
          </li>
        </ul>

        <h2>Children</h2>
        <p>
          Our marketing site is not directed to children under 16. If you believe we
          collected a child&apos;s data in error, contact us and we will delete it.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy — significant changes will be reflected with a new date
          at the top.
        </p>
      </div>
    </div>
  );
}
