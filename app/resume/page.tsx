"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.location.replace("/resume.pdf");
  }, []);

  return (
    <p className="py-20 text-center text-sm text-zinc-400">
      Redirecting…{" "}
      <a href="/resume.pdf" className="text-zinc-200 underline-offset-4 hover:underline">
        Open resume (PDF)
      </a>
    </p>
  );
}
