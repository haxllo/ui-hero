/**
 * Pricing Section 01 - "Neural Subscription"
 * 
 * High-converting dark mode pricing table.
 * Features: Glossy cards, glowing highlight, neon accents.
 * 
 * Usage:
 * import PricingSection01 from '@/components/library/pricing-section-01'
 */

"use client";

export default function PricingSection01() {
  const plans = [
    {
      name: "Researcher",
      price: "0",
      period: "per month",
      description: "For personal experimentation",
      features: [
        "1,000 requests / mo",
        "Community models",
        "Public workspace",
        "Latency: Standard"
      ],
      cta: "Join Waitlist",
      highlighted: false
    },
    {
      name: "Architect",
      price: "49",
      period: "per month",
      description: "For scaling intelligence",
      features: [
        "50,000 requests / mo",
        "Premium models",
        "Private workspace",
        "Latency: Low-latency",
        "Priority queue",
        "Custom datasets"
      ],
      cta: "Get Started",
      highlighted: true,
      badge: "OPTIMIZED CHOICE"
    },
    {
      name: "Nexus",
      price: "Custom",
      period: "annual billing",
      description: "For enterprise dominance",
      features: [
        "Unlimited requests",
        "Dedicated infrastructure",
        "On-prem deployment",
        "Latency: Real-time",
        "24/7 Ops support",
        "Compliance: SOC2/HIPAA"
      ],
      cta: "Contact Ops",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Scalable <span className="text-cyan-400">Compute</span> Plans
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transparent pricing designed to grow alongside your intelligence layers.
          </p>
        </div>
        
        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-slate-900 border-2 border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(34,211,238,0.2)] scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-cyan-400' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  {plan.price !== "Custom" && (
                    <span className="text-2xl font-bold text-white">$</span>
                  )}
                  <span className="text-6xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-2 uppercase tracking-widest">
                  {plan.period}
                </p>
              </div>
              
              <ul className="space-y-4 mb-10 min-h-[200px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 mt-0.5 ${plan.highlighted ? 'text-cyan-400' : 'text-slate-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
