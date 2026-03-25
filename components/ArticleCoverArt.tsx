function Mesh({ uid }: { uid: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id={`${uid}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M32 0H0V32"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-40"
          />
        </pattern>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="55%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid}-grid)`} />
      <rect width="100%" height="100%" fill={`url(#${uid}-glow)`} />
    </svg>
  );
}

function CategoryGlyph({ category }: { category: string }) {
  const common = "h-36 w-36 text-white drop-shadow-md sm:h-44 sm:w-44";
  switch (category) {
    case "VPN & Security":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <path
            opacity="0.9"
            d="M60 12L22 28v34c0 22 16 42 38 46 22-4 38-24 38-46V28L60 12z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M48 58l10 10 18-22"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Web Hosting":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <rect x="18" y="22" width="84" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
          <rect x="18" y="52" width="84" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
          <rect x="18" y="82" width="84" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
          <circle cx="32" cy="34" r="4" fill="currentColor" opacity="0.85" />
          <circle cx="32" cy="64" r="4" fill="currentColor" opacity="0.85" />
          <circle cx="32" cy="94" r="4" fill="currentColor" opacity="0.85" />
        </svg>
      );
    case "Shopping Deals":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <path
            d="M28 38h64l-8 48H36L28 38z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M40 38V32a20 20 0 0140 0v6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M48 88h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "Email Marketing":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <rect x="16" y="30" width="88" height="60" rx="8" stroke="currentColor" strokeWidth="3" />
          <path d="M20 36l40 28 40-28" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      );
    case "AI Tools":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <path
            d="M60 18l6 16 17 2-12 12 3 17-14-8-14 8 3-17-12-12 17-2 6-16z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="34" y="54" width="52" height="40" rx="8" stroke="currentColor" strokeWidth="3" />
          <path d="M46 70h28M46 80h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "Travel":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <path
            d="M22 78c18-28 58-28 76 0"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M60 28L44 72h32L60 28z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="88" r="6" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case "Editorial":
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <path
            d="M28 24h48v72H28V24z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M36 36h32M36 48h24M36 60h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M76 20l16-8v96l-16-8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 120 120" fill="none" aria-hidden>
          <rect x="24" y="24" width="72" height="72" rx="12" stroke="currentColor" strokeWidth="3" />
          <path d="M40 60h40M60 40v40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
}

type Props = {
  category: string;
  imageGradient: string;
  /** Unique prefix for SVG defs (e.g. article slug). */
  patternUid: string;
};

/** Gradient + mesh + category illustration for article cards and headers. */
export function ArticleCoverArt({ category, imageGradient, patternUid }: Props) {
  const uid = patternUid.replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${imageGradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(255,255,255,0.2),transparent)]" />
      <Mesh uid={uid} />
      <div className="absolute -bottom-2 -right-2 flex items-end justify-end opacity-[0.92] transition duration-300 group-hover:scale-105 group-hover:opacity-100">
        <CategoryGlyph category={category} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}
