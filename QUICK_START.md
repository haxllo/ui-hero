# ⚡ Quick Start Guide

**Get UI Hero running in 5 minutes.**

---

## 🏃 For Immediate Testing

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

**That's it!** You'll see all 6 landing sections.

---

## 🚀 For Production Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel
npx vercel
```

Follow Vercel prompts → Your site goes live in 2 minutes.

---

## 📝 To Customize

### Change Copy
Open any section file in `components/sections/` and edit the text:

```tsx
// components/sections/ai-hero.tsx
<h1>Make Your AI Startup Look Funded</h1>
// Change to:
<h1>Your Custom Headline Here</h1>
```

### Change Colors
Find the gradient/color classes and update:

```tsx
// Before
className="bg-gradient-to-r from-purple-400 to-pink-400"

// After (your brand colors)
className="bg-gradient-to-r from-blue-500 to-green-500"
```

### Use Individual Sections
Import only what you need:

```tsx
import AIHero from '@/components/sections/ai-hero';
import Pricing from '@/components/sections/pricing';

export default function MyPage() {
  return (
    <main>
      <AIHero />
      <Pricing />
    </main>
  );
}
```

---

## 🐛 Troubleshooting

**Build failing?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Tailwind not working?**
- Check `app/globals.css` has `@import "tailwindcss";`
- Restart dev server

---

## 📚 Need More Help?

- **Full docs:** Read PROJECT_OVERVIEW.md
- **Launch guide:** Read NEXT_STEPS.md
- **Copy options:** Read COPY_TEMPLATES.md
- **Deployment:** Read LAUNCH_CHECKLIST.md

---

## 🎯 Your Next Steps

1. ✅ Test locally (`npm run dev`)
2. 🎨 Customize copy and colors
3. 🚀 Deploy to Vercel
4. 💰 Set up payment (Gumroad)
5. 📢 Launch on Twitter/Product Hunt

**See NEXT_STEPS.md for detailed launch plan.**

---

**Questions?** Everything is documented. Just read the .md files!
