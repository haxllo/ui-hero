"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-[#2A2A2A]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 overflow-hidden">
            {/* Animated logo with cyber accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF] via-[#00CCFF] to-[#0099FF] animate-pulse-slow"></div>
            <div className="absolute inset-[2px] bg-black flex items-center justify-center">
              <div className="w-4 h-4 border border-[#00FFFF] rotate-45 transition-transform duration-500 group-hover:rotate-[225deg]"></div>
            </div>
            {/* Corner accent lines */}
            <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#00FFFF]"></div>
            <div className="absolute top-0 left-0 w-[1px] h-2 bg-[#00FFFF]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#00FFFF]"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-[#00FFFF]"></div>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="text-white">UI</span>
            <span className="text-[#00FFFF]">Hero</span>
          </span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.15em]">
          <a href="/sections" className="relative text-[#999999] hover:text-[#00FFFF] transition-colors duration-300 group">
            <span className="relative z-10">Sections</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00FFFF] group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="/#pricing" className="relative text-[#999999] hover:text-[#00FFFF] transition-colors duration-300 group">
            <span className="relative z-10">Pricing</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00FFFF] group-hover:w-full transition-all duration-500"></span>
          </a>
          <a href="/sections" className="relative text-[#999999] hover:text-[#00FFFF] transition-colors duration-300 group">
            <span className="relative z-10">Examples</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00FFFF] group-hover:w-full transition-all duration-500"></span>
          </a>
        </nav>
        
        {/* CTA Button with cyber aesthetic */}
        <a href="/sections" className="relative px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] font-bold overflow-hidden group">
          {/* Animated border */}
          <span className="absolute inset-0 border border-[#00FFFF] group-hover:border-[#FFFF00] transition-colors duration-300"></span>
          {/* Corner decorations */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00FFFF] group-hover:border-[#FFFF00] transition-colors duration-300"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00FFFF] group-hover:border-[#FFFF00] transition-colors duration-300"></span>
          {/* Background fill on hover */}
          <span className="absolute inset-0 bg-[#00FFFF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          {/* Text */}
          <span className="relative z-10 text-[#00FFFF] group-hover:text-black transition-colors duration-300">
            Browse
          </span>
        </a>
      </div>
      
      {/* Subtle glow effect under header when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent"></div>
      )}
    </header>
  );
}
