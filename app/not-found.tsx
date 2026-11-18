import type { Metadata } from "next";
import Link from "next/link";
import GeometricBackground from "@/components/GeometricBackground";

// Next already adds `noindex` to 404 responses.
export const metadata: Metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-40">
      <GeometricBackground variant="section" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent opacity-20 blur-[150px]"
        aria-hidden
      />

      <div className="container-page relative z-10 text-center">
        <p className="section-label">/ Errore 404</p>
        <h1
          className="font-sans font-bold leading-none text-gradient"
          style={{ fontSize: "clamp(96px, 22vw, 260px)", letterSpacing: "-0.04em" }}
        >
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          Questa pagina non esiste o è stata spostata. Torna alla home o
          scrivici: ti aiutiamo a trovare quello che cerchi.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Torna alla home →
          </Link>
          <Link href="/contatti" className="btn-ghost">
            Contattaci
          </Link>
        </div>
      </div>
    </section>
  );
}
