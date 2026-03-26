import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloq | Kaktus Systems",
  description: "Kaktus Systems bloqu — son xəbərlər, məsləhətlər və yeniliklər.",
  openGraph: {
    title: "Bloq | Kaktus Systems",
    description: "Kaktus Systems bloqu — son xəbərlər, məsləhətlər və yeniliklər.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
