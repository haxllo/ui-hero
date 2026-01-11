/**
 * Hero Section 01 - "Dark AI Nexus"
 *
 * A high-converting dark mode hero for modern AI startups.
 * Features: Background glow, grid pattern, gradient text, and glassmorphism.
 *
 * Usage:
 * import HeroSection01 from '@/components/library/hero-section-01'
 */

export default function HeroSection01() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Glowing Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-[100%] blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-sm font-medium text-cyan-100 tracking-wide">v2.0 Now Available</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
          Transform Ideas into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Intelligent Reality
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Deploy production-ready AI agents in minutes, not months. 
          The infrastructure layer for the next generation of builders.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Start Building Free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group">
            <span>View Documentation</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Social Proof / Tech Stack */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-sm text-slate-500 font-mono mb-6 uppercase tracking-widest">Powered by modern stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple SVGs for logos to avoid dependencies */}
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <span className="font-bold">Next.js</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 border-2 border-white rounded-md"></div>
              <span className="font-bold">Tailwind</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-sm"></div>
              <span className="font-bold">OpenAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
