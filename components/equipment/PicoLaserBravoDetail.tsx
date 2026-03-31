import { Card } from "@/components/ui/Card";
import { CatalogFigure } from "@/components/equipment/CatalogFigure";
import { ImageCarousel } from "@/components/equipment/ImageCarousel";
import { picoLaserBravo } from "@/lib/content/equipment";

import imgPicosecondSpecs from "@/pictures/pico_laser/pico-laser.png";
import imgDiodeHandpiece from "@/pictures/pico_laser/diode.png";
import imgTreatmentEffect from "@/pictures/pico_laser/IMG_6747.png";
import imgCooling from "@/pictures/pico_laser/IMG_8127.png";
import imgScreen from "@/pictures/pico_laser/IMG_9105.png";
import imgDirectInput from "@/pictures/pico_laser/IMG_7227.png";
import imgRemote from "@/pictures/pico_laser/IMG_3820.png";
import imgUsbLock from "@/pictures/pico_laser/IMG_2623.png";
import imgLanguages from "@/pictures/pico_laser/IMG_5854.png";
import imgFacialTip from "@/pictures/pico_laser/IMG_8026.png";
import imgAiAnalyzer from "@/pictures/pico_laser/IMG_1321.png";

export function PicoLaserBravoDetail() {
  return (
    <section className="section-light border-b border-brand-stroke">
      <div className="container-base py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {picoLaserBravo.highlights.map((h) => (
            <Card key={h.title} className="glass p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {h.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink.soft">{h.body}</p>
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
            <h3 className="text-lg font-semibold text-ink">Diode delivery &amp; hair removal</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              A dedicated diode hair-removal handpiece with a large spot and
              multi-wavelength support helps providers cover diverse skin types and
              treatment areas efficiently.
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
                  "USB safety lock and upgrade path, supporting secure rental and fleet models.",
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
            ariaLabel="Diode & Picosecond Laser feature images"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-ink">
            Representative outcomes (catalog)
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink.soft">
            Illustrative before-and-after panels from the manufacturer catalog.
            Individual results vary; your provider will set expectations for your skin
            type and goals.
          </p>
          <div className="mt-8">
            <CatalogFigure
              src={imgTreatmentEffect}
              alt="Before and after treatment results for hair removal and skin concerns with Bravo Pico Laser"
              caption="Catalog examples: hair removal and aesthetic indications. Always consult a qualified provider."
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
  );
}
