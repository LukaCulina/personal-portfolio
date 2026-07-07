export type Lang = "en" | "hr";

const en = {
	nav_about: "About",
	nav_skills: "Skills",
	nav_experience: "Experience",
	nav_projects: "Projects",
	nav_future: "Future",
	nav_initiatives: "Initiatives",
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
	exp_b1: "Manage corporate websites via CMS, applying HTML/CSS and editing visual materials.",
	exp_b2: "Conduct QA, UAT, and sanity testing.",
	exp_b3: "Implement SEO and track analytics via custom UTM links and Excel reporting.",
	exp_b4: "Develop interactive digital content in collaboration with international teams.",

	exp_sofa_role: "Frontend Developer",
    exp_sofa_company: "Sofascore Academy",
    exp_sofa_period: "03.2026 — 06.2026",
    exp_sofa_b1: "Selected for a highly competitive mentorship program.",
    exp_sofa_b2: "Simulated a real-world Agile environment with sprint planning, standups, code reviews, and iterative delivery.",
    exp_sofa_b3: "Built a full-featured canteen management app for employees using React, TypeScript, Zustand, SWR, and Panda CSS.",
    exp_sofa_b4: "Collaborated closely with senior engineers, receiving structured feedback throughout the development cycle.",

	proj_eyebrow: "Projects",
	proj_title: "Things I've built",
	proj_canteen_title: "SofaScore Canteen",
	proj_canteen_desc: "Internal canteen management application developed during the SofaScore Academy, featuring real-time data fetching, meal planning, and order tracking.",
	proj_film_title: "FilmStar",
	proj_film_desc: "Responsive React app integrating an external API for managing movie data.",
	proj_trek_title: "TrekTrip",
	proj_trek_desc: "Full-stack app with a React frontend consuming a RESTful API built on Spring Boot.",
	proj_tm_title: "Terraforming Mars",
	proj_tm_desc: "Desktop implementation of the popular board game with advanced turn logic and a JavaFX UI.",
	proj_pom_title: "Pomodoro Timer",
	proj_pom_desc: "Minimalist productivity timer with configurable work and break cycles.",
	proj_snake_title: "Snake Game",
	proj_snake_desc: "Classic Snake game written in plain JavaScript with the Canvas API.",
	proj_tech_title: "Erasmus+ BIP",
	proj_tech_desc: "Project focused on digital collaboration tools and data analysis with LLMs.",

	future_eyebrow: "Coming soon",
	future_title: "Ideas in the making",
	future_in_dev: "In development",
	future_finance: "Finance Tracker",
	future_finance_desc:
		"Personal finance app with expense visualisation, budgets, categories and monthly reports. Focused on clean UX and real-time insight into spending.",
	future_more_title: "More to come…",
	future_more_desc: "Always open to new ideas and collaborations.",
	initiatives_eyebrow: "Professional Development",
	initiatives_title: "Academies & Initiatives",
	prog_sofa_title: "Sofascore Frontend Academy",
	prog_sofa_desc:
		"Real-world Agile/Scrum experience. Developed frontend features using React and TypeScript through structured sprints and code reviews.",
	prog_incubator_title: "Digital Innovation Incubator",
	prog_incubator_desc:
		"Competition answering 'How to bring Jamnica to youth'. Developed a digital solution and consumer experience, presented via a Figma prototype.",
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

const hr: Record<keyof typeof en, string> = {
	// Nav
	nav_about: "O meni",
	nav_skills: "Vještine",
	nav_experience: "Iskustvo",
	nav_projects: "Projekti",
	nav_future: "Buduće",
	nav_initiatives: "Inicijative",
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
	exp_b1: "Upravljanje korporativnim web stranicama putem CMS-a, uz primjenu HTML/CSS-a i uređivanje vizualnih materijala.",
	exp_b2: "Provođenje QA, UAT i sanity testiranja.",
	exp_b3: "Implementacija SEO strategija i praćenje analitike putem prilagođenih UTM poveznica i izvještavanja u Excelu.",
	exp_b4: "Razvijanje interaktivnog digitalnog sadržaja u suradnji s međunarodnim timovima.",
	
	exp_sofa_role: "Frontend Developer",
    exp_sofa_company: "Sofascore Academy",
    exp_sofa_period: "03.2026 — 06.2026", 
    exp_sofa_b1: "Odabran u visoko konkurentan mentorski program.",
    exp_sofa_b2: "Simulirao stvarno Agile okruženje kroz planiranje sprinteva, standup sastanke, recenzije koda (code reviews) i iterativnu isporuku.",
    exp_sofa_b3: "Izgradio funkcionalnu aplikaciju za upravljanje zaposleničkom menzom koristeći React, TypeScript, Zustand, SWR i Panda CSS.",
    exp_sofa_b4: "Blisko surađivao sa starijim inženjerima, primajući strukturirane povratne informacije tijekom cijelog razvojnog ciklusa.",
	// Projects
	proj_eyebrow: "Projekti",
	proj_canteen_title: "SofaScore Kantina",
	proj_canteen_desc: "Interna aplikacija za upravljanje kantinom razvijena u sklopu SofaScore akademije, s fokusom na dohvat podataka u stvarnom vremenu i planiranje obroka.",
	proj_film_title: "FilmStar",
	proj_film_desc: "Responzivna React aplikacija koja integrira vanjski API za upravljanje podacima o filmovima.",
	proj_trek_title: "TrekTrip",
	proj_trek_desc: "Full-stack aplikacija s React sučeljem koja koristi RESTful API temeljen na Spring Boot-u.",
	proj_tm_title: "Terraforming Mars",
	proj_tm_desc: "Desktop implementacija popularne društvene igre s naprednom logikom poteza i JavaFX sučeljem.",
	proj_pom_title: "Pomodoro Timer",
	proj_pom_desc: "Minimalistički tajmer za produktivnost s podesivim ciklusima rada i odmora.",
	proj_snake_title: "Zmijica",
	proj_snake_desc: "Klasična igra Zmijica napisana u čistom JavaScriptu koristeći Canvas API.",
	proj_tech_title: "Erasmus+ BIP",
	proj_tech_desc: "Projekt fokusiran na alate za digitalnu suradnju i analizu podataka pomoću LLM-ova.",
	// Future
	future_eyebrow: "Uskoro",
	future_title: "Buduće ideje u izradi",
	future_in_dev: "U razvoju",
	future_finance: "Finance Tracker",
	future_finance_desc:
		"Aplikacija za praćenje osobnih financija s vizualizacijom troškova, budžetima, kategorijama i mjesečnim izvještajima. Cilj je čist UX i jasan uvid u potrošnju u realnom vremenu.",
	future_more_title: "Više dolazi…",
	future_more_desc: "Uvijek otvoren za nove ideje i suradnje.",
	//initiatives
	initiatives_eyebrow: "Profesionalni razvoj",
	initiatives_title: "Akademije i inicijative",
	prog_sofa_title: "Sofascore Frontend Academy",
	prog_sofa_desc:
		"Rad u stvarnom Agile/Scrum okruženju. Razvoj frontend funkcionalnosti pomoću Reacta i TypeScripta kroz sprinteve i code review.",
	prog_incubator_title: "Digitalni inovacijski inkubator",
	prog_incubator_desc:
		"Natjecanje s temom 'Kako približiti Jamnicu mladima'. Razvoj idejnog rješenja i potrošačkog iskustva, prezentirano kroz Figma prototip.",
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
};

export type TranslationKey = keyof typeof en;
export const translations: Record<Lang, Record<TranslationKey, string>> = {
	en,
	hr,
};
