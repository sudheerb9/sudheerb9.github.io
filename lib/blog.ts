import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFrontmatter, PostMeta } from "@/types/blog";

const POSTS_PATH = path.join(process.cwd(), "content", "blog");

async function readPostFile(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  return fs.readFile(fullPath, "utf-8");
}

export async function getPostSlugs() {
  const files = await fs.readdir(POSTS_PATH);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const source = await readPostFile(slug);
  const { data, content } = matter(source);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  return posts
    .filter((post) => post.published !== false)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      readingTime: post.readingTime,
      published: post.published,
      tags: post.tags,
    }));
}
