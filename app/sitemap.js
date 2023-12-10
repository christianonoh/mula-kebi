// app/sitemap.js

import { allBlogs } from "@/.contentlayer/generated";
import { getCategories } from "@/utils";
import siteMetadata from "@/utils/siteMetaData";

export default async function sitemap() {
  const allCategories = getCategories(allBlogs);
  const posts = allBlogs.map((post) => ({
    url: `${siteMetadata.siteUrl}${post.url}`,
    lastModified: new Date(post.updatedAt).toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const categories = allCategories.map((tag) => ({
    url: `${siteMetadata.siteUrl}/categories/${tag}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const routes = ["", "/about-us", "/contact-us"].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...routes, ...posts, ...categories];
}
