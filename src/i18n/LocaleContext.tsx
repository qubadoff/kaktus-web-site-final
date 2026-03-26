"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { type Locale, defaultLocale, locales } from "./config";
import { getDictionary, type Dictionary } from "./index";

interface LocaleContextType {
  locale: Locale;
  t: Dictionary;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  t: getDictionary(defaultLocale),
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Read saved locale after hydration
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && locales.includes(saved) && saved !== defaultLocale) {
      setLocaleState(saved);
    }
  }, []);

  const t = getDictionary(locale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
