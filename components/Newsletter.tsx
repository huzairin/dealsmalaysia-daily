"use client";

import { useState } from "react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="rounded-2xl bg-brand px-6 py-10 text-white shadow-xl sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Weekly deals briefing</h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          MYR-friendly round-ups, VPN and hosting tests, and Shopee/Lazada picks — no spam, unsubscribe
          anytime.
        </p>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="min-h-[48px] rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent sm:min-w-[280px]"
          />
          <button
            type="submit"
            className="min-h-[48px] rounded-lg bg-accent px-6 font-semibold text-white transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-sm text-green-300" role="status">
            Thanks — you&apos;re on the list. (Demo: no email is sent from this static demo.)
          </p>
        )}
        <p className="mt-4 text-xs text-slate-400">
          By subscribing you agree to our{" "}
          <a href="/privacy/" className="underline hover:text-white">
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
