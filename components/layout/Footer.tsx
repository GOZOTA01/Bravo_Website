import Link from "next/link";
import Image from "next/image";
import logo from "@/pictures/logo.png";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-stroke bg-brand-bg">
      <div className="container-base py-12 text-sm text-ink.soft">
        <div className="grid gap-8 md:grid-cols-6">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-brand-stroke bg-brand-surface">
                <Image
                  src={logo}
                  alt="Bravo Laser"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="text-sm font-semibold tracking-[0.18em] text-ink">
                BRAVO LASER
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed">
              Bravo Laser is a non‑invasive, laser‑based body contouring
              platform designed to deliver clinically credible fat reduction
              with no surgery and no downtime.
            </p>
            <p className="text-[11px] text-ink.soft">
              © {new Date().getFullYear()} Bravo Laser. All rights reserved.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Explore
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link className="hover:text-brand-gold" href="/what-is-bravo-laser">
                  What is Bravo Laser
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/treatment">
                  Treatment
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/patient-results">
                  Patient Results
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/treatment-areas">
                  Treatment Areas
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/find-a-provider">
                  Find a Provider
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Providers
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link className="hover:text-brand-gold" href="/provider-benefits">
                  Provider Benefits
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/faq#providers">
                  Provider FAQ
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/contact?type=provider">
                  Inquire Now
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Company
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link className="hover:text-brand-gold" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/blog">
                  Articles / Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/news">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Legal
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link className="hover:text-brand-gold" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/terms">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold" href="/disclaimer">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Social
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" aria-label="Bravo Laser on Instagram">
                  <span className="transition hover:text-brand-gold">
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Bravo Laser on Facebook">
                  <span className="transition hover:text-brand-gold">
                    Facebook
                  </span>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Bravo Laser on X / Twitter">
                  <span className="transition hover:text-brand-gold">
                    X / Twitter
                  </span>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Bravo Laser on LinkedIn">
                  <span className="transition hover:text-brand-gold">
                    LinkedIn
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

