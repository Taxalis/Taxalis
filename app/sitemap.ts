import type { MetadataRoute } from "next";
import { getAllServiceIds } from "@/app/lib/services";
import { blogPosts } from "@/app/lib/blog";

const baseUrl = "https://www.taxalis-consulting.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getAllServiceIds().map((id) => ({
    url: `${baseUrl}/leistungen/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const branchenRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/loesungen/pflegedienst`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/loesungen/sicherheitsdienst`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/loesungen/logistik`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  return [...staticRoutes, ...serviceRoutes, ...branchenRoutes, ...blogRoutes];
}
