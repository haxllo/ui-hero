# UI Hero Project Overview

UI Hero is a comprehensive landing page section toolkit designed specifically for AI startups. It provides 6 production-ready, conversion-focused landing sections built with Next.js and Tailwind CSS. The project includes both a web application for previewing components and a CLI tool for easy installation.

## Project Structure

```
ui-hero/
├── app/                    # Next.js app router pages
│   ├── api/                # API endpoints for CLI system
│   ├── sections/           # Sections preview page
│   └── ...                 # Other pages
├── components/             # Component library
│   ├── library/            # Additional components
│   ├── sections/           # Original section components
│   └── ui-hero/            # Updated UI components (minimalist versions)
├── library-source/         # Source of truth for components
├── packages/               # CLI package
│   └── cli/                # UI Hero CLI tool
├── public/                 # Static assets
├── .gitignore
├── .vercelignore
├── README.md               # Main project documentation
├── README_CLI.md           # CLI system documentation
├── package.json            # Project dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── ...                     # Documentation files
```

## Core Components

The project includes 6 core landing page sections:

1. **Hero Section** - Eye-catching introduction with gradient headlines
2. **Features Section** - Grid layout showcasing product features
3. **Testimonials Section** - Social proof with customer quotes
4. **Pricing Section** - Tiered pricing with highlighted plan
5. **FAQ Section** - Accordion-style frequently asked questions
6. **CTA Section** - Conversion-focused call-to-action

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: Node.js
- **Package Manager**: npm
- **CLI Tool**: Commander.js, @clack/prompts

## Key Features

### Web Application
- Interactive preview of all 6 components
- Browser mockup interface for component viewing
- Copy-to-clipboard functionality
- Responsive design

### CLI Tool
- Interactive component selection
- License key validation (Gumroad integration)
- Free tier (1 component) and Pro tier (6 components)
- Auto-detection of Next.js projects
- Version tracking and updates
- Beautiful terminal UI

## Development Setup

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Running the Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production
```bash
npm run build
```

### Starting Production Server
```bash
npm start
```

## Component Architecture

The project maintains components in multiple locations:
- `library-source/` - Source of truth for components
- `components/ui-hero/` - Updated minimalist versions
- `components/sections/` - Original section components

Both the library-source and ui-hero directories should contain identical content for consistency.

## CLI Usage

Users can install components with a single command:
```bash
npx ui-hero add
```

Available commands:
- `npx ui-hero add` - Install components interactively
- `npx ui-hero add [names...]` - Install specific components
- `npx ui-hero list` - Show all available components
- `npx ui-hero update` - Update installed components
- `npx ui-hero --version` - Show CLI version
- `npx ui-hero --help` - Show help

## Business Model

- **Free Tier**: 1 component for personal projects
- **Pro Tier**: $39 one-time payment for all 6 sections
- Includes commercial license and lifetime updates
- Uses Gumroad for payment processing

## Recent Changes

The project has been updated with minimalist designs for the Hero and FAQ sections:
- Hero section now features clean typography and subtle geometric elements
- FAQ section uses a cleaner accordion design with SVG icons
- Preview heights on the sections page have been adjusted for better display

## Deployment

The application is designed for deployment on Vercel with serverless API endpoints for the CLI system. The CLI tool is published to npm for easy installation.

## Documentation

Comprehensive documentation is available in multiple files:
- `README.md` - Main project overview
- `README_CLI.md` - CLI system documentation
- `PROJECT_OVERVIEW.md` - Detailed project architecture
- `CLI_DEPLOYMENT.md` - Deployment instructions
- `TEST_CLI_LOCALLY.md` - Testing guide