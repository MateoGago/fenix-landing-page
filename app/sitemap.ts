import type { MetadataRoute } from "next";
import { newsPosts } from "@/lib/data/news";

const siteUrl = "https://www.fenixcomercioexterior.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/servicios`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/novedades`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const newsPages: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${siteUrl}/novedades/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...newsPages];
}
