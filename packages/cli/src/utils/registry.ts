import type { Registry } from '../types.js';

// Registry URL - will be hosted on your CDN
const REGISTRY_URL = process.env.UI_HERO_REGISTRY_URL || 'https://ui-hero.vercel.app/api/registry';

let cachedRegistry: Registry | null = null;

export async function fetchRegistry(): Promise<Registry> {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  try {
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch registry');
    }
    cachedRegistry = await response.json();
    return cachedRegistry!;
  } catch (error) {
    // Fallback to local registry if CDN is down
    return getFallbackRegistry();
  }
}

function getFallbackRegistry(): Registry {
  return {
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
}

export function getComponentMetadata(registry: Registry, componentName: string) {
  return registry.components[componentName];
}

export function getAllComponents(registry: Registry) {
  return Object.values(registry.components);
}

export function getAvailableComponents(registry: Registry, tier: 'free' | 'pro') {
  const components = getAllComponents(registry);
  if (tier === 'pro') {
    return components;
  }
  return components.filter(c => c.tier === 'free');
}
