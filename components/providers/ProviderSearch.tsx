"use client";

import { useMemo, useState } from "react";
import { providers, type Provider } from "@/lib/content/providers";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function matches(provider: Provider, query: string) {
  if (!query) return true;
  const q = normalize(query);
  const hay = normalize(
    [
      provider.clinicName,
      provider.city,
      provider.state,
      provider.zip,
      provider.address1,
      provider.description,
    ].join(" ")
  );
  return hay.includes(q);
}

export function ProviderSearch() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState("");

  const results = useMemo(() => {
    return providers
      .filter((p) => (state ? p.state === state : true))
      .filter((p) => matches(p, query));
  }, [query, state]);

  const states = useMemo(() => {
    return Array.from(new Set(providers.map((p) => p.state))).sort();
  }, []);

  return (
    <div className="space-y-6">
      <div className="glass grid gap-4 rounded-3xl p-6 shadow-sm lg:grid-cols-3">
        <label className="block lg:col-span-2">
          <span className="text-xs font-semibold text-ink">
            Search by zip, city, or clinic name
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 78701, Austin, Bravo Partner Clinic"
            className="mt-2 w-full rounded-2xl border border-brand-stroke bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-ink.soft/60 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/20"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-ink">State</span>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-brand-stroke bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/20"
          >
            <option value="">All states</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <div className="lg:col-span-3 text-xs text-ink.soft">
          <p>
            This is placeholder search logic. Next phase: Supabase/Postgres
            provider tables + radius/geolocation search + map view.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {results.map((p) => (
          <Card key={p.id} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-ink">{p.clinicName}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink.soft">
                  {p.description}
                </p>
              </div>
              <span className="rounded-full border border-brand-stroke/70 bg-brand-surfaceMuted/90 px-3 py-1 text-[11px] font-semibold text-ink.soft">
                {p.state}
              </span>
            </div>

            <div className="mt-4 text-xs text-ink.soft">
              <p className="font-semibold text-ink">Location</p>
              <p className="mt-1">
                {p.address1}
                {p.address2 ? `, ${p.address2}` : ""}, {p.city}, {p.state}{" "}
                {p.zip}
              </p>
            </div>

            <div className="mt-4 grid gap-2 text-xs">
              <a className="text-ink.soft hover:text-ink" href={`tel:${p.phone}`}>
                <span className="font-semibold text-ink">Call:</span> {p.phone}
              </a>
              {p.website ? (
                <a
                  className="text-ink.soft hover:text-ink"
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold text-ink">Website:</span>{" "}
                  {p.website}
                </a>
              ) : null}
              {p.email ? (
                <a
                  className="text-ink.soft hover:text-ink"
                  href={`mailto:${p.email}`}
                >
                  <span className="font-semibold text-ink">Email:</span>{" "}
                  {p.email}
                </a>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink
                href={`/contact?type=patient&provider=${encodeURIComponent(
                  p.clinicName
                )}`}
                variant="primary"
                size="sm"
              >
                Book consultation
              </ButtonLink>
              <ButtonLink href="/contact?type=patient" variant="outline" size="sm">
                Ask a question
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="glass rounded-3xl p-8 text-sm text-ink.soft">
          No providers found. Try a different city, state, or ZIP.
        </div>
      ) : null}
    </div>
  );
}

