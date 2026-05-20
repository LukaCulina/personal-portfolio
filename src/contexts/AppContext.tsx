import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import {
	type Lang,
	type TranslationKey,
	translations,
} from "@/i18n/translations";

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
	const [lang, setLangState] = useState<Lang>(() => {
		if (typeof window !== "undefined") {
			const storedLang = localStorage.getItem("lang");
			if (storedLang === "hr" || storedLang === "en") return storedLang as Lang;
		}
		return "en";
	});
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme === "dark" || storedTheme === "light")
				return storedTheme as Theme;
		}
		return "dark";
	});

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
	const toggleTheme = () =>
		setThemeState((p) => (p === "dark" ? "light" : "dark"));

	const t = (key: TranslationKey) =>
		translations[lang][key] ?? translations.en[key] ?? key;

	return (
		<AppContext.Provider
			value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme, t }}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useApp() {
	const ctx = useContext(AppContext);
	if (!ctx) throw new Error("useApp must be used within AppProvider");
	return ctx;
}
