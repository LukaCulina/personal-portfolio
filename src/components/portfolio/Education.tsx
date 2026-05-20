import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    title: "Master of Engineering in Information Technology",
    org: "Zagreb University of Applied Sciences",
    period: "09.2023 — danas",
  },
  {
    title: "Erasmus+ Exchange — Digital Sciences (MA)",
    org: "Cologne University of Applied Sciences",
    period: "10.2024 — 02.2025",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Edukacija" title="Akademski put">
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-display font-semibold mb-1">{it.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">{it.org}</p>
            <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
              {it.period}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
