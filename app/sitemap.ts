import { articles } from "@/lib/articles";
import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl + "/blog/", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl + "/about/", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: siteUrl + "/contact/", lastModified: new Date(), changeFrequency: "yearly", priority: 0.65 },
    { url: siteUrl + "/privacy/", lastModified: new Date(), changeFrequency: "yearly", priority: 0.45 },
    { url: siteUrl + "/affiliate-disclosure/", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: siteUrl + "/terms/", lastModified: new Date(), changeFrequency: "yearly", priority: 0.45 },
  ];

  const posts: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteUrl}/blog/${a.slug}/`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: a.slug === "nordvpn-malaysia-review-2026" ? 0.95 : 0.75,
  }));

  return [...staticPages, ...posts];
}
