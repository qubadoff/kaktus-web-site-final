import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaktus Booking — Yüklə",
  description: "Kaktus Booking tətbiqini App Store və Google Play-dən pulsuz yükləyin.",
  openGraph: {
    title: "Kaktus Booking — Yüklə",
    description: "Kaktus Booking tətbiqini pulsuz yükləyin.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function KaktusBookingDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
