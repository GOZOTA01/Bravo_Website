import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

const posts: Record<
  string,
  { title: string; category: string; body: Array<string> }
> = {
  "non-invasive-body-contouring-explained": {
    title: "Non-invasive fat reduction: what patients should know",
    category: "Education",
    body: [
      "Non-invasive fat reduction works best when it is approached like a structured plan, not a one-time quick fix. The best clinics set expectations, track progress, and pair the protocol with realistic lifestyle reinforcement.",
      "Bravo Laser is positioned as a comfortable, non-surgical option for stubborn areas. Your provider will personalize treatment areas and cadence based on goals, body context, and timeline.",
      "If you’re evaluating options, look for: clear consultation process, honest suitability screening, measurable tracking, and transparent pricing and timelines.",
    ],
  },
  "building-a-premium-contouring-offer": {
    title: "How clinics build a premium fat reduction category",
    category: "Providers",
    body: [
      "Premium positioning is created through clarity, consistency, and trust. The best offers combine a modern aesthetic, strong clinical messaging, and an operational workflow that staff can execute reliably.",
      "Series-based plans are easiest to market when you can explain them in three steps: consult, then sessions, then results over time. Make results measurable through photos and circumference tracking.",
      "Bravo Laser is designed to support this structure with a clinic-friendly protocol and dual-audience conversion flows (patients + providers).",
    ],
  },
  "treatment-areas-patient-goals": {
    title: "Most-requested treatment areas and why they matter",
    category: "Education",
    body: [
      "Patients tend to request areas where fat is stubborn: abdomen, hips/love handles, back, arms, and thighs. These zones can be influenced by genetics and distribution patterns.",
      "A good consultation prioritizes areas based on your goals and sets a realistic timeline. Tracking is key: photos and measurements can help validate progress over a series.",
      "Explore Bravo Laser treatment-area pages to understand what to expect and then confirm fit with a local provider.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return notFound();

  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow={post.category}
            title={post.title}
            subtitle="This is a placeholder article format built for future database-backed posts and strong internal linking."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/find-a-provider" variant="primary">
              Find a provider
            </ButtonLink>
            <ButtonLink href="/treatment" variant="secondary">
              Treatment overview
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <article className="prose prose-slate max-w-3xl">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </article>

        <div className="glass mt-12 rounded-3xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">
            Ready for next steps?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink.soft">
            If you’re a patient, start with a provider consult. If you’re a
            clinic, request Bravo Laser details and we’ll follow up.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=patient" variant="primary">
              Patient consult request
            </ButtonLink>
            <ButtonLink href="/contact?type=provider" variant="secondary">
              Provider inquiry
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

