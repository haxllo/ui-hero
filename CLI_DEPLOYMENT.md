# CLI Deployment Guide

Complete guide to deploying the UI Hero CLI system.

## Architecture

```
User runs: npx ui-hero add
         ↓
CLI Tool (npm package)
         ↓
    ┌────┴────┬──────────┬──────────┐
    ↓         ↓          ↓          ↓
Registry   License   Components   Gumroad
  API       API        CDN         API
```

## Part 1: Deploy API Endpoints (Vercel)

### 1.1 Set Up Environment Variables

In your Vercel project dashboard, add:

```bash
# For production Gumroad integration
GUMROAD_PRODUCT_ID=your_product_id_here
GUMROAD_API_KEY=your_api_key_here

# Base URL for API calls
NEXT_PUBLIC_BASE_URL=https://ui-hero.com
```

### 1.2 Deploy to Vercel

```bash
cd /home/ciqada/Projects/ui-hero
vercel --prod
```

Your APIs will be available at:
- `https://ui-hero.com/api/registry`
- `https://ui-hero.com/api/validate-license`
- `https://ui-hero.com/api/components/[filename]`

### 1.3 Test APIs

```bash
# Test registry
curl https://ui-hero.com/api/registry

# Test license validation (dev mode)
curl -X POST https://ui-hero.com/api/validate-license \
  -H "Content-Type: application/json" \
  -d '{"licenseKey":"PRO-TEST-KEY"}'

# Test component download (free tier)
curl https://ui-hero.com/api/components/hero-section-01.tsx \
  -H "X-License-Key: free"
```

## Part 2: Publish CLI to npm

### 2.1 Prepare for Publishing

```bash
cd packages/cli

# Update version in package.json if needed
npm version patch  # or minor, or major

# Test build
npm run build

# Test CLI locally
npm link
ui-hero list
```

### 2.2 Create npm Account

```bash
# Create account at https://www.npmjs.com/signup
# Or login
npm login
```

### 2.3 Publish to npm

```bash
# First time publish
npm publish --access public

# Future updates
npm version patch
npm publish
```

The CLI will be available as:
```bash
npx ui-hero@latest add
```

## Part 3: Configure Gumroad

### 3.1 Get API Credentials

1. Go to https://app.gumroad.com/settings/advanced
2. Create application → Get API key
3. Note your Product ID from product settings

### 3.2 Set Up License Keys

In Gumroad product settings:
- Enable "Generate license keys"
- Choose license key format
- Set up variants (Free, Pro, etc.)

### 3.3 Update Environment Variables

Add to Vercel:
```bash
GUMROAD_PRODUCT_ID=abc123xyz
GUMROAD_API_KEY=your-secret-key
```

Redeploy:
```bash
vercel --prod
```

## Part 4: Testing Full Flow

### 4.1 Test Free Tier

```bash
# In a test Next.js project
npx ui-hero add

# Select: Use Free Tier
# Choose: hero-section-01
# Verify file created in components/ui-hero/
```

### 4.2 Test Pro Tier (Dev Mode)

```bash
npx ui-hero add

# Enter license key: PRO-TEST-KEY
# Select any pro components
# Verify files created
```

### 4.3 Test Real Purchase

1. Buy product on Gumroad (test mode)
2. Get license key from email
3. Run: `npx ui-hero add`
4. Enter real license key
5. Verify validation works

## Part 5: Monitoring & Maintenance

### 5.1 Monitor Usage

Track in Vercel Analytics:
- API request counts
- Error rates
- Response times

### 5.2 Update Components

When you update components:

```bash
# Update version in app/api/registry/route.ts
# Change component version number

# Users run to update
npx ui-hero update
```

### 5.3 CLI Updates

When updating CLI:

```bash
cd packages/cli

# Make changes
# Update version
npm version patch

# Build and publish
npm run build
npm publish

# Users automatically get latest with npx
npx ui-hero@latest add
```

## Troubleshooting

### CLI Not Found After Publishing

Wait 5-10 minutes for npm registry to propagate, or:
```bash
npm cache clean --force
```

### License Validation Failing

Check:
1. Environment variables set correctly in Vercel
2. Gumroad API key is valid
3. Product ID matches
4. License key is active in Gumroad dashboard

### Components Not Downloading

Verify:
1. Files exist in `library-source/`
2. API route is accessible
3. License validation is passing
4. CORS headers if needed

## URLs to Test

After deployment, verify these work:

- ✅ Registry: https://ui-hero.com/api/registry
- ✅ License: https://ui-hero.com/api/validate-license (POST)
- ✅ Component: https://ui-hero.com/api/components/hero-section-01.tsx
- ✅ NPM: https://www.npmjs.com/package/ui-hero

## Security Checklist

- [ ] Gumroad API key in environment variables (not code)
- [ ] License validation in production mode
- [ ] Rate limiting on API endpoints
- [ ] HTTPS only for all endpoints
- [ ] Pro components require valid license
- [ ] Error messages don't leak sensitive info

## Cost Estimates

- Vercel: $0-20/month (free tier covers most)
- npm: Free (public packages)
- Domain: $10/year (if needed)
- Gumroad: 10% per transaction

## Launch Checklist

Before announcing:

- [ ] APIs deployed and tested
- [ ] CLI published to npm
- [ ] Gumroad integration working
- [ ] Documentation updated
- [ ] Test purchase flow works end-to-end
- [ ] Free tier accessible without purchase
- [ ] Error messages are helpful
- [ ] README has clear instructions

## Support Plan

Prepare for common issues:

1. **License key not working**
   - Check Gumroad dashboard
   - Verify email used for purchase
   - Resend license key

2. **CLI failing to install**
   - Check Next.js project structure
   - Verify Node.js version (18+)
   - Try manual component path

3. **Components not appearing**
   - Check import paths
   - Verify file permissions
   - Check project structure detection

---

**Next Steps:**
1. Deploy to Vercel
2. Publish CLI to npm
3. Test with real purchase
4. Announce launch!
