import type { MetadataRoute } from "next";

const baseUrl = "https://www.taxalis-consulting.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
