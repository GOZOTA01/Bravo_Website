import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProviderLeadForm } from "@/components/forms/ProviderLeadForm";

import imgBoth from "@/pictures/both.png";
import imgComparison from "@/pictures/pico_laser/IMG_7479.png";
import imgFdaApprovedLogo from "@/pictures/fda-approved-logo.jpg";

export const metadata = {
  title: "Provider Benefits",
  description:
    "A premium, conversion-focused overview for clinics and practices considering FDA-approved Bravo Laser equipment: revenue potential, differentiation, easy integration, and provider support.",
};

function IconClinical() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-gold" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconNonInvasive() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-gold" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconResults() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-gold" fill="none" aria-hidden>
      <rect x="5" y="14" width="14" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14V10l2.5 3L13 8l3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const competitiveEdge = [
  {
    title: "Built for diverse patient goals",
    body:
      "Treat hair removal, pigment, and tattoos with Pico Laser Bravo, then contour with MaxMaster Slim: two platforms, one consistent clinic workflow.",
    Icon: IconClinical,
  },
  {
    title: "Non-invasive by design",
    body:
      "No surgery. Positioned for comfort and same-day return to activity.",
    Icon: IconNonInvasive,
  },
  {
    title: "Consistent, plan-based outcomes",
    body:
      "Series-based protocols help your team set expectations, track progress, and keep patients on track.",
    Icon: IconResults,
  },
] as const;

export default function ProviderBenefitsPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="For clinics & medical practices"
            title="Add Bravo Laser to your practice"
            subtitle="A modern, high-trust fat reduction category built on FDA-approved equipment and designed to fit busy clinic schedules."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=provider" variant="primary">
              Inquire about Bravo Laser
            </ButtonLink>
            <ButtonLink href="/faq#providers" variant="secondary">
              Provider FAQs
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-stroke bg-gradient-to-b from-brand-bg2/25 to-brand-bg">
        <div className="container-base py-16 sm:py-20">
          <SectionHeader
            eyebrow="Competitive positioning"
            title="Why clinics choose Bravo Laser"
            subtitle="Pico Laser Bravo + MaxMaster Slim are built for clear workflows, comfort-focused experiences, and consistent documentation across a treatment series."
            align="center"
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {competitiveEdge.map(({ title, body, Icon }) => (
                <Card
                  key={title}
                  className="glass p-5 transition hover:border-brand-gold/25 hover:shadow-glow sm:p-6"
                >
                  <Icon />
                  <h3 className="mt-4 text-sm font-semibold tracking-[0.06em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink.soft">{body}</p>
                </Card>
              ))}
            </div>
            <div className="overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-surfaceMuted/30 shadow-[0_0_0_1px_rgba(92,92,95,0.2)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={imgBoth}
                  alt="Pico Laser Bravo and MaxMaster Slim side-by-side in a clinical setting"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="border-t border-brand-stroke/60 px-4 py-3 text-center text-[11px] leading-relaxed text-ink.soft sm:text-xs">
                Two FDA-approved platforms in one practice workflow: Pico Laser Bravo + MaxMaster Slim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-base py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-surfaceMuted/30 shadow-[0_0_0_1px_rgba(92,92,95,0.2)] lg:order-1">
            <div className="relative aspect-[1/1] w-full">
              <Image
                src={imgFdaApprovedLogo}
                alt="FDA approved logo"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="border-t border-brand-stroke/60 px-4 py-3 text-center text-[11px] text-ink.soft sm:text-xs">
                FDA-approved equipment built into your clinic workflow.
            </p>
          </div>
          <div className="order-1 space-y-5 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Return on investment
            </p>
              <h2 className="text-2xl font-semibold tracking-[0.06em] text-ink sm:text-3xl">
                Reach ROI with disciplined utilization
              </h2>
            <p className="text-sm leading-relaxed text-ink.soft sm:text-base">
                When usage matches patient demand, Bravo can help support financing through revenue growth.
                Many teams model payback on a{" "}
                <span className="font-medium text-ink/90">6 to 9 month</span> horizon
                based on package and market mix.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/equipment" variant="gold">
                See how it works
              </ButtonLink>
              <ButtonLink href="/contact?type=provider" variant="outline">
                Model ROI with our team
              </ButtonLink>
            </div>
              <p className="text-[11px] leading-relaxed text-ink.soft">
                Results vary by utilization, pricing, financing terms, and market factors.
              </p>
          </div>
        </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">
              Differentiation patients understand
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Premium, clinical messaging about non-invasive fat reduction that staff can explain quickly.
            </p>
          </div>
          <div className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">Operationally easy</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Streamlined protocols with minimal overhead for med spas and clinics.
            </p>
          </div>
          <div className="glass rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">
              Scalable revenue category
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Series-based plans support recurring revenue with consistent follow-up.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Great fit for many practices
            </h2>
            <ul className="grid gap-2 text-sm text-ink.soft sm:grid-cols-2">
              {[
                "Med spas",
                "Aesthetic clinics",
                "Chiropractors",
                "Cosmetic practices",
                "Physician practices",
                "Wellness centers",
              ].map((x) => (
                <li
                  key={x}
                  className="glass rounded-2xl px-4 py-3 text-xs"
                >
                  {x}
                </li>
              ))}
            </ul>

            <div className="glass rounded-3xl p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Financing / acquisition ready
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink.soft">
                We support device add-ons or category expansion. Share your goals and we will outline next steps.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="/contact?type=provider" variant="primary">
                  Talk to sales
                </ButtonLink>
                <ButtonLink href="/contact?type=provider" variant="outline">
                  Request details
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">
              Provider inquiry
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              Share a few details and our team will follow up with next steps.
            </p>
            <div className="mt-6">
              <ProviderLeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

