# Component API Documentation

## VancouverLandingPage Component

### Description
The main landing page component that displays a curated "48 Hours in Vancouver" experience with hero section, itinerary, and booking bar.

### Props
None - The component is self-contained and pulls data from `cityConfig.ts`.

### Usage

```tsx
import VancouverLandingPage from './VancouverLandingPage';

function App() {
  return <VancouverLandingPage />;
}
```

### Data Configuration

The component reads from `activeCityConfig` in `cityConfig.ts`:

```typescript
import { activeCityConfig } from './cityConfig';

// In component:
const config = activeCityConfig;
```

### Internal State

#### `visibleItems: Set<string>`
Tracks which itinerary items are currently visible in the viewport.

#### `itemRefs: Map<string, HTMLDivElement>`
References to itinerary item DOM elements for Intersection Observer.

### Effects

#### Scroll Animation Observer
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      // Triggers fade-in animations when items enter viewport
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    }
  );
}, []);
```

### Sections

#### 1. Hero Section
```tsx
<section className="relative h-screen w-full overflow-hidden">
  {/* Full-screen hero with background image */}
</section>
```

**Features:**
- Full viewport height (`h-screen`)
- Background image from `config.heroImage`
- Gradient overlay for text readability
- Responsive typography

#### 2. Micro-Itinerary Section
```tsx
<section className="mx-auto max-w-4xl px-6 py-32 md:px-12 lg:py-40">
  {/* Itinerary items with scroll animations */}
</section>
```

**Features:**
- Maps through `config.itinerary` array
- Fade-in animations triggered by scroll
- Icons from Lucide React
- Dividers between items

#### 3. Sticky Booking Bar
```tsx
<div className="fixed bottom-0 left-0 right-0 z-50">
  {/* Booking information and CTA */}
</div>
```

**Features:**
- Fixed positioning at bottom
- Glassmorphism effect (`backdrop-blur-md`)
- Flight route from `config.route`
- Pricing from `config.pricing`
- CTA button with hover effects

## CityConfig Type Definition

### `ItineraryItem`

```typescript
interface ItineraryItem {
  id: string;           // Unique identifier (e.g., 'saturday-morning')
  time: string;         // Display time (e.g., 'Saturday Morning')
  title: string;        // Main title (e.g., 'Touch Grass')
  subtitle: string;     // Subtitle (e.g., 'The antidote to screen time')
  location: string;     // Location name (e.g., 'Lighthouse Park')
  description: string;  // Detailed description
  icon: LucideIcon;     // Icon component from Lucide React
}
```

### `CityConfig`

```typescript
interface CityConfig {
  cityName: string;           // City name for reference
  heroImage: string;          // URL to hero background image
  headline: string;           // Main headline (e.g., '48 Hours in Vancouver')
  subheadline: string;        // Supporting text
  route: {
    from: string;             // Origin airport code (e.g., 'YYC')
    to: string;               // Destination airport code (e.g., 'YVR')
    fromFull: string;         // Full origin name (e.g., 'Calgary')
    toFull: string;           // Full destination name (e.g., 'Vancouver')
  };
  pricing: {
    startingPrice: number;    // Starting price in dollars
    currency: string;         // Currency code (e.g., 'CAD')
  };
  itinerary: ItineraryItem[]; // Array of itinerary items (3 recommended)
}
```

## Styling Classes

### Custom Tailwind Colors

Defined in `src/index.css`:

```css
@theme {
  --color-warm-cream: #f9f6f1;
  --color-soft-black: #1d1916;
  --color-terracotta: #d97757;
}
```

Usage in components:
- `bg-warm-cream` - Background color
- `text-soft-black` - Text color
- `text-terracotta` - Accent text
- `bg-terracotta` - Accent background

### Custom Fonts

```css
@theme {
  --font-inter: Inter, sans-serif;
  --font-ibm: 'IBM Plex Serif', serif;
}
```

Usage:
- `font-inter` - Headers and UI elements
- `font-ibm` - Body text and descriptions

## Animation Details

### Fade-In Animation

```tsx
className={`transition-all duration-1000 ease-out ${
  isVisible
    ? 'translate-y-0 opacity-100'
    : 'translate-y-12 opacity-0'
}`}
```

**Behavior:**
- Initial state: Translated down 12px, opacity 0
- Visible state: Original position, opacity 100
- Duration: 1000ms
- Easing: ease-out
- Stagger delay: 100ms per item

### Button Hover Effect

```tsx
className="group transition-all duration-200 hover:bg-terracotta/90 hover:shadow-lg"
```

**Behavior:**
- Background darkens to 90% opacity
- Shadow appears
- Arrow icon translates right 0.5px
- Duration: 200ms

## Performance Considerations

### Intersection Observer

Used instead of scroll event listeners for better performance:

```typescript
{
  threshold: 0.2,           // Trigger when 20% visible
  rootMargin: '0px 0px -100px 0px'  // Start 100px before entering viewport
}
```

### Image Optimization

Unsplash URLs include optimization parameters:
```
?q=80&w=2940&auto=format&fit=crop
```

### Ref Management

Using `Map` for efficient ref tracking:
```typescript
const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
```

## Extending the Component

### Adding a New Section

```tsx
{/* Add after itinerary section */}
<section className="mx-auto max-w-4xl px-6 py-32">
  {/* Your new content */}
</section>
```

### Customizing Animations

Modify the Intersection Observer options:

```typescript
{
  threshold: 0.5,  // Change visibility threshold
  rootMargin: '0px'  // Remove early trigger
}
```

### Adding More Itinerary Items

In `cityConfig.ts`:

```typescript
itinerary: [
  // ... existing items
  {
    id: 'sunday-evening',
    time: 'Sunday Evening',
    // ... rest of item
  }
]
```

The component automatically maps through all items.

## Testing

### Manual Testing Checklist

- [ ] Hero image loads correctly
- [ ] Headline is readable on mobile
- [ ] Itinerary items fade in on scroll
- [ ] Booking bar stays fixed at bottom
- [ ] CTA button hover effect works
- [ ] Responsive on mobile, tablet, desktop
- [ ] Icons render correctly
- [ ] All text is readable (contrast check)

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader can access all content
- [ ] Images have proper alt text (if added)
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible

## Common Issues

### Images Not Loading

**Issue:** Hero image doesn't display
**Solution:** Check Unsplash URL is valid and uses HTTPS

### Animations Not Triggering

**Issue:** Itinerary items don't fade in
**Solution:** Ensure each item has a unique `id` in data

### Colors Not Applying

**Issue:** Custom colors like `bg-warm-cream` don't work
**Solution:** Verify `@theme` section in `src/index.css` is correct

### Build Errors

**Issue:** TypeScript errors during build
**Solution:** Run `npm run build` and check the error log

## Questions?

Refer to the main `README.md` or `CITY_SWAPPING.md` for additional documentation.
