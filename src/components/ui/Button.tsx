'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    type = 'button',
    disabled = false,
    className = '',
}: ButtonProps) {
    const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
        secondary: 'bg-gradient-to-r from-secondary to-muted text-secondary-foreground hover:from-secondary/90 hover:to-muted/90 focus:ring-secondary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary hover:shadow-lg transform hover:-translate-y-0.5',
    };

    const sizeClasses = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${classes} ${!disabled ? 'hover:scale-105 active:scale-95' : ''}`}
        >
            {children}
        </button>
    );
}
