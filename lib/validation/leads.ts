export type PatientLeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  preferredTreatmentArea: string;
  message: string;
  consent: boolean;
};

export type ProviderLeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  practiceType: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  interestType: string;
  message: string;
  consent: boolean;
};

type LeadErrorMap<T> = Partial<Record<keyof T, string>>;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function norm(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function normBool(value: FormDataEntryValue | null) {
  return value === "on" || value === "true" || value === "1";
}

function minLen(value: string, n: number) {
  return value.length >= n;
}

export function parsePatientLead(formData: FormData) {
  const input: PatientLeadInput = {
    firstName: norm(formData.get("firstName")),
    lastName: norm(formData.get("lastName")),
    email: norm(formData.get("email")).toLowerCase(),
    phone: norm(formData.get("phone")),
    city: norm(formData.get("city")),
    state: norm(formData.get("state")),
    zip: norm(formData.get("zip")),
    preferredTreatmentArea: norm(formData.get("preferredTreatmentArea")),
    message: norm(formData.get("message")),
    consent: normBool(formData.get("consent")),
  };

  const errors: LeadErrorMap<PatientLeadInput> = {};
  if (!minLen(input.firstName, 2)) errors.firstName = "First name is required.";
  if (!minLen(input.lastName, 2)) errors.lastName = "Last name is required.";
  if (!isEmail(input.email)) errors.email = "Enter a valid email.";
  if (!minLen(input.phone, 7)) errors.phone = "Enter a valid phone number.";
  if (!minLen(input.city, 2)) errors.city = "City is required.";
  if (!minLen(input.state, 2)) errors.state = "State is required.";
  if (!minLen(input.zip, 3)) errors.zip = "ZIP is required.";
  if (!minLen(input.preferredTreatmentArea, 2))
    errors.preferredTreatmentArea = "Select a treatment area.";
  if (!input.consent) errors.consent = "Consent is required.";

  return {
    input,
    errors,
    ok: Object.keys(errors).length === 0,
  };
}

export function parseProviderLead(formData: FormData) {
  const input: ProviderLeadInput = {
    firstName: norm(formData.get("firstName")),
    lastName: norm(formData.get("lastName")),
    email: norm(formData.get("email")).toLowerCase(),
    phone: norm(formData.get("phone")),
    companyName: norm(formData.get("companyName")),
    jobTitle: norm(formData.get("jobTitle")),
    practiceType: norm(formData.get("practiceType")),
    city: norm(formData.get("city")),
    state: norm(formData.get("state")),
    zip: norm(formData.get("zip")),
    country: norm(formData.get("country")),
    interestType: norm(formData.get("interestType")),
    message: norm(formData.get("message")),
    consent: normBool(formData.get("consent")),
  };

  const errors: LeadErrorMap<ProviderLeadInput> = {};
  if (!minLen(input.firstName, 2)) errors.firstName = "First name is required.";
  if (!minLen(input.lastName, 2)) errors.lastName = "Last name is required.";
  if (!isEmail(input.email)) errors.email = "Enter a valid email.";
  if (!minLen(input.phone, 7)) errors.phone = "Enter a valid phone number.";
  if (!minLen(input.companyName, 2))
    errors.companyName = "Company name is required.";
  if (!minLen(input.practiceType, 2))
    errors.practiceType = "Practice type is required.";
  if (!minLen(input.city, 2)) errors.city = "City is required.";
  if (!minLen(input.state, 2)) errors.state = "State is required.";
  if (!minLen(input.zip, 3)) errors.zip = "ZIP is required.";
  if (!minLen(input.country, 2)) errors.country = "Country is required.";
  if (!minLen(input.interestType, 2))
    errors.interestType = "Select an interest type.";
  if (!input.consent) errors.consent = "Consent is required.";

  return {
    input,
    errors,
    ok: Object.keys(errors).length === 0,
  };
}

