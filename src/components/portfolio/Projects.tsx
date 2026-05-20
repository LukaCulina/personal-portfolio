import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";

export function Projects() {
  const { t } = useApp();
  const projects: { name: string; descKey: TranslationKey; tags: string[]; href: string }[] = [
    { name: "Terraforming Mars", descKey: "proj_tm_desc", tags: ["Java", "JavaFX"], href: "https://github.com/LukaCulina" },
    { name: "Pomodoro Timer", descKey: "proj_pom_desc", tags: ["JavaScript", "HTML", "CSS"], href: "https://github.com/LukaCulina" },
    { name: "Snake Game", descKey: "proj_snake_desc", tags: ["JavaScript", "Canvas"], href: "https://github.com/LukaCulina" },
    { name: "TrekTrip", descKey: "proj_trek_desc", tags: ["React", "Spring Boot", "REST"], href: "https://github.com/LukaCulina" },
    { name: "FilmStar", descKey: "proj_film_desc", tags: ["React", "API"], href: "https://github.com/LukaCulina" },
    { name: "Tech4Society", descKey: "proj_tech_desc", tags: ["Collaboration", "LLM", "Data"], href: "https://github.com/LukaCulina" },
  ];

  return (
    <Section id="projects" eyebrow={t("proj_eyebrow")} title={t("proj_title")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(400px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold group-hover:text-gradient transition-colors">
                  {p.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Github size={16} />
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(p.descKey)}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
