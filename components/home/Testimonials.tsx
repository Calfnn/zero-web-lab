import SectionHeading from "@/components/SectionHeading";

// Placeholder until real reviews are available: a blurred skeleton (no text,
// so nothing fake ends up in the HTML) with a "Presto Disponibili" label.
export default function Testimonials() {
  return (
    <section className="overflow-hidden border-t border-accent/20 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading label="/ Testimonianze" title="Dicono di noi" align="center" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Giant decorative quote */}
          <span
            className="pointer-events-none absolute -left-4 -top-16 font-display text-[180px] leading-none text-accent opacity-20 md:-left-12"
            aria-hidden
          >
            &ldquo;
          </span>

          {/* Skeleton righe di citazione, sfocato */}
          <div className="flex select-none flex-col items-center gap-4 blur-[7px]" aria-hidden>
            <div className="h-6 w-full rounded-full bg-ink/20" />
            <div className="h-6 w-11/12 rounded-full bg-ink/20" />
            <div className="h-6 w-3/4 rounded-full bg-ink/20" />
            <div className="mt-6 h-7 w-48 rounded-full bg-accent/40" />
            <div className="h-4 w-32 rounded-full bg-ink/15" />
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-accent/30 bg-background/60 px-5 py-2 text-sm font-medium tracking-wide text-ink backdrop-blur-sm">
              Presto Disponibili
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
