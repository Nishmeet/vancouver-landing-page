# City Swapping Guide

## How to Create a New City Landing Page

This project is designed for easy city swapping. Follow these steps:

### Step 1: Define Your City Configuration

Open `src/cityConfig.ts` and add a new configuration object:

```typescript
export const montrealConfig: CityConfig = {
  cityName: 'Montreal',
  heroImage: 'https://your-image-url.jpg', // High-quality city image
  headline: '48 Hours in Montreal',
  subheadline: 'Your compelling value proposition here.',
  route: {
    from: 'YYC',      // Origin airport code
    to: 'YUL',        // Destination airport code
    fromFull: 'Calgary',
    toFull: 'Montreal',
  },
  pricing: {
    startingPrice: 299,
    currency: 'CAD',
  },
  itinerary: [
    {
      id: 'saturday-morning',
      time: 'Saturday Morning',
      title: 'Your Title',
      subtitle: 'Catchy subtitle',
      location: 'Specific Location Name',
      description: 'Engaging description that tells a story...',
      icon: Sunrise, // Choose from: Sunrise, Sunset, Coffee, Utensils, MapPin, etc.
    },
    // Add 2-3 more itinerary items
  ],
};
```

### Step 2: Activate Your City

In `src/cityConfig.ts`, change the default export:

```typescript
// Change from:
export const activeCityConfig = vancouverConfig;

// To:
export const activeCityConfig = montrealConfig;
```

### Step 3: Update Page Title (Optional)

In `index.html`, update the title tag:

```html
<title>48 Hours in Montreal | Airliners.ca</title>
```

That's it! The landing page will automatically update with your new city content.

## Available Icons

From Lucide React:
- `Sunrise` - Morning activities
- `Sunset` - Evening activities  
- `Coffee` - Cafes, breakfast spots
- `Utensils` - Restaurants, dining
- `MapPin` - Landmarks, locations
- `Palmtree` - Beach, tropical
- `Mountain` - Hiking, nature
- `Wine` - Wine bars, lounges

Import new icons at the top of `cityConfig.ts`:

```typescript
import { Sunrise, Coffee, Wine } from 'lucide-react';
```

## Finding High-Quality Images

Recommended sources:
- **Unsplash**: https://unsplash.com (free, high-quality)
- **Pexels**: https://pexels.com (free stock photos)

Tips:
- Use landscape orientation (16:9 or wider)
- Minimum 2400px width for sharp display
- Look for images with clear focal points
- Add `?q=80&w=2940&auto=format&fit=crop` to Unsplash URLs for optimization

## Pre-Configured Cities

The following cities are already configured and ready to activate:

1. **Vancouver** (`vancouverConfig`)
   - Route: YYC → YVR
   - Price: $189
   - Vibe: Nature + food scene

2. **Toronto** (`torontoConfig`)
   - Route: YYC → YYZ  
   - Price: $249
   - Vibe: Urban + cultural

To add more cities, follow the pattern in `cityConfig.ts`.

## Deployment Checklist

Before deploying a new city:

- [ ] Verify hero image loads quickly
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all itinerary descriptions for typos
- [ ] Confirm flight route codes are correct
- [ ] Update page title in `index.html`
- [ ] Test the CTA button interaction

## Questions?

Check the main `README.md` for setup instructions and technical details.
