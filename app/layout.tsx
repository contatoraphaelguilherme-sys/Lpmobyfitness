import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });

export const metadata: Metadata = {
  title: "Moby Fitness | Academia, natação e artes marciais",
  description: "Musculação, natação, karatê, jiu-jítsu e balé em um espaço para toda a família. Fale com a Moby Fitness pelo WhatsApp.",
  openGraph: {
    title: "Moby Fitness — Seu ritmo. Sua evolução.",
    description: "Um espaço para cuidar da saúde, treinar e evoluir.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${manrope.variable} ${oswald.variable}`}><body>{children}</body></html>;
}
