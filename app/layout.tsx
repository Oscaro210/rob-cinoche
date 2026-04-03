import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const bakeBunny = localFont({
  src: "../public/fonts/BakeBunny-Round.otf",
  variable: "--font-patrick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROB cinoche",
  description: "Le média cinéma de R & O — critiques, interviews, ciné club.",
  metadataBase: new URL("https://robcinoche.fr"),
  openGraph: {
    title: "ROB cinoche",
    description: "Le média cinéma de R & O — critiques, interviews, ciné club.",
    url: "https://robcinoche.fr",
    siteName: "ROB cinoche",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={bakeBunny.variable}>
      <body>
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
