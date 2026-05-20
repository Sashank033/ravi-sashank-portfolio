import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Providers from "@/components/ui/Providers";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ravidhulipala.com"),
  title: "Ravi Sashank | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer portfolio showcasing React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, OpenAI integrations, projects, case studies, resume, and live booking.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "OpenAI API",
    "Frontend Developer",
    "Denton TX",
    "DFW Software Engineer",
    "V S Ravi Sashank Dhulipala",
    "Ravi Sashank Dhulipala",
  ],
  authors: [{ name: "V S Ravi Sashank Dhulipala" }],
  creator: "V S Ravi Sashank Dhulipala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravidhulipala.com",
    siteName: "Ravi Sashank Portfolio",
    title: "Ravi Sashank | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects, case studies, resume, and full-stack engineering work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Sashank Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Sashank | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer portfolio showcasing React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, and AI-integrated applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${manrope.variable}`}>
      <head />
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
