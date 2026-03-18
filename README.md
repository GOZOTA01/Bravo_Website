# Bravo Laser Website

Premium, conversion-focused medical aesthetics website scaffold for **Bravo Laser**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase (planned)
- PostgreSQL (planned)

## Run locally

```bash
npm install
npm run dev
```

## Notes

- Lead forms are implemented with server actions and validation, returning success messages. Next step is to wire them into Supabase tables:
  - `patient_leads`
  - `provider_leads`
- Provider search is currently powered by placeholder data in `lib/content/providers.ts` and is designed to be replaced by Supabase/Postgres-backed search (including radius/geolocation) later.

