'use client';

import Button from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const scrollToAbout = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden py-8 sm:py-12 md:py-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
            </div>

            {/* Spacer to push content to center */}
            <div></div>

            <div className="text-center relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 sm:mb-12 leading-tight px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 animate-fade-in-up-delay-200">
                        Hi, I&apos;m{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Your Name
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium px-4 animate-fade-in-up-delay-400">
                        Full-Stack Developer & UI/UX Designer
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in-up-delay-600">
                        I create beautiful, functional, and user-centered digital experiences that make a difference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 animate-fade-in-up-delay-800">
                        <Button
                            onClick={scrollToAbout}
                            size="lg"
                            className="w-full sm:w-auto min-w-[180px] px-8 py-4"
                        >
                            View My Work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                                const element = document.querySelector('#contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="w-full sm:w-auto min-w-[180px] px-8 py-4"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center animate-fade-in-delay-1200">
                <button
                    onClick={scrollToAbout}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 animate-bounce cursor-pointer"
                >
                    <ChevronDown size={24} />
                </button>
            </div>
        </section>
    );
}
