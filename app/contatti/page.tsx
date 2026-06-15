import type { Metadata } from "next";
import ContactForm from "@/components/contatti/ContactForm";
import Faq from "@/components/contatti/Faq";
import GeometricBackground from "@/components/GeometricBackground";
import CardReveal from "@/components/CardReveal";
import ScrambleText from "@/components/ScrambleText";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Parliamo del tuo prossimo progetto. Contatta Zero Web Lab a Cuneo per siti vetrina, siti su misura, pagina Google e supporto.",
};

export default function ContattiPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-48">
        {/* Decorative floating-shapes background */}
        <GeometricBackground variant="section" />
        <div
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-accent opacity-20 blur-[150px]"
          aria-hidden
        />

        <div className="container-page relative z-10 grid gap-16 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <p className="section-label">/ Contatti</p>
            <h1
              className="font-sans font-bold leading-[1.02] text-gradient"
              style={{ fontSize: "clamp(56px, 10vw, 130px)", letterSpacing: "-0.02em" }}
            >
              <ScrambleText as="span" text="Parliamo" />
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              Hai un&apos;idea, un progetto o semplicemente una domanda? Siamo
              qui per ascoltarti.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-ultra text-accent">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-sans font-bold text-2xl tracking-tight text-gradient transition-colors hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-ultra text-accent">Sede</p>
                <p className="font-sans font-bold text-2xl tracking-tight text-gradient">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {contactInfo.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/20 px-5 py-2 text-sm uppercase tracking-wide text-ink/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <CardReveal className="rounded-3xl border border-ink/10 bg-surface p-8 md:p-10">
            <h2 className="mb-8 font-sans font-bold text-3xl tracking-tight text-gradient">
              Scrivici
            </h2>
            <ContactForm />
          </CardReveal>
        </div>
      </section>

      <Faq />
    </>
  );
}
