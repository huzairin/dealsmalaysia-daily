"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-semibold text-slate-700">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          defaultValue="general"
        >
          <option value="general">General enquiry</option>
          <option value="partnerships">Partnerships / affiliate</option>
          <option value="press">Press &amp; media</option>
          <option value="correction">Correction request</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <button
        type="submit"
        className="min-h-[48px] w-full rounded-lg bg-brand px-6 font-semibold text-white transition hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-auto"
      >
        Send message
      </button>
      {sent && (
        <p className="text-sm font-medium text-green-700" role="status">
          Thank you. This demo site does not send email — wire your form to a provider (e.g.
          Formspree, Resend) for production.
        </p>
      )}
    </form>
  );
}
