import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doucet Collective | Curated Crystals & Rare Minerals",
  description:
    "Hand-selected crystals and rare minerals, curated for those who appreciate the extraordinary beauty of the earth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
