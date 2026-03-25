import type { ReactNode } from "react";
import Link from "next/link";

const steps: { title: string; body: ReactNode }[] = [
  {
    title: "Hands-on testing",
    body: "We install real apps, run speed checks on Malaysian ISPs where relevant, and note failures honestly — not only headline features.",
  },
  {
    title: "MYR & local context",
    body: "Pricing is discussed in ringgit terms when it matters, including FX and card fees readers actually pay.",
  },
  {
    title: "Disclosure-first",
    body: (
      <>
        Affiliate links are labelled; editorial conclusions stay ours. Read our{" "}
        <Link href="/affiliate-disclosure/" className="font-semibold text-accent hover:underline">
          affiliate disclosure
        </Link>{" "}
        for how commissions work.
      </>
    ),
  },
  {
    title: "Living guides",
    body: "When vendors change plans or our benchmarks shift, we update comparisons and note significant revisions.",
  },
];

export function HomeMethodology() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <h2 className="text-2xl font-bold text-brand sm:text-3xl">How we review &amp; test</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Affiliate managers and readers alike should see a repeatable process — not generic copy. Here
        is how we approach VPN, hosting, gadget, and deals coverage for Malaysia.
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {steps.map((s) => (
          <li key={s.title} className="rounded-xl border border-slate-100 bg-slate-50/80 p-5">
            <h3 className="text-lg font-bold text-brand">{s.title}</h3>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
