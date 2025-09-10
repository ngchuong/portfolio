import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import PerformanceMonitor from "@/components/analytics/PerformanceMonitor";
import PreloadResources from "@/components/performance/PreloadResources";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif"
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Your Name - Full-Stack Developer & UI/UX Designer",
    template: "%s | Your Name Portfolio"
  },
  description: "Professional full-stack developer and UI/UX designer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Creating beautiful, functional digital experiences that make a difference.",
  keywords: [
    "full-stack developer",
    "frontend developer",
    "backend developer",
    "UI/UX designer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "web developer",
    "software engineer",
    "portfolio",
    "freelance developer",
    "JavaScript developer",
    "modern web technologies",
    "responsive design",
    "user experience design"
  ],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourwebsite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Your Name - Full-Stack Developer & UI/UX Designer",
    description: "Professional full-stack developer and UI/UX designer creating beautiful, functional digital experiences. 5+ years of experience with React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Full-Stack Developer & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full-Stack Developer & UI/UX Designer",
    description: "Professional full-stack developer and UI/UX designer creating beautiful, functional digital experiences.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <PreloadResources />
        <StructuredData />
      </head>
      <body className="font-sans antialiased critical-css" suppressHydrationWarning>
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
