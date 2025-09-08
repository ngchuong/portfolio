'use client';

import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/yourusername' },
    { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com' },
];

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6 p-4 animate-fade-in-up">
                        <h3 className="text-2xl sm:text-3xl font-bold">Your Name</h3>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            Building amazing digital experiences with passion and creativity.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6 p-4 animate-fade-in-up">
                        <h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 p-4 animate-fade-in-up">
                        <h4 className="text-lg sm:text-xl font-semibold">Get In Touch</h4>
                        <div className="space-y-3 text-gray-300 text-base sm:text-lg">
                            <p>your.email@example.com</p>
                            <p>+1 (555) 123-4567</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-8 sm:pt-12 text-center text-gray-400 px-4 animate-fade-in">
                    <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
