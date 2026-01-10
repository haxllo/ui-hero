/**
 * Hero Section 01 - "AI Product Launch"
 * 
 * A conversion-focused hero section for AI products.
 * Features: Large headline, benefit-driven copy, dual CTAs, trust indicators
 * 
 * Usage:
 * import HeroSection01 from '@/components/library/hero-section-01'
 */

export default function HeroSection01() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-gray-300">Trusted by 10,000+ AI teams</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
          Build AI Products
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            10x Faster
          </span>
        </h1>
        
        {/* Value proposition */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          The complete AI development platform. From idea to production in hours, not months.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-white text-slate-950 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105">
            Start Building Free
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-all">
            Watch Demo
          </button>
        </div>
        
        {/* Social proof logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          <div className="text-xs uppercase tracking-wider text-gray-500">Used by teams at</div>
          {['OpenAI', 'Anthropic', 'Cohere', 'Replicate'].map((company) => (
            <div key={company} className="px-6 py-2 bg-white/5 rounded text-sm font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
