import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/progetti/ProjectsGrid";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Una selezione dei progetti realizzati da Zero Web Lab: web design, e-commerce e brand identity.",
};

export default function ProgettiPage() {
  return (
    <>
      <PageHero
        label="/ Portfolio"
        title="I nostri progetti"
        subtitle="Una selezione di lavori che raccontano il nostro approccio al digitale."
      />
      <ProjectsGrid />
      <FinalCTA
        title="Il prossimo sei tu?"
        subtitle="Mettiamo la stessa cura nel tuo progetto. Parliamone."
      />
    </>
  );
}
