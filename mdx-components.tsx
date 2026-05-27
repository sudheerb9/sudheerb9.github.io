import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ className, ...props }) => (
      <Link className={["underline underline-offset-4", className].filter(Boolean).join(" ")} {...props} />
    ),
    ...components,
  };
}
