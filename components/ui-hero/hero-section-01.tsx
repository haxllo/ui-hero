"use client";

export default function HeroSection01() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-32 bg-black overflow-hidden">
      {/* Neo-brutalist background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Sharp accent lines */}
      <div className="absolute top-0 left-0 w-1 h-64 bg-gradient-to-b from-cyan-400 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1 h-64 bg-gradient-to-t from-cyan-400 to-transparent" />
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-cyan-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-400/10 border-l-4 border-cyan-400 mb-12 animate-slide-up">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-wider text-cyan-400">Available Now</span>
            </div>

            {/* Brutalist heading */}
            <h1 className="text-7xl md:text-8xl font-black leading-[0.9] text-white mb-8 tracking-tighter animate-slide-up animation-delay-100">
              BUILD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FASTER</span>
              <br />
              SHIP MORE
            </h1>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl animate-slide-up animation-delay-200">
              Production-grade landing sections. No design skills required. 
              TypeScript. Tailwind. Copy-paste ready.
            </p>

            {/* Sharp CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
              <button className="group relative px-10 py-5 bg-cyan-400 text-black font-bold text-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                Get Components
              </button>
              <button className="px-10 py-5 border-2 border-white/20 text-white font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
              {[
                { value: '500+', label: 'Developers' },
                { value: '6', label: 'Sections' },
                { value: '$39', label: 'One-time' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Abstract visual */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute top-0 right-0 w-80 h-80 border-4 border-cyan-400/20 rotate-12 animate-spin-slow" />
            <div className="absolute top-20 right-20 w-80 h-80 border-4 border-blue-500/20 -rotate-12" />
            <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-sm" />
            
            {/* Code preview */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-md p-6 bg-[#0A0A0A] border-l-4 border-cyan-400 font-mono text-sm animate-slide-up animation-delay-500">
              <div className="text-gray-500 mb-2">// hero-section.tsx</div>
              <div className="text-cyan-400">export default</div>
              <div className="text-white ml-4">function Hero() {'{'}</div>
              <div className="text-gray-400 ml-8">return (</div>
              <div className="text-pink-400 ml-12">{'<'}section{'>'}</div>
              <div className="text-gray-500 ml-16">...</div>
              <div className="text-pink-400 ml-12">{'<'}/section{'>'}</div>
              <div className="text-gray-400 ml-8">)</div>
              <div className="text-white ml-4">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
