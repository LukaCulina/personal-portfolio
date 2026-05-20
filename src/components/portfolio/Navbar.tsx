import { useEffect, useState } from "react";
import { Moon, Sun, Languages } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export function Navbar() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const sections = [
    { id: "about", label: t("nav_about") },
    { id: "skills", label: t("nav_skills") },
    { id: "experience", label: t("nav_experience") },
    { id: "projects", label: t("nav_projects") },
    { id: "future", label: t("nav_future") },
    { id: "education", label: t("nav_education") },
    { id: "contact", label: t("nav_contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Luka<span className="text-gradient">.</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="story-link hover:text-foreground transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50 hover:bg-card text-xs font-medium transition-colors"
          >
            <Languages size={14} />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-border bg-card/50 hover:bg-card transition-colors"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md border border-border text-foreground"
          >
            <div className="w-4 h-[2px] bg-current mb-1" />
            <div className="w-4 h-[2px] bg-current mb-1" />
            <div className="w-4 h-[2px] bg-current" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <ul className="px-6 py-4 space-y-3 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
