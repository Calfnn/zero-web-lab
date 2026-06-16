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
// search, local SEO for Cuneo, and rich results). A @graph links the website
// and the organization so Google can build a single coherent brand entity.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Zero Web Lab",
      inLanguage: "it-IT",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Zero Web Lab",
      url: siteUrl,
      logo: `${siteUrl}/opengraph-image`,
      image: `${siteUrl}/opengraph-image`,
      description:
        "Agenzia di web design a Cuneo: siti web, brand identity ed esperienze digitali che convertono.",
      email: "zeroweblab@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cuneo",
        addressRegion: "Piemonte",
        addressCountry: "IT",
      },
      areaServed: "IT",
      sameAs: ["https://instagram.com/zeroweblab"],
      knowsAbout: [
        "Web Design",
        "Siti Web",
        "Brand Identity",
        "SEO",
        "Landing Page",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zero Web Lab — Web Design & Brand Identity",
    template: "%s — Zero Web Lab",
  },
  description:
    "Zero Web Lab | Progettiamo Siti Web, Landing Page ed Esperienze Digitali che convertono. Cuneo, IT.",
  keywords: [
    "landing page",
    "siti vetrina",
    "sito su misura",
    "sito custom",
    "agenzia web",
    "agenzia web Cuneo",
    "web design Cuneo",
    "SEO",
    "Cuneo",
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
      "Zero Web Lab | Progettiamo Siti Web, Landing Page ed Esperienze Digitali che convertono. Cuneo, IT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Web Lab — Web Design & Brand Identity",
    description:
      "Zero Web Lab | Progettiamo Siti Web, Landing Page ed Esperienze Digitali che convertono. Cuneo, IT.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "das8riPrvp4EmS7w34KkWifskeT6gJiSX-RC4fEUv9w",
  },
  alternates: {
    // Home canonical. NOTE: every route must set its own canonical, otherwise
    // it inherits this one and tells Google the page duplicates the homepage.
    canonical: "/",
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
