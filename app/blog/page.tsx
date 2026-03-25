import { ArticleCard } from "@/components/ArticleCard";
import { ArticleCoverArt } from "@/components/ArticleCoverArt";
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
      <header className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/[0.04]">
        <div className="relative aspect-[2.4/1] min-h-[9.5rem] w-full sm:aspect-[2.8/1] sm:min-h-[11rem]">
          <ArticleCoverArt
            category="Editorial"
            imageGradient="from-brand via-brand-light to-brand-dark"
            patternUid="blog-index-hero"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/45 via-black/10 to-transparent px-5 pb-6 pt-16 sm:px-8 sm:pb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/90">Deals Malaysia Daily</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Articles &amp; reviews
            </h1>
          </div>
        </div>
        <div className="border-t border-slate-100 px-5 py-6 sm:px-8 sm:py-7">
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Independent testing, transparent disclosures, and ringgit-aware pricing notes. We update
            guides when vendors change plans or when our benchmarks shift materially.
          </p>
        </div>
      </header>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
