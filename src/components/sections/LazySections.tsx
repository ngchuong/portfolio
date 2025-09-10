'use client';

import dynamic from 'next/dynamic';
import Loading from '@/components/ui/Loading';

// Lazy load các sections để cải thiện performance
export const LazyHero = dynamic(() => import('./Hero'), {
    loading: () => <Loading />,
    ssr: true, // Hero section cần SSR cho LCP
});

export const LazyAbout = dynamic(() => import('./About'), {
    loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-2xl" />,
    ssr: false,
});

export const LazyPortfolio = dynamic(() => import('./Portfolio'), {
    loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-2xl" />,
    ssr: false,
});

export const LazyContact = dynamic(() => import('./Contact'), {
    loading: () => <div className="h-96 bg-muted/30 animate-pulse rounded-2xl" />,
    ssr: false,
});

export const LazyFooter = dynamic(() => import('../layout/Footer'), {
    loading: () => <div className="h-32 bg-secondary animate-pulse" />,
    ssr: false,
});
