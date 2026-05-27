import { cn } from "@/lib/utils";

/** Editorial list row — divider + hover, no card chrome */
export const listRowClass =
  "-mx-3 border-b border-white/[0.05] px-3 py-6 transition-colors last:border-b-0 hover:bg-white/[0.02] sm:-mx-4 sm:px-4";

type ListRowProps = React.LiHTMLAttributes<HTMLLIElement>;

export function ListRow({ className, ...props }: ListRowProps) {
  return <li className={cn(listRowClass, className)} {...props} />;
}
