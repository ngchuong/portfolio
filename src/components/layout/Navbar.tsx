'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300 animate-slide-down">
            <div className="flex justify-between items-center h-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Logo */}
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                    Your Name
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-95"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 animate-fade-in">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200 font-medium hover:translate-x-1"
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
