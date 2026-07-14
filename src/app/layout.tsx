import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

/*
 * Cambia esta URL cuando tengas tu dominio real o tu URL de Vercel.
 *
 * Ejemplos:
 * const siteUrl = "https://nexora-digital.vercel.app";
 * const siteUrl = "https://nexoradigital.com";
 */
const siteUrl = "https://nexoradigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Nexora Digital",
    "desarrollo web",
    "sitios web para negocios",
    "landing pages",
    "sistemas personalizados",
    "automatización de procesos",
    "transformación digital",
    "consultoría tecnológica",
    "soluciones digitales para negocios",
    "tecnología para empresas",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Soluciones digitales para negocios`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}