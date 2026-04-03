import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
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
    <html lang="fr" className={patrickHand.variable}>
      <body>
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
