import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { defaultMetadata } from "@/config/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
