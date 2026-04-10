'use client';

import { Raleway, Poppins } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});


export default function Resume() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`${raleway.className} text-4xl md:text-5xl text-gray-800 mb-2`}>Resume</h2>
          <div className="w-12 h-1 bg-cyan-700 mx-auto mb-6"></div>
          <p className={`${poppins.className} text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
            Full-Stack Web Developer specializing in MERN Stack with hands-on experience building
            and deploying scalable web applications using modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className={`${raleway.className} text-2xl text-gray-800 mb-8`}>Summary</h3>
              <div className="relative pl-8 border-l-2 border-cyan-700 ml-3">
                <div className="absolute w-4 h-4 bg-white border-2 border-cyan-700 rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-bold text-gray-800 uppercase mb-2">SAURABH BODAKHE</h4>
                <p className={`${poppins.className} text-gray-700 italic mb-4`}>
                  Full-Stack Web Developer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js) and currently working as a Junior Developer. Experienced in Next.js, Redis, Docker, AWS, GraphQL, and CI/CD pipelines, with hands-on experience building and deploying scalable web applications.
                </p>
                <ul className={`${poppins.className} text-gray-700 space-y-2 list-disc ml-4`}>
                  <li>Address: Ahmednagar, Maharashtra, India</li>
                  <li>Mobile: +91-8010566607</li>
                  <li>Email: saurabhbodakhe2004@gmail.com</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className={`${raleway.className} text-2xl text-gray-800 mb-8`}>Education</h3>
              <div className="relative pl-8 border-l-2 border-cyan-700 ml-3 space-y-10">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-2 border-cyan-700 rounded-full -left-[41px] top-1"></div>
                  <h4 className="text-lg font-bold text-gray-800 uppercase mb-1">BACHELOR OF COMPUTER APPLICATIONS (BCA)</h4>
                  <p className="inline-block px-3 py-1 bg-gray-100 text-cyan-700 font-semibold text-sm mb-2 uppercase">Duration: 2022 – 2025</p>
                  <p className={`${poppins.className} text-gray-700 italic`}>K. J. Somaiya College of Arts, Commerce and Science, Kopargaon, Ahmednagar, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h3 className={`${raleway.className} text-2xl text-gray-800 mb-8`}>Professional Experience</h3>
              <div className="relative pl-8 border-l-2 border-cyan-700 ml-3 space-y-10">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-2 border-cyan-700 rounded-full -left-[41px] top-1"></div>
                  <h4 className="text-xl font-bold text-gray-800 uppercase mb-1">BUZZLINK STUDIOS</h4>
                  <p className="inline-block px-3 py-1 bg-gray-100 text-cyan-700 font-semibold text-sm mb-2 uppercase">Duration: Jun 2025 – Present</p>
                  <p className={`${poppins.className} text-gray-700 italic mb-4 font-semibold`}>Junior Full-Stack Developer</p>
                  <p className={`${poppins.className} text-gray-700 mb-4`}>
                    Building end-to-end web applications using the MERN stack along with Next.js. Collaborating with cross-functional teams including UI/UX designers and project managers to deliver scalable, responsive, and user-focused web applications.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-2 border-cyan-700 rounded-full -left-[41px] top-1"></div>
                  <h4 className="text-xl font-bold text-gray-800 uppercase mb-1">CANVAS CHROME DESIGN</h4>
                  <p className="inline-block px-3 py-1 bg-gray-100 text-cyan-700 font-semibold text-sm mb-2 uppercase">Duration: Dec 2024 – Mar 2025</p>
                  <p className={`${poppins.className} text-gray-700 italic mb-4 font-semibold`}>MERN Stack Web Developer Intern</p>
                  <p className={`${poppins.className} text-gray-700 mb-4`}>
                    Collaborated with a development team to build full-stack web applications using Next.js, Node.js, Express.js, and MongoDB. Managed frontend development, built backend APIs, and used Git/GitHub for version control and team collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`${raleway.className} text-2xl text-gray-800 mb-8`}>Projects</h3>
              <div className="relative pl-8 border-l-2 border-cyan-700 ml-3 space-y-10">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-2 border-cyan-700 rounded-full -left-[41px] top-1"></div>
                  <h4 className="text-xl font-bold text-gray-800 uppercase mb-1">POINT AUSTRALIA</h4>
                  <p className={`${poppins.className} text-cyan-700 italic mb-2 text-sm`}>Technology: Next.js, Node.js, MongoDB, AWS S3, CloudFront</p>
                  <p className={`${poppins.className} text-gray-700 mb-4`}>
                    An online shopping platform built for Australian customers. Shoppers can browse products, manage their cart and wishlist, place orders, and pay securely via credit card. On the other side, admins get a full dashboard to manage products, categories, discounts, and orders — including bulk CSV import/export. Built with SSR for fast load times and better SEO, with images stored on AWS S3 and served via CloudFront CDN for global performance.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-white border-2 border-cyan-700 rounded-full -left-[41px] top-1"></div>
                  <h4 className="text-xl font-bold text-gray-800 uppercase mb-1">PHARMINC</h4>
                  <p className={`${poppins.className} text-cyan-700 italic mb-2 text-sm`}>Technology: MERN Stack, Socket.IO, JWT</p>
                  <p className={`${poppins.className} text-gray-700 mb-4`}>
                    A job portal built specifically for the healthcare industry, connecting hospitals with job-seeking candidates. Hospitals can post jobs using a credit system, review applicants, schedule interviews, and track hiring progress through a dedicated dashboard. Candidates get job suggestions based on their profile, can apply to listings, and communicate with hospitals via real-time chat with media sharing. A separate admin panel manages users, institutes, and all platform activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}