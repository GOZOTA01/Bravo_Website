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
          bg: "#18181C",
          bg2: "#121216",
          surface: "#222228",
          surfaceMuted: "#1C1C21",
          stroke: "#5C5C5F",
          gold: "#D6983C",
          gold2: "#9A7034",
          goldEdge: "#674E2C",
          goldDeep: "#473927",
        },
        ink: { DEFAULT: "#F6F6F6", soft: "rgba(246,246,246,0.78)" },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214,152,60,0.22), 0 10px 48px rgba(214,152,60,0.10)",
        glowHover:
          "0 0 0 1px rgba(214,152,60,0.32), 0 18px 72px rgba(214,152,60,0.14)",
        gold: "0 0 0 1px rgba(214,152,60,0.20), 0 14px 56px rgba(214,152,60,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
