import { Card } from "@/components/ui/Card";
import { CatalogFigure } from "@/components/equipment/CatalogFigure";
import { ImageCarousel } from "@/components/equipment/ImageCarousel";
import { maxMasterSlim } from "@/lib/content/equipment";

import imgMaxMasterHero from "@/pictures/MaxMaster Slim/IMG_7207.png";
import imgMaxMasterProduct from "@/pictures/MaxMaster Slim/IMG_5850.png";
import imgMaxMasterOnBody1 from "@/pictures/MaxMaster Slim/IMG_6221.png";
import imgMaxMasterOnBody2 from "@/pictures/MaxMaster Slim/IMG_4882.png";
import imgMaxMasterOnBody3 from "@/pictures/MaxMaster Slim/IMG_9924.png";
import imgMaxMasterPanel from "@/pictures/MaxMaster Slim/image4.jpg";
import imgMaxMasterLifestyle from "@/pictures/MaxMaster Slim/image2.jpg";
import imgMaxMasterStudio from "@/pictures/MaxMaster Slim/image3.jpg";

export function MaxMasterSlimDetail() {
  return (
    <section className="section-light border-b border-brand-stroke">
      <div className="container-base py-16 sm:py-20">
        <div className="mt-2">
          <CatalogFigure
            src={imgMaxMasterHero}
            priority
            alt="MaxMaster Slim fat reduction workstation"
            caption="MaxMaster Slim platform for non-invasive body contour sessions."
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
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
              The MaxMaster Slim workstation is built for structured contour sessions:
              articulated arm, treatment modules, and a clear console flow for daily
              clinical use.
            </p>
            <div className="mt-6">
              <CatalogFigure
                src={imgMaxMasterProduct}
                alt="MaxMaster Slim product view with treatment arm and display"
                caption="Product view with articulated arm and treatment modules."
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">Hands-free body contouring</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              Applicators are positioned for hands-free delivery over common treatment
              zones, supporting repeatable protocols and comfortable patient positioning.
            </p>
            <div className="mt-6">
              <CatalogFigure
                src={imgMaxMasterOnBody1}
                alt="MaxMaster Slim treatment setup over abdomen"
                caption="Hands-free treatment setup over abdominal area."
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <ImageCarousel
            slides={[
              {
                src: imgMaxMasterOnBody2,
                alt: "Close-up of MaxMaster Slim light delivery over treatment area",
                caption: "Close-up of multi-point light delivery during treatment.",
                priority: true,
              },
              {
                src: imgMaxMasterOnBody3,
                alt: "MaxMaster Slim applicators positioned over patient during session",
                caption: "Multi-angle applicator positioning for body contour workflow.",
              },
              {
                src: imgMaxMasterLifestyle,
                alt: "MaxMaster Slim treatment module used on lower body",
                caption: "Targeted treatment over lower-body areas.",
              },
              {
                src: imgMaxMasterStudio,
                alt: "MaxMaster Slim full workstation in studio-style view",
                caption: "Studio-style system view with full treatment arm.",
              },
            ]}
            ariaLabel="MaxMaster Slim feature images"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-ink">
            Representative application (catalog)
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink.soft">
            Illustrative panels from manufacturer materials. Individual results and
            protocols vary; your provider will set expectations for your goals.
          </p>
          <div className="mt-8">
            <CatalogFigure
              src={imgMaxMasterPanel}
              alt="MaxMaster Slim treatment examples and positioning overview"
              caption="Catalog examples: treatment positioning and workflow. Always consult a qualified provider."
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
