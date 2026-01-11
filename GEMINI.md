# UI Hero - Project Context for Gemini

## 1. Project Overview

**UI Hero** is a dual-purpose project:
1.  **A Next.js Web Application:** A landing page kit specifically designed for AI startups to build credible landing pages quickly.
2.  **A CLI Tool (`@ciqada/ui-hero`):** A command-line utility to let users easily install these landing sections into their own Next.js projects.

**Core Value:** "Make Your AI Startup Look Funded." Focuses on conversion, speed, and credibility over complex aesthetics.

## 2. Architecture & Tech Stack

### Web Application (Root)
*   **Framework:** Next.js 16.1.1 (App Router)
*   **Styling:** Tailwind CSS v4 (Zero runtime JS for styles)
*   **Language:** TypeScript
*   **Design:** Mobile-first, "Zero dependencies" philosophy (no shadcn/ui, MUI, etc. for the core components).

### CLI Package (`packages/cli`)
*   **Runtime:** Node.js
*   **Build Tool:** `tsup`
*   **Dev Tool:** `tsx`
*   **Libraries:** `commander`, `@clack/prompts`, `ora`, `chalk`.

## 3. Key Directories

```
ui-hero/
├── app/                  # Next.js App Router pages (marketing site)
├── components/
│   ├── sections/         # The components used in the marketing site itself
│   └── ui-hero/          # (Likely) testing ground for CLI-installed components
├── library-source/       # The SOURCE of truth for components distributed via CLI
├── packages/
│   └── cli/              # The CLI tool source code
├── public/               # Static assets
└── ...config files       # tailwind.config.ts, next.config.ts, etc.
```

## 4. Development Workflow

### Main Web App
*   **Install:** `npm install`
*   **Run Dev:** `npm run dev` (Starts at http://localhost:3000)
*   **Build:** `npm run build`

### CLI Tool
*   **Location:** `cd packages/cli`
*   **Install:** `npm install`
*   **Run Dev:** `npm run dev` (Runs `src/index.ts` via `tsx`)
*   **Build:** `npm run build` (Outputs to `dist/`)
*   **Test Locally:** See `TEST_CLI_LOCALLY.md` for specific instructions on linking/testing the CLI against the main project.

## 5. Coding Conventions

*   **Styling:** Use Tailwind utility classes. Avoid custom CSS files unless absolutely necessary.
*   **Components:**
    *   Keep them self-contained.
    *   **Zero Dependencies:** Do not introduce external UI libraries.
    *   **Copy:** Use "Outcome-Focused" copy (e.g., "Ship fast" vs "High performance").
*   **Type Safety:** Strict TypeScript usage. Define interfaces for component props.
*   **Images:** Use placeholders or standard Next.js `<Image>` optimized components.

## 6. Business Logic Context
*   **Pricing:** Free Tier (3 sections) vs. Pro Tier ($39, 6 sections + commercial license).
*   **Target Audience:** AI Startup Founders, Solo Founders.
*   **Key Sections:** Hero, How it Works, Features, Social Proof, Pricing, CTA.

## 7. Important References
*   `PROJECT_OVERVIEW.md`: Detailed product vision and roadmap.
*   `CLI_DEPLOYMENT.md`: Instructions for releasing the CLI.
*   `library-source/`: When modifying the *product* (what users get), edit files here.
