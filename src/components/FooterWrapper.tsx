"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { AppStoreButton, PlayStoreButton } from "@/components/StoreButtons";
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  WhatsappIcon,
  TelegramIcon,
} from "@/components/SocialIcons";
import { useLocale } from "@/i18n/LocaleContext";
import { useEffect, useState } from "react";
import { ensureUrl, type ContactInfo } from "@/lib/api";

const socialConfig = [
  { key: "instagram" as const, icon: InstagramIcon, label: "Instagram" },
  { key: "facebook" as const, icon: FacebookIcon, label: "Facebook" },
  { key: "tiktok" as const, icon: TiktokIcon, label: "TikTok" },
  { key: "whatsapp" as const, icon: WhatsappIcon, label: "WhatsApp" },
  { key: "telegram" as const, icon: TelegramIcon, label: "Telegram" },
];

const fallbackContact: ContactInfo = {
  id: 0,
  phone: "+994 77 400 10 01",
  email: "info@kaktusbooking.app",
  whatsapp: "https://wa.me/+994774001001",
  telegram: "https://t.me/kaktusbooking",
  instagram: "https://www.instagram.com/kaktusbooking",
  facebook: "https://www.facebook.com/profile.php?id=61584151314618",
  tiktok: "https://www.tiktok.com/@kaktusbooking",
  website: "https://kaktusbooking.app",
};

export default function FooterWrapper() {
  const { t } = useLocale();
  const [contact, setContact] = useState<ContactInfo>(fallbackContact);

  useEffect(() => {
    fetch("https://p.kaktusbooking.app/business/support/contactInfo", {
      headers: { Accept: "application/json" },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setContact(data); })
      .catch(() => {});
  }, []);

  const socials = socialConfig
    .filter((s) => contact[s.key])
    .map((s) => ({ ...s, href: ensureUrl(contact[s.key]) ?? contact[s.key]! }));

  const footerLinks = {
    [t.footer.product]: [
      { label: "Kaktus Pro", href: "/features#pro" },
      { label: "Kaktus Booking", href: "/features#booking" },
      { label: t.footer.resources === "Resurslar" ? "Qiymətlər" : t.nav.pricing, href: "/pricing" },
      { label: t.nav.requestDemo, href: "/demo" },
    ],
    [t.footer.company]: [
      { label: t.footer.aboutUs, href: "/about" },
      { label: t.footer.contact, href: "/contact" },
      { label: t.footer.blog, href: "/blog" },
    ],
    [t.footer.resources]: [
      { label: t.footer.helpCenter, href: "/contact" },
      { label: t.footer.privacy, href: "/privacy" },
      { label: t.footer.terms, href: "/terms" },
      { label: t.footer.faq, href: "/faq" },
    ],
  };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo variant="light" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{t.footer.description}</p>
            <div className="mt-4 space-y-1.5">
              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="block text-sm text-gray-400 hover:text-primary transition-colors">{contact.phone}</a>
              )}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="block text-sm text-gray-400 hover:text-primary transition-colors">{contact.email}</a>
              )}
            </div>
            {socials.length > 0 && (
              <div className="flex flex-wrap gap-2.5 mt-5">
                {socials.map((s) => (
                  <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="hidden lg:block lg:col-span-2" />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-10">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center"><span className="text-white text-[9px] font-bold">K</span></div>
                <span className="text-sm font-bold text-white">Kaktus Pro</span>
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">{t.footer.business}</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{t.footer.proDesc}</p>
              <div className="flex gap-2 flex-wrap">
                <AppStoreButton variant="dark" appName="Kaktus Pro" />
                <PlayStoreButton variant="dark" appName="Kaktus Pro" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center"><span className="text-white text-[9px] font-bold">K</span></div>
                <span className="text-sm font-bold text-white">Kaktus Booking</span>
                <span className="text-[10px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full font-medium">{t.footer.customer}</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{t.footer.bookingDesc}</p>
              <div className="flex gap-2 flex-wrap">
                <AppStoreButton variant="dark" appName="Kaktus Booking" />
                <PlayStoreButton variant="dark" appName="Kaktus Booking" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 Kaktus Systems. {t.footer.rights}</p>
          {socials.length > 0 && (
            <div className="flex gap-4">
              {socials.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-gray-500 hover:text-primary transition-colors">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
