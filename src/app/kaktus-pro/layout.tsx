import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaktus Pro — Biznes İdarəetmə Tətbiqi",
  description: "Kaktus Pro ilə biznesinizi idarə edin — rezervasiyalar, işçilər, məhsullar, analitika və daha çoxu. Pulsuz yükləyin!",
  openGraph: {
    title: "Kaktus Pro — Biznes İdarəetmə Tətbiqi",
    description: "Biznesinizi Kaktus Pro ilə idarə edin — rezervasiyalar, işçilər, məhsullar və analitika.",
    siteName: "Kaktus Pro",
    type: "website",
  },
};

export default function KaktusProLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
