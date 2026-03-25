import type { ReactNode } from "react";
import Link from "next/link";
import { ProductComparisonTable, type ComparisonRow } from "@/components/ProductComparisonTable";
import { StarRating } from "@/components/StarRating";

/**
 * Reusable building blocks for long-form affiliate reviews in Next.js.
 * Compose inside a page or client component; pass real copy and props from your CMS or MDX later.
 */

export function ProductSummaryBox({
  productName,
  tagline,
  rating,
  bestFor,
}: {
  productName: string;
  tagline: string;
  rating: number;
  bestFor: string;
}) {
  return (
    <aside className="my-8 rounded-2xl border-2 border-brand/20 bg-gradient-to-br from-brand/5 to-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-accent">At a glance</p>
      <h2 className="mt-2 text-2xl font-bold text-brand">{productName}</h2>
      <p className="mt-2 text-slate-600">{tagline}</p>
      <div className="mt-4">
        <StarRating value={rating} />
      </div>
      <p className="mt-4 text-sm">
        <span className="font-semibold text-slate-800">Best for: </span>
        {bestFor}
      </p>
    </aside>
  );
}

export function ProsConsBlock({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="my-10 grid gap-6 sm:grid-cols-2">
      <div className="rounded-xl border border-green-200 bg-green-50/60 p-5">
        <h3 className="text-lg font-bold text-green-900">Pros</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-green-950/90">
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-5">
        <h3 className="text-lg font-bold text-rose-900">Cons</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-950/90">
          {cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function KeyFeaturesList({ heading = "Key features", items }: { heading?: string; items: string[] }) {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-brand">{heading}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function PerformanceSection({
  heading = "Performance analysis",
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-brand">{heading}</h2>
      <div className="prose-article mt-4 max-w-none">{children}</div>
    </section>
  );
}

export function PricingDealsBox({
  heading = "Pricing & deals",
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <section className="my-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-xl font-bold text-brand">{heading}</h2>
      <div className="prose-article mt-3 max-w-none">{children}</div>
    </section>
  );
}

export function VerdictSection({
  heading = "Verdict",
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <section className="my-10 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold text-brand">{heading}</h2>
      <div className="prose-article mt-4 max-w-none">{children}</div>
    </section>
  );
}

export function CtaCheckPrice({
  href,
  label = "Check latest price",
}: {
  href: string;
  label?: string;
}) {
  return (
    <div className="my-8 text-center">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-accent px-8 text-lg font-bold text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {label}
      </Link>
      <p className="mt-3 text-xs text-slate-500">Affiliate link — we may earn a commission.</p>
    </div>
  );
}

/** Re-export table for side-by-side competitor blocks inside reviews. */
export function CompetitorComparisonTable(props: { title?: string; caption?: string; rows: ComparisonRow[] }) {
  return <ProductComparisonTable {...props} />;
}
