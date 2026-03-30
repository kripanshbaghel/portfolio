import { SKILLS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <p className="mb-2 font-mono text-sm tracking-widest text-muted-foreground uppercase">
          About
        </p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <div className="mb-16 max-w-3xl space-y-4">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a 13-year-old student at Ryan International School, Greater Noida, currently in Class 8th. I love coding, watching anime, and playing Minecraft.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border bg-background">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
