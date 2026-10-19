# AENSWER.PH — Digital Solutions & Future Digital Services Marketplace

> **Brand:** Aenswer.ph (Aenswer Digital Solutions)  
> **Taglines:** *"Your Digital Partner. Your Answer."* | *"Filipino Creativity. Global Solutions."* | *"May Problema sa Digital? May Aenswer."*  
> **Target Markets:** Philippine SMEs & Entrepreneurs (Primary) | Global Tech Innovators (Secondary)  
> **Operating Model:** Project-Based Agency & Recurring Maintenance → Scalable Verified Services Marketplace

---

## 1. System Overview & Architecture

Aenswer.ph is built with a modern, high-performance, mobile-first tech stack engineered specifically to overcome local 4G mobile latency constraints in the Philippines while maintaining international engineering rigor:

- **Framework:** Next.js 14 (App Router, Static Site Generation + Serverless Edge Handlers)
- **Language:** TypeScript 5.6 (Strict Type Safety)
- **Styling & Design System:** Tailwind CSS 3.4 with custom Aenswer Brand tokens and glassmorphism
- **Iconography:** Lucide Icons (clean, lightweight SVG)
- **Validation & Anti-Spam:** Zod schema validation, honeypot trap, submission velocity gating, and in-memory IP rate limiting
- **Zero Paid APIs:** Free and open-source foundation requiring zero paid SaaS subscriptions for local operation and development.

---

## 2. Visual Identity & Brand Design Tokens

Inspired by modern Philippine technology aesthetics, combining the Philippine sun motif, the iconic Mount Mayon silhouette, and contemporary dark mode glassmorphism:

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Deep Navy** | `#071426` | Primary background, root layout, and hero canvas |
| **Charcoal** | `#101820` | Secondary cards, contrast sections, and code blocks |
| **Technology Blue** | `#1769E0` | Primary interactive elements, badges, and focus rings |
| **Warm Gold** | `#F5C76B` | Brand highlights, Philippine Sun emblems, primary CTAs |
| **Accent Red** | `#D62839` | Subtle tricolor ribbon accents, form validation alerts |
| **White** | `#FFFFFF` | Crisp headlines and high-contrast body copy |
| **Muted Gray** | `#AEB8C8` | Secondary descriptions, timestamps, and subtitles |

---

## 3. Website Routes & Architecture

All pages are implemented with unique SEO titles, canonical links, Open Graph cards, and structured Schema.org JSON-LD data:

- `/` — Flagship Homepage (Hero, Core Capabilities, Services Catalog, Filterable Portfolio, Interactive Cost Estimator, PHP/USD Pricing, Process, FAQs, Final CTA)
- `/services` — All Services Overview
- `/web-design-philippines` — Custom Web Design & Mobile-First Development
- `/ai-automation` — AI Chatbots & Business Workflow Automation
- `/digital-marketing` — Conversion Rate Optimization, Analytics & Technical SEO
- `/video-graphic-design` — Short-Form Video Ads (TikTok/Reels) & Graphic Creatives
- `/blockchain-development` — Audited Solidity Smart Contracts & EVM Engineering
- `/web3-development` — Web3 dApps & Wallet Connectivity (Wagmi/Viem)
- `/portfolio` — Filterable Case Studies (Web, AI, Creative, Blockchain) with honest labels
- `/pricing` — Philippine Peso (₱) and International Dollar ($) Package Table
- `/about` — Company Story, Filipino Roots, Brand Principles, and Long-Term Marketplace Vision
- `/contact` — Project Inquiries with validated brief intake form
- `/blog` — Educational Articles & Strategy Guides
- `/blog/[slug]` — Individual SEO Articles with inline project CTAs
- `/privacy` — Privacy Policy compliant with Republic Act No. 10173 (Philippine Data Privacy Act) & GDPR
- `/terms` — Terms of Service, Milestone Engagement Policies, and 100% Code Ownership Guarantees
- `/sitemap.xml` — Dynamic XML Sitemap
- `/robots.txt` — Search Engine Indexing Directives
- `/api/inquiry` — Secure Server-Side Project Inquiry Submission & Webhook Relay

---

## 4. Windows PowerShell Setup & Workflow

### Prerequisites
- Node.js (v18.17+ or v20+ / v24+)
- npm (v9+)
- Windows 10/11 with PowerShell

### Quick Start Commands
Run the following commands in PowerShell from the repository root:

```powershell
# 1. Install dependencies
npm install

# 2. Copy environment configuration
Copy-Item .env.example .env.local

# 3. Run automated integrity and validation tests
npm test

# 4. Start local development server (http://localhost:3000)
npm run dev

# 5. Build for production (Static generation & typechecking)
npm run build

# 6. Start production server locally
npm start
```

---

## 5. Testing & Quality Assurance Report

The system includes an automated test runner (`tests/verify-system.mjs`) and live route verifications:

