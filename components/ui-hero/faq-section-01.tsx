"use client";

import { useState } from 'react';

export default function FAQSection01() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly do I get?",
      answer: "6 production-ready React components with TypeScript and Tailwind CSS. Each component is fully responsive, accessible, and customizable. You get the source code - no black boxes, no compiled files."
    },
    {
      question: "Can I use these for client work?",
      answer: "Yes! The commercial license covers unlimited projects including client work, SaaS products, and everything in between. No per-project fees. No attribution required."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes. If you're not satisfied within 30 days, we'll refund you in full, no questions asked. We want you to be confident in your purchase."
    },
    {
      question: "How do updates work?",
      answer: "You get lifetime updates. When we improve components or add new variants, you'll be notified via email. Download the latest version anytime from your account dashboard."
    },
    {
      question: "What tech stack is required?",
      answer: "React/Next.js with TypeScript and Tailwind CSS. That's it. No complex dependencies, no build configurations. If you can run create-next-app, you're good to go."
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Playful header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="text-6xl mb-4">🤔</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Questions?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto" />
          </div>
        </div>

        {/* Interactive accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 transition-all duration-300 ${
                openIndex === index
                  ? 'border-violet-500 bg-violet-500/5'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Question button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-medium transition-colors ${
                  openIndex === index ? 'text-violet-400' : 'text-white group-hover:text-zinc-300'
                }`}>
                  {faq.question}
                </span>

                {/* Animated icon */}
                <div className={`w-8 h-8 flex items-center justify-center text-2xl transition-all duration-300 ${
                  openIndex === index ? 'rotate-180 text-violet-400' : 'text-zinc-600'
                }`}>
                  <span>↓</span>
                </div>
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 mb-6">Still have questions?</p>
          <button className="px-8 py-3 bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors duration-300 hover:shadow-lg hover:shadow-violet-500/20">
            Email us →
          </button>
        </div>
      </div>
    </section>
  );
}
