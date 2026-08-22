import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wikipedia-golf-theta.vercel.app",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
