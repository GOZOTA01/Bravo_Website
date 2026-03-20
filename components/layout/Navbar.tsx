"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/pictures/Bravo_logo.png";
import { ButtonLink } from "@/components/ui/Button";
import { useEffect, useId, useRef, useState } from "react";

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

const logoClass =
  "relative h-9 w-[118px] shrink-0 sm:h-10 sm:w-[128px]";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => closeBtnRef.current?.focus(), 100);
      return () => window.clearTimeout(t);
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-stroke/80 bg-brand-bg/90 backdrop-blur-md">
        <div className="container-base flex h-16 items-center justify-between gap-3 sm:gap-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand-stroke/90 bg-brand-surfaceMuted/60 px-2.5 py-2 text-ink transition hover:border-brand-gold/45 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls={menuId}
              aria-expanded={isOpen}
            >
              <span className="relative block h-5 w-5 shrink-0" aria-hidden="true">
                {isOpen ? (
                  <svg
                    className="absolute inset-0 m-auto h-[18px] w-[18px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="absolute inset-0 m-auto h-[18px] w-[18px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 7H20M4 12H20M4 17H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/90 sm:inline">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>

            <Link
              href="/"
              className="flex min-w-0 items-center"
              onClick={() => setIsOpen(false)}
            >
              <div className={logoClass}>
                <Image
                  src={logo}
                  alt="Bravo Laser"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 118px, 128px"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ButtonLink
              href="/contact?type=patient"
              variant="outline"
              size="sm"
              className="!px-2.5 text-[10px] sm:!px-3 sm:text-xs"
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book consultation</span>
            </ButtonLink>
            <ButtonLink
              href="/provider-benefits"
              variant="primary"
              size="sm"
              className="!px-2.5 text-[10px] sm:!px-3 sm:text-xs"
            >
              <span className="sm:hidden">Providers</span>
              <span className="hidden sm:inline">For providers</span>
            </ButtonLink>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-[opacity,backdrop-filter] duration-300 ease-out ${
          isOpen
            ? "bg-black/55 opacity-100 backdrop-blur-[2px] pointer-events-auto"
            : "bg-black/0 opacity-0 pointer-events-none backdrop-blur-none"
        }`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      <aside
        id={menuId}
        className={`fixed left-0 top-0 z-[101] flex h-full w-[min(100vw-3rem,22rem)] flex-col border-r border-brand-stroke/80 border-l-2 border-l-brand-gold/35 bg-brand-bg/95 shadow-[16px_0_64px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:w-96 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-brand-stroke/80 px-5">
          <div className={logoClass}>
            <Image
              src={logo}
              alt=""
              fill
              className="object-contain object-left"
              sizes="118px"
            />
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="shrink-0 rounded-xl border border-brand-stroke/90 bg-brand-surfaceMuted/60 p-2 text-ink transition hover:border-brand-gold/45 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
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

        <nav
          className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-5 sm:px-5"
          aria-label="Primary pages"
        >
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold/90">
            Navigate
          </p>
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-ink/90 transition-[transform,opacity,border-color,background-color,color] duration-300 ease-out hover:border-brand-stroke/60 hover:bg-white/[0.04] hover:text-brand-gold ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${60 + i * 42}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-brand-stroke/70 pt-5">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold/90">
              Quick actions
            </p>
            <div className="flex flex-col gap-2.5 px-1">
              <ButtonLink
                href="/contact?type=patient"
                onClick={() => setIsOpen(false)}
                variant="outline"
                size="sm"
                className="w-full justify-center"
              >
                Book consultation
              </ButtonLink>
              <ButtonLink
                href="/provider-benefits"
                onClick={() => setIsOpen(false)}
                variant="primary"
                size="sm"
                className="w-full justify-center"
              >
                For providers
              </ButtonLink>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
