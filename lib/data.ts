// Centralized content data for Zero Web Lab.
// Keeps copy and lists in one place so pages stay declarative.

export type Service = {
  num: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    num: "01",
    title: "Web Design & Sviluppo",
    short: "Siti su misura, veloci e scalabili.",
    description:
      "Progettiamo e sviluppiamo siti web performanti con tecnologie moderne, ottimizzati per ogni dispositivo.",
    bullets: ["Next.js & React", "Animazioni avanzate", "Headless CMS", "Hosting & deploy"],
  },
  {
    num: "02",
    title: "UI/UX Design",
    short: "Interfacce intuitive e memorabili.",
    description:
      "Studiamo ogni interazione per creare esperienze fluide, accessibili e orientate alla conversione.",
    bullets: ["User research", "Wireframe & prototipi", "Design system", "Usability testing"],
  },
  {
    num: "03",
    title: "Brand Identity",
    short: "Identità visive che restano impresse.",
    description:
      "Costruiamo brand coerenti: logo, palette, tipografia e linee guida che raccontano chi sei.",
    bullets: ["Logo & marchio", "Palette & tipografia", "Brand guidelines", "Asset coordinati"],
  },
  {
    num: "04",
    title: "E-Commerce",
    short: "Negozi online che vendono davvero.",
    description:
      "Realizziamo store performanti con checkout ottimizzati, gestione prodotti e integrazioni di pagamento.",
    bullets: ["Shopify & headless", "Checkout ottimizzato", "Gestione catalogo", "Pagamenti sicuri"],
  },
  {
    num: "05",
    title: "SEO & Performance",
    short: "Visibilità e velocità ai massimi livelli.",
    description:
      "Ottimizziamo ogni dettaglio tecnico per scalare le SERP e garantire caricamenti istantanei.",
    bullets: ["SEO tecnica", "Core Web Vitals", "Content strategy", "Analytics & report"],
  },
  {
    num: "06",
    title: "Manutenzione & Supporto",
    short: "Il tuo sito sempre al top.",
    description:
      "Aggiornamenti, monitoraggio e assistenza continua per mantenere il progetto sicuro e aggiornato.",
    bullets: ["Aggiornamenti", "Backup & sicurezza", "Monitoraggio uptime", "Supporto dedicato"],
  },
];

export type Project = {
  title: string;
  category: "Web Design" | "E-Commerce" | "Branding";
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Nordic Atelier",
    category: "Web Design",
    year: "2025",
    description: "Sito vetrina per studio di architettura scandinavo.",
  },
  {
    title: "Verde Market",
    category: "E-Commerce",
    year: "2025",
    description: "Store bio con checkout one-page e abbonamenti.",
  },
  {
    title: "Lumen Studio",
    category: "Branding",
    year: "2024",
    description: "Identità completa per studio fotografico.",
  },
  {
    title: "Flux Finance",
    category: "Web Design",
    year: "2024",
    description: "Landing per fintech con dashboard interattiva.",
  },
  {
    title: "Botanica Shop",
    category: "E-Commerce",
    year: "2024",
    description: "Marketplace di piante rare e accessori.",
  },
  {
    title: "Orbit Agency",
    category: "Branding",
    year: "2023",
    description: "Rebrand per agenzia di comunicazione.",
  },
  {
    title: "Pulse Fitness",
    category: "Web Design",
    year: "2023",
    description: "Piattaforma per palestre con prenotazioni online.",
  },
  {
    title: "Aurora Cosmetics",
    category: "E-Commerce",
    year: "2023",
    description: "Beauty store premium con configuratore prodotto.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Zero Web Lab ha trasformato la nostra presenza online. Risultati oltre ogni aspettativa, e un team che ascolta davvero.",
    name: "Giulia Ferrari",
    role: "CEO, Nordic Atelier",
  },
  {
    quote:
      "Professionalità, creatività e tempi rispettati. Le conversioni del nostro store sono raddoppiate in tre mesi.",
    name: "Marco Bianchi",
    role: "Founder, Verde Market",
  },
  {
    quote:
      "Hanno capito il nostro brand meglio di noi. Ogni dettaglio del sito comunica esattamente ciò che volevamo.",
    name: "Sara Conti",
    role: "Art Director, Lumen Studio",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description: "Analizziamo obiettivi, mercato e pubblico per definire la strategia.",
  },
  {
    num: "02",
    title: "Design",
    description: "Diamo forma all'identità con wireframe, mockup e prototipi interattivi.",
  },
  {
    num: "03",
    title: "Sviluppo",
    description: "Trasformiamo il design in codice pulito, veloce e scalabile.",
  },
  {
    num: "04",
    title: "Launch",
    description: "Pubblichiamo, ottimizziamo e ti accompagniamo nella crescita.",
  },
];

export const faqs = [
  {
    question: "Quanto costa un sito web?",
    answer:
      "Ogni progetto è unico. Il prezzo dipende da complessità, funzionalità e tempistiche. Dopo una prima call ti inviamo un preventivo dettagliato e trasparente.",
  },
  {
    question: "Quanto tempo serve per realizzare un progetto?",
    answer:
      "Un sito vetrina richiede in media 3-4 settimane, un e-commerce 6-8 settimane. Le tempistiche esatte le definiamo insieme nella fase di Discovery.",
  },
  {
    question: "Offrite assistenza dopo il lancio?",
    answer:
      "Sì. Proponiamo piani di manutenzione e supporto continuativo per aggiornamenti, sicurezza e nuove funzionalità.",
  },
  {
    question: "Lavorate con clienti fuori Milano?",
    answer:
      "Assolutamente. Collaboriamo con clienti in tutta Italia e all'estero, gestendo l'intero processo da remoto in modo fluido.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/progetti", label: "Progetti" },
  { href: "/contatti", label: "Contatti" },
];

export const contactInfo = {
  email: "ciao@zeroweblab.it",
  phone: "+39 02 1234 5678",
  address: "Via del Design 42, Milano, IT",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};
