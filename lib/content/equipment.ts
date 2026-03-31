/**
 * Marketing copy derived from the PICO LÁSER BRAVO catalog and Bravo positioning.
 * MaxMaster Slim: high-level positioning until catalog imagery is available.
 */

export const equipmentPaths = {
  picoLaserBravo: "/equipment/pico-laser-bravo",
  maxMasterSlim: "/equipment/maxmaster-slim",
} as const;

export const picoLaserBravo = {
  name: "Diode & Picosecond Laser",
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
    "An FDA-approved low-level laser marketed for gentler fat loss and body contouring in a non-surgical, low-disruption experience.",
  highlights: [
    {
      title: "FDA-approved laser",
      body:
        "Low-level laser light marketed to help reduce fat and cellulite. Non-surgical contouring.",
    },
    {
      title: "Gentler than lipo and freezing",
      body:
        "Marketed as gentler than liposuction and freezing. It aims to help fat cells shrink, then clear naturally through the lymphatic system.",
    },
    {
      title: "Painless with minimal downtime",
      body:
        "Marketed as painless. No freezing, no bruising, and no swelling. Many patients may see results in 4 weeks or less with light exercise and hydration.",
    },
  ],
  specs: [
    { label: "Maximum reach (laser head)", value: "110 cm" },
    { label: "Adjustable angle (laser wings)", value: "100°" },
    { label: "Weight (laser head)", value: "12 kg" },
    { label: "Maximum reach (elevator)", value: "500 mm" },
    { label: "Screen size", value: "12.1 in" },
    { label: "Diode power", value: "200 mW" },
    { label: "Diode wavelength", value: "532 nm" },
    { label: "Voltage", value: "90 V – 240 V" },
    { label: "Power", value: "120 W" },
    { label: "Number of diodes", value: "10 pcs" },
  ],
  imageryNote:
    "Product and treatment photography from the MaxMaster Slim catalog is now included on the equipment page.",
} as const;
