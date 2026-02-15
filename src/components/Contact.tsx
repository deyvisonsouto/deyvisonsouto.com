"use client";

import { Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Contact = () => {
    const t = useTranslations('Contact');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send message');
            }

            setStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error('Contact error:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-20 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">{t('title')}</h2>
            <p className="text-slate-400 mb-8">{t('subtitle')}</p>

            <div className="flex justify-center gap-6 mb-12">
                <a
                    href={PORTFOLIO_DATA.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/50 rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href={PORTFOLIO_DATA.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/50 rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
                    aria-label="GitHub"
                >
                    <Github size={24} />
                </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="relative group">
                    <input
                        name="name"
                        type="text"
                        placeholder={t('form.name')}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all disabled:opacity-50"
                    />
                </div>
                <div className="relative group">
                    <input
                        name="email"
                        type="email"
                        placeholder={t('form.email')}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all disabled:opacity-50"
                    />
                </div>
                <div className="relative group">
                    <input
                        name="subject"
                        type="text"
                        placeholder={t('form.subject')}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all disabled:opacity-50"
                    />
                </div>

                <textarea
                    name="message"
                    placeholder={t('form.message')}
                    rows={4}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all disabled:opacity-50"
                />

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-cyan-gradient text-black font-bold shadow-neon hover:opacity-90 transition-opacity mt-4 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                    ) : (
                        t('form.submit')
                    )}
                </button>

                {status === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-xl border border-green-400/20">
                        <CheckCircle size={20} />
                        <p>Message sent successfully!</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                        <AlertCircle size={20} />
                        <p>{errorMessage || 'Failed to send message. Please try again.'}</p>
                    </div>
                )}
            </form>
        </section>
    );
};
