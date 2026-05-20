import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="py-24 px-6">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <div className="mb-12">
          {eyebrow && (
            <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
