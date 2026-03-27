"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import logoImg from "@/app/images/logo.png";
import { STORE_LINKS } from "@/lib/store-links";
import { AzFlag, EnFlag, RuFlag } from "@/components/FlagIcons";

type Locale = "az" | "en" | "ru";

const flags = { az: AzFlag, en: EnFlag, ru: RuFlag };

const t = {
  az: {
    subtitle: "Salonlar, klinikalar və xidmət mərkəzləri — hamısı bir tətbiqdə. Pulsuz rezervasiya et, keyfini yaşa.",
    features: [
      { title: "Asan Rezervasiya", desc: "Bir neçə toxunuşla istədiyin salonda randevu al" },
      { title: "Yaxınlıqdakı Salonlar", desc: "Xəritə ilə ətrafındakı ən yaxşı yerləri kəşf et" },
      { title: "Mesajlaşma", desc: "Salonla birbaşa əlaqə saxla, suallarını ver" },
      { title: "AI Köməkçi", desc: "Süni intellekt ilə sənə uyğun xidmət tap" },
      { title: "Məhsul Sifarişi", desc: "Sevdiyin salonun məhsullarını onlayn sifariş et" },
      { title: "Rəylər & Reytinq", desc: "Əvvəlki müştərilərin rəylərinə bax, öz rəyini yaz" },
    ],
    download: "Tətbiqi yüklə",
    contact: "Bizimlə əlaqə",
    poweredBy: "Powered by Kaktus Systems",
  },
  en: {
    subtitle: "Salons, clinics and service centers — all in one app. Book for free, enjoy the experience.",
    features: [
      { title: "Easy Booking", desc: "Book an appointment at your favorite salon in a few taps" },
      { title: "Nearby Salons", desc: "Discover the best places around you on the map" },
      { title: "Messaging", desc: "Contact the salon directly, ask your questions" },
      { title: "AI Assistant", desc: "Find the right service for you with artificial intelligence" },
      { title: "Product Orders", desc: "Order products from your favorite salon online" },
      { title: "Reviews & Ratings", desc: "Read reviews from previous customers, write your own" },
    ],
    download: "Download the app",
    contact: "Contact us",
    poweredBy: "Powered by Kaktus Systems",
  },
  ru: {
    subtitle: "Салоны, клиники и сервисные центры — всё в одном приложении. Бронируйте бесплатно, наслаждайтесь.",
    features: [
      { title: "Простое бронирование", desc: "Запишитесь в любимый салон в несколько касаний" },
      { title: "Ближайшие салоны", desc: "Откройте лучшие места вокруг вас на карте" },
      { title: "Сообщения", desc: "Свяжитесь с салоном напрямую, задайте вопросы" },
      { title: "AI помощник", desc: "Найдите подходящую услугу с помощью ИИ" },
      { title: "Заказ товаров", desc: "Закажите товары из любимого салона онлайн" },
      { title: "Отзывы и рейтинг", desc: "Читайте отзывы клиентов, оставляйте свои" },
    ],
    download: "Скачать приложение",
    contact: "Связаться с нами",
    poweredBy: "Powered by Kaktus Systems",
  },
};

const featureIcons = [
  <svg key="cal" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  <svg key="map" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="msg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  <svg key="ai" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="shop" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
  <svg key="star" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
];

interface ContactInfo {
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
  telegram: string | null;
  instagram: string | null;
  facebook: string | null;
  tiktok: string | null;
}

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "az";
  const lang = (navigator.language || "").toLowerCase();
  if (lang.startsWith("ru")) return "ru";
  if (lang.startsWith("en")) return "en";
  if (lang.startsWith("az") || lang.startsWith("tr")) return "az";
  return "az";
}

export default function KaktusBookingPage() {
  const [locale, setLocale] = useState<Locale>("az");
  const [contact, setContact] = useState<ContactInfo | null>(null);

  useEffect(() => {
    setLocale(detectLocale());
    fetch("https://p.kaktusbooking.app/business/support/contactInfo", {
      headers: { Accept: "application/json" },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setContact(data); })
      .catch(() => {});
  }, []);

  const l = t[locale];
  const Flag = flags[locale];

  const socials = [
    { key: "instagram", href: contact?.instagram, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { key: "facebook", href: contact?.facebook, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { key: "tiktok", href: contact?.tiktok, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
    { key: "telegram", href: contact?.telegram, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
    { key: "whatsapp", href: contact?.whatsapp, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  ].filter((s) => s.href);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/[0.06] backdrop-blur-md rounded-full p-1 border border-white/10">
        {(["az", "en", "ru"] as Locale[]).map((lang) => {
          const FlagIcon = flags[lang];
          return (
            <button
              key={lang}
              onClick={() => setLocale(lang)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-medium uppercase transition-all ${
                locale === lang
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <FlagIcon className="w-4 h-3 rounded-sm" />
              {lang}
            </button>
          );
        })}
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl shadow-primary/10 mb-4">
            <Image src={logoImg} alt="Kaktus Booking" width={52} height={52} className="drop-shadow-lg" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Kaktus <span className="text-primary">Booking</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
            {l.subtitle}
          </p>
        </div>

        {/* Contact Info */}
        {contact && (
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-4 mb-5">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">{l.contact}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="flex items-center gap-2 bg-white/[0.06] hover:bg-primary/15 rounded-xl px-3.5 py-2.5 text-gray-300 hover:text-primary transition-all">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span className="text-xs font-medium">{contact.phone}</span>
                </a>
              )}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 bg-white/[0.06] hover:bg-primary/15 rounded-xl px-3.5 py-2.5 text-gray-300 hover:text-primary transition-all">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="text-xs font-medium">{contact.email}</span>
                </a>
              )}
              {socials.map((s) => (
                <a key={s.key} href={s.href!} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-primary/15 flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-5">
          {l.features.map((f, i) => (
            <div key={i} className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-3 sm:p-3.5 hover:bg-white/[0.07] hover:border-primary/20 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary/15 transition-all">
                {featureIcons[i]}
              </div>
              <h3 className="text-white text-xs sm:text-sm font-semibold mb-0.5">{f.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Download - Original Store Badges */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <a href={STORE_LINKS.booking.appStore} target="_blank" rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                 alt="App Store" className="h-[44px]" />
          </a>
          <a href={STORE_LINKS.booking.playStore} target="_blank" rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                 alt="Google Play" className="h-[44px]" />
          </a>
        </div>

        {/* Bottom */}
        <div className="text-center space-y-1">
          <a href="/" className="text-gray-500 hover:text-primary text-xs transition-colors">kaktusbooking.app</a>
          <p className="text-gray-700 text-[10px] tracking-wider uppercase">{l.poweredBy}</p>
        </div>
      </div>
    </div>
  );
}
