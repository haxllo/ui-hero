import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { licenseKey } = await request.json();

    if (!licenseKey) {
      return NextResponse.json(
        { valid: false, message: 'License key is required' },
        { status: 400 }
      );
    }

    // For development/testing, accept any key that starts with "PRO-"
    // In production, validate with Gumroad API
    if (process.env.NODE_ENV === 'production') {
      return await validateWithGumroad(licenseKey);
    } else {
      // Development mode - simple validation
      if (licenseKey.startsWith('PRO-')) {
        return NextResponse.json({
          valid: true,
          tier: 'pro',
          components: [
            'hero-section-01',
            'pricing-section-01',
            'features-section-01',
            'testimonials-section-01',
            'cta-section-01',
            'faq-section-01'
          ]
        });
      } else {
        return NextResponse.json({
          valid: true,
          tier: 'free',
          components: ['hero-section-01']
        });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { valid: false, message: 'Validation error' },
      { status: 500 }
    );
  }
}

async function validateWithGumroad(licenseKey: string) {
  const GUMROAD_PRODUCT_ID = process.env.GUMROAD_PRODUCT_ID;
  const GUMROAD_API_KEY = process.env.GUMROAD_API_KEY;

  if (!GUMROAD_PRODUCT_ID || !GUMROAD_API_KEY) {
    throw new Error('Gumroad credentials not configured');
  }

  try {
    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: GUMROAD_PRODUCT_ID,
        license_key: licenseKey,
        increment_uses_count: false
      })
    });

    const data = await response.json();

    if (data.success && data.purchase) {
      // Determine tier based on variant or custom fields
      const tier = data.purchase.variants?.toLowerCase().includes('pro') ? 'pro' : 'free';

      return NextResponse.json({
        valid: true,
        tier,
        components: tier === 'pro' 
          ? [
              'hero-section-01',
              'pricing-section-01',
              'features-section-01',
              'testimonials-section-01',
              'cta-section-01',
              'faq-section-01'
            ]
          : ['hero-section-01']
      });
    } else {
      return NextResponse.json({
        valid: false,
        tier: 'free',
        components: [],
        message: 'Invalid license key'
      });
    }
  } catch (error) {
    return NextResponse.json(
      { valid: false, message: 'Failed to validate with Gumroad' },
      { status: 500 }
    );
  }
}
