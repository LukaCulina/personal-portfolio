
## Portfolio za Luku Čulinu

Jedna elegantna stranica (single-route portfolio) s glatkim animacijama, modernim fontom koji podržava hrvatske dijakritike (Č, Ć, Š, Đ, Ž), responzivnim layoutom i prigodnim Lucide ikonama.

### Dizajn pravac
- **Stil**: Moderni minimalizam s "klasom" – tamna pozadina (deep navy/charcoal) s suptilnim gradijentima i glow akcentom (oklch tokeni u `src/styles.css`).
- **Tipografija**: `Plus Jakarta Sans` (body) + `Space Grotesk` (headings) – oba fully support hrvatske znakove (Č, ć, š, đ, ž). Učitano kao Google Font link u root head.
- **Animacije**: Suptilno – fade/slide-up na scroll (IntersectionObserver), hover scale na karticama, gradient blob u heru, animated underline na linkovima. Bez pretjerivanja.

### Struktura (jedna ruta `/` – portfolio je single-page jer sve sekcije pripadaju jednoj osobi)
1. **Navbar** – sticky, smooth scroll do sekcija (#about, #skills, #experience, #projects, #education, #contact).
2. **Hero** – velika slika (kopija `106603546.jpg` u `src/assets/profile.jpg`), ime "Luka Čulina", role tagline, CTA dugmad (Contact, GitHub), socijalne ikone.
3. **About me** – kratki tekst iz CV-a.
4. **Skills** – grid kartica s tehnologijama (JavaScript/React, Java/Spring Boot/JavaFX, HTML, CSS, SQL, Figma, Canva, MS Office) + jezici (EN C1/C2, DE A2).
5. **Experience** – timeline: Platform Build Specialist @ Pliva Hrvatska (07.2023 – danas) s bullet pointima.
6. **Projects** – grid kartice:
   - Terraforming Mars (JavaFX)
   - Pomodoro (JavaScript)
   - Snake Game (JavaScript)
   - TrekTrip (Full-Stack React + Spring Boot)
   - FilmStar (React)
   - Tech4Society (Erasmus+ BIP)
   Svaka kartica: naslov, opis, tech tagovi, GitHub link ikona.
7. **Future Projects** – posebna sekcija s "Coming soon" stilom: **Finance Tracker** kartica s napomenom.
8. **Education** – Master @ Zagreb University of Applied Sciences + Erasmus+ Cologne.
9. **Contact** – kartice s ikonama: Mail (luka.culina56@gmail.com), Phone (099 813 0523), GitHub (LukaCulina), Location (Nalješkovićeva 53).
10. **Footer** – copyright s imenom.

### Tehnička provedba
- `src/routes/index.tsx` – zamijeniti placeholder; renderirati `<Portfolio />`.
- Komponente u `src/components/portfolio/`: `Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `FutureProjects.tsx`, `Education.tsx`, `Contact.tsx`, `Footer.tsx`.
- `src/hooks/use-reveal.ts` – IntersectionObserver hook za scroll fade-in.
- `src/styles.css` – proširiti tokens: dark theme as default (tamna pozadina, gradient-primary, shadow-elegant, glow akcent). Dodati Google Fonts `@import` na vrh ili putem `<link>` u `__root.tsx` head.
- `src/assets/profile.jpg` – kopija user-uploaded slike.
- SEO meta u `src/routes/index.tsx` head: title "Luka Čulina – Portfolio", description, og tagovi.
- Lucide ikone: `Github`, `Mail`, `Phone`, `MapPin`, `ExternalLink`, `Code2`, `Briefcase`, `GraduationCap`, `Sparkles`, `Rocket`.

### Što nije uključeno
- Bez backend / Lovable Cloud (statički portfolio).
- Bez blog/CMS-a.
- Bez forme za slanje poruka (samo `mailto:` link) – može se dodati naknadno ako treba.
