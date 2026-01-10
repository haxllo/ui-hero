export default function AIHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Accent dot */}
      <div className="absolute top-32 right-32 w-3 h-3 bg-[#FF3366] rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-wider animate-slide-up">
          <div className="w-2 h-2 bg-[#FF3366] rounded-full"></div>
          <span className="text-[#666666]">Available Now</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-[80px] md:text-[120px] leading-[0.9] font-bold mb-8 tracking-tight animate-slide-up animation-delay-200">
          Ship your
          <br />
          AI landing
          <br />
          <span className="text-[#FF3366]">in 30 min</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-[20px] md:text-[24px] leading-[1.5] text-[#666666] mb-12 max-w-2xl animate-slide-up animation-delay-400">
          6 production-ready sections. TypeScript + Tailwind. Zero design work. Built for founders who code.
        </p>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start animate-slide-up animation-delay-600">
          <a 
            href="/sections"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-mono text-sm uppercase tracking-wider hover:bg-[#FF3366] transition-all duration-300"
          >
            <span>Browse Sections</span>
          </a>
          <a 
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#E5E5E5] text-[#1A1A1A] font-mono text-sm uppercase tracking-wider hover:border-[#1A1A1A] transition-all duration-300"
          >
            <span>View Pricing</span>
          </a>
        </div>
        
        {/* Stats bar */}
        <div className="mt-24 pt-12 border-t border-[#E5E5E5] grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-600">
          {[
            { label: 'Sections', value: '06' },
            { label: 'Setup Time', value: '30m' },
            { label: 'Teams', value: '500+' },
            { label: 'Updates', value: '∞' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-mono text-[36px] font-bold leading-none mb-2">{stat.value}</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
