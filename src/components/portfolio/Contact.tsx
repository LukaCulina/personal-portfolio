import { Section } from "./Section";
import { Mail, Phone, Github, MapPin } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "luka.culina56@gmail.com",
    href: "mailto:luka.culina56@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "099 813 0523",
    href: "tel:+385998130523",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "LukaCulina",
    href: "https://github.com/LukaCulina",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Nalješkovićeva 53, Zagreb",
    href: "https://maps.google.com/?q=Nalješkovićeva+53+Zagreb",
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Kontakt" title="Čujmo se.">
      <p className="text-muted-foreground text-lg max-w-2xl mb-10 -mt-6">
        Otvoren sam za nove prilike, suradnje i zanimljive projekte. Javite se na bilo koji način
        koji vam odgovara.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
              <Icon size={20} />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
            <p className="font-medium break-words">{value}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
