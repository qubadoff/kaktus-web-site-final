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

const bookingFeatures = [
  {
    icon: Calendar,
    title: "Smart Booking",
    description:
      "Check real-time availability, pick your preferred specialist, choose a time slot, and confirm — all in seconds. 3-step booking flow.",
  },
  {
    icon: MapPin,
    title: "Interactive Map",
    description:
      "Discover nearby salons, spas, and service providers on a live Google Maps view. Filter by category, distance, and rating.",
  },
  {
    icon: Sparkles,
    title: "AI Chat Assistant",
    description:
      "Get personalized recommendations, ask questions about services, and manage your bookings through our intelligent AI assistant.",
  },
  {
    icon: ShoppingBag,
    title: "Product Ordering",
    description:
      "Browse product catalogs from your favorite businesses. Order beauty products, accessories, and more with delivery tracking.",
  },
  {
    icon: Play,
    title: "Reels & Gallery",
    description:
      "Watch short video showcases from businesses. Browse photo galleries, see real work results before you book.",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description:
      "Chat directly with businesses. Ask questions, share preferences, and get personalized attention before your visit.",
  },
  {
    icon: Heart,
    title: "Favorites",
    description:
      "Save your favorite salons and services for quick access. Get notified about special offers from places you love.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Never miss an appointment with push reminders. Get notified about booking confirmations, status changes, and promotions.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Find exactly what you need with powerful search. Filter by service type, location, price range, and availability.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description:
      "Read real reviews from other customers. Share your own experience to help the community make better choices.",
  },
  {
    icon: Globe,
    title: "Multi-language",
    description:
      "Use the app in Azerbaijani, English, or Russian. Seamlessly switch languages anytime from settings.",
  },
  {
    icon: Smartphone,
    title: "Cross-platform",
    description:
      "Available on both iOS and Android. Beautiful native experience optimized for every screen size.",
  },
];

const proFeatures = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track revenue, reservation trends, employee performance, and top services. Daily, weekly, and monthly insights with beautiful charts.",
  },
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Add team members, assign services, set individual schedules, and track performance. Employees get their own dedicated app view.",
  },
  {
    icon: Calendar,
    title: "Reservation Control",
    description:
      "Accept, reject, or reschedule reservations in real-time. Set automatic reminders and manage cancellation reasons.",
  },
  {
    icon: Clock,
    title: "Schedule Management",
    description:
      "Set working hours per day, block specific time slots, and manage availability for the entire team from one place.",
  },
  {
    icon: ShoppingBag,
    title: "Product & Order Management",
    description:
      "Create product catalogs with categories, manage stock, set prices and discounts. Track orders from acceptance to delivery.",
  },
  {
    icon: UserCog,
    title: "Customer Database",
    description:
      "Build your own customer database. Add notes, track visit history, and provide personalized service to returning clients.",
  },
  {
    icon: ImageIcon,
    title: "Gallery & Reels",
    description:
      "Showcase your work with photo galleries and video reels. Attract new customers with visual proof of your expertise.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Full-screen alerts for new reservations and orders with sound. Never miss a booking even when the app is in the background.",
  },
  {
    icon: TrendingUp,
    title: "Performance Stats",
    description:
      "Compare employee performance, identify top services, track customer satisfaction, and discover growth opportunities.",
  },
  {
    icon: Layers,
    title: "Service Management",
    description:
      "Create services with detailed descriptions, pricing, duration, gender filters, and assign them to specific employees.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based Access",
    description:
      "Partners see full management tools. Employees see their own dashboard with personal reservations and limited controls.",
  },
  {
    icon: Zap,
    title: "Web Booking Link",
    description:
      "Get a unique booking URL for your business. Customers can book directly from the web without installing the app.",
  },
];

export default function FeaturesPage() {
  const { t } = useLocale();
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
                <div className="p-3 sm:p-4 text-gray-600">Feature</div>
                <div className="p-4 text-center text-primary">Booking</div>
                <div className="p-4 text-center text-dark">Pro</div>
              </div>
              {[
                ["Reservations", true, true],
                ["Product Orders", true, true],
                ["Messaging", true, true],
                ["Push Notifications", true, true],
                ["AI Chat", true, false],
                ["Map Discovery", true, false],
                ["Favorites & Reviews", true, false],
                ["Employee Management", false, true],
                ["Analytics Dashboard", false, true],
                ["Service Management", false, true],
                ["Gallery & Reels Upload", false, true],
                ["Customer Database", false, true],
                ["Schedule & Slot Control", false, true],
                ["Web Booking Link", false, true],
              ].map(([feature, booking, pro]) => (
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
