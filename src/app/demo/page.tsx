"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  CheckCircle2,
  Calendar,
  BarChart3,
  Users,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import DemoForm from "./DemoForm";
import { useLocale } from "@/i18n/LocaleContext";

export default function DemoPage() {
  const { t } = useLocale();

  const benefits = t.demo.benefits;

  const highlights = [
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description: "See how reservations flow from customer to business in real-time.",
    },
    {
      icon: BarChart3,
      title: "Live Analytics",
      description: "Explore the dashboard with sample data from real businesses.",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Learn how to onboard employees and manage their schedules.",
    },
    {
      icon: ShoppingBag,
      title: "Product & Orders",
      description: "Discover how the ordering system works end-to-end.",
    },
  ];
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Sparkles size={14} />
              {t.demo.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              {t.demo.title}{" "}
              <span className="text-primary">{t.demo.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t.demo.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-dark mb-6">
                {t.demo.whatYouGet}
              </h2>
              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-dark mb-4">{t.demo.duringDemo}</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((h) => (
                  <div key={h.title} className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
                    <h.icon size={22} className="text-primary mb-2" />
                    <h4 className="text-xs sm:text-sm font-bold text-dark">{h.title}</h4>
                    <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <DemoForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
