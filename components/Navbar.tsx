'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: 'instagram', url: 'https://www.instagram.com' },
    { icon: 'facebook', url: 'https://www.facebook.com' },
    { icon: 'linkedin', url: 'https://www.linkedin.com' },
    { icon: 'twitter', url: 'https://www.twitter.com' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              Saurabh
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links Desktop */}
            <div className="flex gap-4 ml-4 pl-4 border-l border-slate-700">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-lg"
                  aria-label={social.icon}
                >
                  {social.icon === 'instagram' && '📷'}
                  {social.icon === 'facebook' && '👥'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'twitter' && '🐦'}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800/50">
            <ul className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/50">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-lg"
                  aria-label={social.icon}
                >
                  {social.icon === 'instagram' && '📷'}
                  {social.icon === 'facebook' && '👥'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'twitter' && '🐦'}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
