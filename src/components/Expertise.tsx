"use client";

import { motion } from "framer-motion";
import { Settings, Users, Cloud } from "lucide-react";

const EXPERTISE = [
    { title: "System Architecture", icon: Settings, desc: "Designing scalable assets and distributed channels." },
    { title: "Team Scaling", icon: Users, desc: "Mentoring senior engineers and managing distributed systems." },
    { title: "Cloud Strategy", icon: Cloud, desc: "Cloud strategy in common traversable architectures." },
];

export const Expertise = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-8">Core Expertise</h3>

            <div className="grid md:grid-cols-3 gap-6">
                {EXPERTISE.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <item.icon className="w-8 h-8 text-cyan-400 mb-4" strokeWidth={1.5} />
                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
