export type Lang = "hr" | "en";

const hr = {
  // Nav
  nav_about: "O meni",
  nav_skills: "Vještine",
  nav_experience: "Iskustvo",
  nav_projects: "Projekti",
  nav_future: "Buduće",
  nav_education: "Edukacija",
  nav_contact: "Kontakt",
  // Hero
  hero_available: "Dostupan za suradnju",
  hero_tagline:
    "Full-stack developer i Platform Build Specialist. Gradim moderna web rješenja koristeći React, Spring Boot i pažnju prema svakom detalju.",
  hero_contact: "Kontaktiraj me",
  hero_cv: "Preuzmi CV",
  hero_github: "GitHub",
  // About
  about_eyebrow: "O meni",
  about_title: "Fleksibilan, znatiželjan, posvećen.",
  about_text:
    "Fleksibilna osoba koja se lako prilagođava novim situacijama. Odgovoran i temeljit, uživam u stjecanju novih znanja i unaprjeđenju postojećih vještina. Spreman na timski rad i smatram da je komunikacija ključ uspješne suradnje s kolegama. Rado prihvaćam nove izazove koji potiču daljnji rast.",
  about_location_label: "Lokacija",
  about_location_value: "Zagreb, Hrvatska",
  about_languages_label: "Jezici",
  about_languages_value: "Engleski C1/C2 · Njemački A2",
  // Skills
  skills_eyebrow: "Vještine",
  skills_title: "Tehnologije s kojima radim",
  skills_frontend: "Frontend",
  skills_backend: "Backend i baze",
  skills_design: "Dizajn",
  skills_tools: "Alati",
  // Experience
  exp_eyebrow: "Iskustvo",
  exp_title: "Profesionalni put",
  exp_role: "Platform Build Specialist",
  exp_company: "Pliva Hrvatska d.o.o.",
  exp_period: "07.2023 — danas",
  exp_b1: "Izrada i održavanje web stranica u CMS-u",
  exp_b2: "QA, UAT i sanity testiranje web stranica",
  exp_b3: "Implementacija SEO-a i praćenje performansi",
  exp_b4: "Priprema i obrada vizualnih materijala",
  exp_b5: "Izrada UTM QR kodova i linkova za analitiku",
  exp_b6: "Razvoj interaktivnih kvizova i Excel izvještaja",
  exp_b7: "Osnovna HTML i CSS implementacija",
  exp_b8: "Suradnja s međunarodnim timovima",
  // Projects
  proj_eyebrow: "Projekti",
  proj_title: "Stvari koje sam izgradio",
  proj_tm_desc:
    "Desktop implementacija popularne društvene igre s naprednom logikom poteza i UI-em u JavaFX-u.",
  proj_pom_desc:
    "Minimalistički produktivnosti tajmer s konfigurabilnim ciklusima rada i pauze.",
  proj_snake_desc: "Klasična Snake igra napisana u čistom JavaScriptu uz Canvas API.",
  proj_trek_desc:
    "Full-stack aplikacija s React frontendom koji konzumira RESTful API izgrađen na Spring Bootu.",
  proj_film_desc:
    "Responzivna React aplikacija koja integrira eksterni API za upravljanje filmskim podacima.",
  proj_tech_desc:
    "Erasmus+ BIP projekt fokusiran na digitalne kolaboracijske alate i analizu podataka pomoću LLM-ova.",
  // Future
  future_eyebrow: "Uskoro",
  future_title: "Buduće ideje u izradi",
  future_in_dev: "U razvoju",
  future_finance: "Finance Tracker",
  future_finance_desc:
    "Aplikacija za praćenje osobnih financija s vizualizacijom troškova, budžetima, kategorijama i mjesečnim izvještajima. Cilj je čist UX i jasan uvid u potrošnju u realnom vremenu.",
  future_more_title: "Više dolazi…",
  future_more_desc: "Uvijek otvoren za nove ideje i suradnje.",
  // Education
  edu_eyebrow: "Edukacija",
  edu_title: "Akademski put",
  edu_master_title: "Master of Engineering in Information Technology",
  edu_master_org: "Zagreb University of Applied Sciences",
  edu_master_period: "09.2023 — danas",
  edu_erasmus_title: "Erasmus+ razmjena — Digital Sciences (MA)",
  edu_erasmus_org: "Cologne University of Applied Sciences",
  edu_erasmus_period: "10.2024 — 02.2025",
  // Contact
  contact_eyebrow: "Kontakt",
  contact_title: "Čujmo se.",
  contact_intro:
    "Otvoren sam za nove prilike, suradnje i zanimljive projekte. Javite se na bilo koji način koji vam odgovara.",
  contact_email: "Email",
  contact_phone: "Telefon",
  contact_github: "GitHub",
  contact_address: "Adresa",
  // Footer
  footer_text: "Izrađeno s pažnjom prema detaljima.",
} as const;

