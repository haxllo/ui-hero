# Test CLI Locally

Quick guide to test the CLI before publishing to npm.

## Setup (One Time)

```bash
# 1. Build the CLI
cd packages/cli
npm install
npm run build

# 2. Link globally
npm link

# 3. Start the dev server (for API endpoints)
cd ../..
npm run dev
```

Keep the dev server running in one terminal.

## Test Commands

### Test List Command

```bash
ui-hero list
```

Expected output:
- Shows FREE tier
- Lists 1 free component
- Lists 5 locked pro components
- Shows upgrade message

### Test Add Command (Free Tier)

```bash
# Create a test Next.js project
cd /tmp
npx create-next-app@latest test-ui-hero --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd test-ui-hero

# Run CLI
ui-hero add

# When prompted:
# 1. Continue anyway? → Yes
# 2. Use Free Tier
# 3. Select hero-section-01
```

Expected result:
```
✓ Downloaded hero-section-01.tsx → components/ui-hero/
```

Verify file created:
```bash
ls -la components/ui-hero/hero-section-01.tsx
cat components/ui-hero/hero-section-01.tsx
```

### Test Add Command (Pro Tier - Dev Mode)

```bash
# In the test project
ui-hero add

# When prompted:
# 1. Continue anyway? → Yes
# 2. Enter License Key
# 3. Enter: PRO-TEST-KEY
# 4. Select multiple components
```

Expected result:
```
✓ License verified! (PRO tier)
✓ Downloaded pricing-section-01
✓ Downloaded features-section-01
```

Verify files:
```bash
ls -la components/ui-hero/
```

### Test Update Command

```bash
# After installing components
ui-hero update
```

Expected output:
```
All components are up to date!
```

### Test Specific Component

```bash
ui-hero add hero-section-01
```

Should install just that component without prompts.

## Test API Endpoints

With dev server running (`npm run dev`):

```bash
# Test registry
curl http://localhost:3000/api/registry | jq

# Test license validation (free)
curl -X POST http://localhost:3000/api/validate-license \
  -H "Content-Type: application/json" \
  -d '{"licenseKey":"free"}' | jq

# Test license validation (pro)
curl -X POST http://localhost:3000/api/validate-license \
  -H "Content-Type: application/json" \
  -d '{"licenseKey":"PRO-TEST"}' | jq

# Test component download (free)
curl http://localhost:3000/api/components/hero-section-01.tsx \
  -H "X-License-Key: free"

# Test component download (pro)
curl http://localhost:3000/api/components/pricing-section-01.tsx \
  -H "X-License-Key: PRO-TEST"

# Test component download (pro - unauthorized)
curl http://localhost:3000/api/components/pricing-section-01.tsx \
  -H "X-License-Key: free"
# Should return 403 Forbidden
```

## Test Imported Components

In your test Next.js project:

```tsx
// app/page.tsx
import Hero from '@/components/ui-hero/hero-section-01';

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

Run dev server:
```bash
npm run dev
```

Open http://localhost:3000 and verify the hero section renders.

## Test Error Cases

### Invalid License Key

```bash
ui-hero add
# Enter: INVALID-KEY
```

Expected: Error message about invalid license

### Non-Next.js Project

```bash
cd /tmp
mkdir not-nextjs && cd not-nextjs
ui-hero add
```

Expected: Warning that it's not a Next.js project, prompt to continue

### Pro Component Without License

```bash
ui-hero add pricing-section-01
# Use free tier
```

Expected: Error that component requires Pro license

## Update CLI Code and Retest

After making changes:

```bash
cd packages/cli

# Rebuild
npm run build

# Test immediately (no need to npm link again)
ui-hero list
```

## Environment Variables for Testing

Create `.env.local` in project root:

```bash
# For local testing, these are optional
# The CLI will use localhost:3000 by default

UI_HERO_REGISTRY_URL=http://localhost:3000/api/registry
UI_HERO_LICENSE_API=http://localhost:3000/api/validate-license
UI_HERO_CDN_URL=http://localhost:3000/api/components
```

## Config File Location

The CLI stores config at:
```bash
~/.ui-hero/config.json
```

View it:
```bash
cat ~/.ui-hero/config.json
```

Delete to reset:
```bash
rm -rf ~/.ui-hero/
```

## Common Issues

### "Module not found" error

```bash
cd packages/cli
npm install
npm run build
npm link
```

### APIs returning 404

Make sure dev server is running:
```bash
npm run dev
```

### Components not downloading

Check that files exist:
```bash
ls library-source/
```

### CLI not updating after changes

Rebuild:
```bash
cd packages/cli
npm run build
```

## Cleanup After Testing

```bash
# Unlink CLI
cd packages/cli
npm unlink -g

# Delete test projects
rm -rf /tmp/test-ui-hero

# Reset config
rm -rf ~/.ui-hero/
```

## Quick Test Script

Save this as `test-cli.sh`:

```bash
#!/bin/bash
set -e

echo "🧪 Testing UI Hero CLI"
echo ""

# Clean slate
rm -rf ~/.ui-hero/

# Test list
echo "1️⃣ Testing list command..."
ui-hero list
echo ""

# Test registry API
echo "2️⃣ Testing registry API..."
curl -s http://localhost:3000/api/registry | jq -r '.version'
echo ""

# Test license API
echo "3️⃣ Testing license API..."
curl -s -X POST http://localhost:3000/api/validate-license \
  -H "Content-Type: application/json" \
  -d '{"licenseKey":"PRO-TEST"}' | jq -r '.tier'
echo ""

echo "✅ All tests passed!"
```

Run it:
```bash
chmod +x test-cli.sh
./test-cli.sh
```

## Ready for Production

Once all tests pass:
1. Follow `CLI_DEPLOYMENT.md` to deploy
2. Update URLs in CLI code to production
3. Rebuild and publish to npm

---

Happy testing! 🚀
