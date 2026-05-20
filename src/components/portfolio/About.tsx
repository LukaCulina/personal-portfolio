import { Section } from "./Section";
import { useApp } from "@/contexts/AppContext";

export function About() {
  const { t } = useApp();
  return (
    <Section id="about" eyebrow={t("about_eyebrow")} title={t("about_title")}>
      <div className="grid md:grid-cols-3 gap-8 text-muted-foreground text-lg leading-relaxed">
        <p className="md:col-span-2">{t("about_text")}</p>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-border bg-card/50">
            <p className="text-sm text-muted-foreground">{t("about_location_label")}</p>
            <p className="text-foreground font-medium">{t("about_location_value")}</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card/50">
            <p className="text-sm text-muted-foreground">{t("about_languages_label")}</p>
            <p className="text-foreground font-medium">{t("about_languages_value")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
