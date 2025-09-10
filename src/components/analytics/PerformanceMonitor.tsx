'use client';

import { useEffect } from 'react';
import SpeculationRulesMonitor from './SpeculationRulesMonitor';

export default function PerformanceMonitor() {
    useEffect(() => {
        // Monitor Core Web Vitals
        if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
            // Monitor LCP (Largest Contentful Paint)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);

                // Send to analytics if needed
                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'web_vitals', {
                        name: 'LCP',
                        value: Math.round(lastEntry.startTime),
                        event_category: 'Web Vitals',
                    });
                }
            });

            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Monitor FCP (First Contentful Paint)
            const fcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    console.log('FCP:', entry.startTime);

                    if (typeof window.gtag !== 'undefined') {
                        window.gtag('event', 'web_vitals', {
                            name: 'FCP',
                            value: Math.round(entry.startTime),
                            event_category: 'Web Vitals',
                        });
                    }
                });
            });

            fcpObserver.observe({ entryTypes: ['paint'] });

            // Monitor CLS (Cumulative Layout Shift)
            const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0;
                list.getEntries().forEach((entry: any) => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });

                if (clsValue > 0) {
                    console.log('CLS:', clsValue);

                    if (typeof window.gtag !== 'undefined') {
                        window.gtag('event', 'web_vitals', {
                            name: 'CLS',
                            value: Math.round(clsValue * 1000),
                            event_category: 'Web Vitals',
                        });
                    }
                }
            });

            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // Monitor FID (First Input Delay)
            const fidObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry: any) => {
                    console.log('FID:', entry.processingStart - entry.startTime);

                    if (typeof window.gtag !== 'undefined') {
                        window.gtag('event', 'web_vitals', {
                            name: 'FID',
                            value: Math.round(entry.processingStart - entry.startTime),
                            event_category: 'Web Vitals',
                        });
                    }
                });
            });

            fidObserver.observe({ entryTypes: ['first-input'] });

            // Cleanup observers
            return () => {
                lcpObserver.disconnect();
                fcpObserver.disconnect();
                clsObserver.disconnect();
                fidObserver.disconnect();
            };
        }
    }, []);

    return (
        <>
            <SpeculationRulesMonitor />
        </>
    );
}
