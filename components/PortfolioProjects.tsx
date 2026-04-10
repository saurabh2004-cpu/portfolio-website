'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Raleway, Poppins } from 'next/font/google';
import Image from 'next/image';

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['500'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
});

const Github = ({ size = 20 }: { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github"
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    category: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Point Australia (E-commerce Platform)',
        description:
            'Developed a full-scale e-commerce platform with a modern, responsive UI and a complete backend system. Implemented product management, cart, authentication, and secure workflows, along with optimized media delivery using AWS services.',
        image: '/projects/point-australia-1.png',
        technologies: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'AWS',
            'Material UI'
        ],
        liveLink: 'https://www.pointaustralia.com.au',
        githubLink: 'https://github.com/saurabh2004-cpu/point-australia-user-frontend',
        category: 'E-commerce',
    },
    {
        id: 2,
        title: 'Prime Kitchen Studio (Business Website)',
        description:
            'Built a modern, UI-focused business website with smooth animations and a clean user experience. Focused on performance, responsiveness, and visually engaging layouts using animation libraries.',
        image: '/projects/prime-1.png',
        technologies: [
            'Next.js',
            'Tailwind CSS',
            'AWS',
            'Framer Motion'
        ],
        liveLink: 'https://primekitchenstudio.com',
        githubLink: 'https://github.com/saurabh2004-cpu/prime-kitchen-nextjs-',
        category: 'Business Website',
    },
    {
        id: 3,
        title: 'PharmInc (Healthcare Job Portal)',
        description:
            'Developed a full-stack healthcare job portal connecting candidates and institutions. Implemented authentication, real-time communication, dashboards, and scalable backend services with deployment and DevOps practices.',
        image: '/projects/pharminc-1.png',
        technologies: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Material UI',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'AWS',
            'Docker',
            'CI/CD',
            'Socket.IO'
        ],
        liveLink: 'https://pharminc.in',
        githubLink: 'https://github.com/saurabh2004-cpu/pharmainc-frontend',
        category: 'SaaS Platform',
    },
];

const categories = ['All', 'E-commerce', 'Business Website', 'SaaS Platform'];

export default function PortfolioProjects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section className={`${poppins.className} py-20 px-4 bg-white`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className={`${raleway.className} text-4xl md:text-5xl font-thin text-black mb-4`}>
                        Featured <span className="text-cyan-700 font-normal">Projects</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                        A selection of my recent work demonstrating my expertise in web development, design, and problem-solving. Each project is crafted with a focus on performance, scalability, and delivering a seamless user experience.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-white text-cyan-700 shadow-lg shadow-cyan-700/50'
                                : 'bg-cyan-700 text-white hover:bg-cyan-700  hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group h-full  rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-700/20 transition-all duration-300  hover:border-cyan-700/50"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-white">
                                <Image src={project.image} alt={project.title} className="w-full h-full flex items-center justify-center" width={700} height={500} />
                                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col  bg-white h-100">
                                <h3 className={`${raleway.className} text-xl font-medium text-cyan-700 mb-3 group-hover:text-cyan-600 transition-colors`}>
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-block px-3 py-1 bg-cyan-700/10 text-cyan-700 text-xs rounded-full "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-4 border-t border-slate-700">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 flex-1 px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-sm justify-center"
                                        >
                                            <ExternalLink size={16} />
                                            Live
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 flex-1 px-4 py-2  text-cyan-700 border border-cyan-700 rounded-lg font-semibold hover:bg-slate-600 hover:text-cyan-700 transition-colors text-sm justify-center"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
