import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://www.fenixcomercioexterior.com.ar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fenix Comercio Exterior | Operaciones Internacionales",
    template: "%s | Fenix Comercio Exterior",
  },
  description:
    "Acompañamos a empresas en procesos de importación, exportación y logística internacional, ordenando documentación, costos, tiempos y próximos pasos.",
  applicationName: "Fenix Comercio Exterior",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Fenix Comercio Exterior",
    title: "Fenix Comercio Exterior | Operaciones Internacionales",
    description:
      "Asesoramiento integral en importación, exportación, despacho aduanero y logística internacional.",
    images: [
      {
        url: "/images/hero.jpg",
        alt: "Operaciones de comercio exterior de Fenix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenix Comercio Exterior | Operaciones Internacionales",
    description:
      "Asesoramiento integral en importación, exportación, despacho aduanero y logística internacional.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
