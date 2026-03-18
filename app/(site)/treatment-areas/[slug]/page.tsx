import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

const areaMap: Record<
  string,
  {
    title: string;
    headline: string;
    commonWhy: string;
    whatToExpect: string;
    idealCandidate: string;
    faqs: Array<{ q: string; a: string }>;
  }
> = {
  abdomen: {
    title: "Laser stomach / abdomen fat reduction",
    headline: "Laser abdomen contouring with Bravo Laser",
    commonWhy:
      "The abdomen is one of the most common places people hold stubborn fat—even with consistent diet and training.",
    whatToExpect:
      "Your provider will map the area, set a session cadence, and track progress over time. The protocol is designed to be comfortable and non‑disruptive to daily life.",
    idealCandidate:
      "Patients seeking non‑surgical contour change who want a structured plan and realistic, measurable expectations.",
    faqs: [
      {
        q: "Does it hurt?",
        a: "Many patients describe sessions as gentle and well‑tolerated. Your provider will review what sensations to expect.",
      },
      {
        q: "How quickly will I see results?",
        a: "Results are typically gradual over a series. Your provider can outline a timeline based on your plan and goals.",
      },
    ],
  },
  arms: {
    title: "Laser arm fat reduction",
    headline: "Laser arm contouring with Bravo Laser",
    commonWhy:
      "Upper arms can be difficult to refine with exercise alone, especially when fullness is localized.",
    whatToExpect:
      "A provider‑guided series targeting the upper arm zone, designed for comfort and consistency.",
    idealCandidate:
      "Patients who want a non‑invasive option to support a more refined arm contour.",
    faqs: [
      {
        q: "Is there downtime?",
        a: "No—patients typically return to normal activities immediately.",
      },
      {
        q: "How many sessions?",
        a: "Plans are personalized. Your provider will recommend a series based on goals and the area being treated.",
      },
    ],
  },
  back: {
    title: "Laser back fat reduction",
    headline: "Laser back contouring with Bravo Laser",
    commonWhy:
      "Back contour concerns can be influenced by genetics, distribution patterns, and lifestyle.",
    whatToExpect:
      "External treatment sessions guided by a provider who tracks circumference and visible changes over time.",
    idealCandidate:
      "Patients who want a gradual, non‑surgical approach to back contour refinement.",
    faqs: [
      {
        q: "Can this treat multiple zones?",
        a: "Many plans include more than one area. Your provider will prioritize based on goals and protocol.",
      },
      {
        q: "Is it a weight loss treatment?",
        a: "Bravo Laser is positioned for contour and circumference change. Your provider will set expectations for your body and plan.",
      },
    ],
  },
  "love-handles": {
    title: "Laser love handle reduction",
    headline: "Laser hips / love handle contouring with Bravo Laser",
    commonWhy:
      "Hips and love handles are common stubborn zones, even in otherwise active patients.",
    whatToExpect:
      "A structured series with tracking and lifestyle reinforcement where appropriate.",
    idealCandidate:
      "Patients seeking non‑invasive waistline refinement and improved silhouette.",
    faqs: [
      {
        q: "Will I be sore afterward?",
        a: "Most patients report minimal disruption. Your provider will review post‑care guidance.",
      },
      {
        q: "Do I need to change my diet?",
        a: "Your provider may recommend supportive habits, but the plan is personalized and realistic.",
      },
    ],
  },
  thighs: {
    title: "Laser thigh contouring",
    headline: "Laser thigh contouring with Bravo Laser",
    commonWhy:
      "Thigh contour is a frequent goal, especially when fat distribution is localized.",
    whatToExpect:
      "Provider‑guided sessions designed for consistency and measurable progress.",
    idealCandidate:
      "Patients who want a comfortable, non‑surgical approach to thigh contour refinement.",
    faqs: [
      {
        q: "Can inner thighs be treated too?",
        a: "Yes—ask your provider about a plan that includes inner thigh targeting when appropriate.",
      },
      {
        q: "How long is a session?",
        a: "Session length varies by areas and protocol. Your provider will give a time estimate.",
      },
    ],
  },
  "inner-thighs": {
    title: "Laser inner thigh fat reduction",
    headline: "Laser inner thigh contouring with Bravo Laser",
    commonWhy:
      "Inner thighs are a precise area where subtle changes can make a big difference in comfort and confidence.",
    whatToExpect:
      "A targeted series that is provider‑guided, comfortable, and tracked over time.",
    idealCandidate:
      "Patients seeking a non‑invasive option for a hard‑to‑treat zone.",
    faqs: [
      {
        q: "When should I book a consult?",
        a: "If you’re considering treatment, a consult is the fastest way to confirm fit and set expectations.",
      },
      {
        q: "Is it safe for everyone?",
        a: "Eligibility is individual. Your provider will review medical history and goals before proceeding.",
      },
    ],
  },
  underarm: {
    title: "Laser underarm fat reduction",
    headline: "Laser underarm contouring with Bravo Laser",
    commonWhy:
      "Underarm fullness is a common concern and can be difficult to address with exercise alone.",
    whatToExpect:
      "A provider‑guided protocol designed to fit into your week with no downtime.",
    idealCandidate:
      "Patients wanting a conservative, non‑surgical approach to underarm contour.",
    faqs: [
      {
        q: "Will I need multiple sessions?",
        a: "Most patients follow a series-based plan. Your provider will personalize the cadence.",
      },
      {
        q: "Can I treat other areas too?",
        a: "Many patients combine areas. Ask your provider about prioritizing zones based on goals.",
      },
    ],
  },
  waistline: {
    title: "Laser waistline contouring",
    headline: "Laser waistline contouring with Bravo Laser",
    commonWhy:
      "Waistline definition is often impacted by stubborn fat distribution patterns.",
    whatToExpect:
      "A structured treatment plan with tracking and clear checkpoints over time.",
    idealCandidate:
      "Patients who want measurable, non‑invasive contour change without downtime.",
    faqs: [
      {
        q: "How do providers track progress?",
        a: "Many track circumference, photos, and fit changes across a series of sessions.",
      },
      {
        q: "What should I do after sessions?",
        a: "Follow your provider’s plan. They may recommend simple supportive habits for best results.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(areaMap).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function TreatmentAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areaMap[slug];
  if (!area) return notFound();

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Treatment area"
            title={area.headline}
            subtitle={area.commonWhy}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Request a consultation
            </ButtonLink>
            <ButtonLink href="/find-a-provider" variant="secondary">
              Find a provider
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 text-sm leading-relaxed text-ink.soft sm:text-base lg:col-span-2">
            <div>
              <h2 className="text-lg font-semibold text-ink">What to expect</h2>
              <p className="mt-2">{area.whatToExpect}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">
                Ideal candidate
              </h2>
              <p className="mt-2">{area.idealCandidate}</p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold text-ink">
              Frequently asked questions
            </h3>
            <div className="mt-4 space-y-4 text-xs text-ink.soft">
              {area.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white p-4">
                  <p className="font-semibold text-ink">{f.q}</p>
                  <p className="mt-2 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

