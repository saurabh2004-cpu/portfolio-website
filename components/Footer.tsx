'use client';

import Link from 'next/link';
import { Raleway, Poppins } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '500',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});


// Custom Brand Icons (Brand-accurate filled versions)
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-6.227 5.733-6.227 1.108 0 2.061.082 2.339.119v2.711l-1.605.001c-1.954 0-2.333.93-2.333 2.293v1.684h3.001l-.391 3.667h-2.61v7.98h-3.334z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export default function Footer() {

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  // const socialLinks = [
  //   // { label: 'Instagram', icon: <InstagramIcon size={20} />, url: 'https://www.instagram.com', color: 'bg-[#E4405F]' },
  //   // { label: 'Facebook', icon: <FacebookIcon size={20} />, url: 'https://www.facebook.com', color: 'bg-[#1877F2]' },
  //   { label: 'LinkedIn', icon: <LinkedinIcon size={20} />, url: 'https://www.linkedin.com/in/saurabh-bodakhe-508792247', color: 'bg-[#0077B5]' },
  //   // { label: 'Twitter', icon: <TwitterIcon size={18} />, url: 'https://www.twitter.com', color: 'bg-[#1DA1F2]' },
  // ];

  return (
    <footer className="bg-cyan-800 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Links Section */}
          <div>
            <h3 className={`${raleway.className} text-xl font-bold text-white mb-6 uppercase tracking-wider`}>Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${poppins.className} text-white hover:text-cyan-400 transition-colors text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className={`${raleway.className} text-xl font-bold text-white mb-6 uppercase tracking-wider`}>About</h3>
            <p className={`${poppins.className}  leading-relaxed text-sm`}>
              Full Stack Developer with 1 year of experience building clean, responsive websites using React, Next.js, and Node.js.
              Focused on creating user-friendly interfaces and robust digital experiences.
            </p>
          </div>

          {/* Social Section */}
          {/* <div>
            <h3 className={`${raleway.className} text-xl font-bold text-white mb-6 uppercase tracking-wider`}>Follow</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))} */}
          {/* </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className={`${poppins.className}  text-sm text-center md:text-left`}>
              <p>© {currentYear} Saurabh. All rights reserved.</p>
            </div>
            <div className={`${poppins.className} flex gap-6 text-sm`}>
              <Link href="#" className=" hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="  hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
