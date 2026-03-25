import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { TrustBar } from "@/components/TrustBar";
import { featuredArticles } from "@/lib/articles";
import { siteHostname } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Malaysia's #1 tech and deals review platform — VPNs, hosting, AI tools, Shopee & Lazada picks, and travel tips for Malaysian readers.",
  openGraph: {
    title: "Deals Malaysia Daily — Tech & Deals for Malaysia",
    description:
      "Independent reviews and Malaysian shopping round-ups. VPN, hosting, gadgets, and travel — tested with local context.",
  },
};

const categories = [
  {
    name: "VPN & Security",
    blurb: "Privacy tools, password managers, and safe browsing for Unifi, Time, and mobile users.",
    href: "/blog/",
  },
  {
    name: "Web Hosting",
    blurb: "Performance, support, and MYR pricing for Malaysian sites and WooCommerce stores.",
    href: "/blog/",
  },
  {
    name: "AI Tools",
    blurb: "Email platforms, writing assistants, and workflows for bilingual SME marketing.",
    href: "/blog/",
  },
  {
    name: "Shopping Deals",
    blurb: "Shopee, Lazada, and TikTok Shop finds — price-tracked where possible.",
    href: "/blog/",
  },
  {
    name: "Travel",
    blurb: "AirAsia, Grab, and OTAs — how to stack promos without leaving value on the table.",
    href: "/blog/",
  },
];

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
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{siteHostname}</p>
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
              Latest articles
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Featured categories</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Deep dives written with Malaysian ISPs, payment methods, and marketplaces in mind.
            </p>
          </div>
          <Link href="/blog/" className="text-sm font-semibold text-accent hover:underline">
            View all articles →
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

      <section className="bg-slate-100/80 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">Latest articles</h2>
          <p className="mt-2 text-slate-600">Fresh tests and deal round-ups from our Kuala Lumpur newsroom.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((a) => (
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
