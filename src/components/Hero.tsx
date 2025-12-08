"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-20 relative overflow-hidden">
            {/* Background Ambience (Subtle blue glow top right) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

            <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">

                {/* Text Content */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            BUILD BETTER.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                LEAD SMARTER.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-400 max-w-lg"
                    >
                        Senior Engineering Manager | Scaling Teams & Distributed Systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="group relative px-8 py-4 bg-cyan-gradient rounded-full text-black font-bold text-lg shadow-neon hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            VIEW PORTFOLIO
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Visual Element (Abstract Representation of the image) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative hidden md:block"
                >
                    {/* Placeholder for the 3D isometric illustration seen in image_900c51.jpg */}
                    <div className="relative z-10 w-full h-[500px] rounded-2xl glass-card border-cyan-500/20 flex items-center justify-center">
                        <div className="text-cyan-400/20 font-mono text-sm">[ 3D Isometric Architecture Visual ]</div>

                        {/* Floating tech nodes animation */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute w-24 h-24 bg-cyan-500/20 rounded-lg backdrop-blur-md border border-cyan-400/30 top-1/4 right-1/4 shadow-neon"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
