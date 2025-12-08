"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Layers, Code2 } from "lucide-react";

export const Services = () => {
    const t = useTranslations('Services');
    const services = [
        { key: 'service1', icon: Users },
        { key: 'service2', icon: Layers },
        { key: 'service3', icon: Code2 }
    ] as const;

    return (
        <section id="services" className="py-32 px-6 md:px-20 bg-gradient-radial from-surface to-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-mono text-accent mb-12 uppercase tracking-widest">{t('title')}</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.key}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ borderColor: "rgb(var(--accent))", y: -5 }}
                            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 rounded-full bg-surface w-fit group-hover:bg-accent/10 transition-colors">
                                <service.icon size={32} className="text-primary group-hover:text-accent transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{t(`items.${service.key}.title`)}</h3>
                            <p className="text-secondary leading-relaxed">{t(`items.${service.key}.description`)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};