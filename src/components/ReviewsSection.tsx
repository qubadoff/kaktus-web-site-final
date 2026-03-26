"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

export default function ReviewsSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">{t.reviews.title}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {t.reviews.items.map((item, i) => (
            <AnimatedSection key={i} delay={(i % 3) * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-dark text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
