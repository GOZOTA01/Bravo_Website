import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "FAQ",
  description:
    "Patient and provider FAQs for Bravo Laser—how it works, what to expect, and how practices can get started.",
};

const patientFaqs = [
  {
    q: "How does Bravo Laser work?",
    a: "Bravo Laser is a non‑invasive, external laser body contouring protocol designed to target stubborn fat and support circumference change over a structured series.",
  },
  {
    q: "Does it hurt?",
    a: "Many patients describe sessions as comfortable and well‑tolerated. Your provider will explain what sensations to expect.",
  },
  {
    q: "How long is each appointment?",
    a: "Session length varies by the number of areas treated and the clinic protocol. Your provider will give a time estimate during consultation.",
  },
  {
    q: "When will I see results?",
    a: "Results are often gradual over a series of treatments. Providers may track circumference, photos, and fit changes to evaluate progress.",
  },
  {
    q: "Is there downtime?",
    a: "No—patients typically return to daily activities right away.",
  },
  {
    q: "Who is a good candidate?",
    a: "Many candidates are looking for a non‑surgical option to address stubborn areas. Eligibility is individual—your provider will review goals and health context.",
  },
  {
    q: "How many treatments will I need?",
    a: "Plans are personalized. Many clinics recommend a structured series for best results.",
  },
];

const providerFaqs = [
  {
    q: "What types of practices can offer Bravo Laser?",
    a: "Many categories can be a fit, including med spas, aesthetic clinics, chiropractic, wellness centers, and medical practices. We’ll help assess fit based on your workflow and goals.",
  },
  {
    q: "How do we get started?",
    a: "Start with a provider inquiry. We’ll review your practice type, market, and goals and outline the best pathway forward.",
  },
  {
    q: "What support is available?",
    a: "Brand assets, operational guidance, and a scalable conversion structure designed to help you launch confidently.",
  },
  {
    q: "What are the operational requirements?",
    a: "Requirements vary by practice type. We’ll provide clear setup and protocol guidance during onboarding.",
  },
  {
    q: "How is the system integrated into a clinic?",
    a: "Bravo Laser is designed to integrate with minimal disruption, supporting series-based treatment plans and repeatable workflows.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Clarity builds trust"
            title="Frequently asked questions"
            subtitle="Straight answers for patients and providers. Designed to expand into schema-friendly FAQ content over time."
          />
        </div>
      </section>

      <section className="container-base py-16">
        <div id="patients" className="scroll-mt-24">
          <SectionHeader
            eyebrow="Patients"
            title="Patient FAQs"
            subtitle="What to expect, how sessions work, and how to decide if Bravo Laser is right for you."
          />
          <div className="mt-8">
            <FaqAccordion
              items={patientFaqs.map((x) => ({
                question: x.q,
                answer: x.a,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/find-a-provider" variant="primary">
              Find a Provider
            </ButtonLink>
            <ButtonLink href="/contact?type=patient" variant="secondary">
              Book a consultation
            </ButtonLink>
          </div>
        </div>

        <div className="my-14 h-px bg-slate-200" />

        <div id="providers" className="scroll-mt-24">
          <SectionHeader
            eyebrow="Providers"
            title="Provider FAQs"
            subtitle="Integration, support, and how to evaluate Bravo Laser for your practice."
          />
          <div className="mt-8">
            <FaqAccordion
              items={providerFaqs.map((x) => ({
                question: x.q,
                answer: x.a,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=provider" variant="primary">
              Provider inquiry
            </ButtonLink>
            <ButtonLink href="/provider-benefits" variant="secondary">
              Provider benefits
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

