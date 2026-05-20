import { useApp } from "@/contexts/AppContext";

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Luka Čulina. {t("footer_text")}
    </footer>
  );
}
