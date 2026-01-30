import { Montserrat, Cormorant_Garamond, Lato, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import NavbarV3 from "./components/layout/v3/NavbarV3";
import FooterV3Reference from "./components/layout/v3/FooterV3Reference";

// Primary font for UI elements
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Premium serif font for headings
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

// Clean sans-serif for body text
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Playfair Display for elegant headings
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lepakshi Handicrafts - Exquisite Handcrafted Treasures",
    template: "%s | Lepakshi Handicrafts",
  },
  description:
    "An Andhra Pradesh Government Undertaking, showcases a diverse range of traditional crafts and art forms, each unique in style, theme, and expression. Established in 1982, A.P. Handicrafts Development Corporation Ltd. promotes and markets exceptional products while supporting over 2,05,000 artisans across the state.",
  keywords: [
    "handicrafts",
    "handcrafted",
    "artisan",
    "traditional crafts",
    "Lepakshi",
    "handmade",
    "craftsmanship",
    "artisan products",
    "Andhra Pradesh",
    "government handicrafts",
    "Indian handicrafts",
  ],
  authors: [{ name: "Lepakshi Handicrafts" }],
  creator: "Lepakshi Handicrafts",
  publisher: "A.P. Handicrafts Development Corporation Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lepakshi Handicrafts - Exquisite Handcrafted Treasures",
    description:
      "Discover exquisite handcrafted treasures at Lepakshi Handicrafts. Explore our curated collection of traditional and contemporary artisan products.",
    url: "https://lepakshihandicrafts.gov.in",
    siteName: "Lepakshi Handicrafts",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ backgroundColor: "#F5F1E8" }}>
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} ${lato.variable} ${playfairDisplay.variable} antialiased scroll-smooth`}
        style={{ backgroundColor: "#f8f6f1", fontFamily: "var(--font-lato)" }}
        suppressHydrationWarning
      >
      <NavbarV3/>
        {children}
      <FooterV3Reference />
      </body>
    </html>
  );
}
