import { ArticleStub } from "@/components/ArticleStub";
import { NordVPNReview } from "@/components/NordVPNReview";
import { ProsConsTable } from "@/components/ProsConsTable";
import { StarRating } from "@/components/StarRating";
import { articles, getArticleBySlug } from "@/lib/articles";
import { siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not found" };
  const url = `${siteUrl}/blog/${slug}/`;
  const isNord = slug === "nordvpn-malaysia-review-2026";
  const desc = isNord
    ? "In-depth NordVPN review for Malaysia: speeds from KL, streaming notes, pros & cons, and our 2026 verdict."
    : article.excerpt;
  return {
    title: article.title,
    description: desc,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: desc,
      url,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: desc,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const { slug } = params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const isNord = slug === "nordvpn-malaysia-review-2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    description: article.excerpt,
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Link href="/blog/" className="text-sm font-semibold text-accent hover:underline">
            ← All articles
          </Link>
          <p className="mt-4 text-sm font-semibold text-accent">{article.category}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="font-medium text-slate-800">{article.author}</span>
            {article.authorRole && <span className="text-slate-400">· {article.authorRole}</span>}
            <span className="text-slate-400">·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-MY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-slate-400">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {isNord && (
          <>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Our rating</p>
              <div className="mt-2">
                <StarRating value={4.5} />
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Strong choice for Malaysian users who want nearby Asian servers, mature apps, and a
                balanced feature set. Score reflects speed, usability, and transparency — not hype.
              </p>
            </div>
            <ProsConsTable />
          </>
        )}

        {isNord ? <NordVPNReview /> : <ArticleStub article={article} />}

        {isNord && (
          <div className="mt-12 rounded-2xl border-2 border-brand/20 bg-brand p-8 text-center text-white shadow-lg">
            <h2 className="text-xl font-bold sm:text-2xl">Ready to try NordVPN?</h2>
            <p className="mt-3 text-sm text-slate-300">
              Use the official offer page for the latest Malaysia-friendly pricing. Affiliate
              disclosure: we may earn a commission at no extra cost to you.
            </p>
            <a
              href="https://nordvpn.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-lg bg-accent px-8 text-lg font-bold text-white transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get NordVPN
            </a>
          </div>
        )}

        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={`https://i.pravatar.cc/120?u=${encodeURIComponent(article.author)}`}
              alt={`${article.author} avatar`}
              width={120}
              height={120}
              className="h-20 w-20 shrink-0 rounded-full border border-slate-200 object-cover"
              unoptimized
            />
            <div>
              <h2 className="text-lg font-bold text-brand">About {article.author}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {article.author === "Ahmad Faris" && (
                  <>
                    Ahmad leads VPN and security coverage for Deals Malaysia Daily. Former network
                    engineer, now full-time reviewer — based in Petaling Jaya, testing on Unifi and
                    Time fibre with occasional East Malaysia travel.
                  </>
                )}
                {article.author === "Priya Menon" && (
                  <>
                    Priya covers hosting, email platforms, and site performance for Malaysian SMEs.
                    She previously ran a boutique web agency in Kuala Lumpur and still maintains
                    test sites on major hosts for benchmarking.
                  </>
                )}
                {article.author === "Daniel Wong" && (
                  <>
                    Daniel heads shopping and travel deals, with a spreadsheet habit for Shopee and
                    Lazada price tracking. He focuses on accessories, home tech, and domestic
                    travel stacks that work with Malaysian e-wallets.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <p className="mt-10 rounded-lg bg-amber-50 p-4 text-sm text-amber-950">
          <strong>Affiliate note:</strong> This site contains affiliate links. We may earn a
          commission if you make a purchase. Opinions are our own.
        </p>
      </div>
    </article>
  );
}
