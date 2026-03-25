import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Tech reviews, VPN and hosting comparisons, Shopee and Lazada deals, and travel tips — curated for readers in Malaysia.",
  openGraph: {
    title: "Articles | Deals Malaysia Daily",
    description: "Browse our latest Malaysian tech reviews and shopping guides.",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand sm:text-4xl">Articles &amp; reviews</h1>
        <p className="mt-4 text-lg text-slate-600">
          Independent testing, transparent disclosures, and ringgit-aware pricing notes. We update
          guides when vendors change plans or when our benchmarks shift materially.
        </p>
      </header>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
