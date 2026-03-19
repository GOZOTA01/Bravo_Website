import Link from "next/link";
import Image from "next/image";
import logo from "@/pictures/logo.png";

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
    <header className="sticky top-0 z-40 border-b border-brand-stroke bg-brand-bg/70 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between gap-4">
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

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-ink.soft transition hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact?type=patient"
            className="rounded-pill border border-brand-stroke bg-transparent px-4 py-2 text-xs font-semibold text-brand-gold transition hover:border-[rgba(214,179,106,0.35)] hover:bg-white/5"
          >
            Book Consultation
          </Link>
          <Link
            href="/provider-benefits"
            className="rounded-pill bg-gradient-to-b from-brand-emerald to-brand-emerald2 px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_1px_rgba(13,163,143,0.30),0_18px_90px_rgba(13,163,143,0.18)]"
          >
            For Providers
          </Link>
        </div>
      </div>
    </header>
  );
}

