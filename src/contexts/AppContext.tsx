import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "@/i18n/translations";

type Theme = "dark" | "light";

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  t: (key: TranslationKey) => string;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hr");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const storedLang = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const storedTheme = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    if (storedLang === "hr" || storedLang === "en") setLangState(storedLang);
    if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((p) => (p === "hr" ? "en" : "hr"));
  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState((p) => (p === "dark" ? "light" : "dark"));

  const t = (key: TranslationKey) => translations[lang][key] ?? translations.hr[key] ?? key;

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
