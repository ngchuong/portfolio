'use client';

import { useEffect } from 'react';

export default function SpeculationRulesMonitor() {
    useEffect(() => {
        // Monitor Speculation Rules API effectiveness
        if (typeof window !== 'undefined' && 'speculationRules' in HTMLScriptElement.prototype) {

            // Track prefetch success
            const trackPrefetchSuccess = (event: Event) => {
                console.log('Prefetch successful:', event);

                // Send to analytics if available
                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'speculation_prefetch_success', {
                        event_category: 'Performance',
                        event_label: 'Speculation Rules',
                    });
                }
            };

            // Track prerender success
            const trackPrerenderSuccess = (event: Event) => {
                console.log('Prerender successful:', event);

                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'speculation_prerender_success', {
                        event_category: 'Performance',
                        event_label: 'Speculation Rules',
                    });
                }
            };

            // Track speculation errors
            const trackSpeculationError = (event: Event) => {
                console.log('Speculation error:', event);

                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'speculation_error', {
                        event_category: 'Performance',
                        event_label: 'Speculation Rules',
                    });
                }
            };

            // Add event listeners for speculation events
            document.addEventListener('speculationprefetch', trackPrefetchSuccess);
            document.addEventListener('speculationprerender', trackPrerenderSuccess);
            document.addEventListener('speculationerror', trackSpeculationError);

            // Monitor navigation performance improvements
            let navigationStartTime = 0;

            const trackNavigationStart = () => {
                navigationStartTime = performance.now();
            };

            const trackNavigationEnd = () => {
                const navigationTime = performance.now() - navigationStartTime;
                console.log('Navigation time:', navigationTime, 'ms');

                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'navigation_time', {
                        event_category: 'Performance',
                        event_label: 'Speculation Rules',
                        value: Math.round(navigationTime),
                    });
                }
            };

            // Track navigation performance
            window.addEventListener('beforeunload', trackNavigationStart);
            window.addEventListener('load', trackNavigationEnd);

            // Cleanup
            return () => {
                document.removeEventListener('speculationprefetch', trackPrefetchSuccess);
                document.removeEventListener('speculationprerender', trackPrerenderSuccess);
                document.removeEventListener('speculationerror', trackSpeculationError);
                window.removeEventListener('beforeunload', trackNavigationStart);
                window.removeEventListener('load', trackNavigationEnd);
            };
        }
    }, []);

    return null; // This component doesn't render anything
}
