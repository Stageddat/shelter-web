import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/app", "/login", "/signup"],
    },
    sitemap: "https://shelter.stageddat.dev/sitemap.xml",
  };
}
