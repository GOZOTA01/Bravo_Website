import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

const areas = [
  {
    slug: "abdomen",
    name: "Abdomen",
    blurb: "A common focus area for overall circumference and contour.",
  },
  { slug: "arms", name: "Arms", blurb: "Target stubborn upper-arm fullness." },
  { slug: "back", name: "Back", blurb: "Smooth and refine the back contour." },
  {
    slug: "love-handles",
    name: "Hips / Love Handles",
    blurb: "Support a more tapered waistline appearance.",
  },
  {
    slug: "thighs",
    name: "Thighs",
    blurb: "Contour the upper thighs with a structured plan.",
  },
  {
    slug: "inner-thighs",
    name: "Inner Thighs",
    blurb: "A precise area many patients want refined.",
  },
  {
    slug: "underarm",
    name: "Underarm",
    blurb: "A targeted zone that can be difficult to address.",
  },
  { slug: "waistline", name: "Waistline", blurb: "Enhance waist definition." },
];

export const metadata = {
  title: "Treatment Areas",
  description:
    "Explore the body areas Bravo Laser can treat, with dedicated SEO-friendly pages per area and clear next steps to book or find a provider.",
};

export default function TreatmentAreasPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Targeted, provider-guided"
            title="Treatment areas"
            subtitle="Each area has its own dedicated page (SEO-ready) with what to expect, ideal-candidate language, FAQs, and conversion CTAs."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/find-a-provider" variant="primary">
              Find a Provider
            </ButtonLink>
            <ButtonLink href="/contact?type=patient" variant="secondary">
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div
              key={a.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-ink">{a.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                {a.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink
                  href={`/treatment-areas/${a.slug}`}
                  variant="outline"
                  size="sm"
                >
                  Learn more
                </ButtonLink>
                <ButtonLink href="/find-a-provider" variant="link" size="sm">
                  Find provider
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

