export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-24 px-6 border-t border-[#2A2A2A] overflow-hidden">
      {/* Atmospheric background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF0066]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF] via-[#00CCFF] to-[#0099FF]"></div>
                <div className="absolute inset-[2px] bg-black flex items-center justify-center">
                  <div className="w-4 h-4 border border-[#00FFFF] rotate-45"></div>
                </div>
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#00FFFF]"></div>
                <div className="absolute top-0 left-0 w-[1px] h-2 bg-[#00FFFF]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#00FFFF]"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-[#00FFFF]"></div>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-white">UI</span>
                <span className="text-[#00FFFF]">Hero</span>
              </span>
            </a>
            <p className="text-[14px] text-[#999999] leading-relaxed">
              Landing sections for founders who ship fast.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#666666] uppercase tracking-wider">
              <div className="w-2 h-2 bg-[#00FFFF] animate-pulse-slow"></div>
              <span>Online & Shipping</span>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 text-[#00FFFF] font-bold">
              Product
            </h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="/sections" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Sections</span>
                </a>
              </li>
              <li>
                <a href="/#pricing" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="/sections" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Examples</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 text-[#00FFFF] font-bold">
              Company
            </h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="/about" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="/blog" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6 text-[#00FFFF] font-bold">
              Legal
            </h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="/license" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>License</span>
                </a>
              </li>
              <li>
                <a href="/terms" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Terms</span>
                </a>
              </li>
              <li>
                <a href="/privacy" className="group flex items-center gap-3 text-[#999999] hover:text-white transition-colors duration-300">
                  <span className="w-0 h-[1px] bg-[#00FFFF] group-hover:w-4 transition-all duration-300"></span>
                  <span>Privacy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar with decorative elements */}
        <div className="relative border-t border-[#2A2A2A] pt-8">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#00FFFF] to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#00FFFF] to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="font-mono text-[10px] text-[#666666] uppercase tracking-[0.2em]">
                © {currentYear} UIHero
              </p>
              <span className="w-1 h-1 bg-[#666666]"></span>
              <p className="font-mono text-[10px] text-[#666666] uppercase tracking-[0.2em]">
                Built for founders
              </p>
            </div>
            
            <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
              <a 
                href="https://twitter.com/uihero" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-[#666666] hover:text-[#00FFFF] transition-colors duration-300 group"
              >
                <span className="relative z-10">Twitter</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00FFFF] group-hover:w-full transition-all duration-500"></span>
              </a>
              <a 
                href="https://github.com/uihero" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-[#666666] hover:text-[#00FFFF] transition-colors duration-300 group"
              >
                <span className="relative z-10">GitHub</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00FFFF] group-hover:w-full transition-all duration-500"></span>
              </a>
              <a 
                href="https://discord.gg/uihero" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-[#666666] hover:text-[#00FFFF] transition-colors duration-300 group"
              >
                <span className="relative z-10">Discord</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00FFFF] group-hover:w-full transition-all duration-500"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
