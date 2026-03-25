import { ArticleCoverArt } from "@/components/ArticleCoverArt";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/60 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-slate-300">
      {/* Image Container */}
      <Link
        href={`/blog/${article.slug}/`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <ArticleCoverArt
          category={article.category}
          imageGradient={article.imageGradient}
          patternUid={article.slug}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/20 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
            {article.category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 text-[10px] font-semibold text-white/90 bg-black/30 backdrop-blur-md rounded-full">
            {article.readTime}
          </span>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-bold leading-snug text-slate-900 line-clamp-2 group-hover:text-accent transition-colors duration-200">
          <Link
            href={`/blog/${article.slug}/`}
            className="focus:outline-none focus-visible:text-accent"
          >
            {article.title}
          </Link>
        </h2>
        
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Author & Date */}
        <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-100">
          {/* Author Avatar Placeholder */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-neon-purple/20 text-accent text-xs font-bold">
            {article.author.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-700 truncate">{article.author}</p>
            <time dateTime={article.date} className="text-xs text-slate-400">
              {new Date(article.date).toLocaleDateString("en-MY", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Featured Article Card - Larger variant */
export function FeaturedArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-light shadow-elevated">
      <Link href={`/blog/${article.slug}/`} className="block">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <ArticleCoverArt
            category={article.category}
            imageGradient={article.imageGradient}
            patternUid={article.slug}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 to-transparent" />
        
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="relative px-8 py-10 sm:px-12 sm:py-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-accent bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {article.category}
          </span>
          
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl">
            {article.title}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{article.author}</p>
                <p className="text-xs text-slate-400">{article.readTime}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium group-hover:bg-white group-hover:text-brand transition-all duration-300">
              Read Article
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
