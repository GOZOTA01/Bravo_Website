import { Card } from "@/components/ui/Card";
import { CatalogFigure } from "@/components/equipment/CatalogFigure";
import { ImageCarousel } from "@/components/equipment/ImageCarousel";
import { maxMasterSlim } from "@/lib/content/equipment";

import imgMaxMasterProduct from "@/pictures/MaxMaster Slim/IMG_5850.png";
import imgMaxMasterOnBody1 from "@/pictures/MaxMaster Slim/IMG_6221.png";
import imgMaxMasterOnBody2 from "@/pictures/MaxMaster Slim/IMG_4882.png";
import imgMaxMasterOnBody3 from "@/pictures/MaxMaster Slim/emerald-laser-consultation.jpg";
import imgMaxMasterBeforeAfter from "@/pictures/MaxMaster Slim/front-1.webp";
import imgMaxMasterLifestyle from "@/pictures/MaxMaster Slim/image2.jpg";
import imgMaxMasterStudio from "@/pictures/MaxMaster Slim/image3.jpg";
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

export function MaxMasterSlimDetail() {
  return (
    <section className="section-light border-b border-brand-stroke">
      <div className="container-base py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {maxMasterSlim.highlights.map((h) => (
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
            <h3 className="text-lg font-semibold text-ink">Product architecture &amp; workflow</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              The MaxMaster Slim uses low-level laser light to support fat loss and
              body contouring. It is marketed as FDA-approved, non-surgical, and
              designed to be gentle.
            </p>
            <div className="mt-6">
              <CatalogFigure
                src={imgMaxMasterProduct}
                uniformFrame
                alt="MaxMaster Slim product view with treatment arm and display"
                caption="Product view with articulated arm and treatment modules."
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">Hands-free body contouring</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              Applicators are positioned for hands-free treatment over target areas.
              The company markets it as painless, with no freezing, no bruising, and
              no swelling claimed.
            </p>
            <div className="mt-6">
              <CatalogFigure
                src={imgMaxMasterOnBody1}
                uniformFrame
                alt="MaxMaster Slim treatment setup over abdomen"
                caption="Hands-free treatment setup over abdominal area."
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-2xl sm:max-w-3xl">
          <ImageCarousel
            slides={[
              {
                src: imgMaxMasterOnBody2,
                alt: "Close-up of MaxMaster Slim light delivery over treatment area",
                caption: "Close-up of multi-point light delivery during treatment.",
                priority: true,
                uniformFrame: true,
              },
              {
                src: imgMaxMasterOnBody3,
                alt: "MaxMaster Slim applicators positioned over patient during session",
                caption: "Multi-angle applicator positioning for body contour workflow.",
                uniformFrame: true,
              },
              {
                src: imgMaxMasterLifestyle,
                alt: "MaxMaster Slim treatment module used on lower body",
                caption: "Targeted treatment over lower-body areas.",
                uniformFrame: true,
              },
              {
                src: imgMaxMasterStudio,
                alt: "MaxMaster Slim full workstation in studio-style view",
                caption: "Studio-style system view with full treatment arm.",
                uniformFrame: true,
              },
            ]}
            ariaLabel="MaxMaster Slim feature images"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-ink">
            Representative outcomes (before & after)
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink.soft">
            Illustrative before-and-after panels from manufacturer materials.
            The company positions results as gradual and claims many patients may
            see changes in 4 weeks or less. Individual results vary.
          </p>
          <div className="mt-8">
            <ImageCarousel
              ariaLabel="MaxMaster Slim representative outcomes carousel"
              slides={[
                {
                  src: imgMaxMasterBeforeAfter,
                  alt: "MaxMaster Slim before-and-after treatment results",
                  caption:
                    "Catalog examples: before-and-after treatment outcomes. Always consult a qualified provider.",
                  priority: true,
                  uniformFrame: true,
                },
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

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            At-a-glance specifications
          </h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-brand-stroke/80">
            <table className="w-full text-left text-sm">
              <tbody>
                {maxMasterSlim.specs.map((row) => (
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
            Specifications may vary by configuration, region, and firmware. Product
            imagery is from manufacturer materials. Clinical use follows manufacturer
            IFU and local regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
