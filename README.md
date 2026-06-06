# Zero Web Lab

Sito web ufficiale di **Zero Web Lab** — agenzia di web design (zeroweblab.it).
Sito vetrina ad alto impatto visivo con animazioni avanzate, custom cursor, page transitions e micro-interazioni.

## Stack tecnologico

- **[Next.js 14](https://nextjs.org/)** (App Router) + **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com/)** — styling utility-first
- **[Framer Motion](https://www.framer.com/motion/)** — animazioni, page transition, layout animation
- **[GSAP](https://gsap.com/)** — animazioni avanzate dell'hero (stagger del titolo)
- **Google Fonts** — `Bebas Neue` (display/titoli) e `DM Sans` (body)

## Palette

Tema chiaro: sfondo bianco, accento verde lime, testo near-black.

| Ruolo                  | Colore                       |
| ---------------------- | ---------------------------- |
| Background             | `#FFFFFF`                    |
| Surface                | `#F4F4F4` / `#ECECEC`        |
| Testo (ink)            | `#0A0A0A` / muted `#555555`  |
| Accento primario       | `#89F336` (verde lime)       |
| Glow accento           | `rgba(137, 243, 54, 0.18)`   |
| Tile progetti (scure)  | `#1A1A1A` (stand-in foto)    |

## Avvio rapido

Requisiti: **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Altri comandi

```bash
npm run build   # build di produzione
npm run start   # avvia il server di produzione (dopo build)
npm run lint    # linting
```

## Struttura del progetto

```
zeroweb/
├── app/
│   ├── layout.tsx          # Layout condiviso: font, SEO, Navbar, Footer, cursor, transizioni
│   ├── globals.css         # Stili globali, utility custom, palette
│   ├── page.tsx            # Home
│   ├── servizi/page.tsx    # Pagina Servizi
│   ├── progetti/page.tsx   # Pagina Progetti (con filtri animati)
│   ├── contatti/page.tsx   # Pagina Contatti (form + FAQ)
│   ├── sitemap.ts          # Sitemap SEO
│   └── robots.ts           # robots.txt
├── components/
│   ├── Navbar.tsx          # Navbar sticky, blur su scroll, menu mobile slide-in
│   ├── Footer.tsx          # Footer con colonne e bordo gradiente
│   ├── CustomCursor.tsx    # Cursore personalizzato
│   ├── ScrollProgress.tsx  # Barra di progresso scroll
│   ├── LoadingScreen.tsx   # Schermata di caricamento lettera per lettera
│   ├── PageTransition.tsx  # Transizioni tra pagine (AnimatePresence)
│   ├── Marquee.tsx         # Ticker scorrevole
│   ├── SectionHeading.tsx  # Titoli sezione con reveal clip-path
│   ├── Reveal.tsx          # Wrapper scroll-reveal generico
│   ├── CountUp.tsx         # Numeri animati on-scroll
│   ├── Placeholder.tsx     # Placeholder immagini con texture noise
│   ├── home/               # Sezioni della home
│   ├── servizi/            # Componenti pagina servizi
│   ├── progetti/           # Griglia progetti con filtri
│   └── contatti/           # Form e FAQ
└── lib/
    └── data.ts             # Contenuti centralizzati (servizi, progetti, FAQ, ecc.)
```

## Funzionalità principali

- **Custom cursor** che si ingrandisce e cambia colore sugli elementi interattivi (solo desktop)
- **Loading screen** animata mostrata una volta per sessione
- **Page transitions** fade + slide tra le pagine
- **Scroll progress bar** in alto
- **Animazioni hero** con GSAP (stagger del titolo) e parallax su mousemove
- **Filtri progetti** con layout animation fluida (Framer Motion)
- **Form contatti** con floating label e stato loading → success
- **FAQ accordion** animato
- **SEO completo**: metadata, OpenGraph, sitemap, robots
- **Responsive** ottimizzato per mobile, tablet e desktop
- **Accessibilità**: rispetta `prefers-reduced-motion`

## Note

- Le immagini dei progetti sono placeholder con texture noise CSS: sostituiscile con immagini reali quando disponibili.
- Il form di contatto è simulato lato client (nessun backend): collega un endpoint o un servizio (es. Formspree, Resend) in `components/contatti/ContactForm.tsx`.

---

© 2025 Zero Web Lab — zeroweblab.it
