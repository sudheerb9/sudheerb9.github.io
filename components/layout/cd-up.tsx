"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

export function CdUp() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="pb-10">
      <Container>
        <Link
          href="/"
          className="inline-flex font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-200"
          aria-label="Go to home page"
        >
          {"> cd .."}
        </Link>
      </Container>
    </div>
  );
}

