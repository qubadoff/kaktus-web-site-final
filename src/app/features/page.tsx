"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleContext";
import {
  Calendar,
  Users,
  ShoppingBag,
  MessageSquare,
  Star,
  BarChart3,
  Globe,
  Smartphone,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  MapPin,
  Bell,
  Heart,
  Play,
  Search,
  UserCog,
  ImageIcon,
  ShieldCheck,
  Layers,
  Zap,
} from "lucide-react";

const bookingIcons = [Calendar, MapPin, Sparkles, ShoppingBag, Play, MessageSquare, Heart, Bell, Search, Star, Globe, Smartphone];
const proIcons = [BarChart3, Users, Calendar, Clock, ShoppingBag, UserCog, ImageIcon, Bell, TrendingUp, Layers, ShieldCheck, Zap];

export default function FeaturesPage() {
  const { t } = useLocale();

  const bookingFeatures = t.features.bookingFeatures.map((f, i) => ({
    icon: bookingIcons[i],
    title: f.title,
    description: f.desc,
  }));

  const proFeatures = t.features.proFeatures.map((f, i) => ({
    icon: proIcons[i],
    title: f.title,
    description: f.desc,
  }));

  const comparisonData: [string, boolean, boolean][] = [
    [t.features.comparisonItems[0], true, true],
    [t.features.comparisonItems[1], true, true],
    [t.features.comparisonItems[2], true, true],
    [t.features.comparisonItems[3], true, true],
    [t.features.comparisonItems[4], true, false],
    [t.features.comparisonItems[5], true, false],
    [t.features.comparisonItems[6], true, false],
    [t.features.comparisonItems[7], false, true],
    [t.features.comparisonItems[8], false, true],
    [t.features.comparisonItems[9], false, true],
    [t.features.comparisonItems[10], false, true],
    [t.features.comparisonItems[11], false, true],
    [t.features.comparisonItems[12], false, true],
    [t.features.comparisonItems[13], false, true],
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Sparkles size={14} />
              {t.features.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
              {t.features.title}{" "}
              <span className="text-primary">{t.features.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.features.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Kaktus Booking Features */}
      <section id="booking" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                  {t.features.bookingTitle}
                </h2>
                <p className="text-sm text-primary font-medium">
                  {t.features.bookingSubtitle}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">
              {t.features.bookingDesc}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={(i % 3) * 0.1}>
                <div className="group bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Kaktus Pro Features */}
      <section id="pro" className="py-24 bg-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  {t.features.proTitle}
                </h2>
                <p className="text-sm text-primary font-medium">
                  {t.features.proSubtitle}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl">
              {t.features.proDesc}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={(i % 3) * 0.1}>
                <div className="group bg-dark-light border border-gray-700 rounded-2xl p-6 h-full hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t.features.comparisonTitle}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.features.comparisonDesc}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto">
              <div className="min-w-[400px]">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-sm font-semibold">
                <div className="p-3 sm:p-4 text-gray-600">{t.features.comparisonFeature}</div>
                <div className="p-4 text-center text-primary">Booking</div>
                <div className="p-4 text-center text-dark">Pro</div>
              </div>
              {comparisonData.map(([feature, booking, pro]) => (
                <div
                  key={feature as string}
                  className="grid grid-cols-3 border-b border-gray-100 last:border-0 text-sm"
                >
                  <div className="p-4 text-gray-700 font-medium">
                    {feature as string}
                  </div>
                  <div className="p-4 text-center">
                    {booking ? (
                      <span className="text-primary font-bold">&#10003;</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    {pro ? (
                      <span className="text-primary font-bold">&#10003;</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t.features.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t.features.ctaDesc}
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              {t.features.ctaButton} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
