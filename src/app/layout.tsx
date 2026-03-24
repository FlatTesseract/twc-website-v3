import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "The Wider Collective | Film. Brand. Systems.",
  description:
    "Film. Brand. Systems. For businesses that hate blending in. We build the creative and tech that makes people pay attention.",
  keywords: [
    "creative agency",
    "brand design",
    "video production",
    "web development",
    "software development",
  ],
  openGraph: {
    title: "The Wider Collective",
    description: "Film. Brand. Systems. For businesses that hate blending in.",
    url: "https://thewidercollective.com",
    siteName: "The Wider Collective",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
