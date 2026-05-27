export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  published?: boolean;
  tags?: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};
