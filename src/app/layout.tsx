import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page | Vignam Simulations",
  description:
    "A landing page featuring 3D Hero, video demo, and mutiple sections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en suppressHydrationWarning">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
