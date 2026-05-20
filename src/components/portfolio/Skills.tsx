import { Section } from "./Section";
import { Code2, Database, Palette, FileText } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";

export function Skills() {
  const { t } = useApp();
  const groups: { icon: typeof Code2; key: TranslationKey; items: string[] }[] = [
    { icon: Code2, key: "skills_frontend", items: ["JavaScript", "React", "HTML", "CSS"] },
    { icon: Database, key: "skills_backend", items: ["Java", "Spring Boot", "JavaFX", "SQL"] },
    { icon: Palette, key: "skills_design", items: ["Figma", "Canva"] },
    { icon: FileText, key: "skills_tools", items: ["MS Office", "Git", "CMS"] },
  ];

  return (
    <Section id="skills" eyebrow={t("skills_eyebrow")} title={t("skills_title")}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map(({ icon: Icon, key, items }) => (
          <div
            key={key}
            className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
              <Icon size={20} />
            </div>
            <h3 className="font-display font-semibold mb-3">{t(key)}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
