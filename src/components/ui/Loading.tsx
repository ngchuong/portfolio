'use client';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center space-y-4">
                {/* Animated logo/name */}
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
                    Your Name
                </div>

                {/* Loading spinner */}
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                </div>

                {/* Loading text */}
                <p className="text-muted-foreground text-sm animate-pulse">
                    Loading portfolio...
                </p>
            </div>
        </div>
    );
}
