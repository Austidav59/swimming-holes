# SwimSpot - Natural Swimming Holes Directory

A production-ready informational directory website for natural swimming holes in the United States. Built with Next.js 15, TypeScript, and Tailwind CSS for optimal SEO performance and fast page loads.

## Features

- **SEO-Optimized**: Unique title/meta descriptions, semantic HTML, canonical URLs, Open Graph tags, JSON-LD structured data (TouristAttraction, BreadcrumbList), sitemap.xml, and robots.txt
- **Mobile-First Design**: Responsive layouts with fast Core Web Vitals
- **Static Generation**: Pre-rendered pages for fast loading and SEO
- **AdSense Ready**: Placeholder ad slots that render only when `NEXT_PUBLIC_ADSENSE_CLIENT` is set
- **Accessible**: WCAG-compliant markup with proper ARIA labels and keyboard navigation
- **Clean Navigation**: Internal linking structure from homepage to states to individual listings and nearby spots

## Current Coverage

- **Arizona**: 12 swimming holes including Fossil Creek, Slide Rock State Park, Seven Falls
- **Utah**: 12 swimming holes including Fifth Water Hot Springs, Lower Calf Creek Falls, Sand Hollow

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) - Automatic sitemap generation

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms of Service
│   ├── states/            # States index and [slug] pages
│   └── swimming-holes/    # Individual [slug] pages
├── components/            # Reusable React components
│   ├── AdSense.tsx       # AdSense placeholder components
│   ├── Breadcrumb.tsx    # Breadcrumb navigation with JSON-LD
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Site header with navigation
│   ├── MapPlaceholder.tsx # OpenStreetMap integration
│   ├── SearchBox.tsx     # Search functionality
│   ├── StateCard.tsx     # State listing card
│   └── SwimmingHoleCard.tsx # Swimming hole listing card
├── data/                  # Static data
│   ├── types.ts          # TypeScript interfaces
│   ├── arizona.ts        # Arizona swimming holes
│   ├── utah.ts           # Utah swimming holes
│   └── index.ts          # Data exports and utilities
└── lib/                   # Utilities
    └── seo.ts            # SEO metadata and JSON-LD generators
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Austidav59/swimming-holes.git
cd swimming-holes

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

The build process automatically generates `sitemap.xml` and `robots.txt` via next-sitemap.

## Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# Site URL (required for sitemap and canonical URLs)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Google AdSense client ID (optional - ads only show when set)
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXX

# Contact email displayed on contact page
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.com

# Google Search Console verification (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

**Important**: Do not commit `.env.local` or any file containing secrets.

## Deploying to Render

### Option 1: Using render.yaml (Blueprint)

1. Push the repository to GitHub
2. Create a new Blueprint in Render
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and configure the service
5. Add environment variables in the Render dashboard:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://swimming-holes.onrender.com`)
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Your contact email
   - Optional: `NEXT_PUBLIC_ADSENSE_CLIENT` (after AdSense approval)
   - Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

### Option 2: Manual Setup

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Configure:
   - **Runtime**: Node
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or higher for production)
4. Add environment variables as described above

### Build Settings

The site builds as a static export and will work on Render's free tier. Build times are typically under 2 minutes.

## Setting Up a Custom Domain with Cloudflare

After deploying to Render, you can add a custom domain with Cloudflare for DNS and CDN:

### 1. Purchase a Domain

Purchase a domain from your preferred registrar.

### 2. Add Domain to Cloudflare

1. Create a Cloudflare account if you don't have one
2. Add your domain to Cloudflare
3. Update your domain's nameservers to Cloudflare's (provided during setup)

### 3. Configure DNS

In Cloudflare DNS settings, add a CNAME record:

```
Type: CNAME
Name: @ (or www)
Target: your-app-name.onrender.com
Proxy: Proxied (orange cloud)
```

### 4. Configure Render

1. In your Render service settings, go to "Custom Domains"
2. Add your custom domain
3. Render will provide verification instructions

### 5. SSL Configuration

Cloudflare provides automatic SSL. In Cloudflare SSL/TLS settings:
- Set encryption mode to "Full" or "Full (Strict)"

### 6. Update Environment Variable

Update `NEXT_PUBLIC_SITE_URL` in Render to your custom domain:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 7. Recommended Cloudflare Settings

- **Caching**: Enable "Cache Everything" page rule for static assets
- **Always Use HTTPS**: Enable
- **Auto Minify**: Enable for HTML, CSS, JavaScript
- **Brotli**: Enable

## AdSense Integration

This site is designed to be AdSense-ready:

1. **Apply for AdSense**: Submit your site at [Google AdSense](https://www.google.com/adsense/)
2. **Add your client ID**: Once approved, add `NEXT_PUBLIC_ADSENSE_CLIENT` to your environment variables
3. **Ad slots**: The site has placeholder ad positions that will display ads when the client ID is set

Ad placeholders appear on:
- Homepage (middle section)
- State pages (bottom)
- Individual swimming hole pages

Until you set the AdSense client ID, gray placeholder boxes appear instead of ads.

## Adding New States

To add more states to the directory:

1. Create a new data file in `src/data/` (e.g., `california.ts`)
2. Add the state to `src/data/types.ts` STATES object
3. Import and add the swimming holes to `src/data/index.ts`
4. The site will automatically generate new pages

Example structure for a new swimming hole:

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',
  name: 'Swimming Hole Name',
  state: 'CA', // StateCode
  stateFullName: 'California',
  nearestTown: 'Town Name',
  latitude: 34.0522,
  longitude: -118.2437,
  description: 'Original description...',
  accessNotes: 'How to get there...',
  waterType: 'waterfall', // WaterType
  amenities: ['parking', 'restrooms'], // Amenity[]
  seasonBestTime: 'When to visit...',
  safetyNotes: 'Safety considerations...',
  managedBy: 'Managing agency',
  sourceAttribution: 'Data sources',
  featured: false,
}
```

## SEO Checklist

The site includes:

- [x] Unique `<title>` on every page
- [x] Unique `<meta name="description">` on every page
- [x] Canonical URLs
- [x] Open Graph meta tags
- [x] Twitter Card meta tags
- [x] JSON-LD structured data (TouristAttraction, BreadcrumbList, WebSite, Organization)
- [x] Semantic HTML (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`)
- [x] Automatic sitemap generation
- [x] robots.txt configuration
- [x] Mobile-responsive design
- [x] Fast page loads via static generation

## Data Sources

Swimming hole information is compiled from public sources including:

- U.S. Forest Service (USFS)
- Bureau of Land Management (BLM)
- Arizona State Parks
- Utah State Parks
- Recreation.gov
- Official county and municipal sources

All descriptions are original content. Source attributions are displayed on individual listings.

## License

This project is proprietary. All rights reserved.

## Contributing

This is a private project. If you've been granted access and want to contribute:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## Support

For questions or issues, contact the repository owner.
