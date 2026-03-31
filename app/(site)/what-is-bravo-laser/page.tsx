import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

import imgBravoWorkstation from "@/pictures/pico_laser/IMG_5848.png";
import imgFdaApprovedLogo from "@/pictures/fda-approved-logo.jpg";

export const metadata = {
  title: "What is Bravo Laser",
  description:
    "Below are manufacturer-backed examples and overview details for Bravo Laser systems, including Diode & Picosecond Laser indications and provider-guided planning based on skin type and goals.",
};

export default function WhatIsBravoLaserPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Science-backed aesthetics & fat reduction"
            title="What is Bravo Laser?"
            subtitle="Bravo Laser brings together FDA-approved systems, including Diode & Picosecond Laser for diode hair removal and picosecond indications (pigment, redness, tattoo), plus MaxMaster Slim body-contour protocols. Your provider will set realistic expectations for your skin type and goals."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/equipment" variant="primary">
              View equipment
            </ButtonLink>
            <ButtonLink href="/find-a-provider" variant="outline">
              Find a Provider
            </ButtonLink>
            <ButtonLink href="/contact?type=patient" variant="secondary">
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-stroke bg-gradient-to-b from-brand-bg2/20 to-brand-bg">
        <div className="container-base py-10 sm:py-12">
          <div className="overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-surfaceMuted/30 shadow-[0_0_0_1px_rgba(92,92,95,0.2)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
              <Image
                src={imgBravoWorkstation}
                alt="Bravo laser workstation with multilingual welcome screen and docked treatment handpieces"
                fill
                className="object-contain object-center bg-gradient-to-b from-brand-bg2/40 to-brand-bg"
                sizes="(max-width: 1152px) 100vw, min(1152px, 96vw)"
                priority
              />
              <div className="pointer-events-none absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <Image
                  src={imgFdaApprovedLogo}
                  alt="FDA approved"
                  width={88}
                  height={88}
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-base py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-8 text-sm leading-relaxed text-ink.soft sm:text-base">
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  The overview
                </h2>
                <p className="mt-2">
                  Bravo Laser is FDA-approved for a clinically credible, non-invasive way
                  to address areas of stubborn fat.
                  Treatments are performed externally and are built to fit into
                  busy schedules with minimal disruption.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  The technology behind Bravo Laser
                </h2>
                <p className="mt-2">
                  Using low-level laser energy, this FDA-approved protocol targets
                  adipose tissue in a gentle, comfortable way. The goal is to
                  support measurable circumference change over a structured
                  treatment plan, without incisions or recovery time.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  How it works in the body (high level)
                </h2>
                <p className="mt-2">
                  Patients often choose Bravo Laser because it is FDA-approved and
                  offers a conservative approach: a series of sessions, gradual
                  results, and an experience designed to be well-tolerated.
                  Your provider will personalize the plan based on goals, body
                  areas, and lifestyle context.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  What makes it different
                </h2>
                <ul className="mt-3 grid gap-2">
                  <li className="glass rounded-2xl px-4 py-3">
                    <span className="font-semibold text-ink">
                      FDA-approved &amp; non-surgical
                    </span>{" "}
                    <span>
                      No anesthesia, no incisions, no recovery timeline.
                    </span>
                  </li>
                  <li className="rounded-2xl border border-brand-stroke bg-brand-surface px-4 py-3">
                    <span className="font-semibold text-ink">
                      Workflow-friendly
                    </span>{" "}
                    <span>
                      Comfortable sessions designed for real clinic
                      operations.
                    </span>
                  </li>
                  <li className="rounded-2xl border border-brand-stroke bg-brand-surface px-4 py-3">
                    <span className="font-semibold text-ink">Premium</span>{" "}
                    <span>
                      A high-trust, clinical experience with modern design and
                      messaging.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-brand-stroke bg-brand-surface p-6 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold text-ink">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              The fastest path is a consult with a local provider. They’ll help
              you choose treatment areas, session cadence, and realistic
              expectations.
            </p>
            <div className="mt-4 grid gap-3">
              <ButtonLink href="/find-a-provider" variant="primary" size="sm">
                Search Providers
              </ButtonLink>
              <ButtonLink
                href="/treatment"
                variant="outline"
                size="sm"
              >
                See the treatment process
              </ButtonLink>
            </div>
          </aside>
        </div>
        </div>
      </section>
    </>
  );
}

