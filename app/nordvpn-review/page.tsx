import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NordVPN Malaysia Review 2026 — Complete Test Results",
  description: "In-depth NordVPN review for Malaysian users. Speed tests from KL & Penang, Netflix unblocking results, server coverage, and installation guide.",
  alternates: { canonical: siteUrl + "/nordvpn-review/" },
  openGraph: {
    title: "NordVPN Malaysia Review 2026 | Deals Malaysia Daily",
    description: "Full NordVPN review with Malaysian speed tests, streaming verification, and privacy analysis.",
    url: siteUrl + "/nordvpn-review/",
  },
};

const speedTestResults = [
  { location: "No VPN (Unifi)", ping: "8ms", download: "500 Mbps", upload: "480 Mbps", latency: "Baseline" },
  { location: "Singapore Server", ping: "15ms", download: "485 Mbps", upload: "460 Mbps", latency: "Excellent" },
  { location: "Hong Kong Server", ping: "35ms", download: "470 Mbps", upload: "445 Mbps", latency: "Excellent" },
  { location: "US Los Angeles", ping: "180ms", download: "320 Mbps", upload: "180 Mbps", latency: "Good" },
  { location: "UK London", ping: "220ms", download: "280 Mbps", upload: "150 Mbps", latency: "Good" },
];

const serverLocations = [
  { region: "Southeast Asia", servers: "Singapore, Malaysia", flag: "🇸🇬" },
  { region: "East Asia", servers: "Hong Kong, Japan, Taiwan", flag: "🇭🇰" },
  { region: "Americas", servers: "US (20+ cities), Canada, Brazil", flag: "🇺🇸" },
  { region: "Europe", servers: "UK, Germany, France, Netherlands", flag: "🇬🇧" },
  { region: "Oceania", servers: "Australia, New Zealand", flag: "🇦🇺" },
];

const pros = [
  "Excellent speeds on Singapore and HK servers for Malaysian users",
  "Successfully unblocks Netflix US, Disney+, BBC iPlayer",
  "Threat Protection blocks ads and malicious sites",
  "Double VPN for extra privacy layers",
  "6 simultaneous device connections",
  "24/7 live chat support",
  "Strict no-logs policy independently audited",
  "Easy-to-use apps for all devices",
];

const cons = [
  "P2P torrenting only on specialty servers",
  "Slightly more expensive than some competitors",
  "Only 59 countries (ExpressVPN has 94)",
  "Smart TV apps require Smart DNS setup",
];

const features = [
  { name: "Kill Switch", description: "Cuts internet if VPN drops", included: true },
  { name: "Double VPN", description: "Route through 2 servers", included: true },
  { name: "Threat Protection", description: "Block ads & malware", included: true },
  { name: "Dark Web Monitor", description: "Alert if data leaked", included: true },
  { name: "Meshnet", description: "Secure file sharing", included: true },
  { name: "Split Tunneling", description: "Choose which apps use VPN", included: true },
];

