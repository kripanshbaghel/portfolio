import { ArrowUpRight } from "lucide-react";

import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s create something together
        </h2>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
          Whether you need a compelling video or a web application built from scratch —
          I&apos;m ready to bring your vision to life.
        </p>
        <a
          href="mailto:kripanshbghl@gmail.com"
          className="mb-16 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          kripanshbghl@gmail.com
        </a>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:border-primary/30"
            >
              <span className="font-medium">{label}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
