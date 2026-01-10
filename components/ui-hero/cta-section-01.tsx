"use client";

import { useEffect, useState } from 'react';

export default function CTASection01() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-48 px-6 bg-black overflow-hidden">
      {/* Ambient particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Cinematic glow following cursor */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-all duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Cinematic text */}
        <div className="mb-16">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Ready to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 animate-glow">
              ship faster?
            </span>
          </h2>
          <p className="text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Join 500+ developers who stopped wasting time on design and started shipping products.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="space-y-6">
          <button className="group relative px-16 py-7 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xl font-bold overflow-hidden hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-500 hover:scale-105">
            <span className="relative z-10">Get All Components - $39</span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-violet-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>

          <div className="flex items-center justify-center gap-6 text-sm text-zinc-600">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Instant access
            </span>
            <span>·</span>
            <span>30-day money back</span>
            <span>·</span>
            <span>Lifetime updates</span>
          </div>
        </div>

        {/* Social proof badges */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 opacity-40">
          {['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma'].map((company) => (
            <div
              key={company}
              className="px-6 py-3 border border-zinc-800 text-zinc-600 text-sm font-medium"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
