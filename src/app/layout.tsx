import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morpho Data Dashboards",
  description: "GMorpho dashboards embedded from Dune with Morpho branding.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://localhost"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
