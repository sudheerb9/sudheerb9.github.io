import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPostSlugs } from "@/lib/blog";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/experience", "/projects", "/blog", "/resume"];
  const staticUrls = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const postSlugs = await getPostSlugs();
  const postUrls = postSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...postUrls];
}
