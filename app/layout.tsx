import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ui/Providers";

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

export const metadata: Metadata = {
  title: "V S Ravi Sashank Dhulipala | Full Stack Developer & Software Engineer",
  description:
    "Full Stack Developer and Software Engineer building responsive React, Next.js, Node.js, PostgreSQL, AWS, and AI-powered web applications. Based in Denton, TX / DFW Area. Available immediately.",
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
    url: "https://YOUR_PORTFOLIO_DOMAIN_HERE",
    siteName: "V S Ravi Sashank Dhulipala | Portfolio",
    title: "V S Ravi Sashank Dhulipala | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer building AI-powered, database-driven web applications with React, Next.js, Node.js, PostgreSQL, and AWS.",
    images: [
      {
        url: "/og-image.png", // Add /public/og-image.png to enable OG image
        width: 1200,
        height: 630,
        alt: "V S Ravi Sashank Dhulipala — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V S Ravi Sashank Dhulipala | Full Stack Developer",
    description:
      "Full Stack Developer building AI-powered, database-driven web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
      </body>
    </html>
  );
}
