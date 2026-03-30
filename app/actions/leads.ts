"use server";

import {
  parsePatientLead,
  parseProviderLead,
} from "@/lib/validation/leads";

export type LeadActionState =
  | { ok: true; message: string }
  | {
      ok: false;
      message: string;
      fieldErrors?: Record<string, string>;
    };

export async function submitPatientLead(
  _prevState: LeadActionState,
  formData: FormData
): Promise<LeadActionState> {
  const parsed = parsePatientLead(formData);
  if (!parsed.ok) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.errors as Record<string, string>,
    };
  }

  // Supabase-ready: insert into `patient_leads`
  // await supabase.from("patient_leads").insert(parsed.input)
  return {
    ok: true,
    message:
      "Thanks. Your request was received. A Bravo Laser team member will follow up shortly.",
  };
}

export async function submitProviderLead(
  _prevState: LeadActionState,
  formData: FormData
): Promise<LeadActionState> {
  const parsed = parseProviderLead(formData);
  if (!parsed.ok) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.errors as Record<string, string>,
    };
  }

  // Supabase-ready: insert into `provider_leads`
  // await supabase.from("provider_leads").insert(parsed.input)
  return {
    ok: true,
    message:
      "Thanks. Your inquiry was received. We will follow up with next steps and details.",
  };
}

