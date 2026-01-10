# UI Hero CLI

Command-line tool to install UI Hero landing sections into your Next.js project.

## Installation

```bash
npx ui-hero@latest add
```

No installation required! Use `npx` to run the latest version.

## Commands

### `add` - Install components

```bash
# Interactive selection
npx ui-hero add

# Install specific components
npx ui-hero add hero-section-01
npx ui-hero add pricing-section-01 features-section-01

# With license key
npx ui-hero add --key YOUR-LICENSE-KEY
```

### `list` - Show available components

```bash
npx ui-hero list
```

### `update` - Update installed components

```bash
npx ui-hero update
```

## How It Works

1. **License Validation**: Enter your license key or use free tier
2. **Component Selection**: Choose components to install
3. **Auto-Detection**: Finds your Next.js project structure
4. **Installation**: Downloads components to `components/ui-hero/`
5. **Ready to Use**: Import and customize

## Usage After Installation

```tsx
import Hero from '@/components/ui-hero/hero-section-01';
import Pricing from '@/components/ui-hero/pricing-section-01';

export default function Page() {
  return (
    <main>
      <Hero />
      <Pricing />
    </main>
  );
}
```

## License Tiers

### Free Tier
- Hero Section (hero-section-01)
- Perfect for testing and personal projects

### Pro Tier ($39)
- All 6 premium sections
- Commercial license
- Lifetime updates
- Purchase at: https://ui-hero.com/pricing

## Components

- `hero-section-01` - AI Hero Section (FREE)
- `pricing-section-01` - Pricing Section (PRO)
- `features-section-01` - Features Grid (PRO)
- `testimonials-section-01` - Social Proof (PRO)
- `cta-section-01` - Final CTA (PRO)
- `faq-section-01` - FAQ Section (PRO)

## Environment Variables

For self-hosted deployments:

```bash
UI_HERO_REGISTRY_URL=https://your-domain.com/api/registry
UI_HERO_LICENSE_API=https://your-domain.com/api/validate-license
UI_HERO_CDN_URL=https://your-domain.com/api/components
```

## Support

- Documentation: https://ui-hero.com/docs
- Issues: https://github.com/ui-hero/cli/issues
- Email: support@ui-hero.com

## License

MIT License - CLI tool is free and open source.
Components require separate license (included with purchase).
