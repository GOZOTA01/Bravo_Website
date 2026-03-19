import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description:
    "Meet Bravo Laser—our mission, values, and commitment to innovation, clinical credibility, and patient-first confidence transformations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-stroke bg-brand-bg">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="High‑trust, modern med‑tech"
            title="Built for confidence—engineered for credibility"
            subtitle="Bravo Laser exists to make non‑invasive body contouring feel premium, clinical, and results‑driven—for patients and for the providers who care for them."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">
              Contact Bravo Laser
            </ButtonLink>
            <ButtonLink href="/provider-benefits" variant="secondary">
              For providers
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-3 text-sm leading-relaxed text-ink.soft sm:text-base">
              <h2 className="text-lg font-semibold text-ink">Our story</h2>
              <p>
                We built Bravo Laser around a simple idea: body contouring should
                be science‑forward, comfortable, and easy to fit into real life.
                That means non‑invasive protocols, clear expectations, and a
                premium experience that patients trust.
              </p>
              <p>
                For providers, Bravo Laser is designed as a scalable category
                with modern branding, high demand, and a workflow that can
                integrate smoothly into busy practices.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Clinical clarity",
                  body: "Clear, honest messaging and realistic expectations—built for trust.",
                },
                {
                  title: "Patient comfort",
                  body: "A well‑tolerated experience designed for consistency across sessions.",
                },
                {
                  title: "Premium by design",
                  body: "Modern med‑tech aesthetic: clean UI, high hierarchy, not cluttered.",
                },
                {
                  title: "Provider partnership",
                  body: "Support for clinics building a differentiated aesthetics category.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="glass rounded-3xl p-6 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass rounded-3xl p-6">
            <h3 className="text-sm font-semibold text-ink">Medical credibility</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              This site is designed to support future clinical assets—study
              summaries, safety language, expert quotes, and structured FAQs
              suitable for schema markup.
            </p>
            <div className="mt-4 grid gap-3">
              <ButtonLink href="/what-is-bravo-laser" variant="outline" size="sm">
                Learn the technology
              </ButtonLink>
              <ButtonLink href="/faq" variant="secondary" size="sm">
                Read FAQs
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

