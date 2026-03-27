import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klook Activities Malaysia - Top Attractions & Tickets",
  description: "Discover the best Klook activities in Malaysia and beyond. From theme parks to hidden gems, find verified tickets and skip-the-line access.",
  alternates: { canonical: siteUrl + "/klook-activities/" },
  openGraph: {
    title: "Klook Activities Malaysia | Deals Malaysia Daily",
    description: "Top Klook attractions, verified tickets, and insider tips for Malaysian travelers.",
    url: siteUrl + "/klook-activities/",
  },
};

const malaysiaActivities = [
  {
    name: "Genting Highlands Theme Park",
    location: "Pahang",
    originalPrice: "RM160",
    klookPrice: "RM125",
    savings: "22%",
    rating: 4.5,
    reviews: 2340,
    badge: "Top Seller",
    image: "🎢",
    features: ["Skip-the-line", "Transport included"],
  },
  {
    name: "Langkawi SkyBridge & Cable Car",
    location: "Kedah",
    originalPrice: "RM95",
    klookPrice: "RM78",
    savings: "18%",
    rating: 4.7,
    reviews: 4120,
    badge: "Best Views",
    image: "🌉",
    features: ["SkyCab", "SkyBox available"],
  },
  {
    name: "KL Tower Observation Deck",
    location: "Kuala Lumpur",
    originalPrice: "RM65",
    klookPrice: "RM49",
    savings: "25%",
    rating: 4.4,
    reviews: 1890,
    badge: "City Icon",
    image: "🗼",
    features: ["360° View", "Skip-the-line"],
  },
  {
    name: "Petronas Twin Towers",
    location: "Kuala Lumpur",
    originalPrice: "RM85",
    klookPrice: "RM68",
    savings: "20%",
    rating: 4.6,
    reviews: 5670,
    badge: "Must Visit",
    image: "🏙️",
    features: ["86th Floor", "Sky Bridge"],
  },
  {
    name: "Sunway Lagoon",
    location: "Selangor",
    originalPrice: "RM199",
    klookPrice: "RM155",
    savings: "22%",
    rating: 4.5,
    reviews: 3230,
    badge: "Family Fun",
    image: "🌊",
    features: ["All Parks", "Meal included"],
  },
  {
    name: "Kuala Lumpur Bird Park",
    location: "Kuala Lumpur",
    originalPrice: "RM60",
    klookPrice: "RM45",
    savings: "25%",
    rating: 4.3,
    reviews: 1450,
    badge: "Nature",
    image: "🦜",
    features: ["Feed sessions", "Guided tour"],
  },
];

const internationalActivities = [
  { name: "Universal Studios Singapore", location: "Singapore", price: "From RM199", image: "🎠" },
  { name: "Tokyo Disneyland", location: "Japan", price: "From RM350", image: "🏰" },
  { name: "Bali ATV Adventure", location: "Indonesia", price: "From RM180", image: "🏍️" },
  { name: "Bangkok Grand Palace", location: "Thailand", price: "From RM85", image: "🏛️" },
];

const categories = [
  { name: "Theme Parks", icon: "🎢", href: "#" },
  { name: "Nature & Adventure", icon: "🏔️", href: "#" },
  { name: "City Tours", icon: "🏙️", href: "#" },
  { name: "Water Sports", icon: "🏄", href: "#" },
  { name: "Food & Dining", icon: "🍜", href: "#" },
  { name: "Spa & Wellness", icon: "💆", href: "#" },
];

const klookTips = [
  "Book at least 1 day ahead for best prices",
  "Look for 'Klook Exclusive' badges for extra savings",
  "Use code KLOOK10 for 10% off first order",
  "Check free cancellation policy before booking",
  "Save your ticket QR code to phone gallery",
];

export default function KlookActivitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-pink-600 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }} />
        </div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        
        <div className="relative section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span>🎫</span>
                <span>Official Klook Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Klook Activities
              </h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">
                Skip-the-line tickets, exclusive deals, and verified activities. 
                We curate the best Klook offers for Malaysian travelers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <span className="text-lg">🎫</span>
                  Browse Klook Activities
                </a>
                <Link
                  href="/travel-hacks/"
                  className="inline-flex items-center gap-2 px-6 py-4 text-white font-semibold rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all"
                >
                  Travel Hacks Guide
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <div className="text-center">
                  <span className="text-8xl">🎫</span>
                  <h2 className="mt-4 text-2xl font-bold text-white">Klook</h2>
                  <p className="text-white/70">Activities & Tickets</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">10M+</p>
                    <p className="text-sm text-white/70">Bookings</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">400+</p>
                    <p className="text-sm text-white/70">Cities</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">12</p>
                    <p className="text-sm text-white/70">Languages</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-sm text-white/70">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Browse by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-purple-200 transition-all"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs font-medium text-brand text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Malaysia Top Activities */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brand">Top Activities in Malaysia</h2>
              <p className="mt-2 text-slate-500">Save up to 25% vs buying on-site</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {malaysiaActivities.map((activity) => (
              <a
                key={activity.name}
                href="#"
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center text-7xl">
                    {activity.image}
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 text-xs font-bold uppercase text-white bg-purple-600 rounded-full">
                      {activity.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 text-xs font-bold text-purple-700 bg-white rounded-full">
                      -{activity.savings}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {activity.location}
                  </div>
                  <h3 className="mt-2 font-semibold text-brand group-hover:text-purple-600 transition-colors">
                    {activity.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1 text-amber-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {activity.rating}
                    </span>
                    <span className="text-slate-400">({activity.reviews.toLocaleString()})</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-purple-600">RM{activity.klookPrice}</span>
                      <span className="text-sm text-slate-400 line-through ml-2">RM{activity.originalPrice}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activity.features.map((f) => (
                      <span key={f} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* International Activities */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Popular International</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {internationalActivities.map((activity) => (
            <Link
              key={activity.name}
              href="#"
              className="group p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{activity.image}</span>
                <div>
                  <h3 className="font-semibold text-brand group-hover:text-purple-600 transition-colors">
                    {activity.name}
                  </h3>
                  <p className="text-sm text-slate-500">{activity.location}</p>
                </div>
              </div>
              <p className="mt-3 font-bold text-purple-600">{activity.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Klook Tips */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand">Klook Pro Tips</h2>
              <p className="text-slate-500">Get the most out of every booking</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {klookTips.map((tip, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel VPN Section */}
      <section className="section py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Protect Your Travel Bookings</h2>
              <p className="mt-4 text-white/80">
                Use NordVPN while booking travel to protect your data and sometimes find different prices.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <Link
                href="/nordvpn-review/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                <span>🛡️</span>
                Read NordVPN Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/travel-hacks/" className="text-sm text-accent hover:underline">
            ← Travel Hacks Guide
          </Link>
          <Link href="/agoda-hotels/" className="text-sm text-accent hover:underline">
            Agoda Hotels →
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> We earn a commission when you book through Klook using our links. 
          Prices shown are indicative and may vary. All bookings are subject to Klook&apos;s terms and conditions.
        </div>
      </section>
    </>
  );
}
