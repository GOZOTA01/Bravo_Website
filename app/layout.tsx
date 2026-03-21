import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bravo Laser | Non‑Invasive Laser Body Contouring",
    template: "%s | Bravo Laser",
  },
  description:
    "Bravo Laser offers Pico Laser Bravo (2-in-1 picosecond + diode aesthetics) and MaxMaster Slim body contouring—non‑invasive options for patients and scalable platforms for providers.",
  icons: {
    icon: "/bravo-logo.png",
    apple: "/bravo-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-brand-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
