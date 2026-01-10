export default function SocialProof() {
  return (
    <section className="py-32 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Large quote */}
        <div className="max-w-4xl mb-16">
          <p className="text-[40px] md:text-[56px] leading-[1.2] font-bold mb-8">
            "Spent 3 weeks on our landing page. Found this. Rebuilt in 2 hours. Looks better."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF3366]"></div>
            <div>
              <div className="font-mono text-[14px] font-bold">Marcus Chen</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999]">Founder, Inference.ai</div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          {[
            { value: '500+', label: 'Teams' },
            { value: '6', label: 'Sections' },
            { value: '30m', label: 'Setup' },
            { value: '$39', label: 'Price' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-mono text-[48px] font-bold leading-none mb-2 text-[#FF3366]">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#666666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
