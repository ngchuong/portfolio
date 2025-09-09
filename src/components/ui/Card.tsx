'use client';

import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
}

export default function Card({
    children,
    className = '',
    hover = true,
    padding = 'md',
    style,
}: CardProps) {
    const baseClasses = 'bg-background/80 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50';

    const paddingClasses = {
        sm: 'p-6',
        md: 'p-8',
        lg: 'p-10',
    };

    const hoverClasses = hover ? 'hover:shadow-2xl hover:bg-background/90 transition-all duration-300 hover:-translate-y-1 hover:border-border' : '';

    const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

    return (
        <div className={`${classes} animate-fade-in-up`} style={style}>
            {children}
        </div>
    );
}
