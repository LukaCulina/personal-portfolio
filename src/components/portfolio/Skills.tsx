import { Section } from "./Section";
import { Code2, Database, Palette, FileText } from "lucide-react";

const groups = [
  {
    icon: Code2,
    label: "Frontend",
    items: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    icon: Database,
    label: "Backend & Baze",
    items: ["Java", "Spring Boot", "JavaFX", "SQL"],
  },
  {
    icon: Palette,
    label: "Dizajn",
    items: ["Figma", "Canva"],
  },
  {
    icon: FileText,
    label: "Alati",
    items: ["MS Office", "Git", "CMS"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Vještine" title="Tehnologije s kojima radim">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map(({ icon: Icon, label, items }) => (
          <div
            key={label}
            className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
              <Icon size={20} />
            </div>
            <h3 className="font-display font-semibold mb-3">{label}</h3>
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
