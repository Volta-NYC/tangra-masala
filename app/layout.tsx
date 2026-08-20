import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ScrollReveal } from "./scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tangra Masala | Indo-Chinese Cuisine in Elmhurst",
  description:
    "Tangra Masala serves Chinese cuisine Indian style, halal meat, Tangra masala, Manchurian, Hakka, and chilli dishes in Elmhurst, Queens.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
