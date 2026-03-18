import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ProviderLeadForm } from "@/components/forms/ProviderLeadForm";

export const metadata = {
  title: "Provider Benefits",
  description:
    "A premium, conversion-focused overview for clinics and practices considering Bravo Laser—revenue potential, differentiation, easy integration, and provider support.",
};

export default function ProviderBenefitsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="For clinics & medical practices"
            title="Add Bravo Laser to your practice"
            subtitle="A modern, high-trust laser body contouring category that patients ask for—built to integrate smoothly into busy operations with premium positioning."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=provider" variant="primary">
              Inquire about Bravo Laser
            </ButtonLink>
            <ButtonLink href="/faq#providers" variant="secondary">
              Provider FAQs
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">
              Differentiation patients understand
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Premium, clinical messaging around non‑invasive fat reduction—easy
              for staff to explain and for patients to trust.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">Operationally easy</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Streamlined protocol with minimal overhead—designed for med spas,
              chiropractic, wellness, and aesthetic practices.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">
              Scalable revenue category
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink.soft">
              Series-based plans can support recurring revenue and retention
              when paired with premium branding and consistent follow-up.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Practice types that can be a strong fit
            </h2>
            <ul className="grid gap-2 text-sm text-ink.soft sm:grid-cols-2">
              {[
                "Med spas",
                "Aesthetic clinics",
                "Chiropractors",
                "Physician practices",
                "Wellness centers",
                "Weight loss centers",
                "Orthopedic / holistic practices",
                "Cosmetic practices",
              ].map((x) => (
                <li
                  key={x}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs"
                >
                  {x}
                </li>
              ))}
            </ul>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand.emerald">
                Financing / acquisition ready
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink.soft">
                We can support different pathways—from adding a device to
                expanding an aesthetics offering. Share your goals and we’ll
                align on next steps.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="/contact?type=provider" variant="primary">
                  Talk to sales
                </ButtonLink>
                <ButtonLink href="/contact?type=provider" variant="outline">
                  Request details
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-ink">
              Provider inquiry
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink.soft">
              Share a few details and our team will follow up with next steps,
              acquisition/financing pathways, and integration requirements.
            </p>
            <div className="mt-6">
              <ProviderLeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

