import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaktus Booking — Randevu & Rezervasiya Tətbiqi",
  description: "Kaktus Booking ilə sevimli salonlarda, klinikalarda və xidmət mərkəzlərində asanlıqla rezervasiya edin. Pulsuz yükləyin!",
  openGraph: {
    title: "Kaktus Booking — Randevu & Rezervasiya Tətbiqi",
    description: "Sevimli salonlarda, klinikalarda və xidmət mərkəzlərində asanlıqla rezervasiya edin.",
    siteName: "Kaktus Booking",
    type: "website",
  },
};

export default function KaktusBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
