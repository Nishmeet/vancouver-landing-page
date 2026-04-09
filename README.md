# Airliners.ca - Vancouver Landing Page

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` after starting the dev server.

## Project Overview

A high-end, minimalist landing page showcasing "48 Hours in Vancouver" with an Anthropic-style editorial feel. Built with React, TypeScript, and Tailwind CSS v4.

## Design System

### Color Palette
- **Warm Cream** (`#F9F6F1`) - Background
- **Soft Black** (`#1D1916`) - Text
- **Terracotta** (`#D97757`) - Accent/CTA

### Typography
- **Inter** - Headers (bold, sans-serif)
- **IBM Plex Serif** - Body text (editorial feel)

### Design Principles
- Extreme white space
- Editorial precision
- Warm, inviting aesthetic
- Mobile-first responsive design

## Key Features

### 1. Hero Section
- Full-bleed Vancouver coastline background
- Gradient overlay for readability
- Responsive typography (5xl → 8xl)
- Clear value proposition

### 2. Micro-Itinerary
- Three curated experiences:
  - **Saturday Morning**: Lighthouse Park (Touch Grass)
  - **Saturday Evening**: Say Mercy! Restaurant (Hidden Gem)
  - **Sunday Morning**: Matchstick Coffee & Seawall (Slow Wake-up)
- Scroll-triggered fade-in animations
- Intersection Observer API for performance
- Icon-driven visual hierarchy

### 3. Sticky Booking Bar
- Fixed bottom positioning
- Flight route & pricing
- Terracotta CTA button with hover effects
- Responsive layout (stacked on mobile)

## Tech Stack

- **React 18** with TypeScript
- **Vite 5** for development & bundling
- **Tailwind CSS v4** (latest configuration)
- **Lucide React** for icons
- **Intersection Observer API** for animations

## Project Structure

```
src/
├── VancouverLandingPage.tsx  # Main landing page component
├── cityConfig.ts             # City data configuration
├── App.tsx                   # App entry point
├── index.css                 # Tailwind directives & theme
└── main.tsx                  # React DOM entry

public/                        # Static assets
dist/                         # Production build
```

## Customization

### Swapping Cities

The entire landing page is data-driven. See `CITY_SWAPPING.md` for detailed instructions.

**Quick example:**

1. Edit `src/cityConfig.ts`
2. Change `activeCityConfig` to a different city (e.g., `torontoConfig`)
3. Save and watch the page update automatically

Pre-configured cities:
- Vancouver (YYC → YVR, $189)
- Toronto (YYC → YYZ, $249)

### Adding New Cities

```typescript
export const newCityConfig: CityConfig = {
  cityName: 'Montreal',
  heroImage: 'https://...',
  headline: '48 Hours in Montreal',
  // ... see cityConfig.ts for full structure
};
```

### Changing Colors

Update the `@theme` section in `src/index.css`:

```css
@theme {
  --color-warm-cream: #f9f6f1;
  --color-soft-black: #1d1916;
  --color-terracotta: #d97757;
}
```

### Typography

Fonts are loaded from Google Fonts in `index.html`. To change:

1. Update the Google Fonts link
2. Modify `@theme` in `src/index.css`:

```css
@theme {
  --font-inter: 'Your Font', sans-serif;
  --font-ibm: 'Your Serif Font', serif;
}
```

## Performance Optimizations

- **Intersection Observer** for efficient scroll animations
- **Vite's tree-shaking** for minimal bundle size
- **Optimized Unsplash images** with query parameters
- **CSS purging** via Tailwind v4
- **Lazy animation triggers** to reduce initial paint

## Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full experience)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Hot Module Replacement (HMR)

Vite provides instant HMR. Changes to:
- React components reload instantly
- CSS updates without page refresh
- TypeScript changes trigger type checking

## Deployment

The project builds to static files in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload dist/ folder via Netlify dashboard
# Or use Netlify CLI
```

### Environment Variables

Create `.env.local` for environment-specific values:

```env
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-id
```

Access in code: `import.meta.env.VITE_API_URL`

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Responsive text sizing

## Future Enhancements

- Add booking API integration
- Implement real-time pricing
- Add city selection dropdown
- Include user reviews/testimonials
- Add image gallery for each location
- Implement booking modal

## License

Proprietary - Airliners.ca

## Support

For questions or issues, contact the frontend engineering team.

---

Built with care and attention to detail.
