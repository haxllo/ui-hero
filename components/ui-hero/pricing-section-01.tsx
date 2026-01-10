"use client";

import { useState, useEffect } from 'react';

export default function PricingSection01() {
  const [isYearly, setIsYearly] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(39);

  const plans = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceYearly: 0,
      description: "Perfect for trying out",
      features: ["1 component", "Personal projects", "Basic support"],
      popular: false
    },
    {
      name: "Pro",
      priceMonthly: 39,
      priceYearly: 29,
      description: "Everything you need",
      features: ["All 6 components", "Commercial license", "Lifetime updates", "Priority support", "Unlimited projects"],
      popular: true
    },
    {
      name: "Custom",
      priceMonthly: null,
      priceYearly: null,
      description: "Bespoke solutions",
      features: ["Custom components", "1:1 design review", "Brand adaptation", "Dedicated support"],
      popular: false
    }
  ];

  // Super fast price animation
  useEffect(() => {
    const startPrice = displayPrice;
    const endPrice = isYearly ? 29 : 39;
    const duration = 200;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPrice = Math.round(startPrice + (endPrice - startPrice) * easeOut);
      
      setDisplayPrice(currentPrice);

      if (frame >= totalFrames) {
        setDisplayPrice(endPrice);
        clearInterval(timer);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [isYearly]);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Minimal header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-zinc-500 text-lg mb-8">
            Choose the plan that's right for you
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center gap-4 p-2 bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                !isYearly 
                  ? 'bg-white text-black' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 font-medium transition-all duration-200 relative ${
                isYearly 
                  ? 'bg-white text-black' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-3 -right-3 px-2 py-1 bg-rose-500 text-white text-[10px] font-bold tracking-wider">
                -25%
              </span>
            </button>
          </div>
        </div>

        {/* Luxury pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-12 transition-all duration-200 ease-out will-change-transform ${
                plan.popular
                  ? 'bg-white text-black hover:shadow-2xl hover:shadow-white/20'
                  : 'bg-zinc-950/50 border border-zinc-800/50 text-white hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50'
              }`}
              style={{ transform: 'translateZ(0)' }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-rose-500 text-white text-xs font-mono uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan details */}
              <div className="mb-12">
                <div className={`text-sm font-mono uppercase tracking-[0.2em] mb-6 ${
                  plan.popular ? 'text-zinc-600' : 'text-zinc-600'
                }`}>
                  {plan.name}
                </div>

                {/* Animated Price */}
                <div className="mb-4 h-24 flex items-center">
                  {plan.priceMonthly !== null ? (
                    <div className="relative">
                      <span className="text-2xl font-light mr-2">$</span>
                      <span className="text-7xl font-light tracking-tighter tabular-nums">
                        {index === 1 ? displayPrice : plan.priceMonthly}
                      </span>
                      {index === 1 && (
                        <div className="text-sm text-zinc-500 mt-2">
                          per {isYearly ? 'month, billed yearly' : 'month'}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-7xl font-light tracking-tighter">—</span>
                  )}
                </div>

                <div className={plan.popular ? 'text-zinc-600' : 'text-zinc-500'}>
                  {plan.description}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={plan.popular ? 'text-rose-500' : 'text-zinc-600'}>✓</span>
                    <span className={plan.popular ? 'text-zinc-700' : 'text-zinc-400'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 text-sm font-mono uppercase tracking-wider transition-all duration-200 ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-zinc-900'
                    : 'border border-zinc-800 hover:bg-white hover:text-black'
                }`}
              >
                {plan.priceMonthly === null ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <div className="text-center mt-16 text-sm text-zinc-600">
          All plans include commercial license. No attribution required.
          {isYearly && <span className="text-rose-500 ml-2">Save 25% with yearly billing</span>}
        </div>
      </div>
    </section>
  );
}
