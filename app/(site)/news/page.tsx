import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "News",
  description:
    "News and events for Bravo Laser. Built to support future CMS-driven updates.",
};

export default function NewsPage() {
  return (
    <>
      <section className="section-charcoal border-b border-brand-stroke">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Updates"
            title="News & events"
            subtitle="This page is structured for future database-backed news posts, press releases, and announcements."
          />
        </div>
      </section>

      <section className="container-base py-16 text-sm text-ink.soft">
        <div className="glass rounded-3xl p-8 shadow-sm">
          <p>
            Coming soon: Bravo Laser announcements, clinic spotlights, and
            industry updates.
          </p>
        </div>
      </section>
    </>
  );
}

