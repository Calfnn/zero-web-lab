import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/servizi/ServiceCard";
import ProcessSteps from "@/components/servizi/ProcessSteps";
import FinalCTA from "@/components/FinalCTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Landing page, siti vetrina e siti custom: scopri i pacchetti di Zero Web Lab, dalla pagina singola alle funzionalità su misura.",
  alternates: { canonical: "/servizi" },
};

export default function ServiziPage() {
  return (
    <>
      <PageHero
        label="/ Servizi"
        title="I nostri servizi"
        subtitle="Dalla strategia al lancio: tutto ciò che serve per portare il tuo brand online con stile."
      />

      <section className="pb-8">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </section>

      <ProcessSteps />

      <FinalCTA
        title="Pronto a partire?"
        subtitle="Scegli il servizio giusto per te. Ti guidiamo noi nel resto."
      />
    </>
  );
}
