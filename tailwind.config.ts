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
          bg: "#F7F5F0",
          bg2: "#EDE9E1",
          surface: "#FFFFFF",
          surfaceMuted: "#F3F1EB",
          stroke: "#C8C3B8",
          gold: "#D69A2E",
          gold2: "#B88320",
          goldEdge: "#8B6628",
          goldDeep: "#5C4520",
          onGold: "#14141A",
        },
        ink: { DEFAULT: "#14141A", soft: "rgba(0,0,0,0.80)" },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214,154,46,0.28), 0 12px 44px rgba(214,154,46,0.14)",
        glowHover:
          "0 0 0 1px rgba(214,154,46,0.38), 0 18px 56px rgba(214,154,46,0.18)",
        gold: "0 0 0 1px rgba(214,154,46,0.22), 0 14px 48px rgba(184,131,32,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
