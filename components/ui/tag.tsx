import { cn } from "@/lib/utils";

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center bg-surface px-2 py-1 text-xs text-zinc-400",
        className,
      )}
      {...props}
    />
  );
}
