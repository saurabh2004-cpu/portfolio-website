'use client';

import { useEffect, useState } from 'react';
import { Raleway, Poppins } from 'next/font/google';
import Link from 'next/link';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '700',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});


export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/3.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      </div>

      {/* Animated background elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div> */}

      {/* Content */}
      <div className={`relative z-10 max-w-3xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <h1 className={`${raleway.className} text-5xl md:text-7xl mb-6 bg-black bg-clip-text text-transparent`}>
          Saurabh
        </h1>

        <p className={`${poppins.className} text-lg md:text-xl text-black mb-8 leading-relaxed  mx-auto`}>
          Full Stack Developer with 1+ year of experience building high-performance web applications from scratch. I specialize in React, Next.js, Node.js, and Express, delivering complete solutions from UI to deployment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#about" className="px-10 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
            About me
          </Link>
          <Link href="#skills" className="px-10 py-3 border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-400/10 font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Skills
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-92 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