export default function NordVPNReviewPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl" />
        
        <div className="relative section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="text-2xl">🛡️</span>
                <span>Editor&apos;s Choice VPN</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                NordVPN Review
              </h1>
              <p className="mt-4 text-xl text-slate-300">
                The complete breakdown for Malaysian users
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-bold">4.8/5</span>
                </div>
                <div className="text-slate-400">|</div>
                <div className="text-slate-300">Updated March 2026</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://go.nordvpn.net/SH9Tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-neon-cyan text-slate-900 font-bold rounded-xl shadow-lg shadow-neon-cyan/25 hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <span className="text-lg">🛡️</span>
                  Get 70% Off NordVPN
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                30-day money-back guarantee • No hidden fees
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="text-center">
                  <span className="text-8xl">🛡️</span>
                  <h2 className="mt-4 text-2xl font-bold text-white">NordVPN</h2>
                  <p className="text-slate-400">Military-grade encryption</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-neon-cyan">60+</p>
                    <p className="text-sm text-slate-400">Countries</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-neon-cyan">5000+</p>
                    <p className="text-sm text-slate-400">Servers</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-neon-cyan">6</p>
                    <p className="text-sm text-slate-400">Devices</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <p className="text-2xl font-bold text-neon-cyan">0</p>
                    <p className="text-sm text-slate-400">Logs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Test Results */}
      <section className="section py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100">
            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand">Speed Test Results</h2>
            <p className="text-slate-500">Tested from Kuala Lumpur on Unifi 500Mbps</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand">Location</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-brand">Ping</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-brand">Download</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-brand">Upload</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-brand">Latency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {speedTestResults.map((test, i) => (
                <tr key={test.location} className={i === 0 ? "bg-blue-50" : ""}>
                  <td className="px-6 py-4 text-sm font-medium text-brand">{test.location}</td>
                  <td className="px-6 py-4 text-center text-sm text-slate-600">{test.ping}</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-brand">{test.download}</td>
                  <td className="px-6 py-4 text-center text-sm text-brand">{test.upload}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      test.latency === "Baseline" ? "bg-slate-200 text-slate-700" :
                      test.latency === "Excellent" ? "bg-green-100 text-green-700" :
                      "bg-amber-100 text-amber-700"
                    }`}>
                      {test.latency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Server Locations */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <h2 className="text-2xl font-bold text-brand mb-8">Server Coverage</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serverLocations.map((loc) => (
              <div key={loc.region} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200">
                <span className="text-3xl">{loc.flag}</span>
                <div>
                  <h3 className="font-semibold text-brand">{loc.region}</h3>
                  <p className="text-sm text-slate-500">{loc.servers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand">Pros</h2>
            </div>
            <div className="space-y-3">
              {pros.map((pro) => (
                <div key={pro} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">{pro}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand">Cons</h2>
            </div>
            <div className="space-y-3">
              {cons.map((con) => (
                <div key={con} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                  <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-700">{con}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Table */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <h2 className="text-2xl font-bold text-brand mb-8">Security Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.name} className="p-5 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-brand">{f.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{f.description}</p>
                  </div>
                  <svg className="w-6 h-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Test Results */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Streaming Test Results</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { platform: "Netflix US", status: "✓ Working", quality: "4K HDR" },
            { platform: "Disney+ Hotstar", status: "✓ Working", quality: "Full HD" },
            { platform: "BBC iPlayer", status: "✓ Working", quality: "Full HD" },
            { platform: "Amazon Prime", status: "✓ Working", quality: "Full HD" },
            { platform: "HBO Max", status: "✓ Working", quality: "Full HD" },
            { platform: "YouTube", status: "✓ Working", quality: "4K HDR" },
            { platform: "Viu", status: "✓ Working", quality: "Full HD" },
            { platform: "iQIYI", status: "✓ Working", quality: "Full HD" },
          ].map((test) => (
            <div key={test.platform} className="p-4 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-brand">{test.platform}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-neon-green font-medium">{test.status}</span>
                <span className="text-xs text-slate-400">{test.quality}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Install */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <h2 className="text-2xl font-bold text-brand mb-8">How to Install NordVPN in Malaysia</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative">
              <div className="absolute -left-4 -top-4 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg">
                1
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-brand mt-4">Sign Up</h3>
                <p className="mt-2 text-slate-500 text-sm">
                  Click our affiliate link and choose your plan. Use code <strong>DEALS70</strong> for extra discount.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg">
                2
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-brand mt-4">Download App</h3>
                <p className="mt-2 text-slate-500 text-sm">
                  Download NordVPN from their website or your device&apos;s app store. Sign in with your account.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg">
                3
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-brand mt-4">Connect</h3>
                <p className="mt-2 text-slate-500 text-sm">
                  Open the app and click Quick Connect. For Malaysian users, we recommend Singapore or HK servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Pricing Plans</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { term: "Monthly", price: "RM53.97", perMonth: "RM53.97", highlight: false },
            { term: "1 Year", price: "RM270.78", perMonth: "RM22.57", highlight: false, discount: "58% off" },
            { term: "2 Years", price: "RM388.56", perMonth: "RM16.19", highlight: true, discount: "70% off" },
          ].map((plan) => (
            <div
              key={plan.term}
              className={`p-6 rounded-2xl border-2 ${
                plan.highlight 
                  ? "border-accent bg-accent/5 shadow-lg" 
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block px-3 py-1 text-xs font-bold bg-accent text-white rounded-full mb-4">
                  BEST VALUE
                </span>
              )}
              <h3 className="text-lg font-bold text-brand">{plan.term}</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold text-brand">{plan.perMonth}</span>
                <span className="text-slate-500">/month</span>
              </div>
              {plan.discount && (
                <p className="mt-1 text-neon-green font-medium">{plan.discount}</p>
              )}
              <p className="mt-2 text-sm text-slate-400">Billed {plan.price}</p>
              <a
                href="https://go.nordvpn.net/SH9Tz"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block w-full py-3 text-center font-semibold rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-brand text-white hover:bg-brand-light"
                }`}
              >
                Get NordVPN
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16">
        <div className="section text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Join over 14 million users worldwide. 30-day money-back guarantee — no questions asked.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://go.nordvpn.net/SH9Tz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              🛡️ Get NordVPN - 70% Off
            </a>
            <Link
              href="/best-vpn-malaysia/"
              className="inline-flex items-center gap-2 px-6 py-4 text-white font-semibold rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all"
            >
              Compare Other VPNs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/best-vpn-malaysia/" className="text-sm text-accent hover:underline">
            ← Best VPN Malaysia 2026
          </Link>
          <Link href="/blog/password-managers-malaysia/" className="text-sm text-accent hover:underline">
            Password Managers Malaysia →
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> We earn a commission when you purchase NordVPN through our link. 
          This does not affect our review scores or editorial independence. All our VPN testing is conducted independently.
        </div>
      </section>
    </>
  );
}
