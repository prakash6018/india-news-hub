# IndiaFlash News — Setup Guide

## Quick Start (3 steps)

### Step 1: Get your free NewsData.io API key
1. Go to https://newsdata.io/register
2. Create a free account (no credit card needed)
3. Copy your API key from the dashboard
4. Free plan: **200 credits/day** (~20 page loads/day)

### Step 2: Configure your API key
Edit `.env.local`:
```
NEWSDATA_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

### Step 3: Run locally
```bash
npm run dev        # Development (localhost:3000)
npm run build      # Production build
npm start          # Start production server
```

---

## Google AdSense Integration

### How to get approved
1. Deploy the site publicly (see Deployment below)
2. Apply at https://adsense.google.com with your site URL
3. AdSense reviews your site (usually 2-4 weeks)
4. Once approved, get your **Publisher ID** (ca-pub-XXXXXXXXXX)

### Configure AdSense
1. In `.env.local`, set: `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-YOUR_PUBLISHER_ID`
2. In `src/components/AdUnit.tsx`, update the `data-ad-slot` values with your actual ad unit IDs
3. In `src/app/layout.tsx`, the AdSense script loads automatically with your publisher ID

### Ad Slot IDs to replace
After AdSense approval, create ad units in your AdSense dashboard and replace these placeholder slots:
- `1111111111` → Home page top banner (leaderboard)
- `2222222222` → Home page in-content rectangle
- `3333333333` → Home page bottom banner
- `4444444444` → Category page top banner
- `5555555555` → Category page bottom banner
- `6666666666` → Search page banner
- `9876543210` → Sidebar top rectangle
- `1122334455` → Sidebar bottom rectangle
- `1234567890` → In-feed ad (between articles)

### Ad placements (revenue-maximizing layout)
- **Header banner** — highest CPM, above the fold
- **In-content ads** — every 6 articles (natural reading flow)
- **Sidebar rectangles** — sticky, always visible
- **Category/search page banners** — additional impression per page

---

## Deployment (Free Options)

### Vercel (Recommended — best for Next.js)
```bash
npm install -g vercel
vercel deploy
```
Add environment variables in Vercel dashboard → Settings → Environment Variables.

### Netlify
```bash
npm run build
# Upload the .next folder or connect GitHub repo
```

### Railway / Render
Connect your GitHub repo and set environment variables in the dashboard.

---

## Earning from Ads — Tips
- **Traffic drives revenue**: Post on social media (WhatsApp groups, Twitter/X, Facebook)
- **SEO**: The site has proper meta tags. Submit sitemap to Google Search Console
- **Categories with high CPM**: Business, Technology, Finance news
- **Mobile optimization**: Already fully responsive
- **Page speed**: Next.js is already optimized; host on Vercel for edge CDN

---

## API Usage & Limits
- Free tier: 200 credits/day (1 request = 10 credits → **20 API calls/day**)
- Results are **cached for 5 minutes** server-side to minimize API usage
- Upgrade at newsdata.io if you need more (paid plans from $149/month)
- Alternative free APIs: GNews.io (100 req/day), Currents API (600 req/day)

## File Structure
```
src/
├── app/
│   ├── layout.tsx          ← AdSense script loads here
│   ├── page.tsx            ← Home page (top India news)
│   ├── api/news/route.ts   ← Proxies NewsData.io (hides API key)
│   ├── category/[slug]/    ← Category pages (politics, sports, etc.)
│   ├── search/             ← Search results
│   ├── about/              ← Required for AdSense approval
│   ├── privacy-policy/     ← Required for AdSense approval
│   └── contact/            ← Required for AdSense approval
├── components/
│   ├── AdUnit.tsx          ← Google AdSense ad unit component
│   ├── Header.tsx          ← Navigation with search
│   ├── NewsCard.tsx        ← Article card (featured & grid)
│   ├── NewsGrid.tsx        ← Grid with in-feed ads
│   └── Sidebar.tsx         ← Sidebar with 2 ad slots + trending
└── lib/
    ├── types.ts            ← TypeScript types + category definitions
    └── api.ts              ← Fetch helpers + formatters
```
