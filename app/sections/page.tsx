"use client";

import { useState } from 'react';
import HeroSection from '@/components/ui-hero/hero-section-01';
import FeaturesSection from '@/components/ui-hero/features-section-01';
import TestimonialsSection from '@/components/ui-hero/testimonials-section-01';
import PricingSection from '@/components/ui-hero/pricing-section-01';
import FAQSection from '@/components/ui-hero/faq-section-01';
import CTASection from '@/components/ui-hero/cta-section-01';

export default function SectionsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sections = [
    {
      id: 'hero-01',
      title: 'Hero Section 01',
      description: 'AI Product Launch - Full-screen with animated background, trust indicators',
      category: 'Hero',
      fileName: 'hero-section-01.tsx',
      component: HeroSection
    },
    {
      id: 'features-01',
      title: 'Features Section 01',
      description: '3-column feature grid with icons and hover effects',
      category: 'Features',
      fileName: 'features-section-01.tsx',
      component: FeaturesSection
    },
    {
      id: 'testimonials-01',
      title: 'Testimonials Section 01',
      description: 'Social proof grid with customer quotes and avatars',
      category: 'Social Proof',
      fileName: 'testimonials-section-01.tsx',
      component: TestimonialsSection
    },
    {
      id: 'pricing-01',
      title: 'Pricing Section 01',
      description: 'SaaS 3-tier pricing with highlighted middle plan',
      category: 'Pricing',
      fileName: 'pricing-section-01.tsx',
      component: PricingSection
    },
    {
      id: 'faq-01',
      title: 'FAQ Section 01',
      description: 'Accordion-style FAQs with smooth animations',
      category: 'FAQ',
      fileName: 'faq-section-01.tsx',
      component: FAQSection
    },
    {
      id: 'cta-01',
      title: 'CTA Section 01',
      description: 'Final conversion push before footer',
      category: 'CTA',
      fileName: 'cta-section-01.tsx',
      component: CTASection
    }
  ];

  const copyCode = async (sectionId: string) => {
    // TODO: Fetch actual code from API
    setCopiedId(sectionId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        {/* Atmospheric glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00FFFF]/10 rounded-full blur-[120px]" />
        
        <div className="relative">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ Section Library</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            6 Production-Ready
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/20">Landing Sections</span>
          </h1>
          <p className="text-xl text-[#999999] max-w-3xl mb-8">
            Copy the code. Paste into your project. Customize. Ship.
          </p>
          <div className="flex gap-4">
            <a 
              href="/#pricing"
              className="px-8 py-4 bg-[#00FFFF] text-black font-mono text-xs uppercase tracking-[0.15em] hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all relative group"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/20" />
              Get All Sections - $39
            </a>
            <a 
              href="/#pricing"
              className="px-8 py-4 border-2 border-white/10 text-white font-mono text-xs uppercase tracking-[0.15em] hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all"
            >
              View Pricing
            </a>
          </div>
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
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-2">
                    {section.category}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-[#999999]">{section.description}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => copyCode(section.id)}
                    className="px-6 py-3 bg-[#00FFFF] text-black font-mono text-xs uppercase tracking-[0.15em] hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
                  >
                    {copiedId === section.id ? '✓ Copied!' : 'Copy Code'}
                  </button>
                  <button className="px-6 py-3 border-2 border-white/10 text-white font-mono text-xs uppercase tracking-[0.15em] hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all">
                    Live Preview
                  </button>
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="bg-[#161616] border-2 border-white/5 overflow-hidden group-hover:border-[#00FFFF]/50 transition-all relative">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]/0 group-hover:border-[#00FFFF] transition-colors duration-500 z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]/0 group-hover:border-[#00FFFF] transition-colors duration-500 z-10" />
                
                {/* Browser chrome */}
                <div className="bg-black border-b border-white/5 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF0066]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00FFFF]"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#161616] border border-white/10 px-3 py-1 text-xs text-[#00FFFF] font-mono">
                      localhost:3000/{section.id}
                    </div>
                  </div>
                </div>
                
                {/* Preview iframe placeholder */}
                <div className="bg-black overflow-hidden">
                  <div className="scale-[0.7] origin-top-left w-[142.857%] h-[142.857%]">
                    {<section.component />}
                  </div>
                </div>
              </div>

              {/* Section metadata */}
              <div className="mt-4 flex items-center gap-6 font-mono text-xs text-[#666666]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00FFFF]">📁</span>
                  <span>{section.fileName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FFFF]">⚡</span>
                  <span>TypeScript + Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FFFF]">📱</span>
                  <span>Responsive</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#0A0A0A] border-t border-white/5 text-white py-24 px-6 relative overflow-hidden">
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-[#00FFFF]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl font-bold mb-6">
            Get all 6 sections
          </h2>
          <p className="text-xl text-[#999999] mb-8">
            One-time payment. Lifetime access. Commercial license.
          </p>
          <a 
            href="/#pricing"
            className="inline-block px-12 py-5 bg-[#00FFFF] text-black font-bold text-lg hover:bg-white hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all relative group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black/20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black/20" />
            Get Access - $39
          </a>
          <div className="flex justify-center gap-8 mt-8 text-sm text-[#666666]">
            <div className="flex items-center gap-2">
              <span className="text-[#00FFFF]">✓</span>
              <span>Lifetime updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00FFFF]">✓</span>
              <span>Commercial license</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#00FFFF]">✓</span>
              <span>No attribution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
