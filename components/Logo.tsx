export function Logo({ className = "", variant = "full" }: { className?: string; variant?: "full" | "compact" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${className}`}
    >
      {/* Modern Logo Mark */}
      <span className="relative flex-shrink-0" aria-hidden>
        {/* Outer glow */}
        <span className="absolute inset-0 bg-gradient-to-br from-accent via-neon-purple to-neon-pink rounded-xl blur-md opacity-50" />
        
        {/* Logo container */}
        <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent via-indigo-500 to-neon-purple shadow-lg overflow-hidden">
          {/* Inner shine effect */}
          <span className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent" />
          
          {/* Letter mark with stylized D */}
          <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6 relative z-10">
            {/* Stylized D with deals tag */}
            <path 
              d="M8 6h8c5.523 0 10 4.477 10 10s-4.477 10-10 10H8V6z" 
              fill="white" 
              fillOpacity="0.9"
            />
            <path 
              d="M11 9h5c3.866 0 7 3.134 7 7s-3.134 7-7 7h-5V9z" 
              fill="url(#logoGradient)"
            />
            {/* Price tag accent */}
            <circle cx="14" cy="16" r="2" fill="white" fillOpacity="0.9" />
            <defs>
              <linearGradient id="logoGradient" x1="11" y1="9" x2="23" y2="23">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </span>

      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="flex items-center gap-1">
            <span className="text-xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Deals
            </span>
            <span className="text-xl font-extrabold bg-gradient-to-r from-accent to-neon-purple bg-clip-text text-transparent">
              MY
            </span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 mt-0.5">
            Smart Tech Reviews
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoLight({ className = "", variant = "full" }: { className?: string; variant?: "full" | "compact" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${className}`}
    >
      {/* Modern Logo Mark */}
      <span className="relative flex-shrink-0" aria-hidden>
        <span className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-accent to-neon-purple rounded-xl blur-md opacity-40" />
        
        <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent via-indigo-500 to-neon-purple shadow-lg overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent" />
          
          <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6 relative z-10">
            <path 
              d="M8 6h8c5.523 0 10 4.477 10 10s-4.477 10-10 10H8V6z" 
              fill="white" 
              fillOpacity="0.9"
            />
            <path 
              d="M11 9h5c3.866 0 7 3.134 7 7s-3.134 7-7 7h-5V9z" 
              fill="url(#logoGradientLight)"
            />
            <circle cx="14" cy="16" r="2" fill="white" fillOpacity="0.9" />
            <defs>
              <linearGradient id="logoGradientLight" x1="11" y1="9" x2="23" y2="23">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </span>

      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="flex items-center gap-1">
            <span className="text-xl font-extrabold text-white">
              Deals
            </span>
            <span className="text-xl font-extrabold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              MY
            </span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 mt-0.5">
            Smart Tech Reviews
          </span>
        </span>
      )}
    </span>
  );
}
