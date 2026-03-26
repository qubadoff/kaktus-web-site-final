import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Siyasəti | Kaktus Systems",
  description: "Kaktus Systems gizlilik siyasəti — məlumatlarınızın qorunması.",
  openGraph: {
    title: "Gizlilik Siyasəti | Kaktus Systems",
    description: "Kaktus Systems gizlilik siyasəti — məlumatlarınızın qorunması.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
