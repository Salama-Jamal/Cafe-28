import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafe 28 | Modern Coffee Shop in Marrakech",
  description:
    "Cafe 28 - coffee, matcha, smoothies, mojitos and more in the heart of Marrakech. Explore our menu, find us, and discover the Cafe 28 experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-stone-900">{children}</body>
    </html>
  );
}
