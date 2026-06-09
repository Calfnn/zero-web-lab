import Link from "next/link";
import { contactInfo } from "@/lib/data";
import LogoMark from "./LogoMark";

const columns = [
  {
    title: "Pagine",
    links: [
      { label: "Home", href: "/" },
      { label: "Servizi", href: "/servizi" },
      { label: "Progetti", href: "/progetti" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    title: "Servizi",
    links: [
      { label: "Siti Vetrina & Landing Page", href: "/servizi" },
      { label: "Siti Web su Misura", href: "/servizi" },
      { label: "Pagina Google e SEO", href: "/servizi" },
      { label: "Manutenzione & Supporto", href: "/servizi" },
    ],
  },
  {
    title: "Contatti",
    links: [
      { label: contactInfo.email, href: `mailto:${contactInfo.email}` },
      { label: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
      { label: "Torino, IT", href: "/contatti" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-background">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-ink"
            >
              <LogoMark className="h-8 w-8 shrink-0" />
              <span className="font-display text-2xl uppercase tracking-ultra">
                ZERO<span className="text-accent">.</span>WEB LAB
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Trasformiamo idee in esperienze digitali memorabili. Web design,
              brand identity e sviluppo da Torino per tutto il mondo.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-ultra text-accent">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © 2025 Zero Web Lab — zeroweblab.it
          </p>
          <div className="flex gap-6">
            {contactInfo.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wide text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
