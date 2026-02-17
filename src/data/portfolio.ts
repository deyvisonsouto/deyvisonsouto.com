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
        subtitle: "Lead Software Engineer with 15+ years of experience. I combine full-stack expertise in React & C# with empathetic leadership to build high-velocity teams.",
        ctaPrimary: "View Expertise",
        ctaSecondary: "Contact Me"
    },
    social: {
        linkedin: "https://www.linkedin.com/in/deyvisonsoutoap/",
        github: "https://github.com/deyvisonsouto"
    },
    timeline: [
        {
            id: 1,
            year: "Jan 2025 - Present",
            role: "Lead Software Engineer",
            company: "Plusgrade",
            description: "Leading a team of 12-15 engineers and consulting off-shore teams. Responsible for quarter planning, capacity forecasting, and driving the development process. evaluating candidates, and fostering team growth. Tech stack: React, NodeJS, Cloudflare, JIRA.",
            tech: ["React", "NodeJS", "Cloudflare", "JIRA", "Team Management"]
        },
        {
            id: 2,
            year: "Oct 2021 - Jan 2025",
            role: "Lead Software Developer",
            company: "MEDFAR Solutions Cliniques",
            description: "Led a team of 4-11 developers and off-shore consultants. Managed backlog planning, estimation, and candidate evaluation. Implemented process improvements and oversaw C# Web API .NET6 and React development.",
            tech: ["C# .NET6", "React", "Azure DevOps", "SQL Server", "Hangfire"]
        },
        {
            id: 3,
            year: "Jun 2020 - Oct 2021",
            role: "Frontend Technical Lead",
            company: "Mavtek",
            description: "Defined a global VueJS UI library for 15 developers. Led architectural decisions and optimized website performance to support 2 million users.",
            tech: ["VueJS", "AWS", "PHP", "MySQL", "JIRA"]
        },
        {
            id: 4,
            year: "Feb 2018 - Apr 2019",
            role: "Software Developer",
            company: "AZUR GROUP",
            description: "Executed a major technology migration from Silverlight to Angular for an IATA project. Developed enhancements and managed production incidents.",
            tech: ["Angular", "C#", "Azure", "SQL Server", "Hangfire"]
        },
        {
            id: 5,
            year: "Jun 2012 - Jan 2018",
            role: "System Analyst",
            company: "FSDigital",
            description: "Full-stack development using C# and JavaScript. Managed projects based on SCRUM and CMMI methodologies, including negotiation of deadlines and requirements.",
            tech: ["C# .NET", "JavaScript", "SQL Server", "SCRUM", "CMMI"]
        },
        {
            id: 6,
            year: "Dec 2015 - Oct 2016",
            role: "Senior Software Engineer",
            company: "Avanade",
            description: "Technical leader for TV Globo project, managing a team of 5. Achieved 100% incident resolution and transformed incidents into revenue-generating improvements.",
            tech: ["C# .NET", "Angular", "SQL Server", "ITIL"]
        },
        {
            id: 7,
            year: "Nov 2010 - May 2012",
            role: "C# Developer",
            company: "Função Informática",
            description: "Developed banking software using C# ASP.NET. Performed database tuning and maintenance for SQL Server, and contributed to process improvement.",
            tech: ["C# ASP.NET", "SQL Server", "Visual Studio"]
        }
    ] as TimelineEvent[],
    services: [
        {
            id: 1,
            title: "Engineering Leadership",
            description: "Quarter planning, team capacity forecasting, and fostering an empathetic environment for teams of 12-15 engineers.",
            icon: Users
        },
        {
            id: 2,
            title: "Process Optimization",
            description: "Implementing SCRUM, CMMI, and ITIL methodologies to enhance development workflows, efficiency, and incident management.",
            icon: Layers
        },
        {
            id: 3,
            title: "Full-Stack Architecture",
            description: "Architecting scalable solutions using C#, React (TypeScript), and Node.js with a focus on cloud integration (AWS/Azure).",
            icon: Code2
        }
    ] as Service[]
};