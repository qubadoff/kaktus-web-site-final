import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haqqımızda | Kaktus Booking",
  description: "Kaktus Booking — xidmət biznesləri üçün yaradılmış rezervasiya və idarəetmə platforması haqqında.",
  openGraph: {
    title: "Haqqımızda | Kaktus Booking",
    description: "Kaktus Booking — xidmət biznesləri üçün yaradılmış rezervasiya və idarəetmə platforması haqqında.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
