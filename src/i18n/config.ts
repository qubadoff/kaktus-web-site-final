export const defaultLocale = "az" as const;
export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
};

export const localeFull: Record<Locale, string> = {
  az: "Azərbaycan",
  en: "English",
  ru: "Русский",
};
