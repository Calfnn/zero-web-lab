import Link from "next/link";
import ScrambleText from "@/components/ScrambleText";

export default function CTAStrip() {
  return (
    <section className="bg-accent py-24 text-ink md:py-32">
      <div className="container-page text-center">
        <ScrambleText
          as="h2"
          text="PRONTO A PARTIRE?"
          className="cursor-grow inline-block font-display text-5xl uppercase leading-[0.9] tracking-wide sm:text-7xl md:text-8xl"
        />
        <p className="mx-auto mt-6 max-w-md text-lg font-medium text-ink/70">
          Parliamo del tuo prossimo progetto.
        </p>
        <Link
          href="/contatti"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/85"
        >
          Scrivici ora →
        </Link>
      </div>
    </section>
  );
}
