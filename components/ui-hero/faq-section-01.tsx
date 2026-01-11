/**
 * FAQ Section 01 - "Neural Query"
 *
 * A high-end dark mode FAQ with smooth interactions.
 * Features: Glossy surfaces, cyan accents, refined typography.
 *
 * Usage:
 * import FAQSection01 from '@/components/library/faq-section-01'
 */

"use client";

import { useState } from 'react';

export default function FAQSection01() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly do I get in the bundle?",
      answer: "You receive 6 production-grade React sections (Hero, How it Works, Features, Social Proof, Pricing, Final CTA) delivered as clean TypeScript + Tailwind code. No proprietary libraries, no bloat."
    },
    {
      question: "Can I use these for my clients?",
      answer: "Absolutely. The Pro license includes commercial rights for unlimited projects, including client work and commercial SaaS products. No attribution required."
    },
    {
      question: "How do I install the components?",
      answer: "You can use our CLI tool (npx ui-hero add) to instantly download specific sections into your project, or simply copy-paste the source code from our dashboard."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 30-day 'no-questions-asked' refund policy. If you don't feel UI Hero has saved you at least 20 hours of work, we'll give you your money back."
    },
    {
      question: "Do you support Tailwind v4?",
      answer: "Yes, all components are built with modern Tailwind CSS principles and are fully compatible with both v3 and the latest v4 alpha/beta releases."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Common <span className="text-cyan-400">Inquiries</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know about the UI Hero ecosystem.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white/5 border-white/20 shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between group"
              >
                <span className={`text-lg font-medium transition-colors ${
                  openIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'rotate-180 bg-cyan-500 border-cyan-400' : 'bg-white/5'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-slate-950' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-0">
                  <p className="text-slate-400 leading-relaxed border-t border-white/5 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/5 text-center">
          <p className="text-slate-300 mb-4 font-medium">
            Still have lingering questions?
          </p>
          <a href="mailto:support@ui-hero.com" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
            <span>Contact System Ops</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
