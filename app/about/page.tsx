export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ About</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Built for founders
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/20">who ship fast.</span>
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-[#999999] leading-relaxed">
          <p>
            <span className="text-white">UIHero</span> was created to solve a simple problem: landing pages take too long to build.
          </p>
          
          <p>
            As founders, we've spent countless hours tweaking margins, perfecting hover states, and wondering if that 
            gradient looks better at 45° or 60°. Hours that should have been spent talking to customers.
          </p>
          
          <p>
            So we built UIHero. Six production-ready sections. Clean TypeScript. Modern Tailwind. 
            Copy, customize, ship. 30 minutes instead of 30 days.
          </p>
          
          <p className="text-white">
            Get back to building your product.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a 
            href="/sections"
            className="inline-block px-10 py-5 bg-[#00FFFF] text-black font-mono text-sm uppercase tracking-[0.15em] hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all relative group"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/20" />
            Browse Sections
          </a>
        </div>
      </div>
    </div>
  );
}
