import { siteDomain, siteName } from "@/lib/site";
import Link from "next/link";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Articles" },
  { href: "/about/", label: "About" },
  { href: "/methodology/", label: "Review Methodology" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/affiliate-disclosure/", label: "Affiliate Disclosure" },
  { href: "/terms/", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <p className="font-semibold">Affiliate disclosure</p>
          <p className="mt-1">
            {siteName} earns commissions from qualifying purchases through affiliate links — at no
            extra cost to you. Editorial opinions stay independent.{" "}
            <Link href="/affiliate-disclosure/" className="font-semibold underline hover:text-brand">
              Full disclosure
            </Link>
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand">Deals Malaysia Daily</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Independent reviews and deal round-ups for Malaysian readers. We test products where
              possible and disclose partnerships clearly.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Kuala Lumpur, Malaysia · Est. 2024
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-500">
          <span className="font-medium text-slate-600">Disclaimer:</span> Content is for informational
          purposes only. Prices and offers change; verify on the merchant&apos;s site.{" "}
          <Link href="/privacy/" className="underline hover:text-brand">
            Privacy
          </Link>
          ,{" "}
          <Link href="/terms/" className="underline hover:text-brand">
            Terms
          </Link>
          .
        </p>
        <p className="mt-2 text-xs text-slate-400">
          © 2024-{new Date().getFullYear()} Deals Malaysia Daily · {siteDomain}
        </p>
      </div>
    </footer>
  );
}
