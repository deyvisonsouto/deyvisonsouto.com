"use client";

import { Linkedin, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { useTranslations } from "next-intl";

export const Contact = () => {
    const t = useTranslations('Contact');

    // Using a simple form submission handler for mailto
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        // Construct mailto link
        const mailtoLink = `mailto:deyvisonsouto@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;

        window.location.href = mailtoLink;
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
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                    />
                </div>
                {/* Email is technically not needed for mailto source, but user might expect to fill it. 
                    However, with mailto, the "from" is the user's email client. 
                    We can ask for it to include in the body potentially. */}
                <div className="relative group">
                    <input
                        name="email"
                        type="email"
                        placeholder={t('form.email')}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                    />
                </div>
                <div className="relative group">
                    <input
                        name="subject"
                        type="text"
                        placeholder={t('form.subject')}
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                    />
                </div>

                <textarea
                    name="message"
                    placeholder={t('form.message')}
                    rows={4}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                />

                <button type="submit" className="w-full py-4 rounded-xl bg-cyan-gradient text-black font-bold shadow-neon hover:opacity-90 transition-opacity mt-4">
                    {t('form.submit')}
                </button>
            </form>
        </section>
    );
};
