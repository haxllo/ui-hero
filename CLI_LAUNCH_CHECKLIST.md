# 🚀 CLI Launch Checklist

Complete this checklist before publishing to npm and announcing launch.

---

## Phase 1: Local Testing ⚡ (15 minutes)

### Build & Link
- [ ] `cd packages/cli && npm install`
- [ ] `npm run build` succeeds
- [ ] `npm link` completes
- [ ] `ui-hero --version` shows 1.0.0

### Test Commands
- [ ] `ui-hero list` shows all components
- [ ] `ui-hero add` (free tier) works
- [ ] `ui-hero add` (with `PRO-TEST-KEY`) works
- [ ] `ui-hero add hero-section-01` works
- [ ] `ui-hero update` works
- [ ] Files created in `components/ui-hero/`

### Test Dev Server
- [ ] `npm run dev` starts successfully
- [ ] `curl http://localhost:3000/api/registry` works
- [ ] `curl -X POST http://localhost:3000/api/validate-license` works
- [ ] `curl http://localhost:3000/api/components/hero-section-01.tsx` works

---

## Phase 2: Production Deployment 🌐 (30 minutes)

### Vercel Deployment
- [ ] Push code to GitHub
- [ ] Connect repo to Vercel
- [ ] Add environment variables:
  - [ ] `GUMROAD_PRODUCT_ID`
  - [ ] `GUMROAD_API_KEY`
  - [ ] `NEXT_PUBLIC_BASE_URL`
- [ ] Deploy to production
- [ ] Test APIs at production URLs

### API Testing
- [ ] `https://your-domain.com/api/registry` returns JSON
- [ ] `https://your-domain.com/api/validate-license` accepts POST
- [ ] `https://your-domain.com/api/components/hero-section-01.tsx` returns file
- [ ] Pro components require license key
- [ ] Error messages are helpful

---

## Phase 3: Gumroad Setup 💳 (20 minutes)

### Create Product
- [ ] Sign up/login to Gumroad
- [ ] Create product "UI Hero Pro"
- [ ] Set price: $39
- [ ] Enable license key generation
- [ ] Configure variants (if needed)

### Get API Credentials
- [ ] Go to Settings → Advanced
- [ ] Create application
- [ ] Copy API key
- [ ] Copy Product ID
- [ ] Add to Vercel environment variables
- [ ] Redeploy Vercel

### Test Purchase Flow
- [ ] Enable test mode in Gumroad
- [ ] Make test purchase
- [ ] Verify license key received
- [ ] Test key with CLI: `ui-hero add`
- [ ] Verify pro components unlock

---

## Phase 4: CLI Publication 📦 (15 minutes)

### Prepare Package
- [ ] Review `packages/cli/package.json`
- [ ] Update version if needed
- [ ] Check `keywords` are set
- [ ] Verify `bin` path is correct
- [ ] `README.md` is complete

### npm Account
- [ ] Create npm account (npmjs.com)
- [ ] Verify email
- [ ] Enable 2FA (recommended)
- [ ] `npm login` in terminal

### Publish
- [ ] `cd packages/cli`
- [ ] `npm run build`
- [ ] Test locally one more time
- [ ] `npm publish --access public`
- [ ] Wait 5-10 minutes for propagation
- [ ] Test: `npx ui-hero@latest --version`

---

## Phase 5: Final Testing ✅ (20 minutes)

### End-to-End Free Tier
- [ ] Create fresh Next.js project
- [ ] Run `npx ui-hero@latest add`
- [ ] Select free tier
- [ ] Install hero component
- [ ] Verify file created
- [ ] Import in page
- [ ] `npm run dev` works
- [ ] Component renders

### End-to-End Pro Tier
- [ ] Create fresh Next.js project
- [ ] Run `npx ui-hero@latest add`
- [ ] Enter real Gumroad license key
- [ ] Verify pro tier unlocked
- [ ] Install pro components
- [ ] Verify files created
- [ ] Import in page
- [ ] Components render

### Edge Cases
- [ ] Non-Next.js project (shows warning)
- [ ] Invalid license key (shows error)
- [ ] Network offline (uses cache)
- [ ] Component already installed (updates)

