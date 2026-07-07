import { ExternalLink, Github } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import type { TranslationKey } from "@/i18n/translations";
import { Section } from "./Section";

export function Projects() {
	const { t } = useApp();
	const projects: {
		nameKey: TranslationKey;
		descKey: TranslationKey;
		tags: string[];
		githubUrl?: string;
		liveUrl?: string;
	}[] = [
		{
			nameKey: "proj_canteen_title",
			descKey: "proj_canteen_desc",
			tags: ["TypeScript", "React", "TanStack Router", "SWR", "Panda CSS"],
			githubUrl: "https://github.com/LukaCulina/sofascore-canteen",
			liveUrl: "https://sofascore-canteen.vercel.app/",
		},
		{
			nameKey: "proj_film_title",
			descKey: "proj_film_desc",
			tags: ["React", "API"],
			githubUrl: "https://github.com/LukaCulina/FilmStar",
			liveUrl: "https://film-star.vercel.app/",
		},
		{
			nameKey: "proj_trek_title",
			descKey: "proj_trek_desc",
			tags: ["React", "Spring Boot", "REST"],
			githubUrl: "https://github.com/LukaCulina/TrekTrip",
			liveUrl: "https://trek-trip.vercel.app/",
		},
		{
			nameKey: "proj_tm_title",
			descKey: "proj_tm_desc",
			tags: ["Java", "JavaFX"],
			githubUrl: "https://github.com/LukaCulina/Terraforming-Mars",
		},
		{
			nameKey: "proj_pom_title",
			descKey: "proj_pom_desc",
			tags: ["JavaScript", "HTML", "CSS"],
			githubUrl: "https://github.com/LukaCulina/Pomodoro",
			liveUrl: "https://lukaculina.github.io/Pomodoro/",
		},
		{
			nameKey: "proj_snake_title",
			descKey: "proj_snake_desc",
			tags: ["JavaScript", "Canvas"],
			githubUrl: "https://github.com/LukaCulina/Zmijica",
			liveUrl: "https://lukaculina.github.io/Zmijica/",
		},
	];

	return (
		<Section id="projects" eyebrow={t("proj_eyebrow")} title={t("proj_title")}>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{projects.map((p) => (
					<div
						key={p.nameKey}
						className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant overflow-hidden flex flex-col"
					>
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
							style={{
								background:
									"radial-gradient(400px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
							}}
							aria-hidden
						/>

						<div className="relative flex-1 flex flex-col">
							<div className="flex items-start justify-between mb-3">
								<a
									href={p.liveUrl || p.githubUrl}
									target="_blank"
									rel="noreferrer"
									className="font-display text-lg font-semibold group-hover:text-primary transition-colors"
								>
									{t(p.nameKey)}
								</a>

								<div className="flex items-center gap-3 text-muted-foreground">
									{p.githubUrl && (
										<a
											href={p.githubUrl}
											target="_blank"
											rel="noreferrer"
											className="hover:text-primary transition-colors z-10"
											aria-label="GitHub Repository"
										>
											<Github size={18} />
										</a>
									)}

									{p.liveUrl && (
										<a
											href={p.liveUrl}
											target="_blank"
											rel="noreferrer"
											className="hover:text-primary transition-colors z-10"
											aria-label="Live Demo"
										>
											<ExternalLink size={18} />
										</a>
									)}
								</div>
							</div>

							<p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
								{t(p.descKey)}
							</p>

							<div className="flex flex-wrap gap-1.5">
								{p.tags.map((tag) => (
									<span
										key={tag}
										className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}
