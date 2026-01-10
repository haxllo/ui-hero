/**
 * FAQ Section 01 - "Accordion Style"
 * 
 * Frequently asked questions with expandable answers.
 * Features: Accordion interaction, clean design, common objections
 * 
 * Usage:
 * import FAQSection01 from '@/components/library/faq-section-01'
 */

"use client";

import { useState } from 'react';

export default function FAQSection01() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to get started?",
      answer: "Most teams are up and running in under 10 minutes. Just sign up, grab your API key, and make your first call. We have SDKs for Python, JavaScript, and more."
    },
    {
      question: "What AI models do you support?",
      answer: "We support all major models including GPT-4, GPT-3.5, Claude, Llama 2, and more. You can switch between models with a single parameter change."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC 2 Type II certified, encrypt all data in transit and at rest, and never use your data to train models. Your data stays yours."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. No questions asked, no cancellation fees. Your data remains accessible for 30 days after cancellation."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required. You'll get full access to all features during the trial period."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Starter plans get email support with 24-hour response times. Pro plans get priority support with 4-hour response. Enterprise gets dedicated Slack channel and phone support."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our platform
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className={`text-2xl text-purple-600 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-purple-50 rounded-2xl border-2 border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
