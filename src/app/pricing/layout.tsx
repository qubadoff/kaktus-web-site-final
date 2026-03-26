import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qiymətlər | Kaktus Systems",
  description: "Kaktus Systems qiymət planları — kiçik bizneslərdən böyük müəssisələrə qədər uyğun həllər.",
  openGraph: {
    title: "Qiymətlər | Kaktus Systems",
    description: "Kaktus Systems qiymət planları — kiçik bizneslərdən böyük müəssisələrə qədər uyğun həllər.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
