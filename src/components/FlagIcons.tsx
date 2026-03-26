export function AzFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="160" fill="#0092BC" />
      <rect width="640" height="160" y="160" fill="#E4002B" />
      <rect width="640" height="160" y="320" fill="#00AF66" />
      <circle cx="320" cy="240" r="60" fill="#fff" />
      <circle cx="335" cy="240" r="50" fill="#E4002B" />
      <polygon points="370,210 378,234 403,234 383,248 390,272 370,258 350,272 357,248 337,234 362,234" fill="#fff" />
    </svg>
  );
}

export function EnFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="480" fill="#012169" />
      <path d="M75,0L320,180L565,0H640V60L395,240L640,420V480H565L320,300L75,480H0V420L245,240L0,60V0H75Z" fill="#fff" />
      <path d="M424,281L640,480V448L368,257ZM320,300L330,316L90,480H0ZM640,0V18L383,244L385,220ZM0,0L310,196L300,170L45,0Z" fill="#C8102E" />
      <path d="M241,0V480H399V0ZM0,160V320H640V160Z" fill="#fff" />
      <path d="M273,0V480H367V0ZM0,192V288H640V192Z" fill="#C8102E" />
    </svg>
  );
}

export function RuFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="160" fill="#fff" />
      <rect width="640" height="160" y="160" fill="#0039A6" />
      <rect width="640" height="160" y="320" fill="#D52B1E" />
    </svg>
  );
}
