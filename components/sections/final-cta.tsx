export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[64px] md:text-[96px] leading-[0.9] font-bold mb-12 tracking-tight">
          Stop designing.
          <br />
          <span className="text-[#FF3366]">Start shipping.</span>
        </h2>
        
        <p className="text-[20px] md:text-[24px] leading-[1.5] text-[#666666] mb-16 max-w-2xl mx-auto">
          Your landing page shouldn't be your bottleneck. Get back to building your product.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#pricing"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white font-mono text-sm uppercase tracking-wider hover:bg-[#FF3366] transition-all duration-300"
          >
            <span>Get Access → $39</span>
          </a>
          <a 
            href="/sections"
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#E5E5E5] text-[#1A1A1A] font-mono text-sm uppercase tracking-wider hover:border-[#1A1A1A] transition-all duration-300"
          >
            <span>View All Sections</span>
          </a>
        </div>
      </div>
    </section>
  );
}
