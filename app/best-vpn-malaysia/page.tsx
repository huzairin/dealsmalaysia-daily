import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best VPN Malaysia 2026 - Top Picks for Privacy & Streaming",
  description: "We tested 12 VPNs from Kuala Lumpur on Unifi and Time fibre. NordVPN, ExpressVPN, and Surfshark ranked by speed, streaming, and privacy for Malaysian users.",
  alternates: { canonical: siteUrl + "/best-vpn-malaysia/" },
  openGraph: {
    title: "Best VPN Malaysia 2026 | Deals Malaysia Daily",
    description: "Independent VPN testing from KL. Speed tests, Netflix unblocking, and privacy analysis for Malaysian readers.",
    url: siteUrl + "/best-vpn-malaysia/",
  },
};

const vpnProviders = [
  {
    name: "NordVPN",
    logo: "🛡️",
    rating: 4.8,
    speed: "Fast",
    streaming: "Excellent",
    privacy: "5/5",
    price: "RM16.19/mo",
    originalPrice: "RM53.97/mo",
    discount: "70%",
    highlight: "Best Overall",
    color: "from-blue-600 to-indigo-700",
    features: ["Double VPN", "Threat Protection", "6 devices", "24/7 Support"],
    affiliateUrl: "https://go.nordvpn.net/SH9Tz",
    reviewSlug: "/nordvpn-review/",
  },
  {
    name: "ExpressVPN",
    logo: "⚡",
    rating: 4.7,
    speed: "Very Fast",
    streaming: "Excellent",
    privacy: "5/5",
    price: "RM42.12/mo",
    originalPrice: "RM84.24/mo",
    discount: "50%",
    highlight: "Fastest Speeds",
    color: "from-red-600 to-orange-600",
    features: ["Lightway Protocol", "TrustedServer", "5 devices", "Split Tunneling"],
    affiliateUrl: "#",
    reviewSlug: "#",
  },
  {
    name: "Surfshark",
    logo: "🦈",
    rating: 4.5,
    speed: "Fast",
    streaming: "Good",
    privacy: "5/5",
    price: "RM9.12/mo",
    originalPrice: "RM60.79/mo",
    discount: "85%",
    highlight: "Best Value",
    color: "from-cyan-600 to-blue-600",
    features: ["Unlimited Devices", "CleanWeb", "Whitelister", "NoBorders Mode"],
    affiliateUrl: "#",
    reviewSlug: "#",
  },
];

const whyUseVPN = [
  {
    title: "Streaming Unblocked",
    description: "Access Netflix US, Disney+, BBC iPlayer, and more from Malaysia. We test monthly.",
    icon: "📺",
  },
  {
    title: "Privacy Protected",
    description: "Your ISP can't see your activity. Essential on public WiFi at cafes and malls.",
    icon: "🔒",
  },
  {
    title: "Gaming Low Ping",
    description: "Connect to game servers with less latency using nearby Singapore or Hong Kong nodes.",
    icon: "🎮",
  },
  {
    title: "Work Securely",
    description: "Access company resources remotely. Many Malaysian companies now require VPN.",
    icon: "💼",
  },
];

const malaysiaPrivacyFacts = [
  { fact: "Internet surveillance", status: "Known concern", detail: "Sunda Ci has logged user data when requested" },
  { fact: "Data retention", status: "6 years", detail: "Telcos must retain metadata per MCMC regulations" },
  { fact: "P2P file sharing", status: "Restricted", detail: "Copyrighted torrenting monitored by rightsholders" },
  { fact: "Social media", status: "Accessible", detail: "No blocks on major platforms like in some neighboring countries" },
];

