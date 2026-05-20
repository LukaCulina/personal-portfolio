import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Iskustvo" title="Profesionalni put">
      <div className="relative pl-8 border-l border-border">
        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />
        <div className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-display font-semibold flex items-center gap-2">
                <Briefcase size={18} className="text-primary" />
                Platform Build Specialist
              </h3>
              <p className="text-muted-foreground">Pliva Hrvatska d.o.o.</p>
            </div>
            <span className="text-sm text-muted-foreground px-3 py-1 rounded-full border border-border">
              07.2023 — danas
            </span>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            {[
              "Izrada i održavanje web stranica u CMS-u",
              "QA, UAT i sanity testiranje web stranica",
              "Implementacija SEO-a i praćenje performansi",
              "Priprema i obrada vizualnih materijala",
              "Izrada UTM QR kodova i linkova za analitiku",
              "Razvoj interaktivnih kvizova i Excel izvještaja",
              "Osnovna HTML i CSS implementacija",
              "Suradnja s međunarodnim timovima",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
