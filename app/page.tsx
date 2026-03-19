import Image from "next/image";
import logo from "@/pictures/logo.png";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-brand-stroke">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg2/70" />
          <div className="pointer-events-none absolute inset-0 opacity-70 bg-laser-grid" />
          <div className="pointer-events-none absolute -left-1/2 top-1/2 h-[520px] w-[1200px] -translate-y-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-brand-emerald/18 to-transparent blur-2xl laser-sweep" />
          <div className="pointer-events-none absolute -right-1/3 top-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-brand-emerald/12 blur-3xl" />

          <div className="container-base relative py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-3xl" />
              <div className="mx-auto relative h-24 w-24 overflow-hidden rounded-3xl border border-brand-stroke bg-brand-surface shadow-glow">
                <Image
                  src={logo}
                  alt="Bravo Laser"
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold text-gold-clarity">
                Premium medical technology
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[0.08em] text-ink text-clarity sm:text-5xl">
                Advanced Laser Body Contouring
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-ink.soft text-clarity sm:text-base">
                Non‑invasive. No downtime. Clinically driven results.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/find-a-provider" variant="gold">
                  Find a Provider
                </ButtonLink>
                <ButtonLink href="/contact?type=patient" variant="primary">
                  Book Consultation
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Protocol", v: "Series-based plan" },
                  { k: "Downtime", v: "None" },
                  { k: "Experience", v: "Comfort-focused" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="glass rounded-3xl px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink.soft">
                      {x.k}
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-[0.06em] text-ink">
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS */}
        <section className="container-base py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="What is Bravo Laser"
                title="A modern, non‑invasive way to target stubborn fat"
                subtitle="Bravo Laser is designed for patients who want a premium, clinic-guided contouring plan—without surgery, incisions, or recovery time."
              />
              <div className="mt-6 h-px w-full divider-gold opacity-80" />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/what-is-bravo-laser" variant="outline">
                  Explore the technology
                </ButtonLink>
                <ButtonLink href="/treatment" variant="secondary">
                  See how treatment works
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Clinical positioning",
                  d: "High-trust messaging built for medical aesthetics.",
                },
                {
                  t: "Comfort first",
                  d: "Gentle protocol designed for consistency.",
                },
                { t: "No downtime", d: "Return to daily life immediately." },
                {
                  t: "Measurable",
                  d: "Track with photos, measurements, and fit changes.",
                },
              ].map((x) => (
                <Card
                  key={x.t}
                  className="glass p-6 hover:shadow-glow transition"
                >
                  <div className="h-8 w-8 rounded-2xl border border-brand-stroke bg-gradient-to-b from-brand-emerald/35 to-transparent shadow-[0_0_30px_rgba(13,163,143,0.18)]" />
                  <p className="mt-4 text-sm font-semibold tracking-[0.06em] text-ink">
                    {x.t}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                    {x.d}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: DUAL AUDIENCE */}
        <section className="border-y border-brand-stroke bg-gradient-to-b from-brand-bg2/30 to-transparent">
          <div className="container-base py-16 sm:py-20">
            <SectionHeader
              eyebrow="Two paths. One premium brand."
              title="Built for patients and providers"
              subtitle="Choose your journey. Each path is designed as its own conversion flow—clear, fast, and high-trust."
              align="center"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card className="glass group p-8 transition hover:shadow-glow hover:border-[rgba(13,163,143,0.30)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  For patients
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[0.08em] text-ink">
                  Realistic, measurable contour change
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink.soft">
                  A comfortable series-based plan guided by a local provider—no
                  surgery, no freezing, and no downtime.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href="/patient-results"
                    variant="gold"
                    size="sm"
                  >
                    View Results
                  </ButtonLink>
                  <ButtonLink
                    href="/find-a-provider"
                    variant="primary"
                    size="sm"
                  >
                    Find a Provider
                  </ButtonLink>
                </div>
                <div className="pointer-events-none mt-8 h-px w-full divider-gold opacity-40 group-hover:opacity-70 transition" />
              </Card>

              <Card className="glass group p-8 transition hover:shadow-gold hover:border-[rgba(214,179,106,0.30)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  For providers
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[0.08em] text-ink">
                  A premium category that scales
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink.soft">
                  Add a modern contouring service line with a clinic-friendly
                  workflow, clear positioning, and strong patient demand.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href="/provider-benefits"
                    variant="primary"
                    size="sm"
                  >
                    Provider Benefits
                  </ButtonLink>
                  <ButtonLink
                    href="/contact?type=provider"
                    variant="gold"
                    size="sm"
                  >
                    Inquire Now
                  </ButtonLink>
                </div>
                <div className="pointer-events-none mt-8 h-px w-full divider-gold opacity-40 group-hover:opacity-70 transition" />
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 4: BENEFITS */}
        <section className="container-base py-16 sm:py-20">
          <SectionHeader
            eyebrow="Benefits"
            title="Premium experience. Clinical clarity."
            subtitle="Short, powerful benefits that communicate trust without hype."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Non‑invasive", d: "No incisions. No anesthesia." },
              { t: "No downtime", d: "Back to life immediately." },
              { t: "Comfortable", d: "Well‑tolerated protocol." },
              { t: "Science‑forward", d: "High-trust positioning." },
              { t: "Natural-looking", d: "Gradual improvements." },
              { t: "Personalized", d: "Provider-guided plan." },
              { t: "Measurable", d: "Track circumference & photos." },
              { t: "Clinic-ready", d: "Workflow-friendly sessions." },
            ].map((x) => (
              <Card
                key={x.t}
                className="glass p-6 transition hover:shadow-glow hover:border-[rgba(13,163,143,0.28)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-brand-emerald shadow-[0_0_24px_rgba(13,163,143,0.35)]" />
                  <div>
                    <p className="text-sm font-semibold tracking-[0.06em] text-ink">
                      {x.t}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink.soft">
                      {x.d}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 5: BEFORE / AFTER */}
        <section className="border-y border-brand-stroke bg-gradient-to-b from-brand-bg2/30 to-transparent">
          <div className="container-base py-16 sm:py-20">
            <SectionHeader
              eyebrow="Before & after"
              title="Transformations (gallery)"
              subtitle="Replace these placeholders with real patient assets. Hover reveals labels with soft zoom."
              align="center"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-brand-stroke bg-brand-surface"
                >
                  <div className="h-56 bg-gradient-to-br from-brand-bg2/40 via-brand-bg to-brand-emerald/15 transition duration-500 group-hover:scale-[1.03]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Area focus
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-[0.06em] text-ink">
                      Abdomen / Waistline
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: SCIENCE / CREDIBILITY */}
        <section className="container-base py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Science & credibility"
                title="Clinical tone without the cold feel"
                subtitle="Premium medical aesthetics brands earn trust through clarity: how it works, what to expect, and realistic outcomes over time."
              />
              <div className="mt-6 space-y-3 text-sm text-ink.soft">
                <p>
                  Bravo Laser is positioned for conservative, non‑invasive contour
                  change. Providers can track progress using measurements, photos,
                  and fit changes across a structured series.
                </p>
                <p>
                  The experience is designed to be comfortable, with no downtime—
                  making it easy to fit into modern schedules and busy clinics.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/what-is-bravo-laser" variant="gold">
                  Read the science overview
                </ButtonLink>
                <ButtonLink href="/faq#patients" variant="outline">
                  Patient FAQs
                </ButtonLink>
              </div>
            </div>

            <QuoteBlock
              quote="Patients don’t want hype—they want a premium experience, a clear plan, and measurable checkpoints. That’s how trust is built."
              name="Clinical Advisory (placeholder)"
              title="High‑trust positioning for modern practices"
            />
          </div>
        </section>

        {/* SECTION 7: TREATMENT AREAS */}
        <section className="border-y border-brand-stroke bg-gradient-to-b from-brand-bg2/30 to-transparent">
          <div className="container-base py-16 sm:py-20">
            <SectionHeader
              eyebrow="Treatment areas"
              title="Target the zones patients ask for most"
              subtitle="Card-based layout with subtle glow outlines and SEO-ready landing pages per area."
              align="center"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Abdomen",
                "Arms",
                "Back",
                "Hips / Love Handles",
                "Thighs",
                "Inner Thighs",
                "Underarm",
                "Waistline",
              ].map((name) => (
                <Card
                  key={name}
                  className="glass p-6 transition hover:shadow-glow hover:border-[rgba(13,163,143,0.30)]"
                >
                  <p className="text-sm font-semibold tracking-[0.06em] text-ink">
                    {name}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                    Learn what to expect and see the recommended path to a
                    consult.
                  </p>
                  <div className="mt-4">
                    <ButtonLink
                      href="/treatment-areas"
                      variant="link"
                      size="sm"
                    >
                      Explore areas
                    </ButtonLink>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: TESTIMONIALS */}
        <section className="container-base py-16 sm:py-20">
          <SectionHeader
            eyebrow="Testimonials"
            title="Real stories. Premium tone."
            subtitle="We can replace these with real quotes and add a carousel later—keeping it subtle and clinical."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                q: "The consult felt clinical and clear. I appreciated the realistic expectations and measurement-based tracking.",
                n: "Patient (placeholder)",
              },
              {
                q: "Easy to fit into my schedule. The experience was comfortable and the plan was straightforward.",
                n: "Patient (placeholder)",
              },
              {
                q: "This category pairs well with premium positioning—patients understand the value immediately.",
                n: "Provider (placeholder)",
              },
            ].map((x) => (
              <Card
                key={x.q}
                className="glass p-6 transition hover:shadow-gold hover:border-[rgba(214,179,106,0.28)]"
              >
                <p className="text-sm leading-relaxed text-ink">“{x.q}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  {x.n}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 9: FIND A PROVIDER CTA */}
        <section className="relative overflow-hidden border-t border-brand-stroke">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg2/40 to-brand-bg" />
          <div className="pointer-events-none absolute inset-0 opacity-70 bg-laser-grid" />
          <div className="container-base relative py-16 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeader
                eyebrow="Next step"
                title="Find a provider near you"
                subtitle="Search by ZIP, city, or state to connect with a clinic offering Bravo Laser."
                align="center"
              />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/find-a-provider" variant="gold">
                  Search providers
                </ButtonLink>
                <ButtonLink href="/contact?type=patient" variant="primary">
                  Book consultation
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

