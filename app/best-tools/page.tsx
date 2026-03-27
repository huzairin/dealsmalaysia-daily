import Link from "next/link";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Toolkit Malaysia - Best Productivity & Security Tools",
  description: "Curated list of productivity software, security tools, and tech gadgets for Malaysian professionals. AI writing, password managers, and more.",
  alternates: { canonical: siteUrl + "/best-tools/" },
  openGraph: {
    title: "Digital Toolkit Malaysia | Deals Malaysia Daily",
    description: "Best productivity tools, security software, and tech gadgets for Malaysian professionals.",
    url: siteUrl + "/best-tools/",
  },
};

const categories = [
  { name: "AI Writing Tools", icon: "🤖", count: 8, href: "#" },
  { name: "Password Managers", icon: "🔐", count: 5, href: "#" },
  { name: "Project Management", icon: "📊", count: 6, href: "#" },
  { name: "Cloud Storage", icon: "☁️", count: 4, href: "#" },
  { name: "Video Conferencing", icon: "📹", count: 4, href: "#" },
  { name: "Design Tools", icon: "🎨", count: 5, href: "#" },
];

const aiTools = [
  {
    name: "ChatGPT",
    description: "AI writing assistant for content creation, coding, and brainstorming. Free tier available.",
    price: "Free / RM83/mo Pro",
    rating: 4.7,
    badge: "Most Popular",
    color: "from-green-500 to-emerald-600",
    affiliateUrl: "#",
  },
  {
    name: "Claude",
    description: "Anthropic's AI assistant, great for long-form writing and analysis. Strong privacy focus.",
    price: "Free / RM100/mo Pro",
    rating: 4.6,
    badge: "Best for Writing",
    color: "from-amber-500 to-orange-600",
    affiliateUrl: "#",
  },
  {
    name: "Copy.ai",
    description: "AI copywriting tool for marketing, social media, and product descriptions.",
    price: "RM200/mo",
    rating: 4.4,
    badge: "Marketing Focus",
    color: "from-purple-500 to-violet-600",
    affiliateUrl: "#",
  },
  {
    name: "Jasper",
    description: "Enterprise AI writing platform with templates for SEO, ads, and blogs.",
    price: "RM390/mo",
    rating: 4.5,
    badge: "Enterprise",
    color: "from-blue-500 to-indigo-600",
    affiliateUrl: "#",
  },
];

const securityTools = [
  {
    name: "NordPass",
    logo: "🔐",
    description: "Secure password manager from NordVPN team. Free tier available.",
    price: "Free / RM36/mo",
    rating: 4.5,
    features: ["Password generator", "Breach scanner", "Secure notes"],
    affiliateUrl: "#",
  },
  {
    name: "1Password",
    logo: "🔒",
    description: "Award-winning password manager. Family plans available.",
    price: "RM78/person/yr",
    rating: 4.8,
    features: ["Travel mode", "Watchtower", "2FA built-in"],
    affiliateUrl: "#",
  },
  {
    name: "Bitwarden",
    logo: "🗝️",
    description: "Open-source password manager. Self-host option available.",
    price: "Free / RM80/yr",
    rating: 4.4,
    features: ["Open source", "Custom fields", "File attachments"],
    affiliateUrl: "#",
  },
];

const productivityTools = [
  {
    name: "Notion",
    logo: "📝",
    description: "All-in-one workspace for notes, docs, and project management.",
    price: "Free / RM50/user/mo",
    rating: 4.7,
    icon: "workspace",
  },
  {
    name: "Trello",
    logo: "📋",
    description: "Visual Kanban boards for task and project management.",
    price: "Free / RM70/user/mo",
    rating: 4.5,
    icon: "kanban",
  },
  {
    name: "Slack",
    logo: "💬",
    description: "Team communication and collaboration platform.",
    price: "Free / RM60/user/mo",
    rating: 4.6,
    icon: "chat",
  },
  {
    name: "Canva",
    logo: "🎨",
    description: "Easy design tool for social media, presentations, and more.",
    price: "Free / RM90/mo Pro",
    rating: 4.8,
    icon: "design",
  },
];

const shopeeTechGadgets = [
  { name: "USB-C Hub 7-in-1", price: "RM39.90", reason: "Essential for laptops", image: "💻" },
  { name: "Wireless Mouse Silent", price: "RM29.90", reason: "Office-friendly clicks", image: "🖱️" },
  { name: "Laptop Stand Adjustable", price: "RM45.90", reason: "Ergonomic setup", image: "📐" },
  { name: "Mechanical Keyboard", price: "RM89.90", reason: "RGB gaming style", image: "⌨️" },
  { name: "Webcam 1080p HD", price: "RM59.90", reason: "Crystal clear calls", image: "📷" },
  { name: "Ring Light 10-inch", price: "RM35.90", reason: "Perfect for content", image: "💡" },
];

