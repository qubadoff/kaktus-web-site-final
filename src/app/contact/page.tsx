"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  InstagramIcon, FacebookIcon, TiktokIcon, WhatsappIcon, TelegramIcon,
} from "@/components/SocialIcons";
import { Mail, Phone, Globe, Sparkles, MessageSquare, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import { useLocale } from "@/i18n/LocaleContext";
import { ensureUrl, type ContactInfo } from "@/lib/api";

const socialConfig = [
  { key: "instagram" as const, icon: InstagramIcon, label: "Instagram", color: "hover:text-pink-500" },
  { key: "facebook" as const, icon: FacebookIcon, label: "Facebook", color: "hover:text-blue-500" },
  { key: "tiktok" as const, icon: TiktokIcon, label: "TikTok", color: "hover:text-gray-900" },
  { key: "whatsapp" as const, icon: WhatsappIcon, label: "WhatsApp", color: "hover:text-green-500" },
  { key: "telegram" as const, icon: TelegramIcon, label: "Telegram", color: "hover:text-blue-400" },
];

const fallbackContact: ContactInfo = {
  id: 0, phone: "+994 77 400 10 01", email: "info@kaktusbooking.app",
  whatsapp: "https://wa.me/+994774001001", telegram: "https://t.me/kaktusbooking",
  instagram: "https://www.instagram.com/kaktusbooking", facebook: "https://www.facebook.com/profile.php?id=61584151314618",
  tiktok: "https://www.tiktok.com/@kaktusbooking", website: "https://kaktusbooking.app",
};

export default function ContactPage() {
  const { t } = useLocale();
  const [contact, setContact] = useState<ContactInfo>(fallbackContact);

  useEffect(() => {
    fetch("https://p.kaktusbooking.app/business/support/contactInfo", { headers: { Accept: "application/json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setContact(data); })
      .catch(() => {});
  }, []);

  const socials = socialConfig
    .filter((s) => contact[s.key])
    .map((s) => ({ ...s, href: ensureUrl(contact[s.key]) ?? contact[s.key]! }));

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <MessageSquare size={14} /> {t.contact.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
              {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span> {t.contact.titleEnd}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">{t.contact.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-dark mb-8">{t.contact.infoTitle}</h2>
                <div className="space-y-6">
                  {contact.phone && (
                    <a href={`tel:${contact.phone}`} className="flex gap-4 group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"><Phone size={18} className="text-primary" /></div>
                      <div>
                        <p className="text-sm font-semibold text-dark">{t.contact.phone}</p>
                        <p className="text-sm text-gray-800 mt-0.5">{contact.phone}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{t.contact.monFri}, 9:00-18:00</p>
                      </div>
                    </a>
                  )}
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} className="flex gap-4 group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"><Mail size={18} className="text-primary" /></div>
                      <div>
                        <p className="text-sm font-semibold text-dark">{t.contact.email}</p>
                        <p className="text-sm text-gray-800 mt-0.5">{contact.email}</p>
                      </div>
                    </a>
                  )}
                  {contact.whatsapp && (
                    <a href={ensureUrl(contact.whatsapp) ?? contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-4 group">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors"><WhatsappIcon className="w-[18px] h-[18px] text-green-600" /></div>
                      <div>
                        <p className="text-sm font-semibold text-dark">{t.contact.whatsapp}</p>
                        <p className="text-sm text-gray-800 mt-0.5">{t.contact.chatWithUs}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{t.contact.quickResponse}</p>
                      </div>
                    </a>
                  )}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin size={18} className="text-primary" /></div>
                    <div>
                      <p className="text-sm font-semibold text-dark">{t.contact.office}</p>
                      <p className="text-sm text-gray-800 mt-0.5">{t.contact.officeAddress}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{t.contact.visitByAppointment}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><Clock size={18} className="text-primary" /></div>
                    <div>
                      <p className="text-sm font-semibold text-dark">{t.contact.supportHours}</p>
                      <p className="text-sm text-gray-800 mt-0.5">{t.contact.supportTime}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{t.contact.monFri}</p>
                    </div>
                  </div>
                </div>

                {socials.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-dark mb-4">{t.contact.followUs}</h3>
                    <div className="flex flex-wrap gap-2.5">
                      {socials.map((s) => (
                        <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 ${s.color} hover:bg-gray-50 transition-all`}>
                          <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <Sparkles size={20} className="text-primary mb-3" />
                  <h3 className="text-sm font-bold text-dark mb-1">{t.contact.supportTitle}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t.contact.supportText}
                    {contact.email ? ` ${t.contact.orEmailUs} ${contact.email}` : ""}.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
