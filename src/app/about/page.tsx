"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Globe,
  Award,
  Sparkles,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

const values = [
  {
    icon: Zap,
    title: "Simplicity",
    description:
      "We believe powerful tools should be simple to use. Every feature is designed to save time, not waste it.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    description:
      "Both businesses and their customers deserve an exceptional experience. We optimize for both sides.",
  },
  {
    icon: Globe,
    title: "Local & Global",
    description:
      "Built in Azerbaijan, designed for the world. Multi-language from day one, culturally aware by design.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We ship features when they're ready, not when they're rushed. Reliability is our foundation.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "The Idea",
    description:
      "Born from the frustration of booking appointments by phone. We envisioned a seamless digital experience for service businesses.",
  },
  {
    year: "2023",
    title: "First Launch",
    description:
      "Kaktus Booking and Kaktus Pro launched on iOS and Android. First 50 businesses onboarded in Baku.",
  },
  {
    year: "2024",
    title: "Rapid Growth",
    description:
      "Expanded to 500+ businesses. Added AI chat, product ordering, reels, web booking, and advanced analytics.",
  },
  {
    year: "2025",
    title: "Scaling Up",
    description:
      "Multi-language support launched. Enterprise features, API access, and custom integrations now available.",
  },
];

const team = [
  {
    name: "Founder & CEO",
    description: "Visionary behind the platform, passionate about transforming service industries through technology.",
  },
  {
    name: "Engineering",
    description: "Full-stack team building native mobile apps (Flutter), robust backend (Laravel), and scalable infrastructure.",
  },
  {
    name: "Design",
    description: "Crafting intuitive, beautiful experiences that both tech-savvy users and first-time app users love.",
  },
  {
    name: "Growth",
    description: "Onboarding businesses, gathering feedback, and ensuring every user gets the most from the platform.",
  },
];

export default function AboutPage() {
  const { t } = useLocale();
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Sparkles size={14} />
                {t.about.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
                {t.about.title}{" "}
                <span className="text-primary">{t.about.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t.about.description}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-primary-50 rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-dark mb-4">
                  {t.about.missionTitle}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-dark rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {t.about.visionTitle}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t.about.valuesTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.about.valuesDesc}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t.about.journeyTitle}
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative pl-8 border-l-2 border-primary/20 pb-2">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-primary rounded-full" />
                    <h3 className="text-lg font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t.about.teamTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.about.teamDesc}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4">
                    <Users size={28} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-dark">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t.about.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t.about.ctaDesc}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
              >
                {t.cta.cta1} <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-gray-600 rounded-full hover:border-primary/50 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
