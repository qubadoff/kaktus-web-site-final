"use client";

import { useState, useCallback, FormEvent } from "react";
import { Send, Calendar, Loader2 } from "lucide-react";
import RateLimitModal from "@/components/RateLimitModal";
import { useLocale } from "@/i18n/LocaleContext";

export default function DemoForm() {
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
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business_name: (form.elements.namedItem("business_name") as HTMLInputElement).value,
      business_type: (form.elements.namedItem("business_type") as HTMLSelectElement).value || null,
      team_size: (form.elements.namedItem("team_size") as HTMLSelectElement).value || null,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value || null,
    };

    try {
      const res = await fetch(`/api/demo`, {
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
          <Calendar size={28} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">{t.demo.submitted}</h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          {t.demo.submittedDesc}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary font-semibold text-sm hover:text-primary-dark"
        >
          {t.demo.submitAnother}
        </button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

  return (
    <>
      <RateLimitModal open={rateLimited} onClose={closeRateLimit} />

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-dark mb-6">{t.demo.formTitle}</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.firstName} *</label>
            <input name="first_name" type="text" required className={inputClass} placeholder="John" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.lastName} *</label>
            <input name="last_name" type="text" required className={inputClass} placeholder="Doe" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.workEmail} *</label>
            <input name="email" type="email" required className={inputClass} placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.phone} *</label>
            <input name="phone" type="tel" required className={inputClass} placeholder="+994 XX XXX XX XX" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.businessName} *</label>
          <input name="business_name" type="text" required className={inputClass} placeholder="Your Salon Name" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.businessType}</label>
            <select name="business_type" className={`${inputClass} bg-white`}>
              <option value="">{t.demo.selectType}</option>
              <option>Hair Salon</option>
              <option>Beauty Salon</option>
              <option>Spa &amp; Wellness</option>
              <option>Barber Shop</option>
              <option>Nail Studio</option>
              <option>Fitness / Gym</option>
              <option>Medical / Clinic</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.demo.teamSize}</label>
            <select name="team_size" className={`${inputClass} bg-white`}>
              <option value="">{t.demo.selectSize}</option>
              <option>Just me</option>
              <option>2-5 employees</option>
              <option>6-15 employees</option>
              <option>16-50 employees</option>
              <option>50+ employees</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.demo.notes}
          </label>
          <textarea name="notes" rows={3} className={`${inputClass} resize-none`} placeholder={t.demo.notesPlaceholder} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors disabled:opacity-60"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          {loading ? t.demo.submitting : t.demo.submit}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          {t.demo.privacyNote}
        </p>
      </form>
    </>
  );
}
