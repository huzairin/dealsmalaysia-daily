const pros = [
  "Strong speeds to Singapore and Japan from Malaysia in our tests",
  "Polished apps for Windows, macOS, iOS, and Android",
  "Useful security extras (threat blocking, kill switch) for public Wi‑Fi",
  "Large server fleet and regular third-party audit activity",
];

const cons = [
  "Renewal pricing can jump — watch term length and promotions",
  "Not always the cheapest versus aggressive discount rivals",
  "Streaming access varies; platforms change detection over time",
];

export function ProsConsTable() {
  return (
    <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-green-200 bg-green-50/80 p-5">
        <h3 className="text-lg font-bold text-green-900">Pros</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-green-900/90">
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-5">
        <h3 className="text-lg font-bold text-rose-900">Cons</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-900/90">
          {cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
