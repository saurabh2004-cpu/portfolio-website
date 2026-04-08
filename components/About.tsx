'use client';

import { useEffect, useState } from 'react';

export default function About() {
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

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const details = [
    { label: 'Birthday:', value: '04 Apr 1999' },
    { label: 'Phone:', value: '+91-XXXXXXXXXX' },
    { label: 'City:', value: 'Gurugram, Haryana' },
    { label: 'Degree:', value: 'Bachelor' },
    { label: 'Email:', value: 'shrestharaj39621@gmail.com' },
    { label: 'Freelance:', value: 'Available' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div id="about-section" className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About</h2>
          <p className="text-slate-400 text-lg">
            Frontend Developer with 1 year of experience building clean, responsive websites. 
            I work with HTML, CSS, JavaScript, React, and Bootstrap to create interfaces that actually work well for users.
          </p>
        </div>

        {/* About Content Grid */}
        <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Image Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-25 group-hover:opacity-50 transition-opacity blur-lg"></div>
            <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden flex items-center justify-center border border-slate-700">
              <div className="text-center">
                <p className="text-slate-400 text-lg mb-2">Portfolio Image</p>
                <p className="text-slate-500 text-sm">[Profile Photo]</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Frontend Developer & Web Developer.</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                I am a passionate software developer with 1 years of experience in the field, I have the
                privilege of working on a diverse range of projects and honing my skills as a developer,
                I love working with a team.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((detail, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-cyan-400 font-semibold whitespace-nowrap">{detail.label}</span>
                  <span className="text-slate-400">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed">
              Developed responsive and accessible web pages using HTML, CSS, JavaScript, and React.
              Improved UI/UX for the Thames Water website through modern CSS3 techniques, SEO-friendly
              structures, and WCAG-compliant design. Skilled in ES6+ JavaScript for interactive and
              dynamic features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
