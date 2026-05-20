import { createFileRoute } from "@tanstack/react-router";
import { AppProvider } from "@/contexts/AppContext";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { FutureProjects } from "@/components/portfolio/FutureProjects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luka Čulina — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Luka Čulina — full-stack developer and Platform Build Specialist. React, Spring Boot, JavaFX and modern web solutions.",
      },
      { property: "og:title", content: "Luka Čulina — Portfolio" },
      { property: "og:description", content: "Full-stack developer. Projects, experience and contact." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FutureProjects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </AppProvider>
  );
}
