import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zero Web Lab — Web Design & Brand Identity",
    template: "%s — Zero Web Lab",
  },
  description:
    "Zero Web Lab è l'agenzia di web design che progetta siti web, brand identity ed esperienze digitali che convertono. Milano, IT.",
  keywords: [
    "web design",
    "agenzia web",
    "brand identity",
    "e-commerce",
    "UI/UX",
    "SEO",
    "Milano",
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
        <LoadingScreen />
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
