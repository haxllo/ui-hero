import type { LicenseValidation } from '../types.js';

const LICENSE_API_URL = process.env.UI_HERO_LICENSE_API || 'https://ui-hero.vercel.app/api/validate-license';

// Cache validation for 24 hours
const CACHE_DURATION = 24 * 60 * 60 * 1000;
const validationCache = new Map<string, { validation: LicenseValidation; timestamp: number }>();

export async function validateLicense(licenseKey: string): Promise<LicenseValidation> {
  // Check cache first
  const cached = validationCache.get(licenseKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.validation;
  }

  try {
    const response = await fetch(LICENSE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ licenseKey }),
    });

    if (!response.ok) {
      throw new Error('License validation failed');
    }

    const validation: LicenseValidation = await response.json();
    
    // Cache the result
    validationCache.set(licenseKey, {
      validation,
      timestamp: Date.now()
    });

    return validation;
  } catch (error) {
    // If API is down, check if we have a cached validation
    const cached = validationCache.get(licenseKey);
    if (cached) {
      return cached.validation;
    }

    return {
      valid: false,
      tier: 'free',
      components: [],
      message: 'Unable to validate license. Please check your connection.'
    };
  }
}

export function getFreeTierValidation(): LicenseValidation {
  return {
    valid: true,
    tier: 'free',
    components: ['hero-section-01']
  };
}
