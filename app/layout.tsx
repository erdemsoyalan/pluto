import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pluto Door Command",
  description: "Door knocking tracker for Pluto Property Management"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
