import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HomeNav() {
  return (
    <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-2">
      {siteConfig.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
