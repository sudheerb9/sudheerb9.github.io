"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-4">
          <Link className="text-xs text-zinc-400 hover:text-zinc-200" href={siteConfig.links.github}>
            GitHub
          </Link>
          <Link className="text-xs text-zinc-400 hover:text-zinc-200" href={siteConfig.links.linkedin}>
            LinkedIn
          </Link>
          <Link className="text-xs text-zinc-400 hover:text-zinc-200" href={siteConfig.links.twitter}>
            X
          </Link>
        </div>
      </Container>
    </footer>
  );
}
