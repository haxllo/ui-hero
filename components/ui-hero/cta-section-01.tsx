/**
 * CTA Section 01 - "Final Pulse"
 * 
 * High-conversion dark mode CTA with atmospheric gradients.
 * Features: Centered bold layout, glowing accents, glassmorphism.
 * 
 * Usage:
 * import CTASection01 from '@/components/library/cta-section-01'
 */

export default function CTASection01() {
  return (
    <section className="relative py-32 px-6 bg-slate-950 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/20 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Accelerate?</span>
        </h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 500+ AI startups shipping faster with our production-ready components. 
          Stop building from scratch. Start scaling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-slate-950 font-black text-lg hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)]">
            Deploy Now - $39
          </button>
          
          <button className="w-full sm:w-auto px-12 py-5 rounded-2xl border border-white/10 text-white font-bold text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
            View Docs
          </button>
        </div>

        {/* Minimal Trust Signal */}
        <div className="mt-16 flex justify-center items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-cyan-500">✓</span>
            <span>Commercial License</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-500">✓</span>
            <span>Lifetime Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
