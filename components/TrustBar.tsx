export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800"
              title="HTTPS encryption"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M12 1.586l-8 8V23h16V9.586l-8-8zm6 18H6v-8.586l6-6 6 6V19.586z"
                  clipRule="evenodd"
                />
              </svg>
              Secure connection (SSL)
            </span>
            <span className="text-xs text-slate-500">Editorial standards · Transparent disclosures</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              As seen on
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-6 opacity-80" aria-label="Social channels">
              <li className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                <svg className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </li>
              <li className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                <svg className="h-6 w-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                TikTok
              </li>
              <li className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                <svg className="h-6 w-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