---

## Phase 6: Documentation 📚 (10 minutes)

### Update URLs
- [ ] Replace localhost URLs with production
- [ ] Update `README.md` with real URLs
- [ ] Check all documentation files
- [ ] Fix any broken links

### User Documentation
- [ ] `packages/cli/README.md` is complete
- [ ] Installation instructions are clear
- [ ] Usage examples work
- [ ] Troubleshooting section added

### Public Documentation
- [ ] Create GitHub repo (optional)
- [ ] Add README with installation
- [ ] Link to npmjs.com package
- [ ] Link to documentation site

---

## Phase 7: Marketing 📢 (30 minutes)

### Prepare Assets
- [ ] Screenshot of CLI in action
- [ ] GIF/video of installation process
- [ ] Component preview images
- [ ] Before/after examples

### Launch Posts
- [ ] Twitter/X announcement
- [ ] Product Hunt submission
- [ ] LinkedIn post
- [ ] Dev.to article
- [ ] Reddit (r/webdev, r/nextjs)

### Copy Template
```
🚀 Launching UI Hero CLI!

Install beautiful landing sections with one command:
npx ui-hero add

✨ Features:
• 6 conversion-focused sections
• Built for Next.js + Tailwind
• Free tier included
• $39 one-time (no subscription)

Try the free hero section now! 👇
```

---

## Phase 8: Monitoring 📊 (Ongoing)

### Day 1
- [ ] Monitor npm downloads
- [ ] Check Vercel logs for errors
- [ ] Watch for support requests
- [ ] Track Gumroad sales

### Week 1
- [ ] Analyze usage patterns
- [ ] Fix critical bugs
- [ ] Respond to feedback
- [ ] Update documentation

### Month 1
- [ ] Review conversion rate
- [ ] Add requested features
- [ ] Publish case studies
- [ ] Plan next components

---

## Pre-Launch Review ✨

### Security
- [ ] No API keys in code
- [ ] Environment variables set
- [ ] HTTPS everywhere
- [ ] License validation works
- [ ] Rate limiting enabled

### User Experience
- [ ] Installation is smooth
- [ ] Error messages are helpful
- [ ] Components render correctly
- [ ] Documentation is clear
- [ ] Support channel ready

### Business
- [ ] Pricing is clear
- [ ] Payment flow works
- [ ] License delivery works
- [ ] Refund policy set
- [ ] Support email ready

---

## Emergency Contacts 🆘

Before launch, prepare:
- [ ] Support email address
- [ ] Discord/Slack for community
- [ ] GitHub issues (if public)
- [ ] Twitter DMs open

---

## Go/No-Go Decision ✓

Answer YES to all before launching:

- [ ] ✅ CLI works locally
- [ ] ✅ APIs deployed and tested
- [ ] ✅ Gumroad integration working
- [ ] ✅ Free tier accessible
- [ ] ✅ Pro tier requires license
- [ ] ✅ Published to npm
- [ ] ✅ End-to-end tested
- [ ] ✅ Documentation complete
- [ ] ✅ Support ready
- [ ] ✅ Marketing prepared

**If all checked: You're ready to launch! 🚀**

---

## Post-Launch Tasks 🎉

### First 24 Hours
- [ ] Monitor for critical bugs
- [ ] Respond to feedback
- [ ] Thank early adopters
- [ ] Share testimonials

### First Week
- [ ] Write launch retrospective
- [ ] Plan improvements
- [ ] Update roadmap
- [ ] Celebrate! 🎊

---

## Support Resources

- **Documentation:** All `*_CLI*.md` files
- **Testing:** `TEST_CLI_LOCALLY.md`
- **Deployment:** `CLI_DEPLOYMENT.md`
- **Overview:** `CLI_SETUP_COMPLETE.md`

---

## 🎯 Success Metrics

Track these after launch:
- npm downloads per week
- Free → Pro conversion rate
- Average revenue per user
- Support tickets per sale
- Component usage stats

---

**Good luck with your launch! 🚀**

Remember: Perfect is the enemy of done. Ship it, iterate, improve!
