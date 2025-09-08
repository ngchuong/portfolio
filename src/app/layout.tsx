import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name - Full-Stack Developer & UI/UX Designer",
  description: "Professional full-stack developer and UI/UX designer creating beautiful, functional digital experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["developer", "designer", "full-stack", "react", "nextjs", "typescript", "ui/ux"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Your Name - Full-Stack Developer & UI/UX Designer",
    description: "Professional full-stack developer and UI/UX designer creating beautiful, functional digital experiences.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full-Stack Developer & UI/UX Designer",
    description: "Professional full-stack developer and UI/UX designer creating beautiful, functional digital experiences.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
