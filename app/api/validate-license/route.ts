import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey } = body;

    if (!licenseKey) {
      return NextResponse.json(
        { valid: false, message: 'License key required' },
        { status: 400 }
      );
    }

    // Secure Validation: Check against Environment Variable
    // In Vercel Settings, add VALID_LICENSE_KEYS="key_1,key_2,key_3"
    const validKeys = (process.env.VALID_LICENSE_KEYS || '')
      .split(',')
      .map(key => key.trim())
      .filter(key => key.length > 0);

    if (validKeys.includes(licenseKey)) {
      return NextResponse.json({
        valid: true,
        tier: 'pro',
        components: ['all']
      });
    }

    // Invalid Key
    return NextResponse.json({
      valid: false,
      tier: 'free',
      message: 'Invalid or expired license key'
    });

  } catch (error) {
    console.error('License validation error:', error);
    return NextResponse.json(
      { valid: false, message: 'Server error during validation' },
      { status: 500 }
    );
  }
}
