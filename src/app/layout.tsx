import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erick Koga DEV",
  description: "Portfólio pessoal de Erick Koga, desenvolvedor full-stack.",
  icons: {
    icon: "./src/app/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
