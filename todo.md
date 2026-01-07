# Portfolio Update Implementation Plan

## Overview
This document outlines all changes required to update the portfolio with accurate information and real projects.

---

## Phase 1: Technology Stack Updates

### 1.1 Update "Technologies I work with" in Hero Section
**File:** `src/components/sections/Hero.tsx`
- [ ] Remove: Angular
- [ ] Add: Express, Next.js, Supabase, GCP, PostgreSQL

### 1.2 Remove MEAN/Angular References Globally
**Files to update:**
- [ ] `src/app/layout.tsx` - Update metadata keywords
- [ ] `src/components/sections/Hero.tsx` - Tech badges
- [ ] `src/data/projects.ts` - Skills array
- [ ] `src/app/about/page.tsx` - Floating tech icons, any Angular mentions
- [ ] `src/app/resume/page.tsx` - Skills section

---

## Phase 2: Personal Information Updates

### 2.1 Update "My Journey" Section
**File:** `src/app/about/page.tsx`
- [ ] Change "Shopify development" to "Shopify App development (private and public apps)"

### 2.2 Update PinkSurfing Role
**File:** `src/data/projects.ts` (experience array)
- [ ] Change position from "Full-Stack Developer" to "Backend Developer"

---

## Phase 3: Projects Overhaul

### 3.1 Replace All Projects in `src/data/projects.ts`

**Remove all 6 fake projects and add these 8 real projects:**

---

#### Project 1: Where Works
- **Company:** Syntecx Solutions
- **Category:** web
- **Live URL:** https://where.works/
- **Description:** Cloud-based tracking platform providing affordable tracking solutions for businesses
- **Technologies:** WordPress, PHP, WooCommerce, CSS Grid, JavaScript, Contact Form 7, MySQL
- **Features:**
  - Cloud-based tracking infrastructure
  - Industry-specific solutions
  - Component-based modular architecture
  - Business analytics and reporting
  - Mobile-responsive design
- **Has Live Link:** Yes

---

#### Project 2: VoiceForge
- **Company:** PinkSurfing
- **Category:** saas
- **Live URL:** None (not deployed)
- **Description:** Advanced speech recognition platform with real-time WebSocket streaming, a Deepgram clone built using Whisper
- **Technologies:** Python, FastAPI, WebSocket, PostgreSQL, OpenAI Whisper, JWT, Google OAuth, Docker
- **Features:**
  - Real-time speech recognition with sub-500ms latency
  - Speaker diarization (up to 10 speakers)
  - Language auto-detection (5 languages)
  - Advanced noise reduction
  - Interactive playground with drag-and-drop
  - Google OAuth authentication
  - Developer portal with API key management
  - 99%+ accuracy across 100+ languages
- **Has Live Link:** No - NEEDS SCREENSHOTS

---

#### Project 3: Muscled Sektions
- **Company:** MUSCLED Inc
- **Category:** shopify
- **Live URL:** None (just submitted for review)
- **Description:** Shopify Public App - Auto-import section marketplace (clone of Sections Store with enhanced modules)
- **Technologies:** React, Node.js, Shopify API, Liquid, GitHub Webhooks, Google Cloud Storage, PostgreSQL
- **Features:**
  - Auto-import sections from GitHub repository
  - Webhook-triggered section syncing
  - Admin approval workflow
  - Section metadata validation
  - Preview and thumbnail image support
  - Category-based organization (30+ categories)
  - Paid/Free section support with discounts
  - Asset management (CSS/JS/snippets)
- **Has Live Link:** No - NEEDS SCREENSHOTS

---

#### Project 4: BrightLink Quote Management
- **Company:** MUSCLED Inc
- **Category:** shopify
- **Live URL:** None (private app for brightlinkav.com)
- **Description:** Private Shopify App for quote management - Complete quote creation and approval workflow system
- **Technologies:** Remix.js, React, TypeScript, PostgreSQL, Prisma ORM, Shopify Polaris, Node.js, Express, Puppeteer, Nodemailer
- **Features:**
  - Complete quote creation and approval workflow
  - Customer and space management
  - Role-based permissions (Salesperson, Admin, Customer)
  - Analytics dashboard with performance metrics
  - PDF quote generation
  - Email integration with OAuth2
  - Shopify product catalog integration
  - Multi-tier payment processing
- **Has Live Link:** No - NEEDS SCREENSHOTS

---

#### Project 5: 11Pay App
- **Company:** Fiverr Freelance
- **Category:** mobile
- **Live URL:** https://apps.apple.com/de/app/11pay-mannschaftskasse/id6755011188
- **Description:** Team finance management mobile app with smart automatic payment allocation (worked on backend)
- **Technologies:** React Native, Expo SDK 53, TypeScript, Supabase, PostgreSQL, Node.js
- **Features:**
  - Smart auto-payment allocation system (USP)
  - Team creation and member management
  - Role-based permissions (Admin, Treasurer, Player)
  - Real-time balance calculations
  - Transaction history with audit trail
  - German language support
  - Row Level Security (RLS)
  - Offline support and caching
- **Has Live Link:** Yes (App Store)
- **Note:** Worked on backend only

---

#### Project 6: StyleUP
- **Company:** MUSCLED Inc (Currently Working)
- **Category:** shopify
- **Live URL:** None (70% complete)
- **Description:** Shopify Public App - Conversion booster with customizable app blocks (clone of Sternify)
- **Technologies:** Remix 2.14, Express, Prisma 6, PostgreSQL, Shopify Polaris 13, TailwindCSS, i18next, TypeScript
- **Features:**
  - 20+ conversion-boosting app blocks
  - Social proof elements (ratings, reviews)
  - Trust builders (payment icons, guarantees)
  - Inventory alerts and urgency elements
  - Theme sections (headers, footers, FAQ)
  - One-click block installation via deep linking
  - Multi-theme support
  - Subscription billing with free trial
  - Internationalization (DE/EN)
- **Has Live Link:** No - NEEDS SCREENSHOTS

---

#### Project 7: AK K9 Security Services
- **Company:** Freelance
- **Category:** web
- **Live URL:** https://www.akk9securityservices.co.uk/
- **Description:** Professional website for London-based security firm offering K9 units and security services
- **Technologies:** Next.js, React, TypeScript, Tailwind CSS, Vercel
- **Features:**
  - Service showcase (Man Guarding, K9 Units, CCTV, Events)
  - Mobile-responsive design
  - Contact forms
  - Service area coverage display
  - Client testimonials section
  - SEO optimized
- **Has Live Link:** Yes

---

#### Project 8: Zenith Med Care
- **Company:** Freelance
- **Category:** web
- **Live URL:** https://zenithmedcare.com/
- **Description:** Medical billing and revenue cycle management company website
- **Technologies:** Next.js, React, TypeScript, Tailwind CSS, Vercel
- **Features:**
  - Service pages (Medical Billing, RCM, Credentialing, AR Management)
  - Performance metrics display
  - Multi-step onboarding process showcase
  - Client testimonials
  - HIPAA compliance information
  - Contact and consultation forms
  - Mobile-responsive design
- **Has Live Link:** Yes

---

## Phase 4: Screenshot Requirements

### Recommended Screenshot Specifications

**For Desktop Views:**
- **Ratio:** 16:9
- **Size:** 1920x1080px or 1280x720px
- **Format:** PNG or WebP

**For Dashboard/App Views:**
- **Ratio:** 16:10 or 4:3
- **Size:** 1440x900px or 1200x900px

**For Mobile Views (optional):**
- **Ratio:** 9:19.5 (iPhone style)
- **Size:** 390x844px

### Projects Requiring Screenshots:

| Project | Screenshots Needed | Suggested Views |
|---------|-------------------|-----------------|
| VoiceForge | 3-4 | Landing page, Playground, Developer Portal, Documentation |
| Muscled Sektions | 3-4 | Dashboard, Section list, Section detail, Admin panel |
| BrightLink Quote | 3-4 | Dashboard, Quote creation, Quote detail, Analytics |
| StyleUP | 3-4 | Dashboard, Blocks page, Theme editor integration, Settings |

### Screenshot Storage
- [ ] Create `/public/images/projects/` directory
- [ ] Subdirectories: `voiceforge/`, `muscled-sektions/`, `brightlink/`, `styleup/`

---

## Phase 5: Update Skills Matrix

### File: `src/data/projects.ts` (skills array)

**Frontend Development:**
- [ ] Remove: Angular
- [ ] Keep: React, Next.js, TypeScript, Tailwind CSS, Redux, etc.
- [ ] Add: Remix (if not present)

**Backend Development:**
- [ ] Add: Express.js (ensure present)
- [ ] Add: Supabase
- [ ] Keep: Node.js, MongoDB, PostgreSQL

**Cloud & DevOps:**
- [ ] Add: GCP (Google Cloud Platform)
- [ ] Add: Supabase
- [ ] Keep: AWS, Docker, Vercel

**Specialized Technologies:**
- [ ] Ensure Shopify APIs present
- [ ] Add: Prisma ORM
- [ ] Add: WebSocket

---

## Phase 6: Resume Page Update

### File: `src/app/resume/page.tsx`

After completing Phases 1-5:
- [ ] Update Technical Skills section (remove Angular/MEAN, add new techs)
- [ ] Update Professional Experience (PinkSurfing as Backend Developer)
- [ ] Update Key Projects section with real projects
- [ ] Verify all information matches updated data

---

## Phase 7: Component Updates

### 7.1 Update ProjectCard Component
**File:** `src/components/ui/ProjectCard.tsx`
- [ ] Ensure it handles projects without live links gracefully
- [ ] Add support for displaying screenshots/images
- [ ] Consider adding "In Progress" badge for StyleUP

### 7.2 Update Projects Page Filter
**File:** `src/app/projects/page.tsx`
- [ ] Verify filters work with new categories (web, shopify, saas, mobile)
- [ ] Update category counts

---

## Phase 8: Testing & Verification

- [ ] Run `npm run build` to check for errors
- [ ] Test all pages render correctly
- [ ] Verify all links work
- [ ] Check responsive design on mobile
- [ ] Validate contact form still works
- [ ] Review SEO metadata is accurate

---

## Implementation Order

1. **Phase 1** - Technology Stack Updates (global changes first)
2. **Phase 2** - Personal Information Updates
3. **Phase 3** - Projects Data Overhaul
4. **Phase 5** - Skills Matrix Update
5. **Phase 7** - Component Updates (if needed)
6. **Phase 6** - Resume Page Update (after all data is finalized)
7. **Phase 4** - Add Screenshots (user provides, we integrate)
8. **Phase 8** - Testing & Verification

---

## Notes

- All changes should preserve existing styling and animations
- Test after each phase to catch issues early
- Screenshots can be added later - projects will show placeholder initially
- Keep backup of original `projects.ts` before major changes
