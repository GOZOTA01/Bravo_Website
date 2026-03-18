"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitPatientLead, type LeadActionState } from "@/app/actions/leads";
import {
  ConsentField,
  Field,
  SelectField,
  TextAreaField,
} from "@/components/forms/LeadFields";
import { Button } from "@/components/ui/Button";

const initialState: LeadActionState = { ok: false, message: "" };

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : label}
    </Button>
  );
}

export function PatientLeadForm() {
  const [state, action] = useFormState(submitPatientLead, initialState);
  const fieldErrors = state.ok ? undefined : state.fieldErrors;

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="First name"
          name="firstName"
          required
          error={fieldErrors?.firstName}
        />
        <Field
          label="Last name"
          name="lastName"
          required
          error={fieldErrors?.lastName}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={fieldErrors?.email}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          error={fieldErrors?.phone}
        />
        <Field label="City" name="city" required error={fieldErrors?.city} />
        <Field label="State" name="state" required error={fieldErrors?.state} />
        <Field label="ZIP" name="zip" required error={fieldErrors?.zip} />
        <SelectField
          label="Preferred treatment area"
          name="preferredTreatmentArea"
          required
          error={fieldErrors?.preferredTreatmentArea}
        >
          <option value="">Select an area</option>
          <option value="Abdomen">Abdomen</option>
          <option value="Arms">Arms</option>
          <option value="Back">Back</option>
          <option value="Hips / Love Handles">Hips / Love Handles</option>
          <option value="Thighs">Thighs</option>
          <option value="Inner Thighs">Inner Thighs</option>
          <option value="Underarm">Underarm</option>
          <option value="Waistline">Waistline</option>
        </SelectField>
      </div>

      <TextAreaField
        label="Message (optional)"
        name="message"
        placeholder="Tell us what areas you’re targeting and any questions you’d like answered."
        error={fieldErrors?.message}
      />

      <ConsentField
        name="consent"
        error={fieldErrors?.consent}
        label="I agree to be contacted by Bravo Laser and/or a local provider about my request. Message/data rates may apply."
      />

      {state.message ? (
        <div
          className={
            state.ok
              ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-900"
              : "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-900"
          }
        >
          {state.message}
        </div>
      ) : null}

      <SubmitButton label="Request consultation" />
    </form>
  );
}

