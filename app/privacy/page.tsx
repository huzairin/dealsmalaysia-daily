import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Deals Malaysia Daily (featherpro.fit).",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-brand">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 25 March 2026</p>
      <div className="prose-article mt-8">
        <p>
          Deals Malaysia Daily (“we”, “us”) operates featherpro.fit. This policy explains how we
          collect, use, and protect information when you use our website.
        </p>
        <h2>Information we collect</h2>
        <p>
          We may collect information you provide directly (for example, if you submit a contact form
          or subscribe to a newsletter), including name, email address, and message content. We may
          also collect technical data such as browser type, device category, and approximate region
          derived from IP address, via analytics tools if enabled.
        </p>
        <h2>Affiliate links</h2>
        <p>
          Our pages may contain affiliate links. When you click these links, third-party merchants
          or networks may set cookies or similar technologies to attribute referrals. Their practices
          are governed by their own privacy policies.
        </p>
        <h2>Cookies</h2>
        <p>
          We may use cookies for essential site functionality, analytics, or preference storage. You
          can control cookies through your browser settings.
        </p>
        <h2>How we use information</h2>
        <p>
          We use information to respond to enquiries, improve our content, understand aggregate
          audience trends, and comply with legal obligations. We do not sell your personal
          information.
        </p>
        <h2>Data retention</h2>
        <p>
          We retain messages and subscription details only as long as needed for the purpose
          collected, unless a longer period is required by law.
        </p>
        <h2>Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, or delete personal
          data we hold. Contact us at{" "}
          <a href="mailto:hello@featherpro.fit" className="font-semibold text-accent hover:underline">
            hello@featherpro.fit
          </a>
          .
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <Link href="/contact/" className="font-semibold text-accent hover:underline">
            Contact page
          </Link>{" "}
          or hello@featherpro.fit.
        </p>
      </div>
    </div>
  );
}
