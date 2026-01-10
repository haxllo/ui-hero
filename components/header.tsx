export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-sm border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FF3366] flex items-center justify-center">
            <div className="w-3 h-3 bg-white"></div>
          </div>
          <span className="font-mono text-sm uppercase tracking-wider font-bold">UIHero</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-wider">
          <a href="/sections" className="text-[#666666] hover:text-[#1A1A1A] transition-colors">
            Sections
          </a>
          <a href="/#pricing" className="text-[#666666] hover:text-[#1A1A1A] transition-colors">
            Pricing
          </a>
          <a href="/sections" className="text-[#666666] hover:text-[#1A1A1A] transition-colors">
            Examples
          </a>
        </nav>
        
        <a href="/sections" className="px-6 py-3 bg-[#1A1A1A] text-white font-mono text-[11px] uppercase tracking-wider hover:bg-[#FF3366] transition-all duration-300">
          Browse
        </a>
      </div>
    </header>
  );
}
