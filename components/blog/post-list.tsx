import Link from "next/link";
import type { PostMeta } from "@/types/blog";
import { ListRow } from "@/components/ui/list-row";
import { formatDate } from "@/lib/utils";

type PostListProps = {
  posts: PostMeta[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((post) => (
        <ListRow key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-sm font-medium text-zinc-200 group-hover:text-zinc-50">{post.title}</h3>
              <p className="font-mono text-xs text-zinc-500">
                {formatDate(post.date)} · {post.readingTime}
              </p>
            </div>
            <p className="mt-2 text-sm leading-7 text-zinc-400">{post.description}</p>
          </Link>
        </ListRow>
      ))}
    </ul>
  );
}
