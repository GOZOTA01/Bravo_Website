import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#061A1C",
          bg2: "#083033",
          surface: "rgba(255,255,255,0.06)",
          stroke: "rgba(255,255,255,0.10)",
          emerald: "#0DA38F",
          emerald2: "#0B7C6F",
          mint: "#AEE7D9",
          gold: "#E2C37B",
          gold2: "#B8904B",
        },
        ink: { DEFAULT: "#F4FBFB", soft: "rgba(244,251,251,0.80)" },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(13,163,143,0.25), 0 12px 60px rgba(13,163,143,0.12)",
        gold: "0 0 0 1px rgba(214,179,106,0.22), 0 18px 70px rgba(214,179,106,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;

