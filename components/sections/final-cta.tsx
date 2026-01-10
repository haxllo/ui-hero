export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Dramatic center glow */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#00FFFF]/10 via-[#00FFFF]/20 to-[#00FFFF]/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-[64px] md:text-[96px] leading-[0.9] font-bold mb-12 tracking-tight text-white">
          Stop designing.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-white to-[#00FFFF] animate-glow">Start shipping.</span>
        </h2>
        
        <p className="text-[20px] md:text-[24px] leading-[1.5] text-[#999999] mb-16 max-w-2xl mx-auto">
          Your landing page shouldn't be your bottleneck. Get back to building your product.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#pricing"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#00FFFF] text-black font-mono text-sm uppercase tracking-[0.15em] hover:bg-white hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300 relative group"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/20" />
            <span>Get Access → $39</span>
          </a>
          <a 
            href="/sections"
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/10 text-white font-mono text-sm uppercase tracking-[0.15em] hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all duration-300 relative group"
          >
            <span>View All Sections</span>
          </a>
        </div>
      </div>
    </section>
  );
}
