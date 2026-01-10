"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Test the waters",
      features: [
        "3 basic sections",
        "Personal use only",
        "Community support"
      ],
      cta: "Start Free",
      highlighted: false
    },
    {
      name: "Pro",
      price: "39",
      description: "Ship today",
      features: [
        "All 6 sections",
        "Commercial license",
        "Lifetime updates",
        "Priority support",
        "Unlimited projects"
      ],
      cta: "Get Pro",
      highlighted: true
    },
    {
      name: "Custom",
      price: "—",
      description: "Your brand",
      features: [
        "Everything in Pro",
        "Custom sections",
        "Brand copy",
        "Dedicated support"
      ],
      cta: "Contact",
      highlighted: false
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#0A0A0A] border-y border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ Pricing</span>
          </div>
          <h2 className="text-[48px] md:text-[64px] leading-[1] font-bold max-w-3xl text-white">
            Pay once.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/20">Own forever.</span>
          </h2>
        </div>
        
        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-12 relative group ${
                plan.highlighted ? 'bg-black border-2 border-[#00FFFF]' : 'bg-[#161616] border-2 border-transparent hover:border-white/10'
              }`}
            >
              {/* Corner accents for highlighted plan */}
              {plan.highlighted && (
                <>
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00FFFF]" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00FFFF]" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#00FFFF]/5 blur-xl -z-10" />
                </>
              )}
              
              <div className={`font-mono text-[11px] uppercase tracking-[0.15em] mb-8 ${
                plan.highlighted ? 'text-[#00FFFF]' : 'text-white/40'
              }`}>
                {plan.name}
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  {plan.price !== "—" && <span className={`text-[24px] font-bold text-white`}>$</span>}
                  <span className={`text-[72px] font-bold leading-none ${
                    plan.highlighted ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#00FFFF] to-white' : 'text-white'
                  }`}>{plan.price}</span>
                </div>
                <div className={`text-[14px] text-[#999999]`}>{plan.description}</div>
              </div>
              
              <ul className="space-y-4 mb-12 min-h-[180px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]">
                    <span className={plan.highlighted ? 'text-[#00FFFF]' : 'text-white/40'}>→</span>
                    <span className="text-[#999999]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 font-mono text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#00FFFF] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-white hover:bg-[#00FFFF] hover:text-black border border-white/10 hover:border-[#00FFFF]'
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
