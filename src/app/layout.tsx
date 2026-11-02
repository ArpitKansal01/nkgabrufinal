import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NKGABRU STUDIO | Luxury Wedding Photography & Films — Faridabad",
  description:
    "Faridabad's premier fine-art wedding photography and cinematography studio. Preserving timeless royal vows, candid emotions, and heirloom visual cinema across Delhi NCR and global destinations.",
  keywords: [
    "wedding photography faridabad",
    "nkgabru studio",
    "delhi ncr wedding cinema",
    "luxury indian wedding photographer",
    "pre wedding photographer faridabad",
    "destination wedding films",
  ],
  authors: [{ name: "NKGABRU STUDIO" }],
  openGraph: {
    title: "NKGABRU STUDIO | Luxury Wedding Photography & Films — Faridabad",
    description: "Every frame a royal heirloom. Masterful wedding cinema and candid photography based in Faridabad, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${cormorant.variable} ${jakarta.variable} ${jetbrainsMono.variable} antialiased selection:bg-gold-400 selection:text-obsidian-950 bg-obsidian-950 text-champagne font-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
