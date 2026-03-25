import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-brand">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you requested does not exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-accent px-6 font-semibold text-white hover:bg-accent-hover"
      >
        Back to home
      </Link>
    </div>
  );
}
