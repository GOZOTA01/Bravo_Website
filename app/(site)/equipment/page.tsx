import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CatalogFigure } from "@/components/equipment/CatalogFigure";
import { ImageCarousel } from "@/components/equipment/ImageCarousel";
import { picoLaserBravo, maxMasterSlim } from "@/lib/content/equipment";

import img2in1 from "@/pictures/pico_laser/IMG_7479.png";
import imgPicosecondSpecs from "@/pictures/pico_laser/IMG_3146.png";
import imgDiodeHandpiece from "@/pictures/pico_laser/IMG_5224.png";
import imgTreatmentEffect from "@/pictures/pico_laser/IMG_6747.png";
import imgCooling from "@/pictures/pico_laser/IMG_8127.png";
import imgScreen from "@/pictures/pico_laser/IMG_9105.png";
import imgDirectInput from "@/pictures/pico_laser/IMG_7227.png";
import imgRemote from "@/pictures/pico_laser/IMG_3820.png";
import imgUsbLock from "@/pictures/pico_laser/IMG_2623.png";
import imgLanguages from "@/pictures/pico_laser/IMG_5854.png";
import imgFacialTip from "@/pictures/pico_laser/IMG_8026.png";
import imgAiAnalyzer from "@/pictures/pico_laser/IMG_1321.png";

export const metadata: Metadata = {
  title: "Equipment",
  description:
    "Explore the Bravo Pico Laser Bravo 2-in-1 aesthetic laser platform and the MaxMaster Slim body contouring system—clinical-grade technology for modern practices.",
};

