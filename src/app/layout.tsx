import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { CartDrawer } from "@/components/CartDrawer";
import { MobileCartBar } from "@/components/MobileCartBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-instrument",
  display: "swap",
});

const title = "Empanadas salteñas en Córdoba — Doña Gorriti";
const description =
  "Empanadas salteñas horneadas en el momento, tartas y humita. José Pacífico Otero 1383, Córdoba. 2° en el Mundial de la Empanada 2026. Pedí por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Empanada salteña recién horneada abierta al medio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: site.indexable
    ? {
        index: true,
        follow: true,
        googleBot: { "max-image-preview": "large", "max-snippet": -1 },
      }
    : { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0805",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${anton.variable} ${archivo.variable} ${instrument.variable}`}
    >
      <body>
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <CartProvider>
          {children}
          <CartDrawer />
          <MobileCartBar />
        </CartProvider>
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
