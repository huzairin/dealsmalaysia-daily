import { StarRating } from "@/components/StarRating";
import Link from "next/link";

export type ComparisonRow = {
  id: string;
  name: string;
  rating: number;
  features: string;
  priceRange: string;
  href: string;
  ctaLabel?: string;
  bestOverall?: boolean;
};

type Props = {
  title?: string;
  caption?: string;
  rows: ComparisonRow[];
};

/** Responsive comparison table for VPNs, hosting, laptops, gadgets — highlight one "Best overall". */
export function ProductComparisonTable({
  title = "Quick comparison",
  caption,
  rows,
}: Props) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {title && (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-6">
          <h2 className="text-xl font-bold text-brand">{title}</h2>
          {caption && <p className="mt-1 text-sm text-slate-600">{caption}</p>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-white text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3 sm:px-6">Product</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Key features</th>
              <th className="px-4 py-3">Price guide</th>
              <th className="px-4 py-3 sm:px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-slate-100 last:border-0 ${
                  row.bestOverall ? "bg-amber-50/80" : "bg-white"
                }`}
              >
                <td className="px-4 py-4 align-top sm:px-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-slate-900">{row.name}</span>
                    {row.bestOverall && (
                      <span className="w-fit rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Best overall
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 align-top">
                  <StarRating value={row.rating} />
                </td>
                <td className="max-w-[220px] px-4 py-4 align-top text-slate-600">{row.features}</td>
                <td className="whitespace-nowrap px-4 py-4 align-top font-medium text-slate-800">
                  {row.priceRange}
                </td>
                <td className="px-4 py-4 align-top sm:px-6">
                  <Link
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-brand px-4 text-xs font-bold text-white transition hover:bg-brand-dark sm:text-sm"
                  >
                    {row.ctaLabel ?? "Check latest price"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-xs text-slate-500 sm:px-6">
        Prices change with promotions and FX. Verify on the merchant site before you buy. Affiliate
        links may earn us a commission at no extra cost to you.
      </p>
    </div>
  );
}
