import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstifadə Şərtləri | Kaktus Booking",
  description: "Kaktus Booking istifadə şərtləri və qaydaları.",
  openGraph: {
    title: "İstifadə Şərtləri | Kaktus Booking",
    description: "Kaktus Booking istifadə şərtləri və qaydaları.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
