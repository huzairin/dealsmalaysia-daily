import { siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Review Methodology",
  description: `How ${siteName} tests and rates VPNs, hosting, gadgets, and tech products. Our scoring criteria, testing environment, and editorial standards.`,
  openGraph: {
    title: `Review Methodology | ${siteName}`,
    description: "Transparent testing criteria and scoring system for all product reviews.",
    url: `${siteUrl}/methodology/`,
  },
  alternates: { canonical: `${siteUrl}/methodology/` },
};

const vpnCriteria = [
  { criterion: "Speed Performance", weight: "25%", method: "Multiple server tests using Speedtest.net from TM Unifi 500Mbps baseline" },
  { criterion: "Security Features", weight: "25%", method: "Protocol analysis, kill switch testing, DNS leak verification" },
  { criterion: "Privacy Policy", weight: "20%", method: "Jurisdiction analysis, logging policy review, third-party audits check" },
  { criterion: "Ease of Use", weight: "15%", method: "Setup process evaluation, UI/UX scoring, multi-platform testing" },
  { criterion: "Value for Money", weight: "15%", method: "MYR pricing comparison, feature-per-ringgit analysis" },
];

const hostingCriteria = [
  { criterion: "Uptime & Reliability", weight: "30%", method: "30-day monitoring via UptimeRobot, incident tracking" },
  { criterion: "Speed & Performance", weight: "25%", method: "GTmetrix, PageSpeed Insights, TTFB from Malaysian servers" },
  { criterion: "Support Quality", weight: "20%", method: "Response time tests, ticket resolution tracking" },
  { criterion: "Features & Value", weight: "15%", method: "Feature comparison, MYR pricing analysis" },
  { criterion: "Ease of Setup", weight: "10%", method: "WordPress installation time, cPanel/dashboard evaluation" },
];

export default function MethodologyPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Review Methodology</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Every product we review undergoes standardized testing. Here&apos;s exactly how we
            evaluate, score, and recommend tech products for Malaysian readers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {/* Editorial Independence */}
        <section className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-900">Editorial Independence Guarantee</h2>
              <p className="mt-2 text-green-800">
                <strong>Manufacturers cannot pay for favorable reviews.</strong> We purchase products
                at retail or use reviewer units with no editorial strings attached. Affiliate
                commissions never influence our ratings or recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Environment */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand">Testing Environment</h2>
          <p className="mt-4 text-slate-700">
            All tests are conducted from our Kuala Lumpur office using standardized equipment
            and connections to ensure consistent, reproducible results.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Network Setup</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• TM Unifi 500Mbps fiber connection</li>
                <li>• Backup: Maxis 100Mbps for comparison</li>
                <li>• Direct ethernet (no WiFi interference)</li>
                <li>• Malaysian IP baseline for all tests</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Test Devices</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Windows 11 Pro (primary testing)</li>
                <li>• macOS Sonoma (secondary)</li>
                <li>• Android 14 (Samsung Galaxy)</li>
                <li>• iOS 17 (iPhone 15)</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Testing period: Minimum 2 weeks per product before publishing initial review.
          </p>
        </section>

        {/* Rating Scale */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand">Rating Scale</h2>
          <p className="mt-4 text-slate-700">
            We use a 10-point scale with clear thresholds for recommendations:
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-4 rounded-lg border border-green-200 bg-green-50 p-4">
              <span className="flex h-10 w-16 items-center justify-center rounded-lg bg-green-600 font-bold text-white">9-10</span>
              <div>
                <span className="font-bold text-green-900">Exceptional</span>
                <span className="ml-2 text-sm text-green-700">— Best in class, highly recommended</span>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <span className="flex h-10 w-16 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">7-8.9</span>
              <div>
                <span className="font-bold text-blue-900">Very Good</span>
                <span className="ml-2 text-sm text-blue-700">— Recommended with minor caveats</span>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <span className="flex h-10 w-16 items-center justify-center rounded-lg bg-amber-500 font-bold text-white">5-6.9</span>
              <div>
                <span className="font-bold text-amber-900">Average</span>
                <span className="ml-2 text-sm text-amber-700">— Acceptable but better alternatives exist</span>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-red-200 bg-red-50 p-4">
              <span className="flex h-10 w-16 items-center justify-center rounded-lg bg-red-600 font-bold text-white">&lt;5</span>
              <div>
                <span className="font-bold text-red-900">Not Recommended</span>
                <span className="ml-2 text-sm text-red-700">— Significant issues, avoid</span>
              </div>
            </div>
          </div>
        </section>

        {/* VPN Testing Criteria */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand">VPN Testing Criteria</h2>
          <p className="mt-4 text-slate-700">
            VPN reviews follow a weighted scoring system designed for Malaysian users:
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Criterion</th>
                  <th className="px-4 py-3 text-center font-bold text-slate-900">Weight</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Testing Method</th>
                </tr>
              </thead>
              <tbody>
                {vpnCriteria.map((row, i) => (
                  <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border-b border-slate-100 px-4 py-3 font-medium text-slate-900">{row.criterion}</td>
                    <td className="border-b border-slate-100 px-4 py-3 text-center font-bold text-brand">{row.weight}</td>
                    <td className="border-b border-slate-100 px-4 py-3 text-slate-600">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Hosting Testing Criteria */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand">Web Hosting Testing Criteria</h2>
          <p className="mt-4 text-slate-700">
            Hosting reviews focus on real-world performance for Malaysian websites:
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Criterion</th>
                  <th className="px-4 py-3 text-center font-bold text-slate-900">Weight</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Testing Method</th>
                </tr>
              </thead>
              <tbody>
                {hostingCriteria.map((row, i) => (
                  <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border-b border-slate-100 px-4 py-3 font-medium text-slate-900">{row.criterion}</td>
                    <td className="border-b border-slate-100 px-4 py-3 text-center font-bold text-brand">{row.weight}</td>
                    <td className="border-b border-slate-100 px-4 py-3 text-slate-600">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Update Policy */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand">Update Policy</h2>
          <p className="mt-4 text-slate-700">
            Reviews are living documents. We update them when:
          </p>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li className="flex items-start gap-3">
              <svg className="mt-1 h-5 w-5 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pricing changes significantly (monthly price checks)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-1 h-5 w-5 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Major software updates affect performance (re-tested within 30 days)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-1 h-5 w-5 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Security incidents or policy changes occur (immediate disclosure)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-1 h-5 w-5 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Reader feedback identifies factual errors (corrected within 48 hours)</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            All articles display &quot;Last updated&quot; dates. Substantive changes are noted in the article.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-brand">Questions About Our Process?</h2>
          <p className="mt-3 text-slate-700">
            We welcome questions about how we test specific products or requests to clarify
            our methodology. Transparency builds trust.
          </p>
          <Link
            href="/contact/"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand px-6 font-semibold text-white transition hover:bg-brand-dark"
          >
            Contact our editorial team
          </Link>
        </section>
      </div>
    </div>
  );
}
