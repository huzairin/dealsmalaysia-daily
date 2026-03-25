import Link from "next/link";
import { ArticleCard, FeaturedArticleCard } from "@/components/ArticleCard";
import { AuthorCredibilityStrip } from "@/components/AuthorCredibilityStrip";
import { HomeMethodology } from "@/components/HomeMethodology";
import { Newsletter } from "@/components/Newsletter";
import { TrustBar } from "@/components/TrustBar";
import { featuredArticles } from "@/lib/articles";
import { bestDealsToday, comparisonGuides } from "@/lib/home-sections";
import { siteUrl } from "@/lib/site";
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
    icon: "🛡️",
    blurb: "Privacy tools, password managers, and safe browsing.",
    href: "/blog/best-vpn-malaysia-2026/",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Web Hosting",
    icon: "🌐",
    blurb: "Speed tests and WordPress performance for Malaysian sites.",
    href: "/blog/best-web-hosting-malaysia-hostinger-vs-bluehost/",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Gadgets",
    icon: "📱",
    blurb: "Shopee and Lazada-tested gear that punches above its price.",
    href: "/blog/top-10-shopee-gadgets-under-rm50/",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Deals",
    icon: "🏷️",
    blurb: "Marketplace round-ups and voucher stacking strategies.",
    href: "/blog/lazada-vs-shopee-best-deals/",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Travel",
    icon: "✈️",
    blurb: "AirAsia, Grab, and OTAs — stacking promos efficiently.",
    href: "/blog/grab-airasia-travel-hacks-2026/",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "AI Tools",
    icon: "🤖",
    blurb: "Writing assistants and productivity tools for Malaysian SMEs.",
    href: "/blog/ai-writing-tools-malaysia-small-business/",
    color: "from-violet-500 to-purple-600",
  },
];

const featuredReview = featuredArticles[0];
const latestReviews = featuredArticles.slice(1, 4);
const moreArticles = featuredArticles.slice(4, 7);

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION - Modern Dark Gradient
          ============================================ */}
      <section className="relative overflow-hidden bg-brand min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light/50 to-brand" />
          
          {/* Animated Glow Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative section py-20 lg:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-neon-green animate-pulse" />
              <span>Trusted by 50,000+ Malaysian readers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Tech reviews that{" "}
              <span className="text-gradient">actually help</span>{" "}
              you decide
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Independent testing, Malaysian pricing context, and honest recommendations. 
              No sponsored rankings — just products that deliver real value.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog/"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-neon-purple shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.02]"
              >
                Explore Reviews
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/methodology/"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                How We Test
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">200+</p>
                  <p className="text-sm text-slate-400">Products Tested</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">MYR</p>
                  <p className="text-sm text-slate-400">Local Pricing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">KL</p>
                  <p className="text-sm text-slate-400">Based Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* ============================================
          FEATURED REVIEW
          ============================================ */}
      <section className="section py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="badge-accent">Featured</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand">Editor&apos;s Pick</h2>
          </div>
        </div>
        <FeaturedArticleCard article={featuredReview} />
      </section>

      {/* ============================================
          CATEGORIES GRID
          ============================================ */}
      <section className="bg-surface-secondary py-16 lg:py-24">
        <div className="section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand">Browse by Category</h2>
            <p className="mt-4 text-slate-600">
              Deep dives into VPN, hosting, gadgets, and deals — tested with Malaysian users in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 lg:p-8 border border-slate-200/60 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative">
                  <span className="text-3xl lg:text-4xl">{cat.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-brand group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{cat.blurb}</p>
                  
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          LATEST REVIEWS
          ============================================ */}
      <section className="section py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="badge-accent">Fresh Content</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand">Latest Reviews</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              In-depth tests and comparisons from our KL desk — updated when benchmarks shift.
            </p>
          </div>
          <Link href="/blog/" className="btn-outline shrink-0">
            View All Reviews
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestReviews.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* ============================================
          BEST DEALS SECTION
          ============================================ */}
      <section className="bg-brand py-16 lg:py-24">
        <div className="section">
          <div className="flexflex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-orange/20 text-neon-orange text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
                Hot Deals
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Best Deals Today</h2>
              <p className="mt-2 text-slate-400 max-w-xl">
                Curated picks we&apos;re actively tracking for Malaysian shoppers.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestDealsToday.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <span className="inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neon-cyan bg-neon-cyan/20 rounded-full">
                  {d.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{d.blurb}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                  View guide
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COMPARISON GUIDES
          ============================================ */}
      <section className="section py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="badge-accent">Head-to-Head</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand">Comparison Guides</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Side-by-side analysis built for readers who want a decision framework.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {comparisonGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 p-6 lg:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Comparison
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-brand group-hover:text-accent transition-colors">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-slate-500 line-clamp-2">{g.excerpt}</p>
                </div>
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-surface-secondary py-16 lg:py-24">
        <div className="section">
          <HomeMethodology />
        </div>
      </section>

      {/* Author Credibility */}
      <section className="section py-16 lg:py-24">
        <AuthorCredibilityStrip />
      </section>

      {/* More Articles */}
      <section className="bg-surface-secondary py-16 lg:py-24">
        <div className="section">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand">More Reviews</h2>
              <p className="mt-2 text-slate-600">Additional coverage from the same testing standards.</p>
            </div>
            <Link href="/blog/" className="btn-outline shrink-0">
              Browse All
            </Link>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section py-16 lg:py-24">
        <Newsletter />
      </section>
    </>
  );
}
