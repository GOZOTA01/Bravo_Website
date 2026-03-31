import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { PicoLaserBravoDetail } from "@/components/equipment/PicoLaserBravoDetail";
import { EquipmentDisclaimer } from "@/components/equipment/EquipmentDisclaimer";
import { equipmentPaths, picoLaserBravo } from "@/lib/content/equipment";

export const metadata: Metadata = {
  title: "Pico Laser Bravo",
  description:
    "Pico Laser Bravo: 2-in-1 diode and picosecond laser platform with optional AI skin analysis. FDA-approved positioning per manufacturer materials.",
};

export default function PicoLaserBravoPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            <Link
              href="/equipment"
              className="transition hover:text-white hover:underline hover:underline-offset-4"
            >
              ← Equipment
            </Link>
          </p>
          <div className="mt-6">
            <SectionHeader
              eyebrow={picoLaserBravo.name}
              title={picoLaserBravo.tagline}
              subtitle={picoLaserBravo.short}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=provider" variant="primary">
              Provider inquiry
            </ButtonLink>
            <ButtonLink
              href={"/catalogs/PICO%20L%C3%81SER%20BRAVO.pdf" as Route}
              variant="outline"
            >
              Pico Laser Bravo catalog
            </ButtonLink>
          </div>
        </div>
      </section>

      <PicoLaserBravoDetail />
      <section className="section-light border-t border-brand-stroke/50">
        <div className="container-base py-8 sm:py-10">
          <div className="flex justify-center">
            <ButtonLink href={equipmentPaths.maxMasterSlim} variant="outline">
              Explore MaxMaster Slim
            </ButtonLink>
          </div>
        </div>
      </section>
      <EquipmentDisclaimer />
    </>
  );
}
