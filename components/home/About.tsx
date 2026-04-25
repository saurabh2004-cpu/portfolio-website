'use client';

import { useEffect, useState } from 'react';
import { Raleway, Poppins } from 'next/font/google';
import Image from 'next/image';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '500',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});


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
    { label: 'Birthday:', value: '17 Jan 2004' },
    { label: 'Phone:', value: '+91 8010566607' },
    { label: 'City:', value: 'Ahmednagar' },
    { label: 'Degree:', value: 'Bachelor' },
    { label: 'Email:', value: 'saurabhbodakhe2004@gmail.com' },
    { label: 'Freelance:', value: 'Available' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div id="about-section" className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className={`${raleway.className} text-4xl md:text-5xl mb-4 text-black`}>About</h2>
          <p className={`${poppins.className} text-gray-600 text-lg`}>
            Full Stack Developer with 1+ year of experience building high-performance web applications from scratch. I specialize in React, Next.js, Node.js, and Express, delivering complete solutions from UI to deployment.
          </p>
        </div>

        {/* About Content Grid */}
        <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Image Placeholder */}
          <div className="relative group">
            <div className="relative aspect-square w-3/4 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden flex items-center justify-center border border-slate-700">
               <Image src="/profile/profile2.jpeg" alt="Profile Photo" className="text-center" fill>
              </Image>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className={`${raleway.className} text-3xl font-bold text-black mb-4`}>Full Stack Developer.</h3>
              <p className={`${poppins.className} text-gray-600 text-lg leading-relaxed mb-4`}>
                I’m a passionate software developer with 1 year of experience, having worked on a variety of projects that have strengthened my technical foundation. I thrive in collaborative environments and enjoy building impactful, scalable solutions .
              </p>
            </div>

            {/* Details Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-24 ${poppins.className}`}>
              {details.map((detail, idx) => (
                <div key={idx} className="flex gap-3 border-b border-gray-100 pb-2">
                  <span className="text-cyan-600 font-semibold whitespace-nowrap">{detail.label}</span>
                  <span className="text-gray-600">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className={`${poppins.className} text-gray-600 leading-relaxed`}>
              I’ve built and delivered multiple projects including a job portal, a UI-heavy business website, and an e-commerce platform. I specialize in full-stack development—covering frontend, backend, deployment, and cloud infrastructure using AWS—to deliver complete, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
