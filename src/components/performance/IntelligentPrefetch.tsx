'use client';

import { useEffect, useRef } from 'react';

export default function IntelligentPrefetch() {
    const userBehaviorRef = useRef({
        hoveredSections: new Set<string>(),
        scrollDepth: 0,
        timeOnPage: 0,
        clickPatterns: new Set<string>(),
    });

    useEffect(() => {
        const behavior = userBehaviorRef.current;
        let startTime = Date.now();

        // Track user behavior
        const trackHover = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const section = target.closest('section');
            if (section && section.id) {
                behavior.hoveredSections.add(section.id);
            }
        };

        const trackScroll = () => {
            const scrollDepth = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            behavior.scrollDepth = Math.max(behavior.scrollDepth, scrollDepth);
        };

        const trackClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const link = target.closest('a, button');
            if (link) {
                const href = link.getAttribute('href');
                if (href) {
                    behavior.clickPatterns.add(href);
                }
            }
        };

        // Add event listeners
        document.addEventListener('mouseover', trackHover);
        window.addEventListener('scroll', trackScroll, { passive: true });
        document.addEventListener('click', trackClick);

        // Update speculation rules based on behavior
        const updateSpeculationRules = () => {
            const script = document.querySelector('script[type="speculationrules"]') as HTMLScriptElement;

            if (script && behavior.hoveredSections.size > 0) {
                const rules = {
                    prerender: [
                        {
                            where: { href_matches: "/" },
                            eagerness: "eager"
                        }
                    ],
                    prefetch: [
                        {
                            where: { href_matches: "/*" },
                            eagerness: "moderate"
                        }
                    ]
                };

                // Add specific sections based on user behavior
                behavior.hoveredSections.forEach(sectionId => {
                    rules.prefetch.push({
                        where: { href_matches: `/#${sectionId}` },
                        eagerness: "eager"
                    });
                });

                // Add clicked patterns
                behavior.clickPatterns.forEach(href => {
                    if (href.startsWith('#')) {
                        rules.prefetch.push({
                            where: { href_matches: href },
                            eagerness: "eager"
                        });
                    }
                });

                script.textContent = JSON.stringify(rules);
                console.log('Updated speculation rules based on user behavior:', rules);
            }
        };

        // Update rules periodically
        const interval = setInterval(updateSpeculationRules, 5000);

        // Update rules on significant behavior changes
        const behaviorTimeout = setTimeout(updateSpeculationRules, 2000);

        // Track time on page
        const timeInterval = setInterval(() => {
            behavior.timeOnPage = Date.now() - startTime;
        }, 1000);

        // Cleanup
        return () => {
            document.removeEventListener('mouseover', trackHover);
            window.removeEventListener('scroll', trackScroll);
            document.removeEventListener('click', trackClick);
            clearInterval(interval);
            clearTimeout(behaviorTimeout);
            clearInterval(timeInterval);
        };
    }, []);

    return null; // This component doesn't render anything
}
