import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://hdshashank.dev", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://hdshashank.dev/profile", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://hdshashank.dev/projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
