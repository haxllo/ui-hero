"use client";

import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? "0" : "0",
      period: "Forever free",
      description: "Perfect for exploring what's possible",
      features: [
        "3 basic sections",
        "Next.js + Tailwind code",
        "Personal projects only",
        "Community support"
      ],
      cta: "Start Free",
      highlighted: false
    },
    {
      name: "Pro",
      price: isYearly ? "79" : "39",
      period: isYearly ? "one-time" : "one-time",
      description: "Everything you need to launch with confidence",
      features: [
        "All 6 premium sections",
        "Commercial license included",
        "Free lifetime updates",
        "Priority support",
        "Copy templates included",
        "Use in unlimited projects"
      ],
      cta: "Get Pro Access",
      highlighted: true,
      badge: "MOST POPULAR"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Let's talk",
      description: "Custom sections built for your brand",
      features: [
        "Everything in Pro",
        "Custom section design",
        "Brand-specific copy",
        "Dedicated support",
        "Design consultation"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Launch Fast, Pay Once
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            No subscriptions. No surprises. Just professional landing sections.
          </p>
          
          {/* <div className="inline-flex items-center gap-3 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md transition-all ${!isYearly ? 'bg-white shadow-sm font-semibold' : 'text-gray-600'}`}
            >
              One-time
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md transition-all ${isYearly ? 'bg-white shadow-sm font-semibold' : 'text-gray-600'}`}
            >
              With Updates
            </button>
          </div> */}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 ${
                plan.highlighted
                  ? 'border-purple-500 shadow-2xl scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  {plan.price !== "Custom" && <span className="text-2xl font-semibold text-gray-900">$</span>}
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <div className="text-gray-600 mt-1">{plan.period}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>All plans include commercial license. No attribution required.</p>
        </div>
      </div>
    </section>
  );
}
