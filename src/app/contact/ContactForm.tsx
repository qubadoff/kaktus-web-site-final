"use client";

import { useState, useCallback, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import RateLimitModal from "@/components/RateLimitModal";
import { useLocale } from "@/i18n/LocaleContext";

export default function ContactForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rateLimited, setRateLimited] = useState(false);

  const closeRateLimit = useCallback(() => setRateLimited(false), []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem("first_name") as HTMLInputElement).value,
      last_name: (form.elements.namedItem("last_name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value || null,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 429) {
        setRateLimited(true);
      } else if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-primary-50 border-2 border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={28} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">{t.contact.sent}</h3>
        <p className="text-gray-600">{t.contact.sentDesc}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary font-semibold text-sm hover:text-primary-dark"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

  return (
    <>
      <RateLimitModal open={rateLimited} onClose={closeRateLimit} />

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-dark mb-6">{t.contact.formTitle}</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.firstName} *</label>
            <input name="first_name" type="text" required className={inputClass} placeholder="John" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.lastName} *</label>
            <input name="last_name" type="text" required className={inputClass} placeholder="Doe" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.emailLabel} *</label>
            <input name="email" type="email" required className={inputClass} placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.phoneLabel}</label>
            <input name="phone" type="tel" className={inputClass} placeholder="+994 XX XXX XX XX" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.subject} *</label>
          <select name="subject" className={`${inputClass} bg-white`}>
            <option value="General Inquiry">{t.contact.subjects.general}</option>
            <option value="Partnership">{t.contact.subjects.partnership}</option>
            <option value="Technical Support">{t.contact.subjects.technical}</option>
            <option value="Billing">{t.contact.subjects.billing}</option>
            <option value="Feature Request">{t.contact.subjects.feature}</option>
            <option value="Other">{t.contact.subjects.other}</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.message} *</label>
          <textarea name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us how we can help..." />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {loading ? t.contact.sending : t.contact.send}
        </button>
      </form>
    </>
  );
}
