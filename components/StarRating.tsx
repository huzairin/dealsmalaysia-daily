export function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < full || (i === full && hasHalf);
        return (
          <svg
            key={i}
            className={`h-6 w-6 ${filled ? "text-amber-400" : "text-slate-200"}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      })}
      <span className="ml-2 text-sm font-semibold text-slate-700">{value.toFixed(1)} / {max}</span>
    </div>
  );
}
