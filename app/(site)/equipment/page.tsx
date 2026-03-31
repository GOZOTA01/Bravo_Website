import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { EquipmentDisclaimer } from "@/components/equipment/EquipmentDisclaimer";
import {
  equipmentPaths,
  maxMasterSlim,
  picoLaserBravo,
} from "@/lib/content/equipment";

import imgPico from "@/pictures/pico_laser/Gemini.png";
import imgMaxMaster from "@/pictures/MaxMaster Slim/IMG_7207.png";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "Explore FDA-approved Bravo equipment: Diode & Picosecond Laser 2-in-1 aesthetic platform and MaxMaster Slim fat reduction system.",
};

const machines = [
  {
    href: equipmentPaths.picoLaserBravo,
    name: picoLaserBravo.name,
    tagline: picoLaserBravo.tagline,
    blurb: picoLaserBravo.short,
    image: imgPico,
    alt: "Diode & Picosecond Laser 2-in-1 workstation",
  },
  {
    href: equipmentPaths.maxMasterSlim,
    name: maxMasterSlim.name,
    tagline: maxMasterSlim.tagline,
    blurb: maxMasterSlim.short,
    image: imgMaxMaster,
    alt: "MaxMaster Slim fat reduction system",
  },
] as const;

export default function EquipmentPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Professional systems"
            title="Bravo equipment lineup"
            subtitle="Choose a platform to view full specifications, imagery, and positioning. We support two flagship FDA-approved systems: a combined picosecond + diode laser workstation with optional AI skin analysis, and the MaxMaster Slim fat reduction system."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=provider" variant="primary">
              Provider inquiry
            </ButtonLink>
            <ButtonLink href="/find-a-provider" variant="outline">
              Find a provider
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container-base py-16 sm:py-20">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Our machines
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink.soft">
            Select a system for photos, highlights, and detailed specs.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {machines.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-brand-stroke/70 bg-white/90 shadow-sm transition hover:border-brand-gold/40 hover:shadow-[0_12px_40px_rgba(28,27,24,0.08)]"
              >
                <div className="relative aspect-[4/3] w-full bg-brand-surfaceMuted/40 p-3 sm:p-4">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    className="object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    {m.name}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[0.04em] text-ink sm:text-xl">
                    {m.tagline}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink.soft line-clamp-4">
                    {m.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-gold transition group-hover:gap-1">
                    View details
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EquipmentDisclaimer />
    </>
  );
}
