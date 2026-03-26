"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RateLimitModal({ open, onClose }: Props) {
  const { t } = useLocale();
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (!open) {
      setCountdown(60);
      return;
    }
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Icon with pulse ring */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-orange-100 rounded-full animate-ping opacity-30" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Clock size={32} className="text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t.rateLimit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t.rateLimit.description}
              </p>

              {/* Countdown */}
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3">
                <div className="relative w-10 h-10">
                  <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="3"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={100.5}
                      strokeDashoffset={100.5 * (1 - countdown / 60)}
                      className="transition-all duration-1000 ease-linear"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                    {countdown}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">{t.rateLimit.tryAgainIn}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {countdown} {t.rateLimit.seconds}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {t.rateLimit.gotIt}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
