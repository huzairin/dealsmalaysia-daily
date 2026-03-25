export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-bold tracking-tight text-white ${className}`}
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white shadow-sm"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.003 9.003a.75.75 0 001.06 0l4.318-4.318a.75.75 0 000-1.06l-9.003-9.003A3 3 0 0011.566 2.25H5.25zm3.75 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg sm:text-xl">DealsMyalaysia.Daily</span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-slate-300 sm:text-xs">
          Tech &amp; deals for Malaysia
        </span>
      </span>
    </span>
  );
}
