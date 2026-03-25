import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Deals Malaysia Daily — partnerships, press, and reader enquiries at hello@featherpro.fit.",
  openGraph: {
    title: "Contact | Deals Malaysia Daily",
    description: "Reach our editorial desk for partnerships and reader feedback.",
  },
};

const social = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    label: "YouTube channel",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    label: "TikTok",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    label: "Facebook page",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold text-brand sm:text-4xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Editorial desk, partnership enquiries, and corrections. We read every message; response
            times are typically two business days for non-urgent mail.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:py-16">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-brand">Business email</h2>
            <a
              href="mailto:hello@featherpro.fit"
              className="mt-2 block text-lg font-semibold text-accent hover:underline"
            >
              hello@featherpro.fit
            </a>
            <p className="mt-4 text-sm text-slate-600">
              For affiliate programme managers: include your brand name, target categories, and
              whether you seek a review, deal post, or newsletter feature.
            </p>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-slate-500">
              Social
            </h3>
            <ul className="mt-3 space-y-2">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-brand">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Static export demo — connect this form to your backend or form service before launch.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
