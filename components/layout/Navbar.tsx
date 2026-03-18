import Link from "next/link";

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
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand.emerald text-white text-sm font-semibold">
            B
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              Bravo Laser
            </span>
            <span className="text-[11px] text-ink.soft">
              Non‑Invasive Body Contouring
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink.soft transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact?type=patient"
            className="rounded-pill border border-brand.emerald px-4 py-2 text-xs font-medium text-brand.emerald transition hover:bg-brand.light"
          >
            Book Consultation
          </Link>
          <Link
            href="/provider-benefits"
            className="rounded-pill bg-brand.emerald px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            For Providers
          </Link>
        </div>
      </div>
    </header>
  );
}

