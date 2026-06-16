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
    title: "Landing Page",
    short: "Una pagina che converte.",
    description:
      "Una pagina unica e d'impatto per presentare la tua attività e trasformare i visitatori in contatti.",
    bullets: [
      "1 pagina completa (hero, servizi, contatti, gallery/FAQ/recensioni)",
      "Mobile responsive",
      "Form contatti base via email",
      "Collegamento WhatsApp e telefono",
      "SEO base",
    ],
  },
  {
    num: "02",
    title: "Sito Vetrina",
    short: "La tua presenza completa online.",
    description:
      "Un sito multi-pagina per raccontare chi sei, cosa offri e farti trovare, curato in ogni dettaglio.",
    bullets: [
      "4–6 pagine (Home, Chi siamo, Servizi, Contatti, ecc.)",
      "Mobile responsive",
      "Modulo contatti",
      "Integrazione social",
      "SEO completa",
      "Piccole modifiche mensili incluse",
    ],
  },
  {
    num: "03",
    title: "Sito Custom",
    short: "Funzionalità su misura, senza limiti.",
    description:
      "Tutto il Sito Vetrina, più funzionalità avanzate e integrazioni costruite intorno al tuo progetto.",
    bullets: [
      "Tutto ciò che include il Sito Vetrina",
      "Funzionalità custom (login, database, area admin, prenotazioni…)",
      "Integrazione API e sistemi esterni",
      "Assistenza prioritaria",
    ],
  },
];

export type Project = {
  title: string;
  category: "Landing Page" | "Vetrina" | "Custom";
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Nordic Atelier",
    category: "Vetrina",
    year: "2025",
    description: "Sito vetrina per studio di architettura scandinavo.",
  },
  {
    title: "Verde Market",
    category: "Vetrina",
    year: "2025",
    description: "Sito vetrina per azienda agricola bio con listino prodotti.",
  },
  {
    title: "Lumen Studio",
    category: "Landing Page",
    year: "2024",
    description: "Landing page per studio fotografico, con galleria d'impatto.",
  },
  {
    title: "Flux Finance",
    category: "Custom",
    year: "2024",
    description: "Landing per fintech con dashboard interattiva.",
  },
  {
    title: "Botanica Garden",
    category: "Vetrina",
    year: "2024",
    description: "Sito vetrina per vivaio di piante rare.",
  },
  {
    title: "Orbit Agency",
    category: "Landing Page",
    year: "2023",
    description: "Landing page promozionale per agenzia di comunicazione.",
  },
  {
    title: "Pulse Fitness",
    category: "Custom",
    year: "2023",
    description: "Piattaforma per palestre con prenotazioni online.",
  },
  {
    title: "Aurora Cosmetics",
    category: "Vetrina",
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
      "Un sito vetrina richiede in media 1-2 settimane, un sito più elaborato 2-4 settimane. Le tempistiche esatte le definiamo insieme nella prima fase di Discovery.",
  },
  {
    question: "Offrite assistenza dopo il lancio?",
    answer:
      "Sì. Proponiamo piani di manutenzione e supporto continuativo per aggiornamenti, sicurezza e nuove funzionalità.",
  },
  {
    question: "Lavorate con clienti fuori Cuneo?",
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
  email: "zeroweblab@gmail.com",
  address: "Cuneo, Piemonte",
  socials: [
    { label: "Instagram", href: "https://instagram.com/zeroweblab" },
  ],
};
