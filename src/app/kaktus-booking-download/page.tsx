import Image from "next/image";
import logoImg from "@/app/images/logo.png";
import { STORE_LINKS } from "@/lib/store-links";

export default function KaktusBookingDownloadPage() {
  return (
    <div className="min-h-svh bg-gradient-to-b from-[#1a8a3e] via-[#15753a] to-[#0d5a30] flex flex-col items-center justify-center px-5 py-8 relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/[0.06] rounded-full blur-[100px]" />

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">

        {/* Logo + name */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
            <Image src={logoImg} alt="Kaktus Booking" width={44} height={44} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">
              Kaktus <span className="text-white/80">Booking</span>
            </h1>
            <p className="text-[11px] text-white/40 mt-0.5">kaktusbooking.app</p>
          </div>
        </div>

        {/* Download buttons */}
        <div className="rounded-2xl bg-white/[0.07] border border-white/[0.1] p-5 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={STORE_LINKS.booking.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-16"
            />
          </a>
          <a
            href={STORE_LINKS.booking.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-16"
            />
          </a>
        </div>

      </div>
    </div>
  );
}
