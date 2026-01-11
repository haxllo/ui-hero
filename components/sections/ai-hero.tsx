export default function AIHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden bg-black">
      {/* Cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Atmospheric orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF0066]/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      
      {/* Accent dot */}
      <div className="absolute top-32 right-32 w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-32 w-2 h-2 bg-[#FF0066] rounded-full animate-pulse-slow"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-[#2A2A2A] font-mono text-xs uppercase tracking-[0.15em] animate-slide-up">
          <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse"></div>
          <span className="text-[#999999]">Available Now</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-[80px] md:text-[120px] leading-[0.9] font-bold mb-8 tracking-tight text-white animate-slide-up animation-delay-100">
          Ship your
          <br />
          AI landing
          <br />
          <span className="text-gradient-cyber">in 30 min</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-[20px] md:text-[24px] leading-[1.5] text-[#999999] mb-12 max-w-2xl animate-slide-up animation-delay-200">
          6 production-ready sections. TypeScript + Tailwind. Zero design work. Built for founders who code.
        </p>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start animate-slide-up animation-delay-300">
          <a 
            href="/sections"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#00FFFF] text-[#00FFFF] font-mono text-sm uppercase tracking-[0.15em] overflow-hidden hover:text-black transition-all duration-300"
          >
            <span className="absolute inset-0 bg-[#00FFFF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative z-10">Browse Sections</span>
          </a>
          <a 
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#2A2A2A] text-white font-mono text-sm uppercase tracking-[0.15em] hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all duration-300"
          >
            <span>View Pricing</span>
          </a>
        </div>
        
        {/* Stats bar */}
        <div className="mt-24 pt-12 border-t border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
          {[
            { label: 'Sections', value: '06' },
            { label: 'Setup Time', value: '30m' },
            { label: 'Teams', value: '500+' },
            { label: 'Updates', value: '∞' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-mono text-[36px] font-bold leading-none mb-2 text-[#00FFFF]">{stat.value}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#666666]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}