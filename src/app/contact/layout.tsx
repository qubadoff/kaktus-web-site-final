import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Əlaqə | Kaktus Booking",
  description: "Bizimlə əlaqə saxlayın — suallarınız, təklifləriniz və ya tərəfdaşlıq sorğularınız üçün.",
  openGraph: {
    title: "Əlaqə | Kaktus Booking",
    description: "Bizimlə əlaqə saxlayın — suallarınız, təklifləriniz və ya tərəfdaşlıq sorğularınız üçün.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
