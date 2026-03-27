import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Hacks Malaysia - Klook & Agoda Tips",
  description: "Maximize your travel budget with Klook activities, Agoda hotel deals, and OTP stacking strategies for Malaysian travelers.",
  alternates: { canonical: siteUrl + "/travel-hacks/" },
  openGraph: {
    title: "Travel Hacks Malaysia | Deals Malaysia Daily",
    description: "Budget travel tips, OTP stacking strategies, and curated activities for Malaysian travelers.",
    url: siteUrl + "/travel-hacks/",
  },
};

const popularDestinations = [
  { name: "Langkawi", country: "Malaysia", type: "Beach", price: "From RM150", icon: "🏝️", href: "#" },
  { name: "Penang", country: "Malaysia", type: "Heritage", price: "From RM80", icon: "🏛️", href: "#" },
  { name: "Bangkok", country: "Thailand", type: "City", price: "From RM299", icon: "🏯", href: "#" },
  { name: "Singapore", country: "Singapore", type: "City", price: "From RM199", icon: "🏙️", href: "#" },
  { name: "Bali", country: "Indonesia", type: "Tropical", price: "From RM399", icon: "🌴", href: "#" },
  { name: "Tokyo", country: "Japan", type: "Culture", price: "From RM899", icon: "🗼", href: "#" },
];

const travelHacks = [
  {
    title: "Stack Your OTPs",
    description: "Combine Agoda + Klook + Shopee vouchers for the same trip. We saved 35% on a KL staycation this way.",
    icon: "💰",
    tip: "Always check Shopee for Agoda discount codes before booking",
  },
  {
    title: "Book Mid-Week",
    description: "Hotel prices drop 15-25% on Tuesdays and Wednesdays. Same quality, lower price.",
    icon: "📅",
    tip: "Airbnb prices also follow this pattern",
  },
  {
    title: "Use Klook for Attractions",
    description: "Klook tickets are often 10-20% cheaper than buying on-site. Plus skip-the-line access.",
    icon: "🎫",
    tip: "Book at least 24 hours in advance for best prices",
  },
  {
    title: "Travel Insurance via Shopee",
    description: "Allianz travel insurance available on Shopee. Sometimes cheaper than direct booking.",
    icon: "🛡️",
    tip: "Check coverage limits before buying",
  },
  {
    title: "Airport Lounge Access",
    description: "Many credit cards offer free lounge access. Great for early flights or delays.",
    icon: "✈️",
    tip: "CIMB and Maybank cards have good lounge benefits",
  },
  {
    title: "Local eSIM > Roaming",
    description: "Buy a local eSIM via Klook before you travel. Usually RM15-30 for 7 days unlimited data.",
    icon: "📱",
    tip: "Airalo and Nomad are popular options",
  },
];

const budgetCategories = [
  { name: "Under RM200", desc: "Weekend getaways", icon: "🎒", href: "#" },
  { name: "RM200-500", desc: "3-4 day trips", icon: "🛤️", href: "#" },
  { name: "RM500-1000", desc: "Premium escapes", icon: "🌟", href: "#" },
  { name: "RM1000+", desc: "Luxury stays", icon: "💎", href: "#" },
];

export default function TravelHacksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-600 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }} />
        </div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        
        <div className="relative section">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span>✈️</span>
              <span>Travel Smarter</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Travel Hacks for Malaysians
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              OTP stacking, Klook activity tips, and Agoda hotel deals. 
              We test every strategy so you travel better for less.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/klook-activities/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <span>🎫</span>
                Klook Activities
              </Link>
              <Link
                href="/agoda-hotels/"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all"
              >
                <span>🏨</span>
                Agoda Hotels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand">Popular Destinations</h2>
            <p className="mt-2 text-slate-500">From local getaways to regional adventures</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{dest.icon}</span>
                <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                  {dest.type}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand group-hover:text-accent transition-colors">
                {dest.name}
              </h3>
              <p className="text-sm text-slate-500">{dest.country}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">Packages from</span>
                <span className="font-bold text-emerald-600">{dest.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Travel Hacks Grid */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-brand">Pro Travel Hacks</h2>
            <p className="mt-4 text-slate-600">
              Tested strategies to save money and travel better
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelHacks.map((hack) => (
              <div key={hack.title} className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-4xl">{hack.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-brand">{hack.title}</h3>
                <p className="mt-2 text-slate-500 text-sm">{hack.description}</p>
                <div className="mt-4 p-3 bg-emerald-50 rounded-xl">
                  <p className="text-xs text-emerald-700 font-medium">
                    <span className="font-bold">💡 Tip:</span> {hack.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Categories */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Shop by Budget</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {budgetCategories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <span className="text-4xl">{cat.icon}</span>
              <h3 className="mt-3 font-bold text-brand group-hover:text-emerald-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-slate-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* OTP Stacking Guide */}
      <section className="bg-brand py-16">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">OTP Stacking Guide</h2>
              <p className="mt-4 text-slate-300">
                One-Trip-Plan: Stack multiple platforms for maximum savings on a single trip.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Book flights via AirAsia or Booking.com",
                  "Find Agoda hotel with Shopee voucher code",
                  "Buy Klook tickets for attractions",
                  "Use Shopee Pay later for cashback",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-white/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white">Example: KL Weekend</h3>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-white/80">
                  <span>Hotel (Agoda + Shopee code)</span>
                  <span className="font-medium">-RM180</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>KLIA Express (Klook)</span>
                  <span className="font-medium">-RM15</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Petronas tickets (Klook)</span>
                  <span className="font-medium">-RM20</span>
                </div>
                <div className="border-t border-white/20 pt-4 flex justify-between text-lg font-bold text-neon-green">
                  <span>Total Savings</span>
                  <span>~RM215</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Explore More</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/klook-activities/"
            className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <span className="text-3xl">🎫</span>
            <h3 className="mt-4 font-bold text-brand">Klook Activities</h3>
            <p className="mt-2 text-sm text-slate-500">Top attractions and hidden gems</p>
          </Link>
          <Link
            href="/agoda-hotels/"
            className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <span className="text-3xl">🏨</span>
            <h3 className="mt-4 font-bold text-brand">Agoda Hotels</h3>
            <p className="mt-2 text-sm text-slate-500">Staycation guides and luxury deals</p>
          </Link>
          <Link
            href="/nordvpn-review/"
            className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <span className="text-3xl">🛡️</span>
            <h3 className="mt-4 font-bold text-brand">VPN for Travel</h3>
            <p className="mt-2 text-sm text-slate-500">Secure your booking data abroad</p>
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> We earn commissions from Klook, Agoda, and other travel partners 
          when you book through our links. Our recommendations are based on actual user experience, not payment.
        </div>
      </section>
    </>
  );
}
