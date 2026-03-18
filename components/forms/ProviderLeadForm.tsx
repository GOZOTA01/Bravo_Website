"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitProviderLead, type LeadActionState } from "@/app/actions/leads";
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

export function ProviderLeadForm() {
  const [state, action] = useFormState(submitProviderLead, initialState);
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
        <Field
          label="Company / clinic name"
          name="companyName"
          required
          error={fieldErrors?.companyName}
        />
        <Field label="Job title" name="jobTitle" error={fieldErrors?.jobTitle} />
        <SelectField
          label="Practice type"
          name="practiceType"
          required
          error={fieldErrors?.practiceType}
        >
          <option value="">Select practice type</option>
          <option value="Med spa">Med spa</option>
          <option value="Aesthetic clinic">Aesthetic clinic</option>
          <option value="Chiropractic">Chiropractic</option>
          <option value="Medical practice">Medical practice</option>
          <option value="Wellness clinic">Wellness clinic</option>
          <option value="Weight loss center">Weight loss center</option>
          <option value="Other">Other</option>
        </SelectField>
        <Field label="City" name="city" required error={fieldErrors?.city} />
        <Field label="State" name="state" required error={fieldErrors?.state} />
        <Field label="ZIP" name="zip" required error={fieldErrors?.zip} />
        <Field
          label="Country"
          name="country"
          required
          error={fieldErrors?.country}
        />
        <SelectField
          label="Interest type"
          name="interestType"
          required
          error={fieldErrors?.interestType}
        >
          <option value="">Select interest</option>
          <option value="Add Bravo Laser to my practice">
            Add Bravo Laser to my practice
          </option>
          <option value="Device / acquisition options">
            Device / acquisition options
          </option>
          <option value="Marketing / launch support">
            Marketing / launch support
          </option>
          <option value="General inquiry">General inquiry</option>
        </SelectField>
      </div>

      <TextAreaField
        label="Message / notes (optional)"
        name="message"
        placeholder="Tell us about your practice and what you’re trying to build."
        error={fieldErrors?.message}
      />

      <ConsentField
        name="consent"
        error={fieldErrors?.consent}
        label="I agree to be contacted by Bravo Laser regarding this inquiry."
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

      <SubmitButton label="Submit provider inquiry" />
    </form>
  );
}

