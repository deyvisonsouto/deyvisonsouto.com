import { Layers, Zap, Users, Box, Code2, Globe } from "lucide-react";

export interface TimelineEvent {
    id: number;
    year: string;
    role: string;
    company: string;
    description: string;
    tech: string[];
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: any; // Lucide Icon Type
}

export const PORTFOLIO_DATA = {
    hero: {
        title: "Engineering Excellence.",
        subtitle: "Building scalable front-end architecture and leading high-performance teams.",
        ctaPrimary: "Let's Talk",
        ctaSecondary: "View Work"
    },
    timeline: [
        {
            id: 1,
            year: "2024",
            role: "Senior Engineering Manager",
            company: "TechFlow Solutions",
            description: "Led a cross-functional team of 15 engineers. Reduced CI/CD build times by 40% and successfully migrated a legacy monolith to Next.js micro-frontends.",
            tech: ["Next.js", "AWS", "Turborepo"]
        },
        {
            id: 2,
            year: "2022",
            role: "Lead Frontend Engineer",
            company: "Creative Corp",
            description: "Architected the company's design system used across 4 products. Implemented strict TypeScript standards and increased code coverage to 90%.",
            tech: ["React", "Storybook", "TypeScript"]
        },
        {
            id: 3,
            year: "2020",
            role: "Senior Developer",
            company: "StartupX",
            description: "Early employee #5. Built the MVP from scratch and scaled the platform to 100k daily active users.",
            tech: ["Vue.js", "Node", "PostgreSQL"]
        }
    ] as TimelineEvent[],
    services: [
        {
            id: 1,
            title: "Technical Leadership",
            description: "Mentoring engineers, defining career ladders, and fostering a culture of innovation.",
            icon: Users
        },
        {
            id: 2,
            title: "System Architecture",
            description: "Designing scalable, maintainable, and high-performance frontend architectures.",
            icon: Layers
        },
        {
            id: 3,
            title: "Full-Stack Development",
            description: "End-to-end delivery using modern stacks like the T3 Stack or Next.js App Router.",
            icon: Code2
        }
    ] as Service[]
};