import { Section } from "./Section";
import { Briefcase } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";

export function Experience() {
  const { t } = useApp();
  const bullets: TranslationKey[] = [
    "exp_b1",
    "exp_b2",
    "exp_b3",
    "exp_b4",
    "exp_b5",
    "exp_b6",
    "exp_b7",
    "exp_b8",
  ];
  return (
    <Section id="experience" eyebrow={t("exp_eyebrow")} title={t("exp_title")}>
      <div className="relative pl-8 border-l border-border">
        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />
        <div className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-display font-semibold flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                {t("exp_role")}
              </h3>
              <p className="text-muted-foreground">{t("exp_company")}</p>
            </div>
            <span className="text-sm text-muted-foreground px-3 py-1 rounded-full border border-border">
              {t("exp_period")}
            </span>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            {bullets.map((k) => (
              <li key={k} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
