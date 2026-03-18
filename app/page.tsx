export default function HomePage() {
  return (
    <>
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-white to-brand.light/30">
          <div className="container-base grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand.emerald">
                Non‑Invasive Laser Body Contouring
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                A modern, clinical approach to{" "}
                <span className="text-brand.emerald">
                  laser‑based fat reduction
                </span>
                .
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-ink.soft sm:text-base">
                Bravo Laser helps reduce stubborn body fat with a comfortable,
                non‑surgical laser treatment that fits into real life—no
                incisions, no freezing, and no downtime. Built for patients
                seeking confidence and for providers growing modern practices.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/treatment"
                  className="rounded-pill bg-brand.emerald px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  For Patients
                </a>
                <a
                  href="/provider-benefits"
                  className="rounded-pill border border-slate-300 px-5 py-2.5 text-xs font-semibold text-ink transition hover:border-brand.emerald hover:text-brand.emerald"
                >
                  For Providers
                </a>
                <a
                  href="/find-a-provider"
                  className="text-xs font-medium text-ink.soft underline-offset-4 hover:text-ink hover:underline"
                >
                  Find a local provider
                </a>
              </div>

              <dl className="mt-4 grid max-w-md grid-cols-2 gap-4 text-xs text-ink.soft">
                <div>
                  <dt className="font-semibold text-ink">Non‑invasive</dt>
                  <dd>No incisions, no anesthesia, no sutures.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">No downtime</dt>
                  <dd>Return to work and daily life immediately.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Comfort‑focused</dt>
                  <dd>Gentle, low‑level laser experience.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">
                    Built for busy clinics
                  </dt>
                  <dd>Scalable, low‑friction treatment workflow.</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-brand.emerald/5 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="mb-4 flex items-center justify-between text-xs text-ink.soft">
                  <span className="font-semibold text-ink">
                    Bravo Laser Console
                  </span>
                  <span>Non‑invasive protocol</span>
                </div>
                <div className="h-40 rounded-2xl bg-gradient-to-br from-brand.light via-white to-brand.emerald/20" />
                <div className="mt-4 grid grid-cols-3 gap-3 text-[11px]">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-ink.soft">
                      Typical plan
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      6–8 sessions
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-ink.soft">
                      Downtime
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      None
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-ink.soft">
                      Comfort
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      Well‑tolerated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder for additional homepage sections to be built next */}
        <section className="container-base py-16 text-sm text-ink.soft">
          <p>
            Next steps: build out dedicated sections for &ldquo;What is Bravo
            Laser?&rdquo;, patient vs provider journeys, science &amp;
            credibility, treatment areas, results, testimonials, FAQs, and
            conversion‑ready CTAs across the page hierarchy.
          </p>
        </section>
    </>
  );
}

