/**
 * Pricing Section 01 - "SaaS 3-Tier Pricing"
 * 
 * Classic SaaS pricing table with highlighted middle tier.
 * Features: 3 plans, feature comparison, CTA buttons
 * 
 * Usage:
 * import PricingSection01 from '@/components/library/pricing-section-01'
 */

"use client";

export default function PricingSection01() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "per month",
      description: "Perfect for side projects",
      features: [
        "10,000 API calls/month",
        "GPT-3.5 access",
        "Email support",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      price: "99",
      period: "per month",
      description: "For growing startups",
      features: [
        "100,000 API calls/month",
        "GPT-4 access",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "MOST POPULAR"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations",
      features: [
        "Unlimited API calls",
        "All models included",
        "Dedicated support",
        "Custom deployment",
        "SLA guarantee",
        "Advanced security"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl scale-105 border-4 border-purple-400'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-xs font-bold uppercase">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  {plan.price !== "Custom" && (
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>$</span>
                  )}
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.period}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={plan.highlighted ? 'text-purple-200' : 'text-purple-600'}>✓</span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>All plans include 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
