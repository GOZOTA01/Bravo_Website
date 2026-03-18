import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/70">
      <div className="container-base py-10 text-sm text-ink.soft">
        <div className="grid gap-8 md:grid-cols-6">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand.emerald text-white text-sm font-semibold">
                B
              </div>
              <span className="text-sm font-semibold text-ink">
                Bravo Laser
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed">
              Bravo Laser is a non‑invasive, laser‑based body contouring
              platform designed to deliver clinically credible fat reduction
              with no surgery and no downtime.
            </p>
            <p className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Bravo Laser. All rights reserved.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Explore
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/what-is-bravo-laser">What is Bravo Laser</Link>
              </li>
              <li>
                <Link href="/treatment">Treatment</Link>
              </li>
              <li>
                <Link href="/patient-results">Patient Results</Link>
              </li>
              <li>
                <Link href="/treatment-areas">Treatment Areas</Link>
              </li>
              <li>
                <Link href="/find-a-provider">Find a Provider</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Providers
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/provider-benefits">Provider Benefits</Link>
              </li>
              <li>
                <Link href="/faq#providers">Provider FAQ</Link>
              </li>
              <li>
                <Link href="/contact?type=provider">Inquire Now</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Company
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Articles / Blog</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Legal
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Social
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" aria-label="Bravo Laser on Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" aria-label="Bravo Laser on Facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" aria-label="Bravo Laser on X / Twitter">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="#" aria-label="Bravo Laser on LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

