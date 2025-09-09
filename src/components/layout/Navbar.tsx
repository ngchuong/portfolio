'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border'
                : 'bg-background/95 backdrop-blur-md'
            }`}>
            <div className="flex justify-between items-center h-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Logo */}
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                    Your Name
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-muted hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            {item.name}
                        </button>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground/80 hover:text-primary transition-all duration-200 hover:scale-95"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-xl rounded-lg shadow-lg mt-2 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 animate-fade-in border border-border">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-all duration-200 font-medium hover:translate-x-1"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
