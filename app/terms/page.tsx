import { contactEmail, siteHostname, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteName} (${siteHostname}) — acceptable use, disclaimers, and limitations of liability.`,
  openGraph: {
    title: `Terms of Service | ${siteName}`,
    description: "Legal terms governing use of our website and content.",
    url: `${siteUrl}/terms/`,
  },
  alternates: { canonical: `${siteUrl}/terms/` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-brand sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 25 March 2026</p>

      <div className="prose-article mt-8">
        <p>
          Welcome to <strong>{siteName}</strong> at{" "}
          <strong>{siteUrl.replace(/^https:\/\//, "")}</strong> (“Site”). By accessing or using the
          Site, you agree to these Terms of Service (“Terms”). If you do not agree, please do not use
          the Site.
        </p>

        <h2>Who we are</h2>
        <p>
          The Site is operated by {siteName}, publishing technology reviews, deal round-ups, and
          related editorial content aimed primarily at readers in Malaysia.
        </p>

        <h2>Use of the Site</h2>
        <h3>Permitted use</h3>
        <p>
          You may browse, read, and share links to our content for personal, non-commercial purposes,
          subject to these Terms and applicable law.
        </p>
        <h3>Prohibited conduct</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in any way that violates Malaysian law or the law of your jurisdiction;</li>
          <li>Attempt to gain unauthorised access to our systems, accounts, or data;</li>
          <li>Scrape, harvest, or automate access in a manner that burdens the Site or infringes rights;</li>
          <li>Misrepresent your affiliation with {siteName} or impersonate our team.</li>
        </ul>

        <h2>Content and intellectual property</h2>
        <p>
          Text, graphics, logos, and layout on the Site are owned by {siteName} or our licensors
          unless otherwise stated. You may not copy, reproduce, or republish substantial portions of
          our content without prior written permission, except for limited quoting with attribution as
          permitted by fair dealing or similar principles.
        </p>

        <h2>Editorial and financial disclaimers</h2>
        <h3>Not professional advice</h3>
        <p>
          Content on the Site is for <strong>general information only</strong>. It does not
          constitute legal, financial, tax, security, or technical advice. For decisions affecting
          your business or personal safety, consult qualified professionals.
        </p>
        <h3>Accuracy and third parties</h3>
        <p>
          We strive for accuracy but do not warrant that content is complete, current, or error-free.
          Prices, promotions, product specifications, and affiliate programme terms are controlled by
          third parties and may change without notice. Always verify details on the merchant&apos;s
          official website before purchasing.
        </p>
        <h3>Affiliate relationships</h3>
        <p>
          The Site may earn commissions from qualifying purchases through affiliate links. See our{" "}
          <Link href="/affiliate-disclosure/" className="font-semibold text-accent hover:underline">
            Affiliate Disclosure
          </Link>{" "}
          for details.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteName} and its operators shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, or any loss of
          profits, data, or goodwill, arising from your use of the Site or reliance on its content.
          Our total liability for any claim relating to the Site shall not exceed the amount you paid
          us (if any) for use of the Site in the twelve months preceding the claim — or, if none,{" "}
          <strong>zero</strong>.
        </p>

        <h2>Links to other websites</h2>
        <p>
          The Site may link to third-party websites. We are not responsible for their content,
          policies, or practices. Your use of third-party sites is at your own risk.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. The “Last updated” date at the top will change
          when we do. Continued use of the Site after changes constitutes acceptance of the revised
          Terms.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of <strong>Malaysia</strong>, without regard to
          conflict-of-law principles. Courts in Malaysia shall have non-exclusive jurisdiction,
          subject to mandatory consumer protections where applicable.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-accent hover:underline">
            {contactEmail}
          </a>{" "}
          or{" "}
          <Link href="/contact/" className="font-semibold text-accent hover:underline">
            Contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