export default function BestToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-brand py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />
        
        <div className="relative section">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span>🛠️</span>
              <span>Productivity & Security</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Digital Toolkit
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Curated productivity tools, security software, and tech gadgets. 
              Everything Malaysian professionals need to work smarter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#ai-tools"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <span>🤖</span>
                AI Tools
              </a>
              <a
                href="#security"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all"
              >
                <span>🔐</span>
                Security
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section py-16">
        <h2 className="text-2xl font-bold text-brand mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30 transition-all text-center"
            >
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="mt-3 font-semibold text-brand group-hover:text-accent transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500">{cat.count} tools</p>
            </a>
          ))}
        </div>
      </section>

      {/* AI Writing Tools */}
      <section id="ai-tools" className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand">AI Writing Tools</h2>
              <p className="text-slate-500">Boost productivity with AI assistants</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${tool.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-brand">{tool.name}</h3>
                    <span className="flex items-center gap-1 text-sm text-amber-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {tool.rating}
                    </span>
                  </div>
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                    {tool.badge}
                  </span>
                  <p className="mt-4 text-sm text-slate-500 line-clamp-3">
                    {tool.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-lg font-bold text-accent">{tool.price}</span>
                  </div>
                  <a
                    href={tool.affiliateUrl}
                    className="mt-4 block w-full py-2.5 text-center text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-light transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tools */}
      <section id="security" className="section py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100">
            <span className="text-xl">🔐</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand">Password Managers</h2>
            <p className="text-slate-500">Protect your accounts with top security tools</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {securityTools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{tool.logo}</span>
                <div>
                  <h3 className="font-bold text-brand">{tool.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-amber-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {tool.rating}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">{tool.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.features.map((f) => (
                  <span key={f} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-bold text-accent">{tool.price}</span>
              </div>
              <a
                href={tool.affiliateUrl}
                className="mt-4 block w-full py-2.5 text-center text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-light transition-colors"
              >
                Get {tool.name}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/nordvpn-review/"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Also see our VPN recommendations →
          </Link>
        </div>
      </section>

      {/* Productivity Tools */}
      <section className="bg-surface-secondary py-16">
        <div className="section">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-100">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand">More Productivity Tools</h2>
              <p className="text-slate-500">Essential software for Malaysian professionals</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productivityTools.map((tool) => (
              <div key={tool.name} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-3xl">{tool.logo}</span>
                <div>
                  <h3 className="font-semibold text-brand">{tool.name}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Gadgets from Shopee */}
      <section className="section py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-brand">Tech Gadgets Under RM100</h2>
            <p className="mt-2 text-slate-500">Productivity boosters available on Shopee</p>
          </div>
          <Link
            href="/shopee-deals/"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shopeeTechGadgets.map((gadget) => (
            <Link
              key={gadget.name}
              href="/shopee-deals/"
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <span className="text-3xl">{gadget.image}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-brand truncate">{gadget.name}</h3>
                <p className="text-sm text-slate-500">{gadget.reason}</p>
              </div>
              <span className="font-bold text-neon-orange shrink-0">{gadget.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Creator Section */}
      <section className="bg-brand py-16">
        <div className="section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Content Creator Toolkit</h2>
              <p className="mt-4 text-slate-300">
                Everything you need to start creating content — from equipment to software.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Ring lights and tripods on Shopee",
                  "Canva Pro for design",
                  "OBS for video recording",
                  "Grammarly for writing",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white">Recommended Setup</h3>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-white/80">
                  <span>Ring Light 12&quot;</span>
                  <span className="font-medium">RM45</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Phone Tripod</span>
                  <span className="font-medium">RM25</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Lavalier Mic</span>
                  <span className="font-medium">RM55</span>
                </div>
                <div className="border-t border-white/20 pt-4 flex justify-between text-lg font-bold text-neon-cyan">
                  <span>Total Starter Kit</span>
                  <span>~RM125</span>
                </div>
              </div>
              <Link
                href="/shopee-deals/"
                className="mt-6 block w-full py-3 text-center font-semibold text-brand bg-white rounded-xl hover:bg-slate-100 transition-colors"
              >
                Shop on Shopee &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/shopee-deals/" className="text-sm text-accent hover:underline">
            ← Shopee Deals
          </Link>
          <Link href="/nordvpn-review/" className="text-sm text-accent hover:underline">
            NordVPN Review →
          </Link>
          <Link href="/blog/ai-writing-tools-malaysia-small-business/" className="text-sm text-accent hover:underline">
            AI Tools Guide →
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="section py-8">
        <div className="p-4 bg-slate-100 rounded-xl text-sm text-slate-500">
          <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. 
          If you make a purchase, we may earn a commission. Our tool recommendations are based on actual usage, not payments.
        </div>
      </section>
    </>
  );
}
