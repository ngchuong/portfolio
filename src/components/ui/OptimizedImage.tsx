'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    placeholder = 'blur',
    blurDataURL,
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Generate a simple blur placeholder if not provided
    const defaultBlurDataURL = blurDataURL ||
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                placeholder={placeholder}
                blurDataURL={defaultBlurDataURL}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                onLoad={() => setIsLoading(false)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
}
