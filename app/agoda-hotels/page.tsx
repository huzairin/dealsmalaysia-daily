import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agoda Hotels Malaysia - Staycation Deals & Luxury for Less",
  description: "Find the best Agoda hotel deals in Malaysia. From budget stays to luxury resorts, we curate verified discounts for Malaysian travelers.",
  alternates: { canonical: siteUrl + "/agoda-hotels/" },
  openGraph: {
    title: "Agoda Hotels Malaysia | Deals Malaysia Daily",
    description: "Staycation guides, luxury hotel deals, and Agoda booking tips for Malaysians.",
    url: siteUrl + "/agoda-hotels/",
  },
};

const featuredHotels = [
  {
    name: "The Ritz-Carlton Kuala Lumpur",
    location: "Kuala Lumpur",
    stars: 5,
    originalPrice: "RM850",
    agodaPrice: "RM612",
    savings: "28%",
    rating: 4.7,
    reviews: 2340,
    badge: "Luxury",
    image: "🏨",
    amenities: ["Spa", "Pool", "Gym", "Restaurant"],
  },
  {
    name: "G Hotel Kelawai",
    location: "Penang",
    stars: 4,
    originalPrice: "RM380",
    agodaPrice: "RM285",
    savings: "25%",
    rating: 4.5,
    reviews: 1890,
    badge: "Top Rated",
    image: "🏨",
    amenities: ["Rooftop Bar", "Pool", "Free WiFi"],
  },
  {
    name: "The Westin Langkawi Resort",
    location: "Langkawi",
    stars: 5,
    originalPrice: "RM650",
    agodaPrice: "RM488",
    savings: "25%",
    rating: 4.6,
    reviews: 3420,
    badge: "Beachfront",
    image: "🏖️",
    amenities: ["Private Beach", "Pool", "Spa"],
  },
  {
    name: "M Suites 16",
    location: "Johor Bahru",
    stars: 3,
    originalPrice: "RM180",
    agodaPrice: "RM135",
    savings: "25%",
    rating: 4.3,
    reviews: 890,
    badge: "Budget Pick",
    image: "🏠",
    amenities: ["Kitchen", "Free Parking", "WiFi"],
  },
];

const destinations = [
  { name: "Kuala Lumpur", hotels: "2,400+", icon: "🏙️", href: "#" },
  { name: "Penang", hotels: "1,800+", icon: "🏛️", href: "#" },
  { name: "Langkawi", hotels: "650+", icon: "🏝️", href: "#" },
  { name: "Johor Bahru", hotels: "1,200+", icon: "🏘️", href: "#" },
  { name: "Malacca", hotels: "900+", icon: "🏰", href: "#" },
  { name: "Cameron Highlands", hotels: "400+", icon: "🏔️", href: "#" },
];

const agodaTips = [
  "Use code AGODA10 for extra 10% off",
  "Members get instant 10% off + Genius benefits",
  "Book 7+ days ahead for best rates",
  "Check 'Free Cancellation' filter for flexibility",
  "Compare with Shopee prices before booking",
  "Look for 'AgodaCash' promotions",
];

const staycationIdeas = [
  {
    title: "KL City Weekend",
    budget: "RM300-500",
    duration: "2 nights",
    includes: ["Boutique hotel", "Twin Towers view", "BBQ dinner"],
    icon: "🏙️",
  },
  {
    title: "Penang Heritage Stay",
    budget: "RM250-400",
    duration: "3 nights",
    includes: ["George Town hotel", "Street food tour", "UNESCO sites"],
    icon: "🏛️",
  },
  {
    title: "Langkawi Beach Getaway",
    budget: "RM500-800",
    duration: "3 nights",
    includes: ["4-star resort", "Beach access", "Island hopping"],
    icon: "🏖️",
  },
  {
    title: "Cameron Highlands Retreat",
    budget: "RM200-350",
    duration: "2 nights",
    includes: ["Bungalow stay", "Tea plantation visit", "Strawberry farm"],
    icon: "🏔️",
  },
];

