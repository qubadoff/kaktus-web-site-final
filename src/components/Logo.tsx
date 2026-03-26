function KaktusIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#22C55E" />
      {/* Main stem */}
      <rect x="18" y="8" width="4.5" rx="2.25" height="18" fill="white" />
      {/* Left arm */}
      <path
        d="M18 18H14.5C13.1 18 12 16.9 12 15.5V14C12 12.9 12.9 12 14 12H14.5C15.9 12 17 13.1 17 14.5V18Z"
        fill="white"
      />
      {/* Right arm */}
      <path
        d="M22.5 16H26C27.4 16 28.5 14.9 28.5 13.5V13C28.5 11.9 27.6 11 26.5 11H26C24.6 11 23.5 12.1 23.5 13.5V16Z"
        fill="white"
      />
      {/* Pot */}
      <path
        d="M14 27H26.5L25 32.5C24.8 33.4 24 34 23.1 34H17.4C16.5 34 15.7 33.4 15.5 32.5L14 27Z"
        fill="white"
        opacity="0.85"
      />
      <rect x="13" y="25.5" width="14.5" height="2.5" rx="1.25" fill="white" />
    </svg>
  );
}

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-dark" : "text-white";
  const subtextColor = variant === "dark" ? "text-gray-400" : "text-gray-400";

  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`}>
      <KaktusIcon />
      <div className="flex flex-col leading-none">
        <span className={`text-[17px] font-bold tracking-tight ${textColor}`}>
          kaktus
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${subtextColor}`}>
          systems
        </span>
      </div>
    </a>
  );
}

export { KaktusIcon };
