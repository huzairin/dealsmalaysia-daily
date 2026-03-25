import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { AuthorCredibilityStrip } from "@/components/AuthorCredibilityStrip";
import { HomeMethodology } from "@/components/HomeMethodology";
import { Newsletter } from "@/components/Newsletter";
import { TrustBar } from "@/components/TrustBar";
import { featuredArticles } from "@/lib/articles";
import { bestDealsToday, comparisonGuides } from "@/lib/home-sections";
import { siteDomain, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Malaysia's #1 tech and deals review platform — VPNs, hosting, AI tools, Shopee & Lazada picks, and travel tips for Malaysian readers.",
  alternates: { canonical: siteUrl + "/" },
  openGraph: {
    title: "Deals Malaysia Daily — Tech & Deals for Malaysia",
    description:
      "Independent reviews and Malaysian shopping round-ups. VPN, hosting, gadgets, and travel — tested with local context.",
    url: siteUrl + "/",
  },
};

const categories = [
  {
    name: "VPN & Security",
    blurb: "Privacy tools, password managers, and safe browsing for Unifi, Time, and mobile users.",
    href: "/blog/best-vpn-malaysia-2026/",
  },
  {
    name: "Laptops & computing",
    blurb: "Performance picks and accessories for remote work and study — MYR-aware buying notes.",
    href: "/blog/",
  },
  {
    name: "Gadgets & accessories",
    blurb: "Shopee and Lazada-tested cables, hubs, and desk gear that punch above their price.",
    href: "/blog/top-10-shopee-gadgets-under-rm50/",
  },
  {
    name: "Web hosting",
    blurb: "Latency, support, and WordPress speed for Malaysian sites and WooCommerce stores.",
    href: "/blog/best-web-hosting-malaysia-hostinger-vs-bluehost/",
  },
  {
    name: "Shopping deals",
    blurb: "Marketplace round-ups, vouchers, and price-tracking methodology for major sales.",
    href: "/blog/lazada-vs-shopee-best-deals/",
  },
  {
    name: "Travel",
    blurb: "AirAsia, Grab, and OTAs — stacking promos without leaving value on the table.",
    href: "/blog/grab-airasia-travel-hacks-2026/",
  },
];

const latestReviews = featuredArticles.slice(0, 3);
const moreArticles = featuredArticles.slice(3, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand via-brand to-brand-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{siteDomain}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Malaysia&apos;s #1 Tech &amp; Deals Review Platform
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Hands-on reviews, honest comparisons, and Malaysian ringgit context — built for readers
            who want trustworthy picks, not hype.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-accent px-6 font-semibold text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Latest reviews
            </Link>
            <Link
              href="/about/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 bg-white/5 px-6 font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              About our team
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="border-b border-slate-200 bg-white py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
            <div className="text-center sm:px-4">
              <p className="text-3xl font-bold text-brand">50,000+</p>
              <p className="mt-1 text-sm font-medium text-slate-600">Monthly readers</p>
            </div>
            <div className="text-center sm:px-4">
              <p className="text-3xl font-bold text-brand">200+</p>
              <p className="mt-1 text-sm font-medium text-slate-600">Products reviewed</p>
            </div>
            <div className="text-center sm:px-4">
              <p className="text-3xl font-bold text-brand">5 years</p>
              <p className="mt-1 text-sm font-medium text-slate-600">Editorial experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm sm:flex sm:items-start sm:justify-between sm:gap-8 sm:p-8">
            <div>
              <h2 className="text-lg font-bold text-amber-950">Affiliate disclosure</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-950/90">
                We earn commissions from qualifying purchases through affiliate links — you pay the
                same (or less with official promos). Editorial ratings are independent; we disclose
                relationships clearly on every relevant page.
              </p>
            </div>
            <Link
              href="/affiliate-disclosure/"
              className="mt-4 inline-flex shrink-0 text-sm font-bold text-accent hover:underline sm:mt-0"
            >
              Read full policy →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <HomeMethodology />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Latest reviews</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Long-form tests and VPN round-ups from our Kuala Lumpur desk — updated when benchmarks
              shift.
            </p>
          </div>
          <Link href="/blog/" className="text-sm font-semibold text-accent hover:underline">
            All articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestReviews.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">Best deals today</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Curated marketplace and travel picks we&apos;re actively tracking for Malaysian shoppers.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestDealsToday.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition hover:border-accent/40 hover:bg-white hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">{d.tag}</span>
                  <span className="mt-2 text-lg font-bold text-brand">{d.title}</span>
                  <span className="mt-2 flex-1 text-sm text-slate-600">{d.blurb}</span>
                  <span className="mt-4 text-sm font-semibold text-accent">View guide →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-brand sm:text-3xl">Comparison guides</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Side-by-side posts built for affiliate readers who want a decision framework — not a press
          release.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {comparisonGuides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand/30 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-brand group-hover:text-accent">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{g.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-accent">Open comparison →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Featured categories</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              VPN, laptops, gadgets, hosting, and travel — written with Malaysian ISPs and payment
              methods in mind.
            </p>
          </div>
          <Link href="/blog/" className="text-sm font-semibold text-accent hover:underline">
            Browse all →
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <li key={c.name}>
              <Link
                href={c.href}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md"
              >
                <span className="text-lg font-bold text-brand">{c.name}</span>
                <span className="mt-2 flex-1 text-sm text-slate-600">{c.blurb}</span>
                <span className="mt-4 text-sm font-semibold text-accent">Explore</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <AuthorCredibilityStrip />
      </section>

      <section className="bg-slate-100/80 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">More tests &amp; guides</h2>
          <p className="mt-2 text-slate-600">Additional recent coverage from the same review standards.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {moreArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Newsletter />
      </section>
    </>
  );
}
