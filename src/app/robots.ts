import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Se permite rastrear para que Google lea el "noindex" de la página.
    rules: { userAgent: "*", allow: "/" },
    ...(site.indexable ? { sitemap: `${site.url}/sitemap.xml`, host: site.url } : {}),
  };
}
