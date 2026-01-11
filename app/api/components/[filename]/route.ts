import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const licenseKey = request.headers.get('X-License-Key') || 'free';

  // 1. Validate Access
  // In a real app, you would check a database here.
  // For now: 'free' key only gets 'hero-section-01.tsx'
  if (licenseKey === 'free' && filename !== 'hero-section-01.tsx') {
    return new NextResponse('Upgrade to Pro to access this component', { status: 403 });
  }

  // 2. Validate Filename (Security)
  // Only allow alphanumeric, dashes, and .tsx extension
  if (!/^[a-zA-Z0-9-]+\.tsx$/.test(filename)) {
    return new NextResponse('Invalid filename', { status: 400 });
  }

  // 3. Read File
  try {
    const filePath = path.join(process.cwd(), 'library-source', filename);
    const content = await fs.readFile(filePath, 'utf-8');
    
    return new NextResponse(content, {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (error) {
    console.error(`Failed to read file: ${filename}`, error);
    return new NextResponse('Component not found', { status: 404 });
  }
}