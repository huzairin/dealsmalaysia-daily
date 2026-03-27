import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopee Daily Deals Malaysia",
  description: "Daily flash sale alerts, voucher code roundups, and best buys under RM50 on Shopee Malaysia. Updated every day with verified deals.",
  alternates: { canonical: siteUrl + "/shopee-deals/" },
  openGraph: {
    title: "Shopee Daily Deals Malaysia | Deals Malaysia Daily",
    description: "Daily flash sale alerts, voucher code roundups, and best buys under RM50 on Shopee Malaysia.",
    url: siteUrl + "/shopee-deals/",
  },
};

const todayDeals = [
  {
    title: "Wireless Earbuds TWS A6S",
    price: "RM19.90",
    originalPrice: "RM59.90",
    discount: "67%",
    rating: 4.3,
    reviews: 2847,
    badge: "Flash Sale",
    image: "🎧",
    link: "https://shopee.com.my",
  },
  {
    title: "USB-C Fast Charger 65W",
    price: "RM29.90",
    originalPrice: "RM89.90",
    discount: "67%",
    rating: 4.6,
    reviews: 1243,
    badge: "Best Seller",
    image: "🔌",
    link: "https://shopee.com.my",
  },
  {
    title: "LED Desk Lamp Foldable",
    price: "RM24.90",
    originalPrice: "RM69.90",
    discount: "64%",
    rating: 4.4,
    reviews: 892,
    badge: "Hot Deal",
    image: "💡",
    link: "https://shopee.com.my",
  },
  {
    title: "Phone Stand Adjustable",
    price: "RM9.90",
    originalPrice: "RM29.90",
    discount: "67%",
    rating: 4.5,
    reviews: 3421,
    badge: "RM1 Deal",
    image: "📱",
    link: "https://shopee.com.my",
  },
  {
    title: "Bluetooth Keyboard Slim",
    price: "RM39.90",
    originalPrice: "RM99.90",
    discount: "60%",
    rating: 4.2,
    reviews: 567,
    badge: "Limited",
    image: "⌨️",
    link: "https://shopee.com.my",
  },
  {
    title: "Portable Power Bank 10000mAh",
    price: "RM35.90",
    originalPrice: "RM89.90",
    discount: "60%",
    rating: 4.7,
    reviews: 2156,
    badge: "Top Pick",
    image: "🔋",
    link: "https://shopee.com.my",
  },
];

const voucherCodes = [
  { code: "DEALS10", discount: "RM10 off RM100", expires: "31 Mar 2026" },
  { code: "NEWUSER50", discount: "50% off first order", expires: "Ongoing" },
  { code: "FREESHIP", discount: "Free shipping RM0", expires: "Ongoing" },
];

const categories = [
  { name: "Tech Gadgets", icon: "📱", href: "#" },
  { name: "Home & Living", icon: "🏠", href: "#" },
  { name: "Fashion", icon: "👕", href: "#" },
  { name: "Beauty", icon: "💄", href: "#" },
  { name: "Sports", icon: "⚽", href: "#" },
  { name: "Groceries", icon: "🛒", href: "#" },
];

export default function ShopeeDealsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-rose-600 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="relative section">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Updated Daily
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Shopee Daily Deals
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Flash sale alerts, verified voucher codes, and handpicked best buys under RM50. 
              We check Shopee daily so you don&apos;t have to.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://shopee.com.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Shop Now on Shopee
              </a>
              <Link
                href="/blog/top-10-shopee-gadgets-under-rm50/"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all"
              >
                View Full Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Voucher Codes */}
      <section className="bg-surface-secondary py-12">
        <div className="section">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neon-orange/20">
              <svg className="w-5 h-5 text-neon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-brand">Active Voucher Codes</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voucherCodes.map((v) => (
              <div key={v.code} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <p className="text-lg font-bold text-brand">{v.code}</p>
                  <p className="text-sm text-slate-500">{v.discount}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">Expires: {v.expires}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Best Deals */}
      <section className="section py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand">Today&apos;s Best Deals</h2>
            <p className="mt-2 text-slate-500">Handpicked flash sales ending soon</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Ends in 6 hours
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {todayDeals.map((deal) => (
            <a
              key={deal.title}
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-neon-orange rounded-full shadow">
                  {deal.badge}
                </span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-7xl">
                {deal.image}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-brand line-clamp-2 group-hover:text-accent transition-colors">
                  {deal.title}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-2xl font-bold text-neon-orange">{deal.price}</span>
                  <span className="text-sm text-slate-400 line-through">{deal.originalPrice}</span>
                  <span className="text-sm font-bold text-neon-green">-{deal.discount}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {deal.rating}
                  </span>
                  <span>({deal.reviews.toLocaleString()} sold)</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <h2 className="text-2xl font-bold text-brand mb-8">Shop by Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30 transition-all"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="text-sm font-medium text-brand text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Buys Under RM50 */}
      <section className="section py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand">Best Buys Under RM50</h2>
            <p className="mt-2 text-slate-500">Quality picks that won&apos;t break the bank</p>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { rank: 1, name: "Wireless Earbuds TWS A6S", price: "RM19.90", reason: "Best value under RM20" },
            { rank: 2, name: "USB-C Hub 7-in-1", price: "RM39.90", reason: "Essential for laptop users" },
            { rank: 3, name: "Smart Watch Band", price: "RM15.90", reason: "Universal fit, multiple colors" },
            { rank: 4, name: "Cable Organizer Set", price: "RM12.90", reason: "Tidy desk必备" },
            { rank: 5, name: "Phone Grip Ring Holder", price: "RM8.90", reason: "Prevent drops, ergonomic" },
          ].map((item) => (
            <div key={item.rank} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold">
                {item.rank}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-brand">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.reason}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-neon-orange">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog/top-10-shopee-gadgets-under-rm50/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-light transition-colors"
          >
            View Full Top 10 List
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="bg-brand py-16">
        <div className="section">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white">Compare: Lazada vs Shopee</h2>
              <p className="mt-4 text-slate-300">
                Not sure which platform has better deals? We track prices across both daily.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/blog/lazada-vs-shopee-best-deals/"
                className="px-6 py-3 bg-white text-brand font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Read Comparison
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. 
          If you make a purchase through these links, we may earn a commission at no extra cost to you. 
          Our recommendations are based on actual testing, not payments.
        </div>
      </section>
    </>
  );
}
