import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "O meni" },
  { id: "skills", label: "Vještine" },
  { id: "experience", label: "Iskustvo" },
  { id: "projects", label: "Projekti" },
  { id: "future", label: "Buduće" },
  { id: "education", label: "Edukacija" },
  { id: "contact", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Luka<span className="text-gradient">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="story-link hover:text-foreground transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-border text-foreground"
        >
          <div className="w-4 h-[2px] bg-current mb-1" />
          <div className="w-4 h-[2px] bg-current mb-1" />
          <div className="w-4 h-[2px] bg-current" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
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
