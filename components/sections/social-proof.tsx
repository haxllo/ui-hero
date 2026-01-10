export default function SocialProof() {
  return (
    <section className="py-32 px-6 bg-black text-white border-y border-white/5 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-[#00FFFF]/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Large quote */}
        <div className="max-w-4xl mb-16">
          <p className="text-[40px] md:text-[56px] leading-[1.2] font-bold mb-8">
            "Spent 3 weeks on our landing page. Found this. Rebuilt in 2 hours. Looks better."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00FFFF] to-[#0088FF] relative">
              {/* Corner accents on avatar */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black/50" />
            </div>
            <div>
              <div className="font-mono text-[14px] font-bold text-white">Marcus Chen</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF]">Founder, Inference.ai</div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-[#00FFFF]/10">
          {[
            { value: '500+', label: 'Teams' },
            { value: '6', label: 'Sections' },
            { value: '30m', label: 'Setup' },
            { value: '$39', label: 'Price' }
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="font-mono text-[48px] font-bold leading-none mb-2 text-[#00FFFF] group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#666666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
