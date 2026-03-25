import { siteDomain } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the leadership behind Deals Malaysia Daily — independent tech reviews and deals coverage for Malaysian audiences.",
  openGraph: {
    title: "About | Deals Malaysia Daily",
    description: "Our mission, founders, and media kit for partners.",
  },
};

const founders = [
  {
    name: "Arman Abd Hamid",
    role: "Managing Director",
    bio: "Drives business growth and corporate operations with deep ICT, VR/AR, and AI expertise. Integrates immersive technology and creative design to deliver large-scale solutions across education, heritage, and industry with a strong track record in project management.",
    image: "/team/arman-abd-hamid.png",
  },
  {
    name: "Shahrozad Johar",
    role: "Executive Director",
    bio: "Seasoned executive with 30+ years leading ICT, transportation, healthcare, and banking initiatives in senior roles (COO, CFO). Oversaw nationwide hospital ICT, LRT assembly, and corporate operations locally and internationally. Expert in strategic planning, governance, risk, and high-value negotiations, delivering multimillion-ringgit outcomes.",
    image: "/team/shahrozad-johar.png",
  },
  {
    name: "Marzuky Yusuf",
    role: "Director (Operation)",
    bio: "Operations leader with deep ICT and digital transformation expertise across mobile, web, VR/AR, and enterprise solutions. Excels at scaling concepts, managing complex rollouts, and aligning technical execution with business growth and client experience.",
    image: "/team/marzuky-yusuf.png",
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
          <h2 className="text-2xl font-bold text-brand">Founders &amp; leadership</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Malaysian-led leadership with deep ICT, digital transformation, and enterprise delivery
            experience — guiding editorial direction, operations, and partnerships for Deals Malaysia
            Daily.
          </p>
          <ul className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {founders.map((m) => (
              <li
                key={m.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/[0.04]"
              >
                <div className="relative aspect-[3/4] w-full bg-white">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-slate-100 px-6 pb-8 pt-6">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{m.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-brand-light">
                    {m.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.bio}</p>
                </div>
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
            <li>Site: {siteDomain}</li>
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
