import { Section } from "./Section";
import { GraduationCap } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";

export function Education() {
  const { t } = useApp();
  const items: { title: TranslationKey; org: TranslationKey; period: TranslationKey }[] = [
    { title: "edu_master_title", org: "edu_master_org", period: "edu_master_period" },
    { title: "edu_erasmus_title", org: "edu_erasmus_org", period: "edu_erasmus_period" },
  ];
  return (
    <Section id="education" eyebrow={t("edu_eyebrow")} title={t("edu_title")}>
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-display font-semibold mb-1">{t(it.title)}</h3>
            <p className="text-muted-foreground text-sm mb-3">{t(it.org)}</p>
            <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
              {t(it.period)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
