'use client';

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
        image: '/api/placeholder/600/400',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project1',
        featured: true,
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        image: '/api/placeholder/600/400',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project2',
        featured: true,
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
        image: '/api/placeholder/600/400',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project3',
        featured: false,
    },
    {
        id: 4,
        title: 'Social Media Analytics',
        description: 'Analytics dashboard for social media metrics with data visualization, reporting, and insights generation.',
        image: '/api/placeholder/600/400',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project4',
        featured: false,
    },
    {
        id: 5,
        title: 'Mobile Banking App',
        description: 'Secure mobile banking application with biometric authentication, transaction history, and financial planning tools.',
        image: '/api/placeholder/600/400',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project5',
        featured: false,
    },
    {
        id: 6,
        title: 'AI Chatbot Platform',
        description: 'Intelligent chatbot platform with natural language processing, multi-language support, and analytics dashboard.',
        image: '/api/placeholder/600/400',
        technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/project6',
        featured: false,
    },
];

export default function Portfolio() {
    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="portfolio" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
                <div className="text-center mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                        My Portfolio
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                        A collection of projects that showcase my skills and passion for creating amazing digital experiences
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 sm:mb-16 text-center px-4">
                        Featured Projects
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 px-4">
                        {featuredProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-primary via-accent to-primary rounded-xl mb-8 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                                    <span className="text-primary-foreground text-xl font-semibold relative z-10">Project Image</span>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 pt-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(project.liveUrl, '_blank')}
                                            className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-200"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                            className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-200"
                                        >
                                            <Github size={16} />
                                            Code
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 sm:mb-16 text-center px-4">
                        Other Projects
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
                        {otherProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-accent via-primary to-accent rounded-xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                                    <span className="text-primary-foreground text-base font-semibold relative z-10">Project Image</span>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(project.liveUrl, '_blank')}
                                            className="flex items-center gap-1 text-xs group-hover:scale-105 transition-transform duration-200"
                                        >
                                            <ExternalLink size={14} />
                                            Demo
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                            className="flex items-center gap-1 text-xs group-hover:scale-105 transition-transform duration-200"
                                        >
                                            <Github size={14} />
                                            Code
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 sm:mt-20 md:mt-24 px-4 animate-fade-in-up">
                    <p className="text-muted-foreground mb-6 sm:mb-8 text-lg">
                        Interested in working together? Let&apos;s create something amazing!
                    </p>
                    <Button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        size="lg"
                        className="px-8 py-4 hover:scale-105 transition-transform duration-200"
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}
