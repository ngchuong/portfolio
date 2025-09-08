'use client';

import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
    children,
    className = '',
    hover = true,
    padding = 'md',
}: CardProps) {
    const baseClasses = 'bg-white rounded-2xl shadow-lg border border-gray-100 backdrop-blur-sm';

    const paddingClasses = {
        sm: 'p-6',
        md: 'p-8',
        lg: 'p-10',
    };

    const hoverClasses = hover ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : '';

    const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

    return (
        <div className={`${classes} animate-fade-in-up`}>
            {children}
        </div>
    );
}
