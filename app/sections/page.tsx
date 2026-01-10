"use client";

import { useState } from 'react';

export default function SectionsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sections = [
    {
      id: 'hero-01',
      title: 'Hero Section 01',
      description: 'AI Product Launch - Full-screen with animated background, trust indicators',
      category: 'Hero',
      fileName: 'hero-section-01.tsx',
      preview: '/api/preview/hero-01' // We'll create this
    },
    {
      id: 'features-01',
      title: 'Features Section 01',
      description: '3-column feature grid with icons and hover effects',
      category: 'Features',
      fileName: 'features-section-01.tsx',
      preview: '/api/preview/features-01'
    },
    {
      id: 'testimonials-01',
      title: 'Testimonials Section 01',
      description: 'Social proof grid with customer quotes and avatars',
      category: 'Social Proof',
      fileName: 'testimonials-section-01.tsx',
      preview: '/api/preview/testimonials-01'
    },
    {
      id: 'pricing-01',
      title: 'Pricing Section 01',
      description: 'SaaS 3-tier pricing with highlighted middle plan',
      category: 'Pricing',
      fileName: 'pricing-section-01.tsx',
      preview: '/api/preview/pricing-01'
    },
    {
      id: 'faq-01',
      title: 'FAQ Section 01',
      description: 'Accordion-style FAQs with smooth animations',
      category: 'FAQ',
      fileName: 'faq-section-01.tsx',
      preview: '/api/preview/faq-01'
    },
    {
      id: 'cta-01',
      title: 'CTA Section 01',
      description: 'Final conversion push before footer',
      category: 'CTA',
      fileName: 'cta-section-01.tsx',
      preview: '/api/preview/cta-01'
    }
  ];

  const copyCode = async (sectionId: string) => {
    // TODO: Fetch actual code from API
    setCopiedId(sectionId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999] mb-4">
          / Section Library
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          6 Production-Ready
          <br />
          <span className="text-[#999999]">Landing Sections</span>
        </h1>
        <p className="text-xl text-[#666666] max-w-3xl mb-8">
          Copy the code. Paste into your project. Customize. Ship.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#FF3366] transition-all">
            Get All Sections - $39
          </button>
          <button className="px-8 py-4 border-2 border-[#E5E5E5] font-mono text-xs uppercase tracking-wider hover:border-[#1A1A1A] transition-all">
            View Pricing
          </button>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-12">
          {sections.map((section) => (
            <div key={section.id} className="group">
              {/* Section Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999] mb-2">
                    {section.category}
                  </div>
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                    {section.title}
                  </h2>
                  <p className="text-[#666666]">{section.description}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => copyCode(section.id)}
                    className="px-6 py-3 bg-[#FF3366] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1A1A1A] transition-all"
                  >
                    {copiedId === section.id ? '✓ Copied!' : 'Copy Code'}
                  </button>
                  <button className="px-6 py-3 border-2 border-[#E5E5E5] font-mono text-xs uppercase tracking-wider hover:border-[#1A1A1A] transition-all">
                    Live Preview
                  </button>
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="bg-white border-2 border-[#E5E5E5] rounded-xl overflow-hidden shadow-lg group-hover:border-[#FF3366] transition-all">
                {/* Browser chrome */}
                <div className="bg-[#FAFAFA] border-b border-[#E5E5E5] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white border border-[#E5E5E5] rounded px-3 py-1 text-xs text-[#999999] font-mono">
                      localhost:3000/{section.id}
                    </div>
                  </div>
                </div>
                
                {/* Preview iframe placeholder */}
                <div className="bg-gradient-to-br from-slate-50 to-purple-50 aspect-[16/9] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👁️</div>
                    <p className="font-mono text-sm text-[#666666]">
                      Preview: {section.fileName}
                    </p>
                    <p className="text-xs text-[#999999] mt-2">
                      Live preview coming soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Section metadata */}
              <div className="mt-4 flex items-center gap-6 font-mono text-xs text-[#999999]">
                <div className="flex items-center gap-2">
                  <span>📁</span>
                  <span>{section.fileName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⚡</span>
                  <span>TypeScript + Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>Responsive</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1A1A1A] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Get all 6 sections
          </h2>
          <p className="text-xl text-[#999999] mb-8">
            One-time payment. Lifetime access. Commercial license.
          </p>
          <button className="px-12 py-5 bg-[#FF3366] text-white font-bold text-lg hover:bg-white hover:text-[#1A1A1A] transition-all">
            Get Access - $39
          </button>
          <div className="flex justify-center gap-8 mt-8 text-sm text-[#666666]">
            <div>✓ Lifetime updates</div>
            <div>✓ Commercial license</div>
            <div>✓ No attribution</div>
          </div>
        </div>
      </div>
    </div>
  );
}
