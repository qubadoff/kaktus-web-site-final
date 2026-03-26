import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haqqımızda | Kaktus Systems",
  description: "Kaktus Systems — xidmət biznesləri üçün yaradılmış rezervasiya və idarəetmə platforması haqqında.",
  openGraph: {
    title: "Haqqımızda | Kaktus Systems",
    description: "Kaktus Systems — xidmət biznesləri üçün yaradılmış rezervasiya və idarəetmə platforması haqqında.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
