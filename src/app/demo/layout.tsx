import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo İstəyin | Kaktus Systems",
  description: "Kaktus Systems-in pulsuz demosunu planlaşdırın — biznesiniz üçün fərdiləşdirilmiş nümayiş.",
  openGraph: {
    title: "Demo İstəyin | Kaktus Systems",
    description: "Kaktus Systems-in pulsuz demosunu planlaşdırın — biznesiniz üçün fərdiləşdirilmiş nümayiş.",
    siteName: "Kaktus Systems",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
