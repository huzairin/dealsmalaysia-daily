import { contactEmail, siteHostname, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: `${siteName} earns commissions from qualifying purchases through affiliate links. How it works and how we protect editorial integrity.`,
  openGraph: {
    title: `Affiliate Disclosure | ${siteName}`,
    description: "Transparent explanation of affiliate relationships and reader disclosures.",
    url: `${siteUrl}/affiliate-disclosure/`,
  },
  alternates: { canonical: `${siteUrl}/affiliate-disclosure/` },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-brand sm:text-4xl">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 25 March 2026 · Applies to {siteHostname}</p>

      <div className="prose-article mt-8">
        <p>
          <strong>{siteName}</strong> (“we”, “us”) operates <strong>{siteUrl.replace(/^https:\/\//, "")}</strong>{" "}
          to publish technology reviews, VPN and hosting comparisons, gadget round-ups, and shopping
          deals for consumers and small businesses in Malaysia. Transparency matters to us and to our
          readers. This page explains how affiliate partnerships work on this site.
        </p>

        <h2>What is an affiliate relationship?</h2>
        <p>
          Some links on our website are <strong>affiliate links</strong>. If you click an affiliate
          link and complete a qualifying purchase or sign-up, we may earn a commission or referral fee
          from the merchant or affiliate network. This is paid by the advertiser — not as an extra
          charge to you.
        </p>

        <h2>How we use affiliate links</h2>
        <p>
          We place affiliate links where they help readers take the next step — for example, checking
          current VPN pricing, opening a hosting checkout, or visiting an official retailer on Shopee
          or Lazada. Affiliate revenue helps fund testing time, software licences, and editorial
          operations. It does <strong>not</strong> change our obligation to give honest assessments.
        </p>

        <h3>Editorial independence</h3>
        <p>
          We do not accept payment in exchange for a positive review or a guaranteed rating. If a
          product underperforms, we say so. When we have a material relationship with a brand beyond
          a standard affiliate programme, we will disclose it clearly in the relevant article.
        </p>

        <h3>Which programmes may appear</h3>
        <p>
          Examples of categories we may link to include VPN providers, web hosts, email marketing
          platforms, and general e-commerce marketplaces. Programmes and merchants change over time;
          the presence of a link does not imply we endorse every product sold by that merchant.
        </p>

        <h2>Identifying affiliate content</h2>
        <p>
          Articles that contain affiliate links include a short <strong>affiliate note</strong> near
          the content or call-to-action. Our site-wide notice also appears in the footer. For the
          fullest explanation of how we handle data when you click outbound links, see our{" "}
          <Link href="/privacy/" className="font-semibold text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>Your choices</h2>
        <p>
          You are never required to use our links. You may visit merchants directly. If you prefer not
          to use affiliate links, you can type the vendor&apos;s URL manually or use a search engine.
        </p>

        <h2>Questions</h2>
        <p>
          For questions about this disclosure or a specific article, contact{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-accent hover:underline">
            {contactEmail}
          </a>{" "}
          or use our{" "}
          <Link href="/contact/" className="font-semibold text-accent hover:underline">
            Contact
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
