import Image from "next/image";
import logo from "@/pictures/Bravo_logo.png";
import heroEquipment from "@/pictures/pico_laser/IMG_7479.png";
import catalogTreatmentGrid from "@/pictures/pico_laser/IMG_6747.png";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
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
          <div className="pointer-events-none absolute -left-1/2 top-1/2 h-[520px] w-[1200px] -translate-y-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-brand-gold/14 to-transparent blur-2xl laser-sweep" />
          <div className="pointer-events-none absolute -right-1/3 top-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-brand-gold2/10 blur-3xl" />

          <div className="container-base relative py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-3xl" />
              <div className="relative mx-auto h-20 w-[min(100%,280px)] sm:h-24">
                <Image
                  src={logo}
                  alt="Bravo Laser"
                  width={320}
                  height={96}
                  className="h-full w-auto max-w-full object-contain object-center"
                  priority
                />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold text-gold-clarity">
                Bravo laser platforms
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[0.08em] text-ink text-clarity sm:text-5xl">
                Advanced Laser Aesthetics &amp; Body Contouring
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-ink.soft text-clarity sm:text-base">
                From the Pico Laser Bravo 2-in-1 workstation to the MaxMaster Slim
                contouring line—non‑invasive options designed for clarity, comfort,
                and measurable outcomes.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/equipment" variant="gold">
                  Explore equipment
                </ButtonLink>
                <ButtonLink href="/find-a-provider" variant="outline">
                  Find a Provider
                </ButtonLink>
                <ButtonLink href="/contact?type=patient" variant="primary">
                  Book Consultation
                </ButtonLink>
              </div>

              <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-surfaceMuted/30 shadow-[0_0_0_1px_rgba(92,92,95,0.2)]">
                <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
                  <Image
                    src={heroEquipment}
                    alt="Bravo Pico Laser Bravo 2-in-1 diode and picosecond laser system"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority
                  />
                </div>
                <p className="border-t border-brand-stroke/60 px-4 py-3 text-center text-[11px] leading-relaxed text-ink.soft sm:text-xs">
                  Pico Laser Bravo: diode + picosecond laser in one professional
                  workstation—optional AI skin analysis for smarter treatment planning.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Platforms", v: "Pico + MaxMaster Slim" },
                  { k: "Downtime", v: "None" },
                  { k: "Experience", v: "Comfort-focused" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="glass rounded-3xl px-5 py-4 shadow-[0_0_0_1px_rgba(92,92,95,0.35)]"
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

        {/* SECTION 2: EQUIPMENT + WHAT IS */}
        <section className="container-base py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="What is Bravo Laser"
                title="Two platforms—one premium clinical standard"
                subtitle="Bravo brings together Pico Laser Bravo for picosecond + diode laser aesthetics and the MaxMaster Slim system for contour-focused body treatments—each supported with clear protocols and provider training."
              />
              <div className="mt-6 h-px w-full divider-gold opacity-80" />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/equipment" variant="primary">
                  View equipment
                </ButtonLink>
                <ButtonLink href="/what-is-bravo-laser" variant="outline">
                  Read the overview
                </ButtonLink>
                <ButtonLink href="/treatment" variant="secondary">
                  How treatment works
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
                  <div className="h-8 w-8 rounded-2xl border border-brand-stroke bg-gradient-to-b from-brand-gold/25 to-transparent shadow-[0_0_28px_rgba(214,152,60,0.12)]" />
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
              <Card className="glass group p-8 transition hover:shadow-glow hover:border-brand-gold/35">
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

              <Card className="glass group p-8 transition hover:shadow-gold hover:border-brand-gold/35">
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
                className="glass p-6 transition hover:shadow-glow hover:border-brand-gold/30"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_22px_rgba(214,152,60,0.35)]" />
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

        {/* SECTION 5: BEFORE / AFTER — catalog reference */}
        <section className="border-y border-brand-stroke bg-gradient-to-b from-brand-bg2/30 to-transparent">
          <div className="container-base py-16 sm:py-20">
            <SectionHeader
              eyebrow="Outcomes"
              title="Representative manufacturer results"
              subtitle="Illustrative before-and-after panels from the Pico Laser Bravo catalog—hair removal, pigment, redness, and tattoo cases. Individual results vary; your provider will personalize expectations."
              align="center"
            />
            <div className="mt-10 overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-surfaceMuted/30 shadow-[0_0_0_1px_rgba(92,92,95,0.25)]">
              <div className="flex w-full justify-center bg-gradient-to-b from-brand-bg2/25 to-brand-bg/50 p-2 sm:p-4">
                <Image
                  src={catalogTreatmentGrid}
                  alt="Catalog before and after examples for hair removal, pigmentation, and tattoo treatment with Bravo Pico Laser"
                  className="h-auto w-full max-w-full object-contain"
                  sizes="(max-width: 1152px) 100vw, min(1152px, 96vw)"
                />
              </div>
              <div className="border-t border-brand-stroke/60 px-4 py-4 text-center sm:px-6">
                <p className="text-xs leading-relaxed text-ink.soft">
                  For full technical specs, handpieces, and platform features, visit
                  the{" "}
                  <Link
                    href="/equipment"
                    className="font-medium text-brand-gold underline-offset-4 hover:underline"
                  >
                    equipment page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SCIENCE / CREDIBILITY */}
        <section className="container-base py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Science & credibility"
                title="Clear science. Real expectations."
                subtitle="Bravo Laser keeps treatment communication simple: how it works, what to expect, and how progress is tracked."
              />
              <div className="mt-6 space-y-3 text-sm text-ink.soft">
                <p>
                  Non-invasive contour care with no downtime, designed for a
                  comfortable in-office experience.
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

            <Card className="glass p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Why it builds trust
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink.soft">
                <li>Clear treatment plans and timelines</li>
                <li>Progress tracked with photos and measurements</li>
                <li>Comfort-focused sessions with no downtime</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* FIND A PROVIDER CTA */}
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

