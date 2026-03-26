import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstifadə Şərtləri | Kaktus Systems",
  description: "Kaktus Systems istifadə şərtləri və qaydaları.",
  openGraph: {
    title: "İstifadə Şərtləri | Kaktus Systems",
    description: "Kaktus Systems istifadə şərtləri və qaydaları.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
