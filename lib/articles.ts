export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  imageGradient: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    slug: "nordvpn-malaysia-review-2026",
    title: "NordVPN Malaysia Review 2026 — Is It Worth It?",
    excerpt:
      "We tested speeds from KL and Penang, streaming reliability, and whether NordVPN still makes sense for Malaysian users concerned about privacy.",
    category: "VPN & Security",
    author: "Ahmad Faris",
    authorRole: "Senior Tech Writer",
    date: "2026-03-18",
    readTime: "14 min read",
    imageGradient: "from-blue-900 to-slate-800",
    featured: true,
  },
  {
    slug: "best-web-hosting-malaysia-hostinger-vs-bluehost",
    title: "Best Web Hosting Malaysia — Hostinger vs Bluehost",
    excerpt:
      "Side-by-side comparison of pricing in MYR, local latency, WordPress performance, and support for small businesses in Malaysia.",
    category: "Web Hosting",
    author: "Priya Menon",
    authorRole: "Hosting Analyst",
    date: "2026-03-15",
    readTime: "11 min read",
    imageGradient: "from-indigo-800 to-brand",
    featured: true,
  },
  {
    slug: "top-10-shopee-gadgets-under-rm50",
    title: "Top 10 Shopee Gadgets Under RM50 This Month",
    excerpt:
      "Budget picks that actually shipped to our office in Petaling Jaya — cables, desk organisers, and accessories worth adding to cart.",
    category: "Shopping Deals",
    author: "Daniel Wong",
    authorRole: "Deals Editor",
    date: "2026-03-12",
    readTime: "8 min read",
    imageGradient: "from-orange-600 to-accent",
    featured: true,
  },
  {
    slug: "getresponse-vs-mailchimp-malaysian-smes",
    title: "GetResponse vs Mailchimp — Which Is Better for Malaysian SMEs?",
    excerpt:
      "Email marketing features, RM pricing after FX, deliverability notes, and which platform fits bilingual campaigns better.",
    category: "Email Marketing",
    author: "Priya Menon",
    authorRole: "Hosting Analyst",
    date: "2026-03-10",
    readTime: "10 min read",
    imageGradient: "from-violet-800 to-purple-900",
    featured: true,
  },
  {
    slug: "lazada-vs-shopee-best-deals",
    title: "Lazada vs Shopee — Where to Get the Best Deals",
    excerpt:
      "Flash sales, vouchers, and category winners based on six months of price tracking across electronics and home goods.",
    category: "Shopping Deals",
    author: "Daniel Wong",
    authorRole: "Deals Editor",
    date: "2026-03-08",
    readTime: "9 min read",
    imageGradient: "from-rose-700 to-orange-800",
    featured: true,
  },
  {
    slug: "best-vpn-malaysia-2026",
    title: "Best VPN for Malaysia in 2026",
    excerpt:
      "Our shortlist for streaming, gaming, and privacy — tested on Unifi and Time fibre connections with real-world speed graphs.",
    category: "VPN & Security",
    author: "Ahmad Faris",
    authorRole: "Senior Tech Writer",
    date: "2026-03-05",
    readTime: "12 min read",
    imageGradient: "from-slate-800 to-blue-950",
    featured: true,
  },
  {
    slug: "hostinger-malaysia-wordpress-performance",
    title: "Hostinger Malaysia: WordPress Performance & Data Centre Notes",
    excerpt:
      "Lighthouse scores, plugin load times, and what Malaysian site owners should expect when targeting Singapore or US visitors.",
    category: "Web Hosting",
    author: "Priya Menon",
    authorRole: "Hosting Analyst",
    date: "2026-03-02",
    readTime: "7 min read",
    imageGradient: "from-teal-800 to-brand",
  },
  {
    slug: "ai-writing-tools-malaysia-small-business",
    title: "AI Writing Tools for Malaysian Small Business — Honest Comparison",
    excerpt:
      "We evaluated tone control for Bahasa Malaysia copy, English marketing, and compliance disclaimers for local audiences.",
    category: "AI Tools",
    author: "Ahmad Faris",
    authorRole: "Senior Tech Writer",
    date: "2026-02-28",
    readTime: "9 min read",
    imageGradient: "from-emerald-900 to-slate-900",
  },
  {
    slug: "grab-airasia-travel-hacks-2026",
    title: "Grab & AirAsia: Travel Hacks Malaysians Actually Use in 2026",
    excerpt:
      "Stacking rewards, flexible dates, and when third-party OTAs still beat airline direct — updated for current promo cycles.",
    category: "Travel",
    author: "Daniel Wong",
    authorRole: "Deals Editor",
    date: "2026-02-25",
    readTime: "6 min read",
    imageGradient: "from-sky-800 to-cyan-900",
  },
  {
    slug: "password-managers-malaysia",
    title: "Password Managers in Malaysia — 1Password vs Bitwarden vs NordPass",
    excerpt:
      "Security features, family plans in MYR, and how each handles regional payment methods and two-factor backup.",
    category: "VPN & Security",
    author: "Ahmad Faris",
    authorRole: "Senior Tech Writer",
    date: "2026-02-20",
    readTime: "8 min read",
    imageGradient: "from-zinc-800 to-brand",
  },
  {
    slug: "cloudflare-cdn-malaysia-sites",
    title: "Should Your Malaysian Site Use Cloudflare? A Practical Guide",
    excerpt:
      "Caching, WAF basics, and the trade-offs for e-commerce stores serving both domestic and international customers.",
    category: "Web Hosting",
    author: "Priya Menon",
    authorRole: "Hosting Analyst",
    date: "2026-02-15",
    readTime: "7 min read",
    imageGradient: "from-orange-900 to-amber-950",
  },
  {
    slug: "tiktok-shop-vs-shopee-live",
    title: "TikTok Shop vs Shopee Live — Where Are the Real Deals?",
    excerpt:
      "Seller dynamics, return policies, and what we learned buying tech accessories during major campaign weekends.",
    category: "Shopping Deals",
    author: "Daniel Wong",
    authorRole: "Deals Editor",
    date: "2026-02-10",
    readTime: "8 min read",
    imageGradient: "from-pink-900 to-violet-950",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const featuredArticles = articles.filter((a) => a.featured).slice(0, 6);
