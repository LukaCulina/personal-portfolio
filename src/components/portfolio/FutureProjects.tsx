import { Section } from "./Section";
import { Rocket, Sparkles } from "lucide-react";

export function FutureProjects() {
  return (
    <Section id="future" eyebrow="Uskoro" title="Buduće ideje u izradi">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="relative p-8 rounded-2xl border border-border bg-card/50 overflow-hidden group hover:shadow-elegant transition-all duration-500">
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                <Rocket size={20} />
              </div>
              <span className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary uppercase tracking-wider">
                U razvoju
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold mb-3">Finance Tracker</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aplikacija za praćenje osobnih financija s vizualizacijom troškova, budžetima,
              kategorijama i mjesečnim izvještajima. Cilj je čist UX i jasan uvid u potrošnju
              u realnom vremenu.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-dashed border-border bg-card/20 flex flex-col justify-center text-center">
          <Sparkles size={24} className="mx-auto text-primary mb-3" />
          <h3 className="font-display text-lg font-semibold mb-2">Više dolazi…</h3>
          <p className="text-sm text-muted-foreground">
            Uvijek otvoren za nove ideje i suradnje.
          </p>
        </div>
      </div>
    </Section>
  );
}
