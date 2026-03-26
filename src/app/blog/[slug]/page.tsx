"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Blog } from "@/lib/api";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";

export default function BlogDetailPage() {
  const { t, locale } = useLocale();
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/blog/${slug}?lang=${locale}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, locale]);

  if (loading) {
    return (
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">Blog post not found.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors mt-4">
            <ArrowLeft size={16} /> {t.blog.backToBlog}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-6">
              <ArrowLeft size={16} /> {t.blog.backToBlog}
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark">{blog.title}</h1>
            {blog.description && (
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">{blog.description}</p>
            )}
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {blog.cover_photo && (
            <AnimatedSection>
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden my-8">
                <Image src={blog.cover_photo} alt={blog.title} fill className="object-cover" />
              </div>
            </AnimatedSection>
          )}
          <AnimatedSection delay={0.1}>
            <div
              className="prose prose-gray max-w-none prose-headings:text-dark prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
