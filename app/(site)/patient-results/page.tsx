import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";

import catalogTreatmentEffect from "@/pictures/pico_laser/IMG_6747.png";

export const metadata = {
  title: "Patient Results",
  description:
    "See representative outcomes from Bravo Pico Laser: hair removal with the diode pathway and pigment, redness, and tattoo cases with the picosecond handpiece—always provider-guided.",
};

export default function PatientResultsPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Confidence, backed by process"
            title="Patient results"
            subtitle="Below you’ll find manufacturer catalog examples from the Pico Laser Bravo system—diode hair removal on one side and picosecond indications (pigment, redness, tattoo) on the other. Your provider will set realistic expectations for your skin type and goals."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/find-a-provider" variant="primary">
              Find a Provider
            </ButtonLink>
            <ButtonLink href="/contact?type=patient" variant="secondary">
              See if you’re a candidate
            </ButtonLink>
            <ButtonLink href="/equipment" variant="outline">
              View equipment
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-stroke bg-gradient-to-b from-brand-bg2/20 to-brand-bg">
        <div className="container-base py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-lg font-semibold tracking-[0.06em] text-ink sm:text-xl">
              Catalog reference: treatment effect
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink.soft">
              Illustrative before-and-after panels from the Bravo marketing
              catalog—split between{" "}
              <span className="text-ink">diode hair removal</span> (left) and{" "}
              <span className="text-ink">picosecond aesthetic cases</span>{" "}
              (right). Individual results vary.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-brand-stroke/80 bg-brand-bg shadow-[0_0_0_1px_rgba(92,92,95,0.25)]">
            <div className="flex w-full justify-center bg-brand-bg2/40 px-2 py-3 sm:px-4 sm:py-4">
              <Image
                src={catalogTreatmentEffect}
                alt="Before and after treatment examples: diode laser hair removal and Pico Laser results for pigmentation, redness, and tattoo removal"
                width={catalogTreatmentEffect.width}
                height={catalogTreatmentEffect.height}
                className="h-auto w-full max-w-full object-contain"
                sizes="(max-width: 1024px) calc(100vw - 2rem), min(1024px, 100%)"
                priority
              />
            </div>
            <div className="border-t border-brand-stroke/60 px-4 py-4 text-center sm:px-6">
              <p className="text-xs leading-relaxed text-ink.soft">
                Not a substitute for medical advice. FDA and regulatory
                claims on marketing materials are the manufacturer’s; your
                clinic follows applicable local rules.{" "}
                <Link
                  href="/equipment"
                  className="font-medium text-brand-gold underline-offset-4 hover:underline"
                >
                  Equipment details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="rounded-3xl border border-brand-stroke bg-brand-surface p-8 backdrop-blur">
          <h2 className="text-lg font-semibold text-ink">
            Expected outcomes (high level)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink.soft">
            Whether you’re focused on hair reduction, pigment, or
            body-contouring goals with our other platforms, your provider will
            set expectations based on the areas being treated, the number of
            sessions, and your overall plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Request a consult
            </ButtonLink>
            <ButtonLink href="/treatment" variant="outline">
              Understand the process
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
