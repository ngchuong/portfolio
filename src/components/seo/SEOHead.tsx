'use client';

import Head from 'next/head';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: string;
}

export default function SEOHead({
    title = "Your Name - Full-Stack Developer & UI/UX Designer",
    description = "Professional full-stack developer and UI/UX designer with 5+ years of experience. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    keywords = [
        "full-stack developer",
        "frontend developer",
        "backend developer",
        "UI/UX designer",
        "React developer",
        "Next.js developer",
        "TypeScript developer",
        "Node.js developer",
        "web developer",
        "software engineer"
    ],
    image = "/og-image.jpg",
    url = "https://yourwebsite.com",
    type = "website"
}: SEOHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content="Your Name" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Your Name Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:creator" content="@yourusername" />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={url} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Theme */}
            <meta name="theme-color" content="#3b82f6" />
            <meta name="msapplication-TileColor" content="#3b82f6" />
        </Head>
    );
}
