"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { Blog } from "@/lib/api";

const API_URL = "https://p.kaktusbooking.app/website";

export default function BlogPage() {
  const { t, locale } = useLocale();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/blog?page=1`, { headers: { "Accept-Language": locale } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data?.data) setBlogs(data.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [locale]);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Sparkles size={14} />
              {t.blog.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark">
              {t.blog.title} <span className="text-primary">{t.blog.titleHighlight}</span> {t.blog.titleEnd}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">{t.blog.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">{t.blog.noPosts}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, i) => (
                <AnimatedSection key={blog.id} delay={(i % 3) * 0.1}>
                  <Link href={`/blog/${blog.slug}`} className="group block h-full">
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full hover:shadow-lg hover:border-primary/20 transition-all">
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <Image src={blog.cover_photo} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-6">
                        <h2 className="text-lg font-bold text-dark group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h2>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed">{blog.description}</p>
                        <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary">
                          {t.blog.readMore} <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
