import { NextResponse } from 'next/server';

export async function GET() {
  const registry = {
    version: '1.0.0',
    components: {
      'hero-section-01': {
        name: 'hero-section-01',
        displayName: 'AI Hero Section',
        tier: 'free',
        dependencies: [],
        files: ['hero-section-01.tsx'],
        version: '1.0.0'
      },
      'pricing-section-01': {
        name: 'pricing-section-01',
        displayName: 'Pricing Section',
        tier: 'pro',
        dependencies: [],
        files: ['pricing-section-01.tsx'],
        version: '1.0.0'
      },
      'features-section-01': {
        name: 'features-section-01',
        displayName: 'Features Grid',
        tier: 'pro',
        dependencies: [],
        files: ['features-section-01.tsx'],
        version: '1.0.0'
      },
      'testimonials-section-01': {
        name: 'testimonials-section-01',
        displayName: 'Social Proof / Testimonials',
        tier: 'pro',
        dependencies: [],
        files: ['testimonials-section-01.tsx'],
        version: '1.0.0'
      },
      'cta-section-01': {
        name: 'cta-section-01',
        displayName: 'Final CTA Section',
        tier: 'pro',
        dependencies: [],
        files: ['cta-section-01.tsx'],
        version: '1.0.0'
      },
      'faq-section-01': {
        name: 'faq-section-01',
        displayName: 'FAQ Section',
        tier: 'pro',
        dependencies: [],
        files: ['faq-section-01.tsx'],
        version: '1.0.0'
      }
    }
  };

  return NextResponse.json(registry);
}
