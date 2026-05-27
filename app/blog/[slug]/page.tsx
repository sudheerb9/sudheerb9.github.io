import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/blog/mdx";
import { Container } from "@/components/ui/container";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) {
    notFound();
  }
  const post = await getPostBySlug(slug);

  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <article className="prose prose-invert prose-zinc mx-auto">
        <header className="not-prose mb-10 border-b border-white/[0.05] pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">{post.title}</h1>
          <p className="mt-4 text-sm leading-8 text-zinc-400">{post.description}</p>
          <p className="mt-4 font-mono text-xs text-zinc-500">
            {formatDate(post.date)} · {post.readingTime}
          </p>
        </header>
        <Mdx source={post.content} />
      </article>
    </Container>
  );
}
