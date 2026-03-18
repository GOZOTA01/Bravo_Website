import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bravo Laser | Non‑Invasive Laser Body Contouring",
    template: "%s | Bravo Laser",
  },
  description:
    "Bravo Laser is a modern, non‑invasive laser body contouring treatment that helps patients reduce stubborn fat with no surgery and no downtime while empowering providers with a scalable med‑tech solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

