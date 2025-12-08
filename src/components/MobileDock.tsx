"use client";

import { Home, History, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "timeline", icon: History, label: "Story" },
    { id: "services", icon: Briefcase, label: "Work" },
    { id: "contact", icon: Mail, label: "Contact" },
];

export const MobileDock = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-6 rounded-3xl bg-black/60 px-6 py-4 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex flex-col items-center gap-1 text-secondary hover:text-accent transition-colors duration-300"
                    >
                        <item.icon size={20} strokeWidth={1.5} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                ))}
            </motion.div>
        </div>
    );
};
