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
    title: "Siti Vetrina & Landing Page",
    short: "La tua presenza online, curata nei dettagli.",
    description:
      "Progettiamo siti vetrina e landing page veloci ed efficaci, pensate per presentare la tua attività e convertire i visitatori in clienti.",
    bullets: ["Design su misura", "Ottimizzati per mobile", "Veloci e leggeri", "Pronti a convertire"],
  },
  {
    num: "02",
    title: "Siti Web su Misura",
    short: "Progetti più elaborati e funzionalità avanzate.",
    description:
      "Sviluppiamo siti web complessi e personalizzati: aree riservate, integrazioni, contenuti dinamici e tutto ciò che serve al tuo progetto.",
    bullets: ["Funzionalità avanzate", "Integrazioni su misura", "Contenuti dinamici", "Scalabili nel tempo"],
  },
  {
    num: "03",
    title: "Pagina Google",
    short: "Creazione e gestione del tuo profilo Google.",
    description:
      "Creiamo e gestiamo la tua scheda Google Business Profile per farti trovare su Ricerca e Maps, con informazioni sempre aggiornate.",
    bullets: ["Creazione profilo", "Ottimizzazione scheda", "Gestione recensioni", "Aggiornamenti costanti"],
  },
  {
    num: "04",
    title: "Manutenzione & Supporto",
    short: "Il tuo sito sempre al top.",
    description:
      "Aggiornamenti, monitoraggio e assistenza continua per mantenere il progetto sicuro, veloce e aggiornato nel tempo.",
    bullets: ["Aggiornamenti", "Backup & sicurezza", "Monitoraggio uptime", "Supporto dedicato"],
  },
];

export type Project = {
  title: string;
  category: "Sito Vetrina" | "Sito su Misura" | "Branding";
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Nordic Atelier",
    category: "Sito Vetrina",
    year: "2025",
    description: "Sito vetrina per studio di architettura scandinavo.",
  },
  {
    title: "Verde Market",
    category: "Sito Vetrina",
    year: "2025",
    description: "Sito vetrina per azienda agricola bio con listino prodotti.",
  },
  {
    title: "Lumen Studio",
    category: "Branding",
    year: "2024",
    description: "Identità completa per studio fotografico.",
  },
  {
    title: "Flux Finance",
    category: "Sito su Misura",
    year: "2024",
    description: "Landing per fintech con dashboard interattiva.",
  },
  {
    title: "Botanica Garden",
    category: "Sito Vetrina",
    year: "2024",
    description: "Sito vetrina per vivaio di piante rare.",
  },
  {
    title: "Orbit Agency",
    category: "Branding",
    year: "2023",
    description: "Rebrand per agenzia di comunicazione.",
  },
  {
    title: "Pulse Fitness",
    category: "Sito su Misura",
    year: "2023",
    description: "Piattaforma per palestre con prenotazioni online.",
  },
  {
    title: "Aurora Cosmetics",
    category: "Sito Vetrina",
    year: "2023",
    description: "Sito vetrina premium per brand di cosmetica.",
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
      "Un sito vetrina richiede in media 3-4 settimane, un sito più elaborato 6-8 settimane. Le tempistiche esatte le definiamo insieme nella fase di Discovery.",
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
