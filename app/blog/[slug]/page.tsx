import { ArticleStub } from "@/components/ArticleStub";
import { ArticleCoverArt } from "@/components/ArticleCoverArt";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { NordVPNReview } from "@/components/NordVPNReview";
import { ProsConsTable } from "@/components/ProsConsTable";
import { StarRating } from "@/components/StarRating";
import { getAuthorProfile } from "@/lib/authors";
import { articles, getArticleBySlug } from "@/lib/articles";
import { productReviewJsonLd } from "@/lib/review-schema";
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
  const authorProfile = getAuthorProfile(article.author);

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

  const reviewJsonLd =
    isNord &&
    productReviewJsonLd({
      productName: "NordVPN",
      description: article.excerpt,
      authorName: article.author,
      ratingValue: 4.5,
      datePublished: article.date,
      reviewUrl: `${siteUrl}/blog/${slug}/`,
    });

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {reviewJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      )}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative -mx-4 mt-0 aspect-[21/9] min-h-[11rem] overflow-hidden rounded-none border-b border-slate-200/80 sm:mx-0 sm:mt-6 sm:rounded-xl sm:border sm:border-slate-200">
            <ArticleCoverArt
              category={article.category}
              imageGradient={article.imageGradient}
              patternUid={`${article.slug}-hero`}
            />
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm backdrop-blur-sm">
                {article.category}
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
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
            {authorProfile ? (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm ring-2 ring-white">
                <Image
                  src={authorProfile.photo}
                  alt={article.author}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ) : (
              <AuthorAvatar
                name={article.author}
                className="h-20 w-20 rounded-full border border-slate-200 text-xl"
              />
            )}
            <div>
              <h2 className="text-lg font-bold text-brand">About {article.author}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {authorProfile?.bio ?? (
                  <>
                    {article.author} contributes to Deals Malaysia Daily. See our{" "}
                    <Link href="/about/" className="font-semibold text-accent hover:underline">
                      About
                    </Link>{" "}
                    page for the full editorial team.
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
