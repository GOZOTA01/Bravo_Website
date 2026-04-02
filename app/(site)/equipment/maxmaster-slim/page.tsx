import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { MaxMasterSlimDetail } from "@/components/equipment/MaxMasterSlimDetail";
import { EquipmentDisclaimer } from "@/components/equipment/EquipmentDisclaimer";
import { equipmentPaths, maxMasterSlim } from "@/lib/content/equipment";

import imgMaxMasterHero from "@/pictures/MaxMaster Slim/PHOTO-2026-03-19-08-07-34.jpg";

export const metadata: Metadata = {
  title: "MaxMaster Slim",
  description:
    "MaxMaster Slim: non-invasive fat reduction and slimming platform for professional in-office body contouring.",
};

export default function MaxMasterSlimPage() {
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
              eyebrow={maxMasterSlim.name}
              title={maxMasterSlim.tagline}
              subtitle={maxMasterSlim.short}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Ask about treatment
            </ButtonLink>
            <ButtonLink
              href={"/catalogs/MaxMaster%20Slim.pdf%203.pdf" as Route}
              variant="outline"
            >
              MaxMaster Slim catalog
            </ButtonLink>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-brand-stroke/70 bg-white/90 shadow-sm">
            <div className="relative aspect-[4/3] w-full bg-brand-surfaceMuted/40 p-3 sm:p-4">
              <Image
                src={imgMaxMasterHero}
                alt="MaxMaster Slim fat reduction system"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1152px) 100vw, min(1152px, 96vw)"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <MaxMasterSlimDetail />
      <section className="section-light border-t border-brand-stroke/50">
        <div className="container-base py-8 sm:py-10">
          <div className="flex justify-center">
            <ButtonLink href={equipmentPaths.picoLaserBravo} variant="outline">
              Explore Diode &amp; Picosecond Laser
            </ButtonLink>
          </div>
        </div>
      </section>
      <EquipmentDisclaimer />
    </>
  );
}