export default function AgodaHotelsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-rose-600 to-pink-600 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }} />
        </div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl" />
        
        <div className="relative section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span>🏨</span>
                <span>Official Agoda Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Agoda Hotels
              </h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">
                Luxury for less, staycation deals, and verified hotel discounts. 
                We find the best Agoda rates so you don&apos;t have to.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <span className="text-lg">🔍</span>
                  Search Hotels
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
                  <span className="text-8xl">🏨</span>
                  <h2 className="mt-4 text-2xl font-bold text-white">Agoda</h2>
                  <p className="text-white/70">Hotels & Stays</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">4.5M+</p>
                    <p className="text-sm text-white/70">Properties</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">200+</p>
                    <p className="text-sm text-white/70">Countries</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-white">30M+</p>
                    <p className="text-sm text-white/70">Reviews</p>
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

      {/* Popular Destinations */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-orange-200 transition-all text-center"
            >
              <span className="text-3xl">{dest.icon}</span>
              <h3 className="mt-3 font-semibold text-brand group-hover:text-orange-600 transition-colors">
                {dest.name}
              </h3>
              <p className="text-xs text-slate-500">{dest.hotels} hotels</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brand">Featured Hotel Deals</h2>
              <p className="mt-2 text-slate-500">Handpicked savings on quality stays</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredHotels.map((hotel) => (
              <a
                key={hotel.name}
                href="#"
                className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-orange-50 to-rose-50 flex items-center justify-center text-7xl shrink-0">
                  {hotel.image}
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 text-xs font-bold text-orange-700 bg-orange-100 rounded-full">
                          {hotel.badge}
                        </span>
                        <span className="text-sm text-slate-400">{hotel.stars}★</span>
                      </div>
                      <h3 className="mt-2 font-bold text-brand group-hover:text-orange-600 transition-colors">
                        {hotel.name}
                      </h3>
                      <p className="text-sm text-slate-500">{hotel.location}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-bold text-neon-green bg-green-100 rounded-full">
                      -{hotel.savings}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-amber-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {hotel.rating} ({hotel.reviews.toLocaleString()})
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hotel.amenities.map((a) => (
                      <span key={a} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-orange-600">RM{hotel.agodaPrice}</span>
                      <span className="text-sm text-slate-400 line-through ml-2">RM{hotel.originalPrice}</span>
                    </div>
                    <span className="text-xs text-slate-400">per night</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Staycation Ideas */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Staycation Ideas</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {staycationIdeas.map((idea) => (
            <div key={idea.title} className="p-6 bg-white rounded-2xl border border-slate-200">
              <span className="text-4xl">{idea.icon}</span>
              <h3 className="mt-4 font-bold text-brand">{idea.title}</h3>
              <div className="mt-2 flex items-center gap-3 text-sm text-slate-500">
                <span>{idea.duration}</span>
                <span>•</span>
                <span className="font-medium text-orange-600">{idea.budget}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {idea.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-neon-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Agoda Tips */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100">
              <span className="text-xl">💡</span>
            </div>
            <div>
<h2 className="text-2xl font-bold text-brand">Agoda Pro Tips</h2>
              <p className="text-slate-500">Maximize your savings on every booking</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agodaTips.map((tip, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTP Stacking Reminder */}
      <section className="section py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Stack Your Savings</h2>
              <p className="mt-4 text-white/80">
                Combine Agoda hotel booking with Shopee voucher codes for maximum savings. 
                We saved RM180 on a recent KL weekend using this strategy!
              </p>
            </div>
            <div className="text-center lg:text-right">
              <Link
                href="/travel-hacks/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                Learn OTP Stacking →
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
          <Link href="/klook-activities/" className="text-sm text-accent hover:underline">
            Klook Activities →
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> We earn a commission when you book through Agoda using our links. 
          Prices shown are indicative and may vary. All bookings are subject to Agoda&apos;s terms and conditions.
        </div>
      </section>
    </>
  );
}
