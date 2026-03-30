import { Film, Code2 } from "lucide-react";

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const ROLES = ["Video Editor", "Developer"] as const;

export const SKILLS = [
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Cinematic storytelling, color grading, motion graphics, and post-production workflows that bring visions to life.",
    tags: ["KdenLive", "CapCut", "VN"],
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Full-stack web applications, interactive experiences, and tools that bridge creativity with technology.",
    tags: ["HTML5", "CSS", "JavaScript", "Python"],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://youtube.com/@kripanshbaghel" },
  { label: "GitHub", href: "https://github.com/kripanshbaghel" },
  { label: "Twitter / X", href: "https://x.com/kripanshbaghel" },
  { label: "Instagram", href: "https://instagram.com/kripanshbaghel" },
] as const;
