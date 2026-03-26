import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Kaktus Systems",
  description: "Kaktus Systems haqqında tez-tez verilən suallar və cavablar.",
  openGraph: {
    title: "FAQ | Kaktus Systems",
    description: "Kaktus Systems haqqında tez-tez verilən suallar və cavablar.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
