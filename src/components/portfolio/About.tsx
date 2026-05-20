import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="O meni" title="Fleksibilan, znatiželjan, posvećen.">
      <div className="grid md:grid-cols-3 gap-8 text-muted-foreground text-lg leading-relaxed">
        <p className="md:col-span-2">
          Fleksibilna osoba koja se lako prilagođava novim situacijama. Odgovoran i temeljit,
          uživam u stjecanju novih znanja i unaprjeđenju postojećih vještina. Spreman na timski
          rad i smatram da je komunikacija ključ uspješne suradnje s kolegama. Rado prihvaćam
          nove izazove koji potiču daljnji rast.
        </p>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-border bg-card/50">
            <p className="text-sm text-muted-foreground">Lokacija</p>
            <p className="text-foreground font-medium">Zagreb, Hrvatska</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card/50">
            <p className="text-sm text-muted-foreground">Jezici</p>
            <p className="text-foreground font-medium">Engleski C1/C2 · Njemački A2</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
