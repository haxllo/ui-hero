export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#FF3366] flex items-center justify-center">
                <div className="w-3 h-3 bg-white"></div>
              </div>
              <span className="font-mono text-sm uppercase tracking-wider font-bold">UIHero</span>
            </div>
            <p className="text-[14px] text-[#999999] leading-[1.6]">
              Landing sections for founders who ship.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider mb-4 opacity-40">Product</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">Sections</a></li>
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider mb-4 opacity-40">Company</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider mb-4 opacity-40">Legal</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">License</a></li>
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-[#999999] hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-[#666666] uppercase tracking-wider">© 2026 UIHero</p>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-wider">
            <a href="#" className="text-[#666666] hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[#666666] hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
