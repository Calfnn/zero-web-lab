import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GeometricBackground from "@/components/GeometricBackground";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const siteUrl = "https://zeroweblab.it";

// Structured data: tells Google this is a real business entity (helps brand
// search, local SEO for Torino, and rich results).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zero Web Lab",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  description:
    "Agenzia di web design a Torino: siti web, brand identity ed esperienze digitali che convertono.",
  email: "zeroweblab@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Torino",
    addressRegion: "Piemonte",
    addressCountry: "IT",
  },
  areaServed: "IT",
  sameAs: ["https://instagram.com/zeroweblab"],
  knowsAbout: ["Web Design", "Siti Web", "Brand Identity", "SEO", "Landing Page"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zero Web Lab — Web Design & Brand Identity",
    template: "%s — Zero Web Lab",
  },
  description:
    "Zero Web Lab è l'agenzia di web design che progetta siti web, brand identity ed esperienze digitali che convertono. Torino, IT.",
  keywords: [
    "siti vetrina",
    "landing page",
    "agenzia web",
    "siti web su misura",
    "pagina Google",
    "Google Business Profile",
    "manutenzione sito",
    "agenzia web Torino",
    "web design Torino",
    "Torino",
    "Zero Web Lab",
  ],
  authors: [{ name: "Zero Web Lab" }],
  creator: "Zero Web Lab",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Zero Web Lab",
    title: "Zero Web Lab — Web Design & Brand Identity",
    description:
      "Progettiamo siti web, brand identity ed esperienze digitali che convertono.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Web Lab — Web Design & Brand Identity",
    description:
      "Progettiamo siti web, brand identity ed esperienze digitali che convertono.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "das8riPrvp4EmS7w34KkWifskeT6gJiSX-RC4fEUv9w",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${bebas.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Site-wide themed backdrop: faint floating shapes + gradient wash */}
        <GeometricBackground variant="ambient" />
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
