import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Kaktus Booking",
  description: "Kaktus Booking haqqında tez-tez verilən suallar və cavablar.",
  openGraph: {
    title: "FAQ | Kaktus Booking",
    description: "Kaktus Booking haqqında tez-tez verilən suallar və cavablar.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
