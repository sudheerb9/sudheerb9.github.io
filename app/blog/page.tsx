import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllPosts } from "@/lib/blog";
import { PostList } from "@/components/blog/post-list";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="max-w-3xl space-y-8">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-sm leading-7 text-zinc-400">
          Thoughts on backend engineering, distributed systems, software architecture, and lessons learned from
          building production systems.
        </p>
        <PostList posts={posts} />
      </Container>
    </Section>
  );
}
