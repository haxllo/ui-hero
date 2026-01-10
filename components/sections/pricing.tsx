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
    <section className="py-32 px-6 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999] mb-4">
            / Pricing
          </div>
          <h2 className="text-[48px] md:text-[64px] leading-[1] font-bold max-w-3xl">
            Pay once.
            <br />
            <span className="text-[#999999]">Own forever.</span>
          </h2>
        </div>
        
        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-12 ${
                plan.highlighted ? 'bg-[#1A1A1A]' : 'bg-[#FAFAFA]'
              }`}
            >
              <div className={`font-mono text-[11px] uppercase tracking-wider mb-8 ${
                plan.highlighted ? 'text-white/40' : 'text-[#999999]'
              }`}>
                {plan.name}
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  {plan.price !== "—" && <span className={`text-[24px] font-bold ${
                    plan.highlighted ? 'text-white' : 'text-[#1A1A1A]'
                  }`}>$</span>}
                  <span className={`text-[72px] font-bold leading-none ${
                    plan.highlighted ? 'text-white' : 'text-[#1A1A1A]'
                  }`}>{plan.price}</span>
                </div>
                <div className={`text-[14px] ${
                  plan.highlighted ? 'text-white/60' : 'text-[#666666]'
                }`}>{plan.description}</div>
              </div>
              
              <ul className="space-y-4 mb-12 min-h-[180px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]">
                    <span className="text-[#FF3366]">→</span>
                    <span className={plan.highlighted ? 'text-white/80' : 'text-[#666666]'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 font-mono text-[11px] uppercase tracking-wider font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#FF3366] text-white hover:bg-white hover:text-[#1A1A1A]'
                    : 'bg-[#1A1A1A] text-white hover:bg-[#FF3366]'
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
