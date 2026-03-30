/**
 * Marketing copy derived from the PICO LÁSER BRAVO catalog and Bravo positioning.
 * MaxMaster Slim: high-level positioning until catalog imagery is available.
 */

export const picoLaserBravo = {
  name: "Pico Laser Bravo",
  tagline: "2-in-1 diode & picosecond laser platform",
  short:
    "A single Bravo workstation combines high-performance hair removal with picosecond treatment for pigment, tattoos, and skin rejuvenation, with FDA-approved positioning in our core equipment story (per manufacturer materials), optionally paired with AI-guided skin analysis.",
  highlights: [
    {
      title: "Picosecond core",
      body:
        "High-energy picosecond output with multiple wavelengths to address dermal and epidermal pigment, color tattoos, and skin quality goals, with adjustable spot size and effective repetition rates for busy clinics.",
    },
    {
      title: "Diode hair removal",
      body:
        "Dedicated diode delivery with a large treatment window and multiple wavelength options so providers can tailor hair removal across a wide range of skin types.",
    },
    {
      title: "AI Skin Analyzer (optional)",
      body:
        "Intelligent capture and analysis to support consistent parameters and clearer before-and-after documentation for hair removal and aesthetic planning.",
    },
  ],
  specs: [
    { label: "Picosecond peak power", value: "2500 W (catalog card)" },
    { label: "Picosecond pulse energy", value: "2000 mJ (catalog card)" },
    { label: "Picosecond repetition rate", value: "10 Hz (catalog card)" },
    { label: "Picosecond shot life", value: "5 million+ shots (catalog card)" },
    { label: "Picosecond spot size", value: "1-10 mm adjustable" },
    { label: "Picosecond wavelengths", value: "1064 / 532 / 755 / 1320 nm" },
    { label: "Diode power", value: "1200 W (catalog card)" },
    { label: "Diode spot window", value: "15 x 26 mm (catalog card)" },
    { label: "Diode wavelengths", value: "755 / 808 / 1064 nm" },
    { label: "Diode handle life", value: "100 million shots (catalog card)" },
    { label: "Cooling system", value: "Lowest temperature -42° (catalog card)" },
    { label: "Display", value: "15.6 in, 4K HD retina screen (catalog card)" },
  ],
  disclaimer:
    "Specifications above are listed from manufacturer catalog cards and may vary by configuration, region, and firmware. FDA approval/clearance language on this site follows manufacturer materials and may vary by market and exact device configuration. Clinical use, settings, and outcomes vary by patient and provider; always follow the latest manufacturer instructions and local regulations.",
} as const;

export const maxMasterSlim = {
  name: "MaxMaster Slim",
  tagline: "Non-invasive fat reduction & slimming",
  short:
    "A complementary Bravo platform focused on circumference-focused fat reduction, designed for structured, comfortable sessions without surgery and with minimal disruption to daily life.",
  highlights: [
    {
      title: "Contour-first workflow",
      body:
        "Built for practices that want a clear, repeatable slimming and fat-reduction protocol with measurable checkpoints over a treatment series.",
    },
    {
      title: "Patient comfort",
      body:
        "Positioned for well-tolerated sessions that fit modern schedules, aligned with the same premium, clinical tone as the rest of the Bravo family.",
    },
    {
      title: "Provider-friendly operation",
      body:
        "Ideal for med spas and aesthetic clinics adding a dedicated slimming line alongside laser services.",
    },
  ],
  specs: [
    { label: "Focus", value: "Fat reduction & slimming" },
    { label: "Model", value: "MaxMaster Slim" },
    { label: "Setting", value: "Professional in-office use" },
  ],
  imageryNote:
    "Product and treatment photography from the MaxMaster Slim catalog is now included on the equipment page.",
} as const;
