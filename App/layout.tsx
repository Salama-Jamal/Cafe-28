import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cafe 28 | Modern Coffee Shop in Marrakech",
  description:
    "Cafe 28 — coffee, matcha, smoothies, mojitos and more in the heart of Marrakech. Explore our menu, find us, and discover the Cafe 28 experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-cream text-stone-900`}>
        {children}
      </body>
    </html>
  );
}