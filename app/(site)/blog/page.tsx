import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Blog / News",
  description:
    "Education and updates from Bravo Laser: fat reduction guidance, provider growth articles, and clinic spotlights. Built for future CMS/Supabase-backed posts.",
};

const placeholderPosts = [
  {
    slug: "non-invasive-body-contouring-explained",
    title: "Non-invasive fat reduction: what patients should know",
    category: "Education",
    excerpt:
      "A clinical, patient-friendly overview of how to evaluate non-surgical options and set realistic expectations.",
  },
  {
    slug: "building-a-premium-contouring-offer",
    title: "How clinics build a premium fat reduction category",
    category: "Providers",
    excerpt:
      "Positioning, workflow, and conversion fundamentals for practices adding a modern fat reduction service line.",
  },
  {
    slug: "treatment-areas-patient-goals",
    title: "Most-requested treatment areas and why they matter",
    category: "Education",
    excerpt:
      "A breakdown of common zones (abdomen, arms, back, hips/love handles, and thighs) with a practical perspective.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Articles & updates"
            title="Bravo Laser blog"
            subtitle="Structured for SEO growth and future CMS integration. We’ll convert this into dynamic routes backed by Supabase when you’re ready."
          />
        </div>
      </section>

      <section className="container-base py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {placeholderPosts.map((p) => (
            <article
              key={p.slug}
              className="glass rounded-3xl p-6 shadow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {p.category}
              </p>
              <h2 className="mt-3 text-base font-semibold tracking-tight text-ink">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink.soft">
                {p.excerpt}
              </p>
              <div className="mt-4">
                <ButtonLink
                  href={`/blog/${p.slug}` as any}
                  variant="link"
                  size="sm"
                >
                  Read article
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

