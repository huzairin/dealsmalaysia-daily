import { ArticleCard, FeaturedArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Deals",
  description:
    "In-depth tech reviews, VPN and hosting comparisons, exclusive deals from Shopee and Lazada — curated for Malaysian readers.",
  openGraph: {
    title: "Reviews & Deals | DealsMY",
    description: "Expert reviews and unbiased recommendations for Malaysian tech buyers.",
  },
};

const categories = [
  { id: "all", label: "All Reviews", count: articles.length },
  { id: "vpn", label: "VPN", count: articles.filter(a => a.category.toLowerCase().includes("vpn")).length },
  { id: "hosting", label: "Hosting", count: articles.filter(a => a.category.toLowerCase().includes("hosting")).length },
  { id: "deals", label: "Deals", count: articles.filter(a => a.category.toLowerCase().includes("deal")).length },
];

export default function BlogPage() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand pt-8 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="section relative">
          {/* Header Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white/80">Updated Weekly</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert Reviews &
              <span className="block bg-gradient-to-r from-neon-cyan via-accent to-neon-purple bg-clip-text text-transparent">
                Unbiased Recommendations
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Hands-on testing, transparent methodology, and ringgit-focused insights. 
              We help Malaysians make smarter tech decisions.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{articles.length}+</p>
                  <p className="text-sm text-slate-400">In-depth Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-sm text-slate-400">Hours Testing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">MY</p>
                  <p className="text-sm text-slate-400">Local Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section -mt-10 relative z-10">
        <FeaturedArticleCard article={featuredArticle} />
      </section>

      {/* Category Filter & Articles */}
      <section className="section py-16">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-sm font-medium text-slate-500 mr-2">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                cat.id === "all"
                  ? "bg-gradient-to-r from-accent to-neon-purple text-white shadow-lg shadow-accent/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
              <span className={`px-2 py-0.5 rounded-md text-xs ${
                cat.id === "all" ? "bg-white/20" : "bg-slate-200"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Latest Reviews
            </h2>
            <p className="mt-2 text-slate-500">
              Explore our most recent in-depth analysis and comparisons
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 rounded-lg bg-accent text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Load More */}
        {articles.length > 6 && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <span>Load More Reviews</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="section pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-slate-800 to-slate-900 px-8 py-14 sm:px-14 sm:py-20">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-neon-purple/20 rounded-full blur-3xl" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <svg className="w-8 h-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Never Miss a Deal
            </h3>
            <p className="mt-4 text-lg text-slate-300">
              Get weekly updates on the best tech deals and new reviews, tailored for Malaysian readers.
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-neon-purple shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-sm text-slate-400">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
