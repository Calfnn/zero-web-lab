import Link from "next/link";
import ScrambleText from "@/components/ScrambleText";

// Reusable final call-to-action band used on inner pages.
export default function FinalCTA({
  title = "Hai un progetto in mente?",
  subtitle = "Raccontacelo. Trasformiamo la tua idea in realtà digitale.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-8 py-16 text-center md:py-20">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent opacity-20 blur-[120px]"
            aria-hidden
          />
          <ScrambleText
            as="h2"
            text={title}
            className="relative block font-display text-4xl uppercase tracking-wide text-ink sm:text-5xl md:text-6xl"
          />
          <p className="relative mx-auto mt-5 max-w-md text-muted">{subtitle}</p>
          <Link href="/contatti" className="btn-primary relative mt-8">
            Iniziamo →
          </Link>
        </div>
      </div>
    </section>
  );
}
