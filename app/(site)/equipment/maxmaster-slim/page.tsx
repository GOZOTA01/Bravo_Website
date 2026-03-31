import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { MaxMasterSlimDetail } from "@/components/equipment/MaxMasterSlimDetail";
import { EquipmentDisclaimer } from "@/components/equipment/EquipmentDisclaimer";
import { equipmentPaths, maxMasterSlim } from "@/lib/content/equipment";

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
            <ButtonLink href={equipmentPaths.picoLaserBravo} variant="outline">
              Pico Laser Bravo
            </ButtonLink>
          </div>
        </div>
      </section>

      <MaxMasterSlimDetail />
      <EquipmentDisclaimer />
    </>
  );
}
