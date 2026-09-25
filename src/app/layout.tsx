import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Peralta,
  Architects_Daughter,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const peralta = Peralta({
  variable: "--font-peralta",
  weight: "400",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  variable: "--font-architects-daughter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Shipham | Boardgame Translations",
  description: "Ben Shipham's deeds in the world of boardgame translation and localisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pzb3oyx.css"
        />
      </head>

      <body className={`${peralta.variable} ${architectsDaughter.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
