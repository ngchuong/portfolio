'use client';

import { useEffect } from 'react';
import IntelligentPrefetch from './IntelligentPrefetch';

export default function SpeculationRules() {
    useEffect(() => {
        // Check if Speculation Rules API is supported
        if ('speculationRules' in HTMLScriptElement.prototype) {
            // Dynamic speculation rules based on user behavior
            const updateSpeculationRules = () => {
                const script = document.querySelector('script[type="speculationrules"]') as HTMLScriptElement;

                if (script) {
                    // More intelligent speculation rules
                    const rules = {
                        prerender: [
                            {
                                where: { href_matches: "/" },
                                eagerness: "eager"
                            },
                            {
                                where: { href_matches: "/#about" },
                                eagerness: "moderate"
                            },
                            {
                                where: { href_matches: "/#portfolio" },
                                eagerness: "moderate"
                            },
                            {
                                where: { href_matches: "/#contact" },
                                eagerness: "moderate"
                            }
                        ],
                        prefetch: [
                            {
                                where: { href_matches: "/*" },
                                eagerness: "moderate"
                            }
                        ]
                    };

                    script.textContent = JSON.stringify(rules);
                }
            };

            // Update rules after initial load
            setTimeout(updateSpeculationRules, 1000);

            // Listen for navigation events to update rules
            const handleNavigation = () => {
                updateSpeculationRules();
            };

            // Add event listeners for navigation
            window.addEventListener('popstate', handleNavigation);
            window.addEventListener('pushstate', handleNavigation);
            window.addEventListener('replacestate', handleNavigation);

            return () => {
                window.removeEventListener('popstate', handleNavigation);
                window.removeEventListener('pushstate', handleNavigation);
                window.removeEventListener('replacestate', handleNavigation);
            };
        }
    }, []);

    return (
        <>
            <IntelligentPrefetch />
            <script
                type="speculationrules"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        prerender: [
                            {
                                where: { href_matches: "/" },
                                eagerness: "eager"
                            },
                            {
                                where: { href_matches: "/#about" },
                                eagerness: "moderate"
                            },
                            {
                                where: { href_matches: "/#portfolio" },
                                eagerness: "moderate"
                            },
                            {
                                where: { href_matches: "/#contact" },
                                eagerness: "moderate"
                            }
                        ],
                        prefetch: [
                            {
                                where: { href_matches: "/*" },
                                eagerness: "moderate"
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
