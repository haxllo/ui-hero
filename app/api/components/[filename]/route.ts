import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;
    const licenseKey = request.headers.get('X-License-Key');

    // Validate license for pro components
    const proComponents = [
      'pricing-section-01.tsx',
      'features-section-01.tsx',
      'testimonials-section-01.tsx',
      'cta-section-01.tsx',
      'faq-section-01.tsx'
    ];

    if (proComponents.includes(filename)) {
      if (!licenseKey || licenseKey === 'free') {
        return NextResponse.json(
          { error: 'Pro license required' },
          { status: 403 }
        );
      }

      // In production, validate license key
      if (process.env.NODE_ENV === 'production') {
        const isValid = await validateLicenseKey(licenseKey);
        if (!isValid) {
          return NextResponse.json(
            { error: 'Invalid license key' },
            { status: 403 }
          );
        }
      } else {
        // In dev, accept PRO- prefix
        if (!licenseKey.startsWith('PRO-')) {
          return NextResponse.json(
            { error: 'Pro license required' },
            { status: 403 }
          );
        }
      }
    }

    // Read component file from library-source
    const filePath = path.join(process.cwd(), 'library-source', filename);
    const content = await fs.readFile(filePath, 'utf-8');

    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }
}

async function validateLicenseKey(licenseKey: string): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/validate-license`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ licenseKey })
    });

    const data = await response.json();
    return data.valid && data.tier === 'pro';
  } catch (error) {
    return false;
  }
}