### Automated Test Suite Results
```text
--- RUNNING AENSWER.PH AUTOMATED INTEGRITY TESTS ---
[PASS] Business Landing Page price is ₱7,500 / $250
[PASS] Full Business Website price is ₱15,000 / $500
[PASS] Automation Starter price is ₱12,000 / $350
[PASS] Video & Graphic Ads Package price is ₱4,000 / $100
[PASS] Blockchain Engineering is Custom Quotation
[PASS] Service URL slug /web-design-philippines exists and is configured
[PASS] Service URL slug /ai-automation exists and is configured
[PASS] Service URL slug /digital-marketing exists and is configured
[PASS] Service URL slug /video-graphic-design exists and is configured
[PASS] Service URL slug /blockchain-development exists and is configured
[PASS] Service URL slug /web3-development exists and is configured
[PASS] At least 4 educational articles exist (Found 4)
[PASS] Post "How Much Does a Website Cost in the Philippines? Complete 2026 Pricing Guide" has valid slug and content
[PASS] Post "How Philippine Businesses Can Save 20+ Hours Weekly with Practical AI Automation" has valid slug and content
[PASS] Post "Why Website Speed is the #1 Conversion Factor for Philippine Online Shoppers" has valid slug and content
[PASS] Post "Beyond Crypto Speculation: Real-World Blockchain & Smart Contract Utility" has valid slug and content
[PASS] Valid inquiry payload passes validation
[PASS] Spam honeypot detection catches automated bots
[PASS] Privacy policy consent is strictly required
[PASS] Reject inquiries with insufficient project description
TEST RESULTS: 20 PASSED, 0 FAILED.
```

### HTTP End-to-End Route Audits
All 17 application routes and API endpoints were verified over HTTP with status code `200 OK` (Static & Dynamic) and `201 Created` on the inquiry endpoint with automated honeypot bot rejection `400 Bad Request`.

---

## 6. Dependency & Open-Source License Inventory

Every dependency selected is free, open-source, and permissive for commercial use:

| Package | Version | License | Justification |
| :--- | :--- | :--- | :--- |
| `next` | `14.2.24` | MIT | Static site generation, edge routing, and image optimization |
| `react` & `react-dom` | `18.3.1` | MIT | Component architecture and fast client hydration |
| `tailwindcss` | `3.4.14` | MIT | Utility-first responsive CSS and brand color design tokens |
| `lucide-react` | `0.453.0` | ISC | Lightweight, accessible SVG interface icons |
| `zod` | `3.x / 4.x` | MIT | Type-safe schema validation for form submissions & API routes |
| `tsx` | `4.23.15` | MIT | Fast, zero-config TypeScript execution for test runners |
| `typescript` | `5.6.3` | Apache-2.0 | Compile-time typechecking and contract interfaces |

*No paid third-party APIs or subscription licenses are required for this deployment.*

---

## 7. Security, Anti-Spam & Privacy Architecture

1. **Anti-Spam Honeypot:** Form incorporates an invisible trap field (`websiteUrl`). Automated spam scripts populate this field, triggering immediate rejection.
2. **Submission Timing Gating:** Human submissions require at least 2.5 seconds to complete; programmatic bot injections under 2.5 seconds are flagged.
3. **In-Memory Rate Limiting:** Enforces maximum 5 inquiry requests per minute per IP to protect serverless instances from denial-of-service abuse.
4. **Data Privacy Act (RA 10173) Compliance:** Explicit client consent required before submission. No data selling or marketing broker sharing.
5. **Zero Financial Credential Collection:** Strict security boundary stating Aenswer will never request seed phrases, private keys, or credit card passwords.

---

## 8. Deployment Guide

### Free-Tier Cloudflare Pages Deployment
1. Connect your GitHub repository to Cloudflare Pages.
2. Select framework preset: **Next.js**.
3. Build command: `npx @cloudflare/next-on-pages` or `npm run build`.
4. Output directory: `.vercel/output/static` or standard static export.
5. Set environment variable `NEXT_PUBLIC_SITE_URL=https://aenswer.ph`.

### Vercel Hobby Tier Deployment
1. Import repository on [Vercel](https://vercel.com).
2. Framework preset: **Next.js**.
3. Set environment variables from `.env.example`.
4. Click **Deploy**.

---

## 9. Future Digital Services Marketplace Roadmap

| Phase | Milestone | Focus Areas |
| :--- | :--- | :--- |
| **Phase 1** *(Current)* | **Agency Foundation** | Direct client services, verified portfolio, transparent PHP/USD pricing, and automated lead triage. |
| **Phase 2** | **Provider Registration** | Onboarding vetted Filipino freelancers (designers, developers, AI builders) with identity verification. |
| **Phase 3** | **Milestone Escrow** | Smart contract / fiat milestone escrow holding funds securely until deliverable verification. |
| **Phase 4** | **Decentralized Reputation** | On-chain or cryptographic proof-of-completion metrics preventing fake reviews. |

---

&copy; 2026 Aenswer Digital Solutions (Aenswer.ph). Proudly Filipino-founded.
