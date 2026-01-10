"use client";

import { useState } from 'react';

/**
 * CTA Section 01 - "Final Conversion Push"
 * 
 * Interactive CTA with large abstract mesh backgrounds that fill the entire section
 * Inspired by modern gradient aesthetics - smooth organic shapes on hover
 */

export default function CTASection01() {
  const [activeGlow, setActiveGlow] = useState<string | null>(null);

  const links = [
    { id: 'docs', label: 'Documentation', href: '#' },
    { id: 'pricing', label: 'Pricing', href: '#' },
    { id: 'contact', label: 'Contact', href: '#' },
    { id: 'blog', label: 'Blog', href: '#' },
  ];

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden min-h-screen flex items-center">
      {/* Default state - neutral gradient */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-zinc-800/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-700/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Primary button hover - Red/Pink mesh */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow === 'primary' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-black"></div>
        <div className="absolute top-1/4 right-1/4 w-[1200px] h-[1200px] bg-gradient-to-br from-red-600/40 via-orange-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-red-500/30 via-pink-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-gradient-to-br from-orange-600/25 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Secondary button hover - Purple/Blue mesh */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow === 'secondary' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-black"></div>
        <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-gradient-to-br from-indigo-600/40 via-purple-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[850px] h-[850px] bg-gradient-to-tr from-blue-500/30 via-indigo-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/2 w-[750px] h-[750px] bg-gradient-to-bl from-purple-600/25 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Docs hover - Blue mesh */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow === 'docs' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/3 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-sky-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Pricing hover - Purple/Violet mesh */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow === 'pricing' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-black"></div>
        <div className="absolute top-1/3 right-1/4 w-[1050px] h-[1050px] bg-gradient-to-br from-purple-500/40 via-violet-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[850px] h-[850px] bg-gradient-to-tr from-fuchsia-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Contact hover - Pink/Rose mesh */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow === 'contact' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-[1100px] h-[1100px] bg-gradient-to-br from-pink-500/40 via-rose-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[900px] h-[900px] bg-gradient-to-tl from-rose-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Blog hover - Violet/Purple mesh */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeGlow === 'blog' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-black"></div>
        <div className="absolute top-1/2 right-1/3 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-500/40 via-purple-600/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            Ready to ship?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands building faster with UI Hero
          </p>
          
          {/* Main CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button 
              className="relative px-12 py-5 bg-[#FF3366] text-white font-bold text-lg rounded-xl hover:bg-[#FF1A4D] transition-all shadow-lg hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setActiveGlow('primary')}
              onMouseLeave={() => setActiveGlow(null)}
            >
              Get Started - $39
            </button>
            
            <button 
              className="relative px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all hover:scale-105"
              onMouseEnter={() => setActiveGlow('secondary')}
              onMouseLeave={() => setActiveGlow(null)}
            >
              View Demos
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="relative block px-6 py-4 text-center font-mono text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 backdrop-blur-sm"
              onMouseEnter={() => setActiveGlow(link.id)}
              onMouseLeave={() => setActiveGlow(null)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3366]">✓</span>
            <span>One-time payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF3366]">✓</span>
            <span>Lifetime updates</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF3366]">✓</span>
            <span>Commercial license</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF3366]">✓</span>
            <span>No subscription</span>
          </div>
        </div>
      </div>
    </section>
  );
}
