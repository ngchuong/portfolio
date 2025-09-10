'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
    children: ReactNode;
    className?: string;
    fallback?: ReactNode;
    threshold?: number;
    rootMargin?: string;
}

export default function LazySection({
    children,
    className = '',
    fallback,
    threshold = 0.1,
    rootMargin = '100px',
}: LazySectionProps) {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold,
        rootMargin,
        freezeOnceVisible: true,
    });

    const defaultFallback = (
        <div className={`h-96 bg-muted/30 animate-pulse rounded-2xl ${className}`} />
    );

    return (
        <div ref={ref} className={className}>
            {isIntersecting ? children : (fallback || defaultFallback)}
        </div>
    );
}
