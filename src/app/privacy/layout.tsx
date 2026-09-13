import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Siyasəti | Kaktus Booking",
  description: "Kaktus Booking gizlilik siyasəti — məlumatlarınızın qorunması.",
  openGraph: {
    title: "Gizlilik Siyasəti | Kaktus Booking",
    description: "Kaktus Booking gizlilik siyasəti — məlumatlarınızın qorunması.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
