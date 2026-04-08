'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', icon: '📷', url: 'https://www.instagram.com' },
    { label: 'Facebook', icon: '👥', url: 'https://www.facebook.com' },
    { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com' },
    { label: 'Twitter', icon: '🐦', url: 'https://www.twitter.com' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">About</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Frontend Developer with 1 year of experience building clean, responsive websites using HTML, CSS,
              JavaScript, React, and Bootstrap. Focused on creating user-friendly interfaces and smooth
              digital experiences.
            </p>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Follow</h3>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-2xl"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8 mt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm text-center md:text-left">
              <p>© {currentYear} Saurabh. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
