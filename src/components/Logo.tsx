import Image from "next/image";
import logoImg from "@/app/images/logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-dark" : "text-white";
  const subtextColor = variant === "dark" ? "text-gray-400" : "text-gray-400";

  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`}>
      <Image src={logoImg} alt="Kaktus" width={36} height={36} className="w-9 h-9" />
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
