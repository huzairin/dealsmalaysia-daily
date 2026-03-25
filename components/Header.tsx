"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Reviews" },
  { href: "/methodology/", label: "How We Test" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="section">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-neon-purple rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-neon-purple text-white font-bold text-lg shadow-lg">
                D
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold text-brand">DealsMY</span>
              <span className="block text-[10px] font-medium text-slate-500 tracking-wide uppercase">Tech Reviews</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 rounded-lg transition-all duration-200 hover:text-brand hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/blog/"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-accent to-neon-purple shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Browse Deals</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <button
              type="button"
              className="lg:hidden relative p-2 rounded-lg text-slate-600 hover:text-brand hover:bg-slate-100 transition-colors"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                    open ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg transform transition-all duration-300 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="section py-4 space-y-1" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 rounded-xl hover:bg-slate-100 hover:text-accent transition-all duration-200"
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              {item.label}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/blog/"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-neon-purple"
              onClick={() => setOpen(false)}
            >
              Browse Deals
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
