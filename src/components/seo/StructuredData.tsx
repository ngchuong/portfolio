'use client';

export default function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Your Name",
        "jobTitle": "Full-Stack Developer & UI/UX Designer",
        "description": "Professional full-stack developer and UI/UX designer with 5+ years of experience creating beautiful, functional digital experiences.",
        "url": "https://yourwebsite.com",
        "image": "https://yourwebsite.com/profile-image.jpg",
        "sameAs": [
            "https://github.com/yourusername",
            "https://linkedin.com/in/yourusername",
            "https://twitter.com/yourusername"
        ],
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "JavaScript",
            "UI/UX Design",
            "Web Development",
            "Frontend Development",
            "Backend Development",
            "Full-Stack Development"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Developer",
            "occupationLocation": {
                "@type": "City",
                "name": "San Francisco, CA"
            }
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Your University"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Your Name Portfolio",
        "url": "https://yourwebsite.com",
        "description": "Professional portfolio showcasing full-stack development and UI/UX design projects.",
        "author": {
            "@type": "Person",
            "name": "Your Name"
        },
        "inLanguage": "en-US"
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Your Name",
        "url": "https://yourwebsite.com",
        "logo": "https://yourwebsite.com/logo.png",
        "description": "Professional full-stack development and UI/UX design services.",
        "founder": {
            "@type": "Person",
            "name": "Your Name"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "your.email@example.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
        </>
    );
}
