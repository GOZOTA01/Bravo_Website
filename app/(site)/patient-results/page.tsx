import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";
import { ImageCarousel } from "@/components/equipment/ImageCarousel";

import catalogTreatmentEffect from "@/pictures/pico_laser/IMG_6747.png";
import beforeAfter1 from "@/pictures/before-after/Emerald-Before-Afters-1.webp";
import beforeAfter5 from "@/pictures/before-after/Emerald-Before-Afters-5.webp";
import beforeAfter34 from "@/pictures/before-after/Emerald-Before-Afters-34.webp";
import beforeAfter35 from "@/pictures/before-after/Emerald-Before-Afters-35.webp";
import beforeAfter39 from "@/pictures/before-after/Emerald-Before-Afters-39.webp";
import beforeAfter40 from "@/pictures/before-after/Emerald-Before-Afters-40.webp";
import beforeAfter42 from "@/pictures/before-after/Emerald-Before-Afters-42.webp";
import beforeAfter43 from "@/pictures/before-after/Emerald-Before-Afters-43.webp";
import beforeAfter44 from "@/pictures/before-after/Emerald-Before-Afters-44.webp";
import beforeAfter46 from "@/pictures/before-after/Emerald-Before-Afters-46.webp";
import beforeAfter47 from "@/pictures/before-after/Emerald-Before-Afters-47.webp";
import beforeAfter49 from "@/pictures/before-after/Emerald-Before-Afters-49.webp";

export const metadata = {
  title: "Patient Results",
  description:
    "See representative outcomes from Bravo Pico Laser: hair removal with the diode pathway and pigment, redness, and tattoo cases with the picosecond handpiece, always provider-guided.",
};

export default function PatientResultsPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Confidence, backed by process"
            title="Patient results"
            subtitle="Below are manufacturer catalog examples for the Diode & Picosecond Laser system: diode hair removal and picosecond indications (pigment, redness, tattoo). Your provider will set realistic expectations for your skin type and goals."
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
              Diode &amp; Picosecond Laser results 
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink.soft">
              Illustrative before-and-after panels from manufacturer materials,
              showing <span className="text-ink">diode hair removal</span> and{" "}
              <span className="text-ink">picosecond indications</span> (pigment,
              redness, and tattoo). Individual results vary.
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

      <section className="section-light border-b border-brand-stroke">
        <div className="container-base py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-lg font-semibold tracking-[0.06em] text-ink sm:text-xl">
              MaxMaster Slim before-and-after examples
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink.soft">
              Representative MaxMaster Slim results from manufacturer materials.
              Everyone is different; your provider will set realistic expectations.
            </p>
          </div>
          <div className="mx-auto mt-8 w-full max-w-4xl">
            <ImageCarousel
              ariaLabel="MaxMaster Slim before-and-after carousel"
              slides={[
                { src: beforeAfter1, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter5, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter34, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter35, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter39, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter40, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter42, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter43, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter44, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter46, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter47, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
                { src: beforeAfter49, alt: "MaxMaster Slim before-and-after example", uniformFrame: true },
              ]}
            />
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
            fat-reduction goals with our other platforms, your provider will
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
