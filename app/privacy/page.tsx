import { contactEmail, siteDomain, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteName} (${siteDomain}) — cookies, analytics, affiliate tracking, and your rights.`,
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteUrl}/privacy/` },
  openGraph: {
    title: `Privacy Policy | ${siteName}`,
    url: `${siteUrl}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-brand sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 25 March 2026</p>

      <div className="prose-article mt-8">
        <p>
          <strong>{siteName}</strong> (“we”, “us”) operates the website at{" "}
          <strong>{siteDomain}</strong> (“Site”, including <strong>www.{siteDomain}</strong>). This Privacy Policy explains
          what information we collect, how we use it, and your choices — including cookies, analytics,
          and affiliate tracking — when you use our technology reviews and deals content aimed at
          Malaysian readers.
        </p>

        <h2>Information we collect</h2>
        <h3>Information you provide</h3>
        <p>
          When you contact us or subscribe to a newsletter, you may provide your name, email address,
          and message content. We use this only to respond to you or deliver the subscription you
          requested.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          When you visit the Site, our hosting provider and (if enabled) analytics tools may process
          technical data such as IP address (often in truncated or aggregated form), browser type,
          device type, approximate location derived from IP, referring URL, and pages viewed. This
          helps us understand aggregate traffic and improve performance.
        </p>

        <h2>Cookies and similar technologies</h2>
        <p>
          We and our service providers may use <strong>cookies</strong> (small text files stored on
          your device) and similar technologies for:
        </p>
        <ul>
          <li>
            <strong>Essential operation</strong> — e.g. remembering preferences or load balancing;
          </li>
          <li>
            <strong>Analytics</strong> — e.g. measuring page views and engagement in aggregate;
          </li>
          <li>
            <strong>Affiliate attribution</strong> — when you click outbound affiliate links, partner
            networks may set cookies to credit referrals (see below).
          </li>
        </ul>
        <p>
          You can control or delete cookies through your browser settings. Blocking some cookies may
          affect Site functionality.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use privacy-conscious or mainstream analytics services to understand how readers use
          the Site (for example, which guides are most helpful). Where possible we prefer aggregated
          statistics over individual profiling. Specific tool names and retention periods may be listed
          in cookie banners or vendor documentation when we enable them.
        </p>

        <h2>Affiliate links and third-party tracking</h2>
        <p>
          Our pages may contain <strong>affiliate links</strong> to VPN providers, hosts, SaaS tools,
          and e-commerce platforms. When you click these links:
        </p>
        <ul>
          <li>You leave our Site and interact with the merchant or affiliate network directly;</li>
          <li>
            That third party may set <strong>cookies</strong> or use <strong>pixels</strong> to record
            clicks, attribute sales, and measure campaigns;
          </li>
          <li>Their use of data is governed by <strong>their</strong> privacy policies, not this one.</li>
        </ul>
        <p>
          We may earn a commission on qualifying purchases. See our{" "}
          <Link href="/affiliate-disclosure/" className="font-semibold text-accent hover:underline">
            Affiliate Disclosure
          </Link>{" "}
          for how affiliate relationships work editorially.
        </p>

        <h2>How we use information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Operate, secure, and improve the Site;</li>
          <li>Respond to enquiries and manage newsletter subscriptions;</li>
          <li>Analyse aggregate readership trends;</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information to data brokers.
        </p>

        <h2>Legal bases (including Malaysia / PDPA)</h2>
        <p>
          Where Malaysia&apos;s Personal Data Protection Act 2010 (PDPA) or similar laws apply, we
          process personal data fairly, for legitimate purposes related to the Site, and with
          reasonable security measures. Depending on context, processing may be based on consent
          (e.g. newsletter), performance of a request (e.g. replying to email), or legitimate interests
          (e.g. fraud prevention, analytics in aggregate form), balanced against your rights.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain contact and subscription data only as long as needed for the purpose collected,
          unless a longer period is required by law. Server logs and analytics may be retained for
          shorter rolling periods as configured with vendors.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on applicable law, you may have rights to access, correct, limit, or delete
          certain personal data we hold, or to withdraw consent where processing is consent-based.
          Contact us using the details below to make a request. We may need to verify your identity
          before responding.
        </p>

        <h2>Children</h2>
        <p>
          The Site is not directed at children under 13. We do not knowingly collect personal
          information from children.
        </p>

        <h2>International transfers</h2>
        <p>
          Our hosting or analytics providers may process data in jurisdictions outside Malaysia.
          Where required, we rely on appropriate safeguards or contractual terms offered by vendors.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date will change
          accordingly. Material changes may be highlighted on the Site or in communications where
          appropriate.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions or requests:{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-accent hover:underline">
            {contactEmail}
          </a>
          , or our{" "}
          <Link href="/contact/" className="font-semibold text-accent hover:underline">
            Contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
