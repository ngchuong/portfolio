'use client';

import Card from '@/components/ui/Card';
import { Code, Palette, Users, Zap } from 'lucide-react';

const skills = [
    {
        icon: Code,
        title: 'Frontend Development',
        description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Figma, Adobe Creative Suite, Design Systems',
    },
    {
        icon: Users,
        title: 'Backend Development',
        description: 'Node.js, Python, PostgreSQL, MongoDB',
    },
    {
        icon: Zap,
        title: 'DevOps & Tools',
        description: 'Docker, AWS, Git, CI/CD',
    },
];

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="text-center mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                        About Me
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                        Passionate about creating digital experiences that make a difference
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-16 sm:mb-20 md:mb-24 px-4">
                    {/* Profile Image */}
                    <div className="relative order-2 lg:order-1 animate-slide-in-left">
                        <div className="relative w-full max-w-lg mx-auto p-4">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-2 shadow-2xl">
                                <div className="w-full h-full rounded-3xl bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-500 text-xl font-medium">Your Photo</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-3xl">🚀</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-8 order-1 lg:order-2 p-4 animate-slide-in-right">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Hello! I&apos;m a passionate developer
                        </h3>
                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p className="text-base sm:text-lg">
                                With over 5 years of experience in web development, I specialize in creating
                                beautiful, functional, and user-centered digital experiences. I love turning
                                complex problems into simple, elegant solutions.
                            </p>
                            <p className="text-base sm:text-lg">
                                When I&apos;m not coding, you can find me exploring new technologies, contributing
                                to open-source projects, or sharing knowledge with the developer community.
                            </p>
                            <p className="text-base sm:text-lg">
                                I believe in the power of technology to solve real-world problems and make
                                people&apos;s lives better. That&apos;s why I&apos;m always excited to work on projects
                                that have a positive impact.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                React
                            </span>
                            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                                Node.js
                            </span>
                            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                                TypeScript
                            </span>
                            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold">
                                Figma
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 animate-fade-in-up">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <Card key={skill.title} className="text-center hover:scale-105 transition-transform duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
