export type Provider = {
  id: string;
  clinicName: string;
  description: string;
  phone: string;
  website?: string;
  email?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export const providers: Provider[] = [
  {
    id: "prov-nyc-01",
    clinicName: "Bravo Partner Clinic — Midtown",
    description:
      "Premium body contouring consults with a clinical, measurement-based approach.",
    phone: "(555) 101-2001",
    website: "https://example.com",
    address1: "123 Fifth Ave",
    city: "New York",
    state: "NY",
    zip: "10010",
    country: "US",
  },
  {
    id: "prov-aus-01",
    clinicName: "Bravo Partner Clinic — Austin",
    description:
      "Non-invasive contouring sessions designed for comfort and consistency.",
    phone: "(555) 222-3300",
    website: "https://example.com",
    address1: "456 Congress Ave",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "US",
  },
  {
    id: "prov-mia-01",
    clinicName: "Bravo Partner Clinic — Brickell",
    description:
      "Provider-guided series plans with photo and circumference tracking.",
    phone: "(555) 444-9900",
    email: "clinic@example.com",
    address1: "789 Biscayne Blvd",
    city: "Miami",
    state: "FL",
    zip: "33131",
    country: "US",
  },
];

