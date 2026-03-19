"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/pictures/logo.png";
import { useEffect, useId, useState } from "react";

const navLinks = [
  { href: "/what-is-bravo-laser", label: "What is Bravo Laser" },
  { href: "/treatment", label: "Treatment" },
  { href: "/patient-results", label: "Patient Results" },
  { href: "/provider-benefits", label: "Provider Benefits" },
  { href: "/treatment-areas", label: "Treatment Areas" },
  { href: "/find-a-provider", label: "Find a Provider" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog / News" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-stroke bg-brand-bg/70 backdrop-blur">
        <div className="container-base flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-brand-stroke bg-brand-surface p-2 text-ink transition hover:bg-white/5"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-controls={menuId}
              aria-expanded={isOpen}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-brand-stroke bg-brand-surface">
                <Image
                  src={logo}
                  alt="Bravo Laser"
                  fill
                  className="object-cover"
                  sizes="36px"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.18em] text-ink">
                  BRAVO LASER
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink.soft">
                  Advanced body contouring
                </span>
              </div>
            </Link>
          </div>

        </div>
      </header>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside
        id={menuId}
        className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] border-r border-brand-stroke bg-brand-bg/95 backdrop-blur transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-16 items-center justify-between border-b border-brand-stroke px-5">
          <span className="text-sm font-semibold tracking-[0.18em] text-ink">
            BRAVO LASER
          </span>
          <button
            type="button"
            className="rounded-xl border border-brand-stroke bg-brand-surface p-2 text-ink transition hover:bg-white/5"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex h-[calc(100%-4rem)] flex-col gap-2 overflow-y-auto px-5 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-ink.soft transition hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-brand-stroke pt-4">
            <Link
              href="/contact?type=patient"
              onClick={() => setIsOpen(false)}
              className="mb-3 block rounded-pill border border-brand-stroke bg-transparent px-4 py-2 text-center text-xs font-semibold text-brand-gold transition hover:border-[rgba(214,179,106,0.35)] hover:bg-white/5"
            >
              Book Consultation
            </Link>
            <Link
              href="/provider-benefits"
              onClick={() => setIsOpen(false)}
              className="block rounded-pill bg-gradient-to-b from-brand-emerald to-brand-emerald2 px-4 py-2 text-center text-xs font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_1px_rgba(13,163,143,0.30),0_18px_90px_rgba(13,163,143,0.18)]"
            >
              For Providers
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}

