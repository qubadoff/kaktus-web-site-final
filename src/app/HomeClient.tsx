"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  AppStoreButton,
  PlayStoreButton,
} from "@/components/StoreButtons";
import {
  Calendar,
  Users,
  ShoppingBag,
  MessageSquare,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
  Clock,
  TrendingUp,
  MapPin,
  Zap,
  Bell,
  UserCog,
  ImageIcon,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

export default function HomeClient() {
  const { t } = useLocale();

  const stats = [
    { value: "10K+", label: t.stats.bookings },
    { value: "500+", label: t.stats.businesses },
    { value: "50K+", label: t.stats.customers },
    { value: "99.9%", label: t.stats.uptime },
  ];

  const proHighlights = [
    {
      icon: BarChart3,
      title: t.proSection.features.revenue.title,
      description: t.proSection.features.revenue.desc,
    },
    {
      icon: Users,
      title: t.proSection.features.team.title,
      description: t.proSection.features.team.desc,
    },
    {
      icon: Calendar,
      title: t.proSection.features.scheduling.title,
      description: t.proSection.features.scheduling.desc,
    },
    {
      icon: ShoppingBag,
      title: t.proSection.features.products.title,
      description: t.proSection.features.products.desc,
    },
    {
      icon: Bell,
      title: t.proSection.features.alerts.title,
      description: t.proSection.features.alerts.desc,
    },
    {
      icon: TrendingUp,
      title: t.proSection.features.growth.title,
      description: t.proSection.features.growth.desc,
    },
  ];

  const bookingFeatures = [
    { icon: MapPin, text: t.bookingSection.features.map },
    { icon: Calendar, text: t.bookingSection.features.book },
    { icon: Sparkles, text: t.bookingSection.features.ai },
    { icon: ShoppingBag, text: t.bookingSection.features.order },
    { icon: Play, text: t.bookingSection.features.reels },
    { icon: MessageSquare, text: t.bookingSection.features.chat },
  ];

  const workflow = [
    {
      step: "01",
      title: t.howItWorks.steps.s1.title,
      description: t.howItWorks.steps.s1.desc,
    },
    {
      step: "02",
      title: t.howItWorks.steps.s2.title,
      description: t.howItWorks.steps.s2.desc,
    },
    {
      step: "03",
      title: t.howItWorks.steps.s3.title,
      description: t.howItWorks.steps.s3.desc,
    },
    {
      step: "04",
      title: t.howItWorks.steps.s4.title,
      description: t.howItWorks.steps.s4.desc,
    },
  ];
  return (
    <>
      {/* Hero — Kaktus Pro Focused */}
      <section className="relative pt-28 pb-0 lg:pt-32 overflow-hidden bg-dark">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-primary/15 text-primary text-xs sm:text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-primary/20">
                  <Zap size={14} className="flex-shrink-0" />
                  <span className="truncate">{t.hero.badge}</span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
              >
                {t.hero.title1}{" "}
                <span className="relative">
                  <span className="text-primary">{t.hero.title2}</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8.5C50 2 150 2 198 8.5"
                      stroke="#22C55E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </span>
                {t.hero.titleEnd && <>{" "}{t.hero.titleEnd}</>}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-gray-400 leading-relaxed"
              >
                <strong className="text-white">Kaktus Pro</strong> {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-dark bg-primary rounded-full hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  {t.hero.cta1}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/features#pro"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white border border-gray-600 rounded-full hover:border-primary/50 hover:bg-white/5 transition-all"
                >
                  {t.hero.cta2}
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-500"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  {t.hero.trust1}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  {t.hero.trust2}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  {t.hero.trust3}
                </span>
              </motion.div>
            </div>

            {/* Right: Pro App Mockup — prominent */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />

                {/* Pro Phone — White Theme */}
                <div className="relative w-64 sm:w-72 lg:w-80 bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-gray-200 shadow-2xl shadow-black/20 p-4 sm:p-5 pb-5 sm:pb-6">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-100 rounded-b-2xl" />

                  {/* Header */}
                  <div className="flex items-center justify-between mt-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                        <span className="text-white text-xs font-bold">K</span>
                      </div>
                      <div>
                        <p className="text-gray-900 text-sm font-bold">Kaktus Pro</p>
                        <p className="text-gray-400 text-[10px]">Business Dashboard</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bell size={14} className="text-primary" />
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Revenue", value: "₼4.2K", trend: "+18%" },
                      { label: "Bookings", value: "47", trend: "+12%" },
                      { label: "Clients", value: "186", trend: "+8%" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 text-center"
                      >
                        <p className="text-gray-900 text-base font-bold">{s.value}</p>
                        <p className="text-gray-400 text-[9px]">{s.label}</p>
                        <span className="text-primary text-[9px] font-semibold">{s.trend}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-[10px] font-semibold text-gray-700">Weekly Revenue</p>
                      <span className="text-[9px] text-primary font-medium">This Week</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all"
                          style={{
                            height: `${h}%`,
                            background:
                              i === 5
                                ? "linear-gradient(to top, #16A34A, #22C55E)"
                                : "rgba(34, 197, 94, 0.15)",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1.5">
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span key={i} className="text-[8px] text-gray-400 flex-1 text-center">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold text-gray-700 mb-1">Upcoming Reservations</p>
                    {[
                      { name: "Leyla H.", service: "Hair Color", time: "10:00" },
                      { name: "Kamran R.", service: "Beard Trim", time: "11:30" },
                    ].map((r) => (
                      <div
                        key={r.name}
                        className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-2.5"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-[10px] font-bold">
                            {r.name[0]}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-900 text-[11px] font-semibold">{r.name}</p>
                          <p className="text-gray-400 text-[9px]">{r.service}</p>
                        </div>
                        <span className="text-primary text-[10px] font-semibold">{r.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar */}
                  <div className="flex justify-around mt-4 pt-3 border-t border-gray-100">
                    {[
                      { label: "Home", active: true },
                      { label: "Clients", active: false },
                      { label: "Bookings", active: false },
                      { label: "Chat", active: false },
                      { label: "Profile", active: false },
                    ].map((tab) => (
                      <div key={tab.label} className="flex flex-col items-center gap-0.5">
                        <div
                          className={`w-1 h-1 rounded-full ${tab.active ? "bg-primary" : "bg-transparent"}`}
                        />
                        <span
                          className={`text-[8px] ${tab.active ? "text-primary font-semibold" : "text-gray-300"}`}
                        >
                          {tab.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge - hidden on very small screens */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="hidden sm:flex absolute -left-4 lg:-left-16 top-20 bg-white rounded-xl shadow-xl p-3 items-center gap-2"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">Revenue</p>
                    <p className="text-sm font-bold text-dark">+42%</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="hidden sm:flex absolute -right-2 lg:-right-12 bottom-32 bg-white rounded-xl shadow-xl p-3 items-center gap-2"
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Bell size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">New booking</p>
                    <p className="text-xs font-bold text-dark">Aysel — 14:00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar at the bottom of hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 lg:mt-16 pb-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 bg-dark-light/50 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kaktus Pro — Feature Spotlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark text-white text-sm font-medium rounded-full mb-4">
              <Zap size={14} className="text-primary" />
              {t.proSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              {t.proSection.title} <span className="text-primary">{t.proSection.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.proSection.description}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proHighlights.map((f, i) => (
              <AnimatedSection key={f.title} delay={(i % 3) * 0.1}>
                <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-7 h-full hover:bg-dark hover:border-dark transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <f.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark group-hover:text-white transition-colors mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/features#pro"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-dark rounded-full hover:bg-dark-light transition-colors"
            >
              {t.proSection.cta} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Kaktus Booking — Customer App */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                {t.bookingSection.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                {t.bookingSection.title} <span className="text-primary">{t.bookingSection.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.bookingSection.description}
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {bookingFeatures.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <f.icon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-row gap-3">
                <AppStoreButton variant="light" app="booking" />
                <PlayStoreButton variant="light" app="booking" />
              </div>
            </AnimatedSection>

            {/* Booking App Mock */}
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center">
                <div className="w-64 sm:w-72 bg-white rounded-[2.5rem] border-2 border-gray-200 shadow-xl p-5 pb-6">
                  {/* Notch */}
                  <div className="w-24 h-5 bg-gray-100 rounded-b-2xl mx-auto -mt-1 mb-4" />

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">K</span>
                    </div>
                    <span className="text-sm font-bold text-dark">Kaktus Booking</span>
                  </div>

                  <div className="bg-primary rounded-xl p-4 mb-3 text-white">
                    <p className="text-[11px] font-semibold mb-1">Next Appointment</p>
                    <p className="text-[10px] opacity-80">Today, 14:00 — Beauty Studio</p>
                    <div className="mt-2 h-1.5 bg-white/20 rounded-full">
                      <div className="h-full w-3/4 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    {[
                      { label: "Nearby Salons", count: "12 near you" },
                      { label: "AI Assistant", count: "Ask anything" },
                      { label: "My Orders", count: "2 active" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                        <p className="text-[11px] font-medium text-gray-800">{item.label}</p>
                        <span className="text-[9px] text-primary font-medium">{item.count}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-around pt-3 border-t border-gray-100">
                    {["Home", "Map", "Book", "Chat", "Profile"].map((tab, i) => (
                      <span
                        key={tab}
                        className={`text-[9px] ${i === 0 ? "text-primary font-semibold" : "text-gray-400"}`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t.howItWorks.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.howItWorks.description}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-6xl font-bold text-primary/10">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-dark mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Trust & Security */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                {t.trust.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {t.trust.description}
              </p>
              <div className="mt-8 space-y-4">
                {t.trust.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: t.trust.cards.auth.label, desc: t.trust.cards.auth.desc },
                  { icon: Globe, label: t.trust.cards.lang.label, desc: t.trust.cards.lang.desc },
                  { icon: Smartphone, label: t.trust.cards.platform.label, desc: t.trust.cards.platform.desc },
                  { icon: BarChart3, label: t.trust.cards.analytics.label, desc: t.trust.cards.analytics.desc },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary/30 transition-colors"
                  >
                    <card.icon size={28} className="text-primary mb-3" />
                    <p className="font-semibold text-dark text-sm">{card.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-dark bg-primary rounded-full hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {t.cta.cta1}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-gray-600 rounded-full hover:border-primary/50 transition-colors"
              >
                {t.cta.cta2}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
