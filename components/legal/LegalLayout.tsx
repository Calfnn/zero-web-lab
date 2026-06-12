import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";

type Props = {
  label: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

// Shared wrapper for legal pages (privacy, cookie) — consistent typography
// using the site's color tokens. Styles the raw <h2>/<p>/<ul> children.
export default function LegalLayout({ label, title, lastUpdated, children }: Props) {
  return (
    <>
      <PageHero label={label} title={title} />
      <section className="pb-24 md:pb-32">
        <div
          className="container-page max-w-3xl
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-ink
            [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink
            [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-muted
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
            [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted
            [&_li]:leading-relaxed
            [&_strong]:text-ink"
        >
          <p className="mb-10 text-sm uppercase tracking-wide text-muted">
            Ultimo aggiornamento: {lastUpdated}
          </p>
          {children}
        </div>
      </section>
    </>
  );
}
