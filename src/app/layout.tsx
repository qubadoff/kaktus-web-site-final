import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import { LocaleProvider } from "@/i18n/LocaleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kaktus Systems — Rezervasiya və Biznes İdarəetmə Platforması",
    template: "%s | Kaktus Systems",
  },
  description:
    "Xidmət biznesinizi Kaktus Systems ilə gücləndirin. Qüsursuz planlaşdırma, sifariş və ünsiyyət — bizneslər və müştərilər üçün.",
  metadataBase: new URL("https://kaktusbooking.app"),
  openGraph: {
    siteName: "Kaktus Systems",
    type: "website",
    locale: "az_AZ",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "theme-color": "#22C55E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <LocaleProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <FooterWrapper />
          <ScrollToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
