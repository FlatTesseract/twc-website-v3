import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { services } from "@/data/services";
import { caseStudySlugs } from "@/lib/case-studies";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/press/", ...services.map(s => `/services/${s.slug}/`), ...caseStudySlugs.map(slug => `/case-study/${slug}/`)].map(path => ({ url: siteUrl(path) }));
}
