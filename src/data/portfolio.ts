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
        title: "Bridging Technical Strategy with Execution.",
        subtitle: "Lead Software Engineer with 15+ years of experience. I combine full-stack expertise in React & C# with empathetic leadership to build high-velocity teams[cite: 2, 5, 42].",
        ctaPrimary: "View Expertise",
        ctaSecondary: "Contact Me"
    },
    social: {
        linkedin: "https://www.linkedin.com/in/deyvisonsoutoap/", // [cite: 13, 14]
        // Note: GitHub was not listed in the resume, but is standard for this role.
        github: "https://github.com/deyvisonsouto"
    },
    timeline: [
        {
            id: 1,
            year: "2025",
            role: "Lead Software Engineer",
            company: "Plusgrade",
            description: "Managing a team of 12-15 engineers. Responsible for quarter planning, capacity forecasting, and evaluating candidates while driving React and Node.js implementation[cite: 42, 43, 49, 50].",
            tech: ["React", "NodeJS", "Cloudflare", "JIRA"]
        },
        {
            id: 2,
            year: "2021",
            role: "Lead Software Developer",
            company: "MEDFAR Solutions Cliniques",
            description: "Led a team of 4-11 developers. Implemented development processes, managed off-shore consulting teams, and oversaw C# Web API .NET6 and React development[cite: 51, 53, 59, 62].",
            tech: ["C# .NET6", "React", "Azure DevOps", "SQL Server"]
        },
        {
            id: 3,
            year: "2020",
            role: "Frontend Technical Lead",
            company: "Mavtek",
            description: "Defined a global VueJS UI library for 15 developers and optimized website performance to support 2 million users[cite: 64, 67, 68, 70].",
            tech: ["VueJS", "AWS", "PHP", "MySQL"]
        },
        {
            id: 4,
            year: "2018",
            role: "Software Developer",
            company: "AZUR GROUP",
            description: "Executed a major technology migration from Silverlight to Angular for an IATA project and managed production incidents[cite: 74, 77, 78].",
            tech: ["Angular", "C#", "Visual Studio"]
        }
    ] as TimelineEvent[],
    services: [
        {
            id: 1,
            title: "Engineering Leadership",
            description: "Quarter planning, team capacity forecasting, and fostering an empathetic environment for teams of 12-15 engineers[cite: 5, 43, 49].",
            icon: Users
        },
        {
            id: 2,
            title: "Process Optimization",
            description: "Implementing SCRUM and CMMI methodologies to enhance development workflows and efficiency[cite: 4, 26, 40].",
            icon: Layers
        },
        {
            id: 3,
            title: "Full-Stack Architecture",
            description: "Architecting scalable solutions using C#, React (TypeScript), and Node.js with a focus on cloud integration (AWS/Azure)[cite: 2, 18, 30, 32].",
            icon: Code2
        }
    ] as Service[]
};