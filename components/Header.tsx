"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/blog/", label: "Reviews", icon: "reviews" },
  { href: "/methodology/", label: "Our Lab", icon: "lab" },
  { href: "/about/", label: "About", icon: "about" },
  { href: "/contact/", label: "Contact", icon: "contact" },
];

const NavIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    home: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    reviews: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    lab: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    about: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    contact: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50"
          : "bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className="section">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
          >
            <Logo variant="full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" aria-label="Main">
            <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100/80 backdrop-blur-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-xl transition-all duration-200 hover:text-accent hover:bg-white hover:shadow-sm"
                >
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                    <NavIcon type={item.icon} />
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl text-slate-500 hover:text-accent hover:bg-slate-100 transition-all duration-200"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* CTA Button */}
            <Link
              href="/blog/"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent via-indigo-500 to-neon-purple shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Find Deals</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden relative p-2.5 rounded-xl text-slate-600 hover:text-accent hover:bg-slate-100 transition-all duration-200"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                <span
                  className={`absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ${
                    open ? "rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                    open ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ${
                    open ? "-rotate-45" : "translate-y-2"
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
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl shadow-slate-900/10 transform transition-all duration-400 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="section py-6" aria-label="Mobile">
          <div className="space-y-1">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 px-4 py-4 text-base font-medium text-slate-700 rounded-2xl hover:bg-gradient-to-r hover:from-accent/5 hover:to-neon-purple/5 hover:text-accent transition-all duration-200 group"
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <NavIcon type={item.icon} />
                </span>
                <span>{item.label}</span>
                <svg className="w-5 h-5 ml-auto text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-100">
            <Link
              href="/blog/"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-accent via-indigo-500 to-neon-purple shadow-lg shadow-accent/20"
              onClick={() => setOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Find Deals
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
