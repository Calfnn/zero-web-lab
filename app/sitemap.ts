import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zeroweblab.it";
  const main = ["", "/servizi", "/progetti", "/contatti"];
  const legal = ["/privacy-policy", "/cookie-policy"];

  return [
    ...main.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...legal.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
