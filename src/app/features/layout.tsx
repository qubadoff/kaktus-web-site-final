import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xüsusiyyətlər | Kaktus Systems",
  description: "Kaktus Booking və Kaktus Pro tətbiqlərinin bütün xüsusiyyətləri — rezervasiya, idarəetmə, analitika.",
  openGraph: {
    title: "Xüsusiyyətlər | Kaktus Systems",
    description: "Kaktus Booking və Kaktus Pro tətbiqlərinin bütün xüsusiyyətləri — rezervasiya, idarəetmə, analitika.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
