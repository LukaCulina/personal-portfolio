import { Section } from "./Section";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";

export function Contact() {
  const { t } = useApp();
  const items: { icon: typeof Mail; labelKey: TranslationKey; value: string; href: string }[] = [
    { icon: Mail, labelKey: "contact_email", value: "luka.culina56@gmail.com", href: "mailto:luka.culina56@gmail.com" },
    { icon: Phone, labelKey: "contact_phone", value: "099 813 0523", href: "tel:+385998130523" },
    { icon: Github, labelKey: "contact_github", value: "LukaCulina", href: "https://github.com/LukaCulina" },
    { icon: MapPin, labelKey: "contact_address", value: "Nalješkovićeva 53, Zagreb", href: "https://maps.google.com/?q=Nalješkovićeva+53+Zagreb" },
  ];

  return (
    <Section id="contact" eyebrow={t("contact_eyebrow")} title={t("contact_title")}>
      <p className="text-muted-foreground text-lg max-w-2xl mb-10 -mt-6">{t("contact_intro")}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, labelKey, value, href }) => (
          <a
            key={labelKey}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
              <Icon size={20} />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t(labelKey)}</p>
            <p className="font-medium break-words">{value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
