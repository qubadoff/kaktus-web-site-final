import Image from "next/image";
import logoImg from "@/app/images/logo.png";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Asan Rezervasiya",
    desc: "Bir neçə toxunuşla istədiyin salonda randevu al",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Yaxınlıqdakı Salonlar",
    desc: "Xəritə ilə ətrafındakı ən yaxşı yerləri kəşf et",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Mesajlaşma",
    desc: "Salonla birbaşa əlaqə saxla, suallarını ver",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Köməkçi",
    desc: "Süni intellekt ilə sənə uyğun xidmət tap",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Məhsul Sifarişi",
    desc: "Sevdiyin salonun məhsullarını onlayn sifariş et",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Rəylər & Reytinq",
    desc: "Əvvəlki müştərilərin rəylərinə bax, öz rəyini yaz",
  },
];

export default function KaktusBookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="w-full max-w-lg relative z-10">
        {/* Logo + App Name */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl shadow-primary/10 mb-5">
            <Image src={logoImg} alt="Kaktus Booking" width={52} height={52} className="drop-shadow-lg" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Kaktus <span className="text-primary">Booking</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-sm mx-auto leading-relaxed">
            Salonlar, klinikalar və xidmət mərkəzləri — hamısı bir tətbiqdə. Pulsuz rezervasiya et, keyfini yaşa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-3.5 sm:p-4 hover:bg-white/[0.07] hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2.5 group-hover:bg-primary/15 group-hover:scale-105 transition-all">
                {f.icon}
              </div>
              <h3 className="text-white text-xs sm:text-sm font-semibold mb-0.5">{f.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Download Buttons */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/app/kaktus-booking/id6743091818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-white text-gray-900 rounded-2xl py-3.5 font-semibold text-sm hover:bg-gray-100 active:scale-[0.98] transition-all shadow-lg shadow-white/5"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kaktus.booking"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-primary text-white rounded-2xl py-3.5 font-semibold text-sm hover:bg-primary-dark active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.191l-2.302 2.302L5.864 2.658z" />
              </svg>
              Google Play
            </a>
          </div>

          {/* Website link */}
          <a
            href="/"
            className="block text-center text-gray-500 hover:text-primary text-xs transition-colors py-2"
          >
            kaktusbooking.app
          </a>
        </div>

        {/* Bottom branding */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-[10px] tracking-wider uppercase">
            Powered by Kaktus Systems
          </p>
        </div>
      </div>
    </div>
  );
}
