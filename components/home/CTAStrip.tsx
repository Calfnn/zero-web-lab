import Link from "next/link";
import ScrambleText from "@/components/ScrambleText";
import GeometricBackground from "@/components/GeometricBackground";

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden py-24 text-ink md:py-32">
      <GeometricBackground variant="section" />
      {/* Central indigo glow for emphasis */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-25 blur-[150px]"
        aria-hidden
      />

      <div className="container-page relative z-10 text-center">
        <ScrambleText
          as="h2"
          text="PRONTO A PARTIRE?"
          className="cursor-grow inline-block font-sans font-bold text-gradient text-5xl leading-[1.0] tracking-tight sm:text-7xl md:text-8xl"
        />
        <p className="mx-auto mt-6 max-w-md text-lg font-medium text-muted">
          Parliamo del tuo prossimo progetto.
        </p>
        <Link
          href="/contatti"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/85"
        >
          Scrivici ora →
        </Link>
      </div>
    </section>
  );
}
