'use client';

import { useEffect, useState } from 'react';
import { Raleway, Poppins } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '500',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});


interface Skill {
  name: string;
  percentage: number;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const topSkills: Skill[] = [
    { name: 'Next.js & React', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Node.js & Express', percentage: 88 },
    { name: 'AI Agents (LangChain)', percentage: 85 },
    { name: 'OpenAI API & LLMs', percentage: 92 },
    { name: 'MongoDB & Postgres', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 100 },
    { name: 'Docker & Microservices', percentage: 80 },
    { name: 'AWS & Deployments', percentage: 82 },
    { name: 'GraphQL & REST APIs', percentage: 90 },
    { name: 'Git & GitHub', percentage: 95 },
    { name: 'RAG Systems', percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100">
      <div id="skills-section" className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className={`${raleway.className} text-4xl md:text-5xl font-bold mb-4 text-black`}>Technical Expertise</h2>
          <p className={`${poppins.className} text-gray-600 text-lg max-w-2xl mx-auto`}>
            Specialized in building scalable full-stack applications with a focus on modern frameworks,
            AI-driven solutions, and robust cloud infrastructure.
          </p>
        </div>

        {/* Unified Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {topSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-300 transform hover:-translate-y-1 ${poppins.className} transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Skill Title and Percentage */}
              <div className="flex justify-between items-center mb-3">
                <h3 className={`${raleway.className} text-lg font-bold text-gray-700 group-hover:text-cyan-600 transition-colors`}>
                  {skill.name}
                </h3>
                <span className="text-cyan-600 font-semibold text-sm">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-white rounded-full h-2 shadow-inner overflow-hidden border border-gray-100">
                <div
                  className={`h-full bg-cyan-600 rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: isVisible ? `${idx * 150}ms` : '0ms',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
