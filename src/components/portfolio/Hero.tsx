import { Github, Mail, ArrowDown, Download } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { useApp } from "@/contexts/AppContext";

export function Hero() {
  const { t } = useApp();
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />
      <div
        className="absolute top-40 -right-32 w-[360px] h-[360px] rounded-full opacity-20 blur-3xl animate-blob"
        style={{ background: "var(--gradient-primary)", animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary shadow-glow" />
            {t("hero_available")}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            Luka <span className="text-gradient">Čulina</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            {t("hero_tagline")}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:scale-[1.03] transition-transform"
            >
              <Mail size={16} /> {t("hero_contact")}
            </a>
            <a
              href="/cv/Luka-Culina-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 bg-primary/10 text-foreground font-medium hover:bg-primary/20 transition-colors"
            >
              <Download size={16} /> {t("hero_cv")}
            </a>
            <a
              href="https://github.com/LukaCulina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card/50 hover:bg-card transition-colors"
            >
              <Github size={16} /> {t("hero_github")}
            </a>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end animate-float">
          <div
            className="absolute -inset-4 rounded-full opacity-60 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-border shadow-elegant">
            <img
              src={profile}
              alt="Luka Čulina"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
