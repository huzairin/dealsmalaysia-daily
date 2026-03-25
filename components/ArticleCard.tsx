import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <Link href={`/blog/${article.slug}/`} className="relative block aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${article.imageGradient} opacity-90 transition group-hover:opacity-100`}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end p-4">
          <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-brand">
            {article.category}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-bold leading-snug text-slate-900">
          <Link
            href={`/blog/${article.slug}/`}
            className="hover:text-accent focus:outline-none focus-visible:text-accent"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span className="font-medium text-slate-700">{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-MY", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span aria-hidden>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
