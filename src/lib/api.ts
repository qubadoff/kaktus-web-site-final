const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://p.kaktusbooking.app/website";

/** Ensure a URL string starts with https:// */
export function ensureUrl(url: string | null): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("//")) return `https:${trimmed}`;
  return `https://${trimmed}`;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  body: string;
  slug: string;
  cover_photo: string;
}

export interface BlogPaginated {
  data: Blog[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface WebsiteFaq {
  id: number;
  question: string;
  answer: string;
}

export interface AppImage {
  id: number;
  name: string;
  image: string;
}

export interface ContactInfo {
  id: number;
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
  telegram: string | null;
  instagram: string | null;
  facebook: string | null;
  tiktok: string | null;
  website: string | null;
}

async function fetchApi<T>(endpoint: string, locale = "en"): Promise<T | null> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { "Accept-Language": locale },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getBlogs(page = 1, locale = "en") {
  return fetchApi<BlogPaginated>(`/blog?page=${page}`, locale);
}

export async function getBlog(slug: string, locale = "en") {
  return fetchApi<Blog>(`/blog/${slug}`, locale);
}

export async function getFaqs(locale = "en") {
  return fetchApi<{ data: WebsiteFaq[] }>(`/faqs`, locale);
}

export async function getImages() {
  return fetchApi<{ data: AppImage[] }>(`/images`);
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  // Try website endpoint first, fallback to business support
  const data = await fetchApi<ContactInfo>(`/contact-info`);
  if (data) return data;
  try {
    const res = await fetch("https://p.kaktusbooking.app/business/support/contactInfo", {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
