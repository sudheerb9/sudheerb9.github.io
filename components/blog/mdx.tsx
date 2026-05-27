import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

type MdxProps = {
  source: string;
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
    ],
  },
};

export async function Mdx({ source }: MdxProps) {
  const { content } = await compileMDX({
    source,
    options: options as unknown as Parameters<typeof compileMDX>[0]["options"],
  });

  return <>{content}</>;
}