export default function BestVPNMalaysiaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }} />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl" />
        
        <div className="relative section">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Updated March 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Best VPN for Malaysia
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Tested from KL and Penang on real Unifi and Time connections. 
              We rank VPNs by streaming reliability, speed, and privacy features that matter to Malaysian users.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://go.nordvpn.net/SH9Tz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan text-slate-900 font-bold rounded-xl shadow-lg shadow-neon-cyan/25 hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <span className="text-lg">🛡️</span>
                Get NordVPN - 70% Off
              </a>
              <Link
                href="/nordvpn-review/"
                className="inline-flex items-center gap-2 px-6 py-4 text-white font-semibold rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all"
              >
                Read Full Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use VPN in Malaysia */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-brand">Why Malaysians Need a VPN</h2>
            <p className="mt-4 text-slate-600">
              It&apos;s not just about privacy — VPNs unlock content and improve your internet experience.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUseVPN.map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-brand">{item.title}</h3>
                <p className="mt-2 text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VPN Comparison Table */}
      <section className="section py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand">VPN Comparison</h2>
            <p className="mt-2 text-slate-500">Prices based on 2-year plans. Tested from Malaysia.</p>
          </div>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {vpnProviders.map((vpn) => (
            <div
              key={vpn.name}
              className={`relative bg-white rounded-2xl border-2 overflow-hidden ${
                vpn.highlight === "Best Overall" ? "border-accent shadow-xl" : "border-slate-200"
              }`}
            >
              {vpn.highlight === "Best Overall" && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-bold">
                  ★ {vpn.highlight}
                </div>
              )}
              
              <div className={`p-8 bg-gradient-to-br ${vpn.color}`}>
                <div className="flex items-center justify-between">
                  <span className="text-5xl">{vpn.logo}</span>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-white">
                      <svg className="w-5 h-5 text-amber-300 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span className="font-bold">{vpn.rating}</span>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{vpn.name}</h3>
              </div>
              
              <div className="p-6">
                <div className="text-center">
                  <span className="text-3xl font-bold text-neon-orange">{vpn.price}</span>
                  <span className="text-sm text-slate-400 line-through ml-2">{vpn.originalPrice}</span>
                  <p className="text-sm text-neon-green font-medium mt-1">Save {vpn.discount}</p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Speed</span>
                    <span className="font-medium text-brand">{vpn.speed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Streaming</span>
                    <span className="font-medium text-brand">{vpn.streaming}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Privacy</span>
                    <span className="font-medium text-brand">{vpn.privacy}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {vpn.features.map((f) => (
                    <span key={f} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 space-y-3">
                  <a
                    href={vpn.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 text-center font-semibold rounded-xl transition-all ${
                      vpn.highlight === "Best Overall"
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-brand text-white hover:bg-brand-light"
                    }`}
                  >
                    Get {vpn.name}
                  </a>
                  {vpn.reviewSlug !== "#" && (
                    <Link
                      href={vpn.reviewSlug}
                      className="block w-full py-3 text-center font-medium text-slate-600 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      Read Review →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy Facts */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand">Privacy in Malaysia</h2>
              <p className="text-slate-500">What you should know before choosing a VPN</p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {malaysiaPrivacyFacts.map((item) => (
              <div key={item.fact} className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-brand">{item.fact}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.detail}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Test */}
      <section className="section py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand">How We Test VPNs</h2>
          <p className="mt-4 text-slate-600">
            Our testing methodology for Malaysian users
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-blue-100 text-blue-600 text-2xl font-bold">
              1
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand">Speed Tests</h3>
            <p className="mt-2 text-slate-500">
              Monthly tests from KL and Penang using Speedtest by Ookla on Unifi, Time, and Celcom.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-purple-100 text-purple-600 text-2xl font-bold">
              2
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand">Streaming Tests</h3>
            <p className="mt-2 text-slate-500">
              Netflix, Disney+ Hotstar, BBC iPlayer, and more — checked weekly from Malaysian IPs.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-green-100 text-green-600 text-2xl font-bold">
              3
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand">Privacy Audit</h3>
            <p className="mt-2 text-slate-500">
              We read privacy policies, check for leaks, and verify no-log claims through public records.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/methodology/"
            className="inline-flex items-center gap-2 px-6 py-3 text-brand font-semibold rounded-xl border-2 border-brand hover:bg-brand hover:text-white transition-colors"
          >
            View Full Methodology
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <h2 className="text-2xl font-bold text-brand mb-8">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/nordvpn-review/"
              className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-brand">NordVPN Malaysia Review 2026</h3>
              <p className="mt-2 text-sm text-slate-500">Deep dive: speeds, servers, streaming tests</p>
            </Link>
            <Link
              href="/blog/password-managers-malaysia/"
              className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-brand">Password Managers Malaysia</h3>
              <p className="mt-2 text-sm text-slate-500">1Password vs Bitwarden vs NordPass</p>
            </Link>
            <Link
              href="/blog/"
              className="p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-brand">All VPN Reviews</h3>
              <p className="mt-2 text-sm text-slate-500">Browse our complete review library</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> We earn commissions when you purchase through links marked with 🛡️. 
          This does not affect our rankings. All VPNs are tested independently and rankings are based on performance data.
        </div>
      </section>
    </>
  );
}
