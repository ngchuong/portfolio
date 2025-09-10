'use client';

import SpeculationRules from './SpeculationRules';

export default function PreloadResources() {
    return (
        <>
            {/* Speculation Rules API for faster navigation */}
            <SpeculationRules />

            {/* Preload critical fonts */}
            <link
                rel="preload"
                href="/fonts/inter-var.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />

            {/* Preload critical images */}
            <link
                rel="preload"
                as="image"
                href="/og-image.jpg"
                type="image/jpeg"
            />

            {/* Preload critical CSS */}
            <link
                rel="preload"
                href="/_next/static/css/app/layout.css"
                as="style"
            />

            {/* DNS prefetch for external resources */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//fonts.gstatic.com" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </>
    );
}
