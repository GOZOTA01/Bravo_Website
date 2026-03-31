import Image from "next/image";
import logo from "@/pictures/Bravo_logo.png";
import fdaApprovedSeal from "@/pictures/fda-approved-logo.jpg";
import heroEquipment from "@/pictures/both.png";
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
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-3xl" />
              <div className="mt-1 flex justify-center">
                <div className="relative h-24 w-[min(100%,320px)] sm:h-28">
                  <Image
                    src={logo}
                    alt="Bravo Laser"
                    width={360}
                    height={110}
                    className="mx-auto h-full w-auto max-w-full object-contain object-center"
                    priority
                  />
                </div>
              </div>

              <p className="mx-auto mt-6 w-fit text-center text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold text-gold-clarity">
                Laser aesthetics &amp; fat reduction
              </p>
              <div className="mx-auto mt-6 flex flex-col items-center gap-3">
                <div className="rounded-full bg-white p-2 shadow-[0_12px_36px_rgba(28,27,24,0.12)] ring-1 ring-brand-stroke/60">
                  <Image
                    src={fdaApprovedSeal}
                    alt="FDA Approved seal: Food and Drug Administration"
                    width={120}
                    height={120}
                    className="h-[5.5rem] w-[5.5rem] rounded-full object-contain sm:h-28 sm:w-28"
                    priority
                  />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gold">
                  FDA-approved equipment
                </p>
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-[0.08em] text-ink text-clarity sm:text-5xl">
                Advanced Laser Aesthetics &amp; Fat Reduction
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-ink.soft text-clarity sm:text-base">
                FDA-approved laser care for skin and hair and a body system for
                slimming and fat reduction without surgery.
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

              <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-brand-stroke/70 bg-white/90 shadow-[0_0_0_1px_rgba(200,195,184,0.35),0_8px_40px_rgba(28,27,24,0.06)]">
                <div className="flex w-full justify-center bg-gradient-to-b from-brand-bg2/80 to-brand-bg/90 p-2 sm:p-4">
                  <Image
                    src={heroEquipment}
                    alt="Bravo Laser systems: aesthetic laser workstation and MaxMaster Slim fat reduction device"
                    className="h-auto w-full max-w-full object-contain"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority
                  />
                </div>
                <p className="border-t border-brand-stroke/60 px-4 py-3 text-center text-[11px] leading-relaxed text-ink.soft sm:text-xs">
                  Laser workstation for face and body treatments, plus a fat-reduction
                  system for targeted slimming sessions FDA-approved equipment your
                  provider uses to plan care.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "Laser line", v: "Hair, skin & pigment" },
                  { k: "Body line", v: "Fat reduction & slimming" },
                  { k: "Equipment", v: "FDA-approved" },
                  { k: "Downtime", v: "None" },
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
        <section className="section-light">
          <div className="container-base py-12 sm:py-14">
            <div className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="What is Bravo Laser"
              title="One brand, two ways we help you"
              subtitle="Laser treatments for common skin and hair goals, plus non-invasive fat reduction for slimming-focused plans, with training and support for providers."
              align="center"
            />
              <div className="mt-6 flex flex-wrap justify-center gap-3">
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
            <div className="mx-auto mt-8 max-w-3xl">
              <div className="glass flex flex-wrap justify-center gap-2 rounded-2xl border border-brand-stroke/80 px-4 py-4 sm:gap-3 sm:px-5 sm:py-4">
                {[
                  "Laser & skin options",
                  "Fat reduction",
                  "Comfort first",
                  "No downtime",
                  "Track your progress",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand-stroke/70 bg-brand-surfaceMuted/40 px-3 py-1.5 text-xs font-medium tracking-[0.04em] text-ink/90 sm:text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DUAL AUDIENCE */}
        <section className="section-charcoal border-y border-brand-stroke">
          <div className="container-base py-16 sm:py-20">
            <SectionHeader
              eyebrow="Two paths. One premium brand."
              title="Built for patients and providers"
              subtitle="Choose your journey. Each path is designed as its own conversion flow: clear, fast, and high-trust."
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
                  Laser options for skin and hair goals, plus fat-reduction plans for
                  slimming-focused results, guided by a local provider with no surgery and
                  no downtime.
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
                  Offer laser aesthetics and a fat-reduction line, with clinic-friendly
                  workflows, clear positioning, and strong patient interest.
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
        <section className="section-light">
          <div className="container-base py-12 sm:py-14">
            <SectionHeader
              eyebrow="Benefits"
              title="Why patients choose Bravo"
              align="center"
            />
            <div className="mx-auto mt-8 max-w-3xl">
              <div className="glass flex flex-wrap justify-center gap-2 rounded-2xl border border-brand-stroke/80 px-4 py-4 sm:gap-3 sm:px-5 sm:py-5">
                {[
                  "Non-invasive",
                  "No downtime",
                  "Comfortable",
                  "Natural-looking results",
                  "Personalized plans",
                  "Easy to fit your schedule",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand-stroke/70 bg-brand-surfaceMuted/40 px-3 py-1.5 text-xs font-medium tracking-[0.04em] text-ink/90 sm:text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: BEFORE / AFTER (catalog reference) */}
        <section className="section-charcoal border-y border-brand-stroke">
          <div className="container-base py-16 sm:py-20">
            <SectionHeader
              eyebrow="Outcomes"
              title="Representative manufacturer results"
              subtitle="Sample before-and-after images from our product materials: hair, pigment, redness, and tattoo examples. Everyone is different; your provider will set expectations for you."
              align="center"
            />
            <div className="mt-10 overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-surfaceMuted/30 shadow-[0_0_0_1px_rgba(92,92,95,0.25)]">
              <div className="flex w-full justify-center bg-gradient-to-b from-brand-bg2/25 to-brand-bg/50 p-2 sm:p-4">
                <Image
                  src={catalogTreatmentGrid}
                  alt="Before and after examples for hair removal, pigmentation, and tattoo treatment"
                  className="h-auto w-full max-w-full object-contain"
                  sizes="(max-width: 1152px) 100vw, min(1152px, 96vw)"
                />
              </div>
              <div className="border-t border-brand-stroke/60 px-4 py-4 text-center sm:px-6">
                <p className="text-xs leading-relaxed text-ink.soft">
                  See photos and details on the{" "}
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

        {/* FIND A PROVIDER CTA */}
        <section className="section-charcoal relative overflow-hidden border-t border-brand-stroke">
          <div className="absolute inset-0 bg-[#2A2A2A]" />
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

