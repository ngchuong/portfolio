'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Here you would typically send the data to your backend
            console.log('Form submitted:', formData);

            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'your.email@example.com',
            href: 'mailto:your.email@example.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'San Francisco, CA',
            href: '#',
        },
    ];

    if (isSubmitted) {
        return (
            <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 text-center">
                        <div className="animate-scale-in">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Message Sent Successfully!
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                            </p>
                            <Button
                                onClick={() => setIsSubmitted(false)}
                                variant="outline"
                            >
                                Send Another Message
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
                <div className="text-center mb-16 sm:mb-20 md:mb-24 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                        Get In Touch
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 px-4">
                    {/* Contact Form */}
                    <div className="animate-slide-in-left">
                        <Card className="p-6 sm:p-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                Send me a message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2"
                                    size="lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8 p-4 animate-slide-in-right">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                Let&apos;s connect
                            </h3>
                            <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
                                I&apos;m always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, I&apos;ll try my
                                best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <a
                                        key={info.title}
                                        href={info.href}
                                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:translate-x-1"
                                    >
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{info.title}</h4>
                                            <p className="text-gray-600">{info.value}</p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl animate-fade-in-up">
                            <h4 className="font-bold text-gray-900 mb-2">Quick Response</h4>
                            <p className="text-gray-600 text-sm">
                                I typically respond to messages within 24 hours. For urgent
                                inquiries, feel free to reach out via phone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}