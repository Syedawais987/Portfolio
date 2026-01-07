# Screenshots & Video Guide for Portfolio

## Overview

This guide outlines the screenshots and intro video needed for the portfolio.

---

## Intro Video (Hero Section)

### Video Specifications

| Property | Requirement |
|----------|-------------|
| **Orientation** | Vertical (Portrait) |
| **Aspect Ratio** | 9:16 (Phone recording) |
| **Resolution** | 1080 x 1920 px (Full HD vertical) |
| **Format** | MP4 (H.264 codec) |
| **Duration** | 15-30 seconds (loops automatically) |
| **File Size** | Under 10MB recommended |
| **Audio** | Muted by default (optional audio) |

### Where to Save
```
public/
└── videos/
    └── intro.mp4
```

### Recording Tips
- Record in **portrait mode** on your phone
- Good lighting (face the light source)
- Clean background (plain wall or office setup)
- Look at the camera, smile, be natural
- Brief intro: "Hi, I'm Awais, a Full-Stack Developer..."
- Keep it short - video loops automatically

### Optional: Video Poster Image
Add a poster image that shows before video loads:
```
public/
└── images/
    └── video-poster.jpg (1080 x 1920 px)
```

---

## Screenshot Specifications

### Recommended Sizes

| Type | Ratio | Dimensions | Use Case |
|------|-------|------------|----------|
| **Primary/Hero** | 16:9 | 1920 x 1080 px | Main project preview |
| **Desktop View** | 16:9 | 1280 x 720 px | Alternative desktop |
| **Dashboard** | 16:10 | 1440 x 900 px | Admin panels, dashboards |
| **Thumbnail** | 4:3 | 800 x 600 px | Card previews |

### Format
- **Preferred:** PNG (for quality) or WebP (for optimization)
- **Quality:** High quality, no compression artifacts
- **Background:** Clean, no clutter or personal data visible

---

## Storage Location

```
public/
└── images/
    └── projects/
        │
        │── (Projects WITH live links - 1 image each)
        ├── where-works.png
        ├── 11pay.png
        ├── akk9-security.png
        ├── zenith-medcare.png
        │
        │── (Projects WITHOUT live links - multiple images)
        ├── voiceforge.png (main)
        ├── voiceforge-landing.png
        ├── voiceforge-playground.png
        ├── voiceforge-portal.png
        │
        ├── brightlink-quote.png (main)
        ├── brightlink-dashboard.png
        ├── brightlink-quote-create.png
        ├── brightlink-analytics.png
        │
        ├── styleup.png (main)
        ├── styleup-dashboard.png
        ├── styleup-blocks.png
        ├── styleup-theme.png
        │
        ├── muscled-sektions.png (main)
        ├── muscled-sektions-dashboard.png
        ├── muscled-sektions-sections.png
        └── muscled-sektions-admin.png
```

---

## Projects Requiring Screenshots

### Projects WITH Live Links (Still need preview images)

These have live URLs but still need a main preview image for the portfolio cards:

| Project | Live URL | Screenshot Needed |
|---------|----------|-------------------|
| Where Works | https://where.works/ | `where-works.png` |
| 11Pay | App Store Link | `11pay.png` |
| AK K9 Security | https://www.akk9securityservices.co.uk/ | `akk9-security.png` |
| Zenith Med Care | https://zenithmedcare.com/ | `zenith-medcare.png` |

**For these, just take 1 main screenshot (1920x1080) of the homepage/hero section.**

---

### Projects WITHOUT Live Links (Need multiple screenshots)

---

### 1. VoiceForge - Speech Recognition Platform

**Status:** No live link (internal project at PinkSurfing)

| Screenshot | Description | Size |
|------------|-------------|------|
| `voiceforge.png` | Main landing/hero image | 1920 x 1080 |
| `voiceforge-landing.png` | Landing page full view | 1920 x 1080 |
| `voiceforge-playground.png` | Interactive playground with drag-and-drop | 1440 x 900 |
| `voiceforge-portal.png` | Developer portal / API key management | 1440 x 900 |

**What to capture:**
- Landing page with value proposition
- Playground showing audio upload/recording interface
- Real-time transcription in action (if possible)
- Developer portal with API documentation

---

### 2. BrightLink Quote Management

**Status:** Private app (client: brightlinkav.com)

| Screenshot | Description | Size |
|------------|-------------|------|
| `brightlink-quote.png` | Main dashboard overview | 1920 x 1080 |
| `brightlink-dashboard.png` | Analytics/metrics dashboard | 1440 x 900 |
| `brightlink-quote-create.png` | Quote creation form/flow | 1440 x 900 |
| `brightlink-analytics.png` | Performance analytics view | 1440 x 900 |

**What to capture:**
- Dashboard with quote statistics
- Quote creation wizard/form
- Quote detail view with line items
- Analytics showing conversion rates, sales metrics
- Customer management interface (optional)

**Note:** Blur or use dummy data for sensitive client information

---

### 3. StyleUP - Conversion Booster

**Status:** In Progress (70% complete)

| Screenshot | Description | Size |
|------------|-------------|------|
| `styleup.png` | Main app dashboard | 1920 x 1080 |
| `styleup-dashboard.png` | App blocks overview | 1440 x 900 |
| `styleup-blocks.png` | Block selection/catalog page | 1440 x 900 |
| `styleup-theme.png` | Theme editor integration | 1440 x 900 |

**What to capture:**
- Dashboard showing installed blocks
- Block catalog with categories
- Individual block configuration
- Preview of block in theme editor
- Settings/subscription page (optional)

---

### 4. Muscled Sektions

**Status:** Submitted for review (Shopify App Store)

| Screenshot | Description | Size |
|------------|-------------|------|
| `muscled-sektions.png` | Main dashboard | 1920 x 1080 |
| `muscled-sektions-dashboard.png` | Sections overview | 1440 x 900 |
| `muscled-sektions-sections.png` | Section catalog/marketplace | 1440 x 900 |
| `muscled-sektions-admin.png` | Admin panel (if applicable) | 1440 x 900 |

**What to capture:**
- Main dashboard with section counts
- Section marketplace/catalog view
- Section detail with preview
- Import/installation flow
- Category browsing interface

---

## Screenshot Tips

### Do's
- Use clean, professional test data
- Capture at 100% zoom (no browser scaling)
- Include relevant UI elements that show functionality
- Use light mode for consistency (unless dark mode is the default)
- Hide browser bookmarks bar and extensions

### Don'ts
- Don't include personal data or real customer information
- Don't capture error states or loading screens
- Don't include browser developer tools
- Don't use low resolution or blurry images
- Don't include desktop notifications or other apps

### Tools for Screenshots
- **Windows:** Win + Shift + S (Snipping Tool)
- **Mac:** Cmd + Shift + 4
- **Browser Extension:** Full Page Screen Capture, GoFullPage
- **Professional:** Cleanshot X, ShareX, Snagit

---

## After Taking Screenshots

1. **Optimize images:**
   ```bash
   # Using sharp-cli or similar
   npx sharp-cli resize 1920 1080 --input screenshot.png --output optimized.png
   ```

2. **Convert to WebP (optional for better performance):**
   ```bash
   npx sharp-cli --input screenshot.png --output screenshot.webp
   ```

3. **Place in correct folder:**
   - Copy to `public/images/projects/[project-name]/`

4. **Verify paths match:**
   - Check `src/data/projects.ts` has correct image paths

---

## Checklist

### Intro Video
- [ ] `intro.mp4` - 15-30 second vertical video
- [ ] `video-poster.jpg` - Poster image (optional)

### Projects with Live Links (1 screenshot each)
- [ ] Where Works - `where-works.png`
- [ ] 11Pay - `11pay.png`
- [ ] AK K9 Security - `akk9-security.png`
- [ ] Zenith Med Care - `zenith-medcare.png`

### Projects without Live Links (4 screenshots each)
- [ ] VoiceForge - 4 screenshots
- [ ] BrightLink Quote - 4 screenshots
- [ ] StyleUP - 4 screenshots
- [ ] Muscled Sektions - 4 screenshots

**Total: 20 screenshots + 1 video needed**