export default function EquipmentPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Professional systems"
            title="Bravo equipment lineup"
            subtitle="We support two flagship platforms today: a combined picosecond + diode laser workstation with optional AI skin analysis, and the MaxMaster Slim body contouring system—each chosen for clinical credibility and a premium in-office experience."
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

      {/* Pico — anchor */}
      <section
        id="pico-laser-bravo"
        className="scroll-mt-24 border-b border-brand-stroke bg-gradient-to-b from-brand-bg2/25 to-brand-bg"
      >
        <div className="container-base py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold sm:text-base">
              {picoLaserBravo.name}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0.06em] text-ink sm:text-3xl">
              {picoLaserBravo.tagline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink.soft sm:text-base">
              {picoLaserBravo.short}
            </p>
          </div>

          <div className="mt-12">
            <CatalogFigure
              src={img2in1}
              priority
              alt="Bravo Pico Laser Bravo 2-in-1 system: diode laser and picosecond laser with optional AI skin analyzer"
              caption="2-in-1 configuration: diode laser + picosecond laser, with optional AI Skin Analyzer integration for smarter treatment planning."
            />
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {picoLaserBravo.highlights.map((h) => (
              <Card key={h.title} className="glass p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  {h.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink.soft">
                  {h.body}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Picosecond &amp; wavelength versatility
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink.soft">
                The catalog positions the picosecond pathway for pigment and tattoo
                concerns across multiple wavelengths, with adjustable spot size and
                high shot life for demanding practices.
              </p>
              <div className="mt-6">
                <CatalogFigure
                  src={imgPicosecondSpecs}
                  alt="Picosecond laser specifications and wavelength overview for Bravo Pico Laser"
                  caption="Marketing overview: picosecond performance, spot size, and wavelength cards for pigment and tattoo applications."
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Diode delivery &amp; hair removal
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink.soft">
                A dedicated diode hair-removal handpiece with a large spot and
                multi-wavelength support helps providers cover diverse skin types
                and treatment areas efficiently.
              </p>
              <div className="mt-6">
                <CatalogFigure
                  src={imgDiodeHandpiece}
                  alt="Bravo diode laser handpiece with large spot size and wavelength diagram"
                  caption="Diode laser handpiece: large spot window and multi-wavelength support for hair removal."
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ImageCarousel
              slides={[
                {
                  src: imgCooling,
                  alt: "Bravo laser integrated cooling system for patient comfort",
                  caption: "Integrated cooling for patient comfort during treatment.",
                  priority: true,
                },
                {
                  src: imgScreen,
                  alt: "Bravo Pico Laser console with 15.6 inch 4K touchscreen",
                  caption:
                    "Android-powered 4K interface: intuitive control for daily clinical use.",
                },
                {
                  src: imgDirectInput,
                  alt: "Direct numeric input of treatment parameters on Bravo laser touchscreen",
                  caption:
                    "Direct parameter entry for fast, precise adjustments at the console.",
                },
                {
                  src: imgFacialTip,
                  alt: "Bravo facial tip attachment for precision diode treatment",
                  caption:
                    "Facial tip for hard-to-reach areas: improved reach for precision work.",
                },
                {
                  src: imgRemote,
                  alt: "Bravo remote cloud management and mobile terminal",
                  caption:
                    "Remote management and cloud data transfer options for modern practices.",
                },
                {
                  src: imgUsbLock,
                  alt: "Bravo USB internal safety lock and remote rental management",
                  caption:
                    "USB safety lock and upgrade path—supporting secure rental and fleet models.",
                },
                {
                  src: imgLanguages,
                  alt: "Bravo laser system with 16 language options and customizable welcome screen",
                  caption:
                    "Sixteen language options and customizable welcome branding for global clinics.",
                },
                {
                  src: imgAiAnalyzer,
                  alt: "Bravo AI Skin Analyzer handheld device for skin and hair analysis",
                  caption:
                    "Optional AI Skin Analyzer: high-resolution capture to support treatment parameters and documentation.",
                },
              ]}
              ariaLabel="Pico Laser Bravo feature images"
            />
          </div>

          <div className="mt-16">
            <h3 className="text-center text-lg font-semibold text-ink">
              Representative outcomes (catalog)
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink.soft">
              Illustrative before-and-after panels from the manufacturer catalog—
              individual results vary; your provider will set expectations for your
              skin type and goals.
            </p>
            <div className="mt-8">
              <CatalogFigure
                src={imgTreatmentEffect}
                alt="Before and after treatment results for hair removal and skin concerns with Bravo Pico Laser"
                caption="Catalog examples: hair removal and aesthetic indications—always consult a qualified provider."
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              At-a-glance specifications
            </h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-stroke/80">
              <table className="w-full text-left text-sm">
                <tbody>
                  {picoLaserBravo.specs.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-brand-stroke/50 last:border-b-0"
                    >
                      <th className="bg-brand-surfaceMuted/50 px-4 py-3 font-medium text-ink.soft">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-ink">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink.soft">
              {picoLaserBravo.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* MaxMaster — anchor */}
      <section
        id="maxmaster-slim"
        className="scroll-mt-24 border-b border-brand-stroke bg-brand-bg"
      >
        <div className="container-base py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                {maxMasterSlim.name}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[0.06em] text-ink sm:text-3xl">
                {maxMasterSlim.tagline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink.soft sm:text-base">
                {maxMasterSlim.short}
              </p>
              <ul className="mt-8 space-y-4">
                {maxMasterSlim.highlights.map((h) => (
                  <li key={h.title} className="glass rounded-2xl px-4 py-3">
                    <p className="text-sm font-semibold text-ink">{h.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink.soft">
                      {h.body}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact?type=patient" variant="primary">
                  Ask about MaxMaster Slim
                </ButtonLink>
                <ButtonLink href="/treatment" variant="outline">
                  Explore treatment
                </ButtonLink>
              </div>
            </div>

            <Card className="relative overflow-hidden glass p-0">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/12 via-brand-bg2 to-brand-bg" />
              <div className="relative border-b border-brand-stroke/60 px-8 py-8">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl border border-brand-gold/35 bg-brand-surfaceMuted/80 text-4xl font-semibold tracking-tight text-brand-gold">
                  MS
                </div>
                <p className="mt-6 text-center text-sm font-medium text-ink">
                  MaxMaster Slim
                </p>
                <p className="mt-2 text-center text-xs leading-relaxed text-ink.soft">
                  {maxMasterSlim.imageryNote}
                </p>
              </div>
              <div className="relative px-8 py-6">
                <dl className="space-y-3 text-sm">
                  {maxMasterSlim.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between gap-4 border-b border-brand-stroke/40 pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-ink.soft">{s.label}</dt>
                      <dd className="text-right font-medium text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container-base py-14">
        <div className="glass rounded-3xl px-6 py-8 sm:px-10">
          <p className="text-sm leading-relaxed text-ink.soft">
            Medical devices and aesthetic treatments involve risks and
            contraindications. Nothing on this site replaces a medical
            consultation. Always follow manufacturer IFU, local regulations, and
            your provider’s clinical judgment.
          </p>
        </div>
      </section>
    </>
  );
}
