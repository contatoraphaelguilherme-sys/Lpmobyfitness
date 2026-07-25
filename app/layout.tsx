import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  title: "Moby Fitness | Academia, natação e artes marciais em Guarujá",
  description: "Musculação, natação, karatê e jiu-jítsu em duas unidades no Guarujá. Espaço para toda a família e TotalPass TP+. Fale pelo WhatsApp.",
  openGraph: {
    title: "Moby Fitness — Seu ritmo. Sua evolução.",
    description: "Musculação, natação e artes marciais em um espaço para toda a família.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${manrope.variable} ${oswald.variable}`}><body>{children}</body></html>;
}
