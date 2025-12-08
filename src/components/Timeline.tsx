"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Cloud } from "lucide-react";

// Mock data based on the text in image_900f18.jpg
const TIMELINE_DATA = [
    { year: "2022 - Present", role: "Senior Engineering Manager", company: "Global Tech", stack: "AWS, iOS, Go" },
    { year: "2018 - 2022", role: "Lead Developer", company: "FinTech Corp", stack: "React, Node, K8s" },
    { year: "2014 - 2018", role: "Software Architect", company: "Startup Inc", stack: "Python, Docker" },
];

export const Timeline = () => {
    return (
        <section id="timeline" className="py-24 px-6 md:px-20 relative">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center">Career Timeline</h2>

                <div className="relative pl-8 md:pl-0">
                    {/* The Laser Spine - Left aligned on mobile, Center on Desktop */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-slate-800">
                        <div className="absolute top-0 bottom-0 w-full bg-cyan-400/50 blur-[2px]" />
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-cyan-400 shadow-[0_0_15px_#00f0ff]"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        />
                    </div>

                    {/* Timeline Cards */}
                    <div className="space-y-12">
                        {TIMELINE_DATA.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.2 }}
                                className="relative pl-8 md:pl-16 group"
                            >
                                {/* The Glowing Connection Dot */}
                                <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 bg-black border-2 border-cyan-400 rounded-full z-10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#00f0ff] transition-all" />

                                {/* The Glass Card */}
                                <div className="glass-card p-6 rounded-xl transition-all duration-300 group-hover:-translate-y-1">
                                    <span className="text-xs font-mono text-cyan-400 mb-2 block">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                                    <p className="text-slate-400 text-sm mb-4">at {item.company}</p>

                                    <div className="flex gap-2 flex-wrap">
                                        {item.stack.split(", ").map(tech => (
                                            <span key={tech} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
