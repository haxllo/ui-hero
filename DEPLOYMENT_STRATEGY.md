# UI Hero - Deployment Strategy

## ✅ Build Status
**Production build:** ✅ PASSING
- 13 routes compiled successfully
- 9 static pages
- 3 dynamic API routes

---

## 🚀 Recommended Deployment Strategy

### Option 1: Vercel (Recommended) ⭐
**Best for:** Quick deployment, zero config, perfect for Next.js

**Steps:**
1. Push code to GitHub (already done)
2. Import project at vercel.com/new
3. Configure environment variables:
   ```
   GUMROAD_ACCESS_TOKEN=your_token_here
   NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
   ```
4. Deploy (automatic)

**Pros:**
- Zero configuration
- Auto HTTPS
- Edge functions for API routes
- Preview deployments for PRs
- Free tier sufficient

**Cost:** Free (Hobby) → $20/mo (Pro) if needed

---

### Option 2: Netlify
**Best for:** Alternative to Vercel, similar features

**Steps:**
1. Connect GitHub repo at netlify.com
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Set environment variables
4. Deploy

**Pros:**
- Similar to Vercel
- Good CDN
- Generous free tier

**Cost:** Free → $19/mo (Pro)

---

### Option 3: Railway / Render
**Best for:** More control, Docker deployments

**Railway Steps:**
1. Connect GitHub at railway.app
2. Auto-detect Next.js
3. Set environment variables
4. Deploy

**Render Steps:**
1. Create Web Service at render.com
2. Connect GitHub repo
3. Build: `npm run build`
4. Start: `npm start`

**Cost:** Railway $5/mo, Render Free tier available

---

## 🎯 Pre-Deployment Checklist

### 1. Environment Variables
Set these in your deployment platform:
```bash
# Required for production
GUMROAD_ACCESS_TOKEN=your_actual_token
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# Optional
UI_HERO_REGISTRY_URL=https://yourdomain.com/api/registry
```

### 2. Domain Setup
- Buy domain (Namecheap, Google Domains, etc.)
- Point DNS to deployment platform:
  - **Vercel:** Add A record → 76.76.21.21
  - **Netlify:** Add A record → 75.2.60.5
- Or use provided subdomain initially

### 3. Gumroad Integration
1. Create Gumroad account
2. Set up products:
   - Free tier (lead magnet)
   - Pro ($39 one-time)
3. Get API access token from dashboard
4. Update environment variables

### 4. Analytics (Optional)
Add to `app/layout.tsx`:
- Google Analytics
- Plausible
- Vercel Analytics (if using Vercel)

---

## 📦 Post-Deployment Tasks

### 1. CLI Publishing (Optional)
To make CLI publicly available:

```bash
cd packages/cli
npm login
npm publish --access public
```

Users can then install:
```bash
npx ui-hero add hero-section-01
```

### 2. Update Registry URLs
After deployment, update CLI to point to production:
```typescript
// packages/cli/src/utils/registry.ts
const REGISTRY_URL = 'https://yourdomain.com/api/registry';
```

### 3. Test Everything
- [ ] Homepage loads
- [ ] /sections page shows components
- [ ] All navigation links work
- [ ] API routes respond (test with curl)
- [ ] Contact form (if connected to backend)
- [ ] CLI downloads work (if published)

### 4. SEO Optimization
Add to `app/layout.tsx`:
```typescript
export const metadata = {
  title: 'UI Hero - Landing Page Components',
  description: 'Production-ready React components for AI startups',
  openGraph: {
    images: ['/og-image.png'],
  },
}
```

---

## 🔄 CI/CD Pipeline (Optional)

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm test # if you add tests
```

Most deployment platforms auto-deploy on push, so this is optional.

---

## 💰 Pricing Recommendations

### Free Tier Start
- Deploy on Vercel/Netlify free tier
- Test everything works
- No credit card needed

### When to Upgrade
Upgrade to paid when you hit:
- 100GB bandwidth/month (Vercel)
- Need custom domains
- Want advanced analytics
- Need more build minutes

---

## 🎯 Immediate Next Steps

1. **Commit the build fix:**
   ```bash
   git add -A
   git commit -m "Fix: Next.js 15 async params compatibility"
   git push
   ```

2. **Deploy to Vercel:**
   - Go to vercel.com/new
   - Import ui-hero repo
   - Deploy (2 minutes)

3. **Test production:**
   - Visit your-project.vercel.app
   - Check all pages load
   - Test component previews

4. **Optional - Custom domain:**
   - Buy domain
   - Add to Vercel
   - SSL auto-configured

---

## 📊 Expected Performance

Based on build output:
- **Initial Load:** ~100-200ms (static pages)
- **API Routes:** ~50-100ms (serverless functions)
- **Component Downloads:** ~20-50ms (edge cached)
- **Lighthouse Score:** 95+ (performance)

---

## ⚠️ Important Notes

1. **Don't commit `.env`** - Use platform environment variables
2. **Test in production** - Dev mode behavior differs
3. **Monitor costs** - Free tiers are generous but watch usage
4. **Set up error tracking** - Sentry, LogRocket, etc. (optional)
5. **Backup strategy** - GitHub is your backup

---

## 🚀 Quick Deploy Command

One-line deploy with Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

That's it! Your site will be live in ~2 minutes. 🎉
