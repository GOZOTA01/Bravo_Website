export type Id = string;

export type ProviderRow = {
  id: Id;
  name: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  description: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProviderLocationRow = {
  id: Id;
  providerId: Id;
  address1: string;
  address2: string | null;
  city: string;
  state: string;
  zip: string;
  country: string;
  lat: number | null;
  lng: number | null;
  createdAt: string;
  updatedAt: string;
};

export type PatientLeadRow = {
  id: Id;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  preferredTreatmentArea: string;
  message: string | null;
  consent: boolean;
  createdAt: string;
};

export type ProviderLeadRow = {
  id: Id;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string | null;
  practiceType: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  interestType: string;
  message: string | null;
  consent: boolean;
  createdAt: string;
};

export type TestimonialRow = {
  id: Id;
  audience: "patient" | "provider";
  quote: string;
  name: string | null;
  title: string | null;
  treatmentCount: number | null;
  featured: boolean;
  createdAt: string;
};

export type BeforeAfterResultRow = {
  id: Id;
  title: string;
  area: string;
  sessions: number | null;
  notes: string | null;
  beforeAssetId: Id | null;
  afterAssetId: Id | null;
  createdAt: string;
};

export type TreatmentAreaRow = {
  id: Id;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string | null;
  createdAt: string;
  updatedAt: string;
};

export type FaqItemRow = {
  id: Id;
  audience: "patient" | "provider";
  question: string;
  answer: string;
  sortOrder: number;
  createdAt: string;
};

export type BlogPostRow = {
  id: Id;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  status: "draft" | "published";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ConsultationRow = {
  id: Id;
  providerLocationId: Id | null;
  patientLeadId: Id | null;
  scheduledAt: string | null;
  status: "requested" | "scheduled" | "completed" | "cancelled";
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};

export type MediaAssetRow = {
  id: Id;
  path: string;
  alt: string | null;
  mimeType: string | null;
  width: number | null;
  height: number | null;
  createdAt: string;
};

