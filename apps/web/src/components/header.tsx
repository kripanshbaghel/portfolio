"use client";
import Link from "next/link";

import { NAV_LINKS } from "@/lib/data";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#hero" className="font-bold tracking-tight">
          Kripansh.dev
        </Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
