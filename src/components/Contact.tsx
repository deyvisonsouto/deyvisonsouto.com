"use client";

import { Linkedin, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2">Get in Touch.</h2>
            <p className="text-slate-400 mb-8">Let's discuss your project or collaboration.</p>

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

            <form className="space-y-4 text-left">
                {["Your Name", "Your Email", "Subject"].map((label) => (
                    <div key={label} className="relative group">
                        <input
                            type="text"
                            placeholder={label}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                        />
                    </div>
                ))}

                <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                />

                <button className="w-full py-4 rounded-xl bg-cyan-gradient text-black font-bold shadow-neon hover:opacity-90 transition-opacity mt-4">
                    Send Message
                </button>
            </form>
        </section>
    );
};
