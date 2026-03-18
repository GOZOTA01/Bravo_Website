import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "News",
  description:
    "News and events for Bravo Laser. Built to support future CMS-driven updates.",
};

export default function NewsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-base py-14">
          <SectionHeader
            eyebrow="Updates"
            title="News & events"
            subtitle="This page is structured for future database-backed news posts, press releases, and announcements."
          />
        </div>
      </section>

      <section className="container-base py-16 text-sm text-ink.soft">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p>
            Coming soon: Bravo Laser announcements, clinic spotlights, and
            industry updates.
          </p>
        </div>
      </section>
    </>
  );
}

