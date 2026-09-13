import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloq | Kaktus Booking",
  description: "Kaktus Booking bloqu — son xəbərlər, məsləhətlər və yeniliklər.",
  openGraph: {
    title: "Bloq | Kaktus Booking",
    description: "Kaktus Booking bloqu — son xəbərlər, məsləhətlər və yeniliklər.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
