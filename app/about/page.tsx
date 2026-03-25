import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Deals Malaysia Daily editorial team — independent tech reviews and deals coverage for Malaysian audiences.",
  openGraph: {
    title: "About | Deals Malaysia Daily",
    description: "Our mission, team, and media kit for partners.",
  },
};

const team = [
  {
    name: "Ahmad Faris",
    role: "Editor-in-Chief · VPN & Security",
    bio: "Former network engineer turned reviewer. Ahmad sets testing methodology for privacy tools and runs most of our cross-border speed benchmarks from Selangor.",
    seed: "ahmad-faris-dmd",
  },
  {
    name: "Priya Menon",
    role: "Lead Analyst · Hosting & Marketing Tech",
    bio: "Priya benchmarks WordPress hosts, CDNs, and email platforms with MYR pricing in mind. She works closely with Malaysian SMEs on practical, non-jargony guides.",
    seed: "priya-menon-dmd",
  },
  {
    name: "Daniel Wong",
    role: "Deals Editor · Marketplaces & Travel",
    bio: "Daniel tracks Shopee, Lazada, and airline promos with a sceptical eye on inflated ‘RRP’ claims. He leads our shopping deal columns and travel stack features.",
    seed: "daniel-wong-dmd",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">About Deals Malaysia Daily</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We publish independent tech reviews, hosting comparisons, and shopping round-ups written
            for readers in Malaysia — with honest pros and cons, clear affiliate disclosures, and
            pricing context in ringgit where it matters.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-brand">Mission</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Malaysian consumers and small businesses deserve editorial coverage that respects local
            ISPs, payment friction, and marketplace dynamics. Our mission is to test seriously,
            disclose partnerships transparently, and recommend products only when the value story
            holds up under scrutiny — not because a press release said so.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We partner with affiliate programmes including NordVPN, Hostinger, GetResponse, and
            others when their products align with reader needs. Compensation never buys a positive
            verdict; if something underperforms, we say so — and we update guides when real-world
            behaviour changes.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-brand">Editorial team</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Based in Kuala Lumpur and Petaling Jaya with contributors across Peninsular Malaysia.
          </p>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <li key={m.seed} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <Image
                  src={`https://i.pravatar.cc/280?u=${encodeURIComponent(m.seed)}`}
                  alt={m.name}
                  width={280}
                  height={280}
                  className="aspect-square w-full rounded-lg object-cover"
                  unoptimized
                />
                <h3 className="mt-4 text-lg font-bold text-brand">{m.name}</h3>
                <p className="text-sm font-semibold text-accent">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.bio}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-brand">Media kit &amp; partnerships</h2>
          <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
            We welcome enquiries from VPN, hosting, SaaS, and consumer tech brands that want to reach
            engaged Malaysian readers. Typical collaboration formats include long-form reviews,
            comparison updates, newsletter features, and transparent affiliate placements with
            editorial sign-off.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Audience: tech-curious consumers, freelancers, and SME operators in Malaysia</li>
            <li>Content: English-language, SEO-structured, disclosure-forward</li>
            <li>Site: featherpro.fit (Deals Malaysia Daily)</li>
          </ul>
          <Link
            href="/contact/"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-accent px-6 font-semibold text-white transition hover:bg-accent-hover"
          >
            Contact partnerships
          </Link>
        </section>
      </div>
    </div>
  );
}
