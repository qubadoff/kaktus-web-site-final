"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { useLocale } from "@/i18n/LocaleContext";
import { locales, localeNames, localeFull, type Locale } from "@/i18n/config";
import { AzFlag, EnFlag, RuFlag } from "@/components/FlagIcons";
import { type ComponentType } from "react";

const flagMap: Record<Locale, ComponentType<{ className?: string }>> = {
  az: AzFlag,
  en: EnFlag,
  ru: RuFlag,
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/kaktus-booking") return null;
  const [langOpen, setLangOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/features", label: t.nav.features },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo variant="dark" />

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
              >
                {(() => { const Flag = flagMap[locale]; return <Flag className="w-5 h-3.5 rounded-[2px] object-cover" />; })()}
                {localeNames[locale]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden min-w-[160px]"
                  >
                    {locales.map((l) => {
                      const Flag = flagMap[l];
                      return (
                        <button
                          key={l}
                          onClick={() => { setLocale(l); setLangOpen(false); }}
                          className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                            locale === l
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <Flag className="w-5 h-3.5 rounded-[2px] flex-shrink-0" />
                          {localeFull[l]}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/demo"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
            >
              {t.nav.requestDemo}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium text-gray-600 rounded-lg hover:bg-gray-50"
              >
                {(() => { const Flag = flagMap[locale]; return <Flag className="w-4 h-3 rounded-[1px]" />; })()}
                {localeNames[locale]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden min-w-[140px] z-50"
                  >
                    {locales.map((l) => {
                      const Flag = flagMap[l];
                      return (
                      <button
                        key={l}
                        onClick={() => { setLocale(l); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm ${
                          locale === l ? "bg-primary/10 text-primary font-semibold" : "text-gray-700"
                        }`}
                      >
                        <Flag className="w-4 h-3 rounded-[1px] flex-shrink-0" />
                        {localeFull[l]}
                      </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => setOpen(!open)} className="p-2 text-gray-600">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-primary py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full"
              >
                {t.nav.requestDemo}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
