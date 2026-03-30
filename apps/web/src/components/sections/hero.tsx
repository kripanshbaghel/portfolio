import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { ROLES } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute h-[350px] w-[350px] rounded-full blur-[120px] opacity-20 animate-drift"
        style={{ background: "var(--primary)", top: "15%", left: "20%" }}
      />
      <div
        className="absolute h-[300px] w-[300px] rounded-full blur-[100px] opacity-15 animate-drift-reverse"
        style={{ background: "#6366f1", bottom: "20%", right: "15%" }}
      />
      <div className="container relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          My Portfolio
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Kripansh Baghel
        </h1>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {ROLES.map((role, i) => (
            <span key={role}>
              <span className="text-lg text-muted-foreground sm:text-xl">{role}</span>
              {i < ROLES.length - 1 && (
                <span className="ml-3 text-primary">·</span>
              )}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <Link
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  );
}
