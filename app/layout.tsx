import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "../public/fonts/montserrat-latin.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home - Vitória – Areia e Pedra",
  description:
    "Há mais de 15 anos oferecendo areia e pedra de qualidade para sua obra em Araraquara e região. Entre em contato e solicite um orçamento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