const en: Record<keyof typeof hr, string> = {
  nav_about: "About",
  nav_skills: "Skills",
  nav_experience: "Experience",
  nav_projects: "Projects",
  nav_future: "Future",
  nav_education: "Education",
  nav_contact: "Contact",

  hero_available: "Available for work",
  hero_tagline:
    "Full-stack developer and Platform Build Specialist. I build modern web experiences with React, Spring Boot, and attention to every detail.",
  hero_contact: "Contact me",
  hero_cv: "Download CV",
  hero_github: "GitHub",

  about_eyebrow: "About",
  about_title: "Adaptable, curious, dedicated.",
  about_text:
    "A flexible person who adapts easily to new situations. Responsible and thorough, I enjoy learning and improving existing skills. I'm a team player and believe communication is the key to successful collaboration. I welcome new challenges that drive growth.",
  about_location_label: "Location",
  about_location_value: "Zagreb, Croatia",
  about_languages_label: "Languages",
  about_languages_value: "English C1/C2 · German A2",

  skills_eyebrow: "Skills",
  skills_title: "Technologies I work with",
  skills_frontend: "Frontend",
  skills_backend: "Backend & DB",
  skills_design: "Design",
  skills_tools: "Tools",

  exp_eyebrow: "Experience",
  exp_title: "Professional journey",
  exp_role: "Platform Build Specialist",
  exp_company: "Pliva Hrvatska d.o.o.",
  exp_period: "07.2023 — present",
  exp_b1: "Building and maintaining websites in the CMS",
  exp_b2: "QA, UAT and sanity testing of web pages",
  exp_b3: "SEO implementation and performance monitoring",
  exp_b4: "Preparing and processing visual assets",
  exp_b5: "Creating UTM QR codes and tracking links",
  exp_b6: "Developing interactive quizzes and Excel reports",
  exp_b7: "Basic HTML and CSS implementation",
  exp_b8: "Collaborating with international teams",

  proj_eyebrow: "Projects",
  proj_title: "Things I've built",
  proj_tm_desc:
    "Desktop implementation of the popular board game with advanced turn logic and a JavaFX UI.",
  proj_pom_desc:
    "Minimalist productivity timer with configurable work and break cycles.",
  proj_snake_desc: "Classic Snake game written in plain JavaScript with the Canvas API.",
  proj_trek_desc:
    "Full-stack app with a React frontend consuming a RESTful API built on Spring Boot.",
  proj_film_desc:
    "Responsive React app integrating an external API for managing movie data.",
  proj_tech_desc:
    "Erasmus+ BIP project focused on digital collaboration tools and data analysis with LLMs.",

  future_eyebrow: "Coming soon",
  future_title: "Ideas in the making",
  future_in_dev: "In development",
  future_finance: "Finance Tracker",
  future_finance_desc:
    "Personal finance app with expense visualisation, budgets, categories and monthly reports. Focused on clean UX and real-time insight into spending.",
  future_more_title: "More to come…",
  future_more_desc: "Always open to new ideas and collaborations.",

  edu_eyebrow: "Education",
  edu_title: "Academic journey",
  edu_master_title: "Master of Engineering in Information Technology",
  edu_master_org: "Zagreb University of Applied Sciences",
  edu_master_period: "09.2023 — present",
  edu_erasmus_title: "Erasmus+ Exchange — Digital Sciences (MA)",
  edu_erasmus_org: "Cologne University of Applied Sciences",
  edu_erasmus_period: "10.2024 — 02.2025",

  contact_eyebrow: "Contact",
  contact_title: "Let's talk.",
  contact_intro:
    "I'm open to new opportunities, collaborations and interesting projects. Reach out in whichever way suits you.",
  contact_email: "Email",
  contact_phone: "Phone",
  contact_github: "GitHub",
  contact_address: "Address",

  footer_text: "Crafted with attention to detail.",
};

export type TranslationKey = keyof typeof hr;
export const translations: Record<Lang, Record<TranslationKey, string>> = { hr, en };
