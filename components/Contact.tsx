'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Raleway, Poppins } from 'next/font/google';

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['500'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null as string | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                setStatus({ loading: false, success: false, error: data.error || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <div className={`${poppins.className} min-h-screen bg-white py-12 px-4`}>
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-12 text-center" data-aos="fade-up">
                <h2 className={`${raleway.className} text-5xl  text-black mb-4`}>Contact</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Get in touch with me for any queries or collaborations. Fill out the
                    form or use the contact details below — I&apos;ll respond promptly.
                </p>
            </div>

            {/* Contact Content */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div
                        className="bg-white  rounded-lg p-8 backdrop-blur-sm"
                        data-aos="fade-up"
                    >
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-700/10 border border-cyan-500/30">
                                        <MapPin className="w-6 h-6 text-cyan-700" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`${raleway.className} text-gray-700 font-medium mb-1`}>Address</h3>
                                    <p className="text-gray-700">
                                        Aurangabad, Maharashtra, 431001, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-700/10 border border-cyan-500/30">
                                        <Phone className="w-6 h-6 text-cyan-700" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`${raleway.className} text-gray-700 font-medium mb-1`}>Phone</h3>
                                    <p className="text-gray-700">+91-8010566607</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-700/10 border border-cyan-500/30">
                                        <Mail className="w-6 h-6 text-cyan-700" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`${raleway.className} text-gray-700 font-medium mb-1`}>Email</h3>
                                    <p className="text-gray-700">saurabhbodakhe2004@gmail.com</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-8 rounded-lg overflow-hidden border border-slate-700 h-94">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6433425738844!2d77.05698372346881!3d28.377349170502427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb5e6b1e1111%3A0x2f6e7d7d7d7d7d7d!2sPyramid%20Tower%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1234567890"
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="bg-white  rounded-lg p-8 backdrop-blur-sm"
                        data-aos="fade-up"
                    >
                        {status.success && (
                            <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-400">
                                <p className="text-green-700 font-semibold">
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </p>
                            </div>
                        )}

                        {status.error && (
                            <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-400">
                                <p className="text-red-700 font-semibold">
                                    {status.error}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-cyan-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-cyan-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-cyan-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                                    placeholder="Message subject"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-cyan-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full px-6 py-3 bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform ${status.loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-600 hover:scale-105'} focus:outline-none focus:ring-2 focus:ring-cyan-400/50`}
                            >
                                {status.loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
