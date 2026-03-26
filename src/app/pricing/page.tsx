"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

export default function PricingPage() {
  const { t } = useLocale();

  const plans = [
    {
      name: t.pricing.starter,
      description: t.pricing.starterDesc,
      monthlyPrice: 29,
      yearlyPrice: 24,
      popular: false,
      features: [
        "Up to 3 employees",
        "Unlimited reservations",
        "Basic analytics dashboard",
        "Push notifications",
        "Customer messaging",
        "Working hours management",
        "Mobile app access (iOS & Android)",
        "Email support",
      ],
    },
    {
      name: t.pricing.professional,
      description: t.pricing.professionalDesc,
      monthlyPrice: 59,
      yearlyPrice: 49,
      popular: true,
      features: [
        "Up to 15 employees",
        "Unlimited reservations",
        "Advanced analytics & reports",
        "Push notifications",
        "Customer messaging",
        "Working hours & slot blocking",
        "Product catalog & orders",
        "Gallery & Reels",
        "Customer database (CRM)",
        "Web booking page",
        "Multi-language support",
        "Priority support",
      ],
    },
    {
      name: t.pricing.enterprise,
      description: t.pricing.enterpriseDesc,
      monthlyPrice: null,
      yearlyPrice: null,
      popular: false,
      features: [
        "Unlimited employees",
        "Unlimited reservations",
        "Custom analytics & reporting",
        "All Professional features",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Custom branding",
        "SLA guarantee",
        "24/7 phone support",
      ],
    },
  ];

  const faqs = [
    {
      q: "Is the customer app (Kaktus Booking) free?",
      a: "Yes! The customer app is completely free for end users. They can discover businesses, make reservations, order products, and use the AI chat assistant at no cost.",
    },
    {
      q: "Can I switch plans later?",
      a: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remaining period. When downgrading, the change takes effect at the next billing cycle.",
    },
    {
      q: "Do employees need separate subscriptions?",
      a: "No. Employee accounts are included in your business plan. Each employee gets their own login with a personalized dashboard view in Kaktus Pro.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, bank transfers, and local payment methods. Enterprise customers can also pay via invoice.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features before committing.",
    },
    {
      q: "What happens to my data if I cancel?",
      a: "Your data is retained for 30 days after cancellation. You can export all your data at any time. After 30 days, data is permanently deleted per our privacy policy.",
    },
  ];
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Sparkles size={14} />
              {t.pricing.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
              {t.pricing.title} <span className="text-primary">{t.pricing.titleHighlight}</span> {t.pricing.titleEnd}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              {t.pricing.description}
            </p>
          </AnimatedSection>

          {/* Toggle */}
          <AnimatedSection delay={0.1} className="mt-8">
            <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  !yearly
                    ? "bg-white text-dark shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {t.pricing.monthly}
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  yearly
                    ? "bg-white text-dark shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {t.pricing.yearly}
                <span className="ml-1.5 text-xs text-primary font-semibold">
                  -17%
                </span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    plan.popular
                      ? "bg-dark text-white border-2 border-primary"
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                      {t.pricing.popular}
                    </span>
                  )}
                  <h3
                    className={`text-xl font-bold ${
                      plan.popular ? "text-white" : "text-dark"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6 mb-8">
                    {plan.monthlyPrice ? (
                      <div className="flex items-end gap-1">
                        <span
                          className={`text-4xl font-bold ${
                            plan.popular ? "text-white" : "text-dark"
                          }`}
                        >
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span
                          className={`text-sm mb-1 ${
                            plan.popular ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {t.pricing.month}
                        </span>
                      </div>
                    ) : (
                      <span
                        className={`text-4xl font-bold ${
                          plan.popular ? "text-white" : "text-dark"
                        }`}
                      >
                        {t.pricing.custom}
                      </span>
                    )}
                    {yearly && plan.monthlyPrice && (
                      <p className="text-xs text-primary mt-1">
                        Billed ${(plan.yearlyPrice ?? 0) * 12}/year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.monthlyPrice ? "/demo" : "/contact"}
                    className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-dark text-white hover:bg-dark-light"
                    }`}
                  >
                    {plan.monthlyPrice ? t.pricing.startTrial : t.pricing.contactSales}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <p className="text-sm text-gray-500">
              {t.pricing.trialNote}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              {t.pricing.faqTitle}
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-semibold text-dark pr-4">
                      {faq.q}
                    </span>
                    <HelpCircle
                      size={18}
                      className={`flex-shrink-0 transition-colors ${
                        openFaq === i ? "text-primary" : "text-gray-400"
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              {t.pricing.notSure}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t.pricing.notSureDesc}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
              >
                {t.nav.requestDemo} <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-gray-600 rounded-full hover:border-primary/50 transition-colors"
              >
                {t.pricing.talkToSales}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
