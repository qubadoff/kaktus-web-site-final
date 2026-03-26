import az from "./az";
import en from "./en";
import ru from "./ru";
import type { Locale } from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<string, any> = { az, en, ru };

export type Dictionary = typeof az;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.az;
}
