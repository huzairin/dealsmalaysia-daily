import type { Article } from "@/lib/articles";
import Link from "next/link";

export function ArticleStub({ article }: { article: Article }) {
  return (
    <div className="prose-article max-w-none">
      <p className="mt-0 text-lg font-medium text-slate-800">{article.excerpt}</p>
      <h2>Editorial approach</h2>
      <p>
        Deals Malaysia Daily tests products and services with Malaysian pricing, payment methods, and
        real-world connectivity in mind. Where we cannot yet publish a full long-form benchmark, we
        still share an honest overview based on hands-on time, vendor documentation, and community
        feedback from readers across Peninsular Malaysia and East Malaysia.
      </p>
      <h2>What we&apos;re validating next</h2>
      <p>
        Our team is expanding this guide with structured speed tests, screenshots, and updated MYR
        pricing tables. If you rely on this category for business decisions — for example hosting
        for an online store or email automation for bilingual campaigns — bookmark this page and
        subscribe to our newsletter for the full revision.
      </p>
      <h2>Related reading</h2>
      <p>
        While this deep-dive is in progress, you may find our{" "}
        <Link href="/blog/nordvpn-malaysia-review-2026/" className="font-semibold text-accent hover:underline">
          NordVPN Malaysia review
        </Link>{" "}
        and{" "}
        <Link href="/blog/" className="font-semibold text-accent hover:underline">
          latest articles index
        </Link>{" "}
        useful for comparison shopping and security basics.
      </p>
      <p className="text-sm text-slate-600">
        Last updated:{" "}
        {new Date(article.date).toLocaleDateString("en-MY", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        .
      </p>
    </div>
  );
}
