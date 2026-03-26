"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles } from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import { useLocale } from "@/i18n/LocaleContext";
import type { WebsiteFaq } from "@/lib/api";

export default function FaqPage() {
  const { t, locale } = useLocale();
  const [faqs, setFaqs] = useState<WebsiteFaq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/faqs?lang=${locale}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data?.data) setFaqs(data.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [locale]);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Sparkles size={14} />
              {t.faqPage.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
              {t.faqPage.title} <span className="text-primary">{t.faqPage.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">{t.faqPage.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">{t.faqPage.noFaqs}</p>
            </div>
          ) : (
            <FaqAccordion faqs={faqs} />
          )}
        </div>
      </section>
    </>
  );
}
