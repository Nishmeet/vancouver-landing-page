import { Coffee, Sunset, Sunrise, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  icon: LucideIcon;
}

export interface CityConfig {
  cityName: string;
  heroImage: string;
  headline: string;
  subheadline: string;
  route: {
    from: string;
    to: string;
    fromFull: string;
    toFull: string;
  };
  pricing?: {
    startingPrice: number;
    currency: string;
  };
  itinerary: ItineraryItem[];
}

// Vancouver Configuration
export const vancouverConfig: CityConfig = {
  cityName: 'Vancouver',
  heroImage:
    'https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=2940&auto=format&fit=crop',
  headline: '48 Hours in Vancouver',
  subheadline: "You don't need a week to disconnect. You just need the right flight.",
  route: {
    from: 'YYC',
    to: 'YVR',
    fromFull: 'Calgary',
    toFull: 'Vancouver',
  },

  itinerary: [
    {
      id: 'saturday-morning',
      time: 'Saturday Morning',
      title: 'Touch Grass',
      subtitle: 'The antidote to screen time',
      location: 'Lighthouse Park, West Vancouver',
      description:
        'Old-growth forest meets the Pacific. A 30-minute drive from the airport, and suddenly you are surrounded by 200-year-old Douglas firs. The trail to the lighthouse is less than 2km. You will hear nothing but wind and waves.',
      icon: Sunrise,
    },
    {
      id: 'saturday-evening',
      time: 'Saturday Evening',
      title: 'The Hidden Gem',
      subtitle: 'Where locals actually eat',
      location: 'Say Mercy! - Fraser Street',
      description:
        'Skip Gastown. This natural wine bar on Fraser feels like someone\'s living room - if that someone had impeccable taste. Small plates, big flavors, zero pretense. Book ahead or you won\'t get in.',
      icon: Sunset,
    },
    {
      id: 'sunday-morning',
      time: 'Sunday Morning',
      title: 'The Slow Wake-up',
      subtitle: 'Coffee, water, quiet',
      location: 'Matchstick Coffee & False Creek',
      description:
        'Start at Matchstick on Olympic Village. Then walk the Seawall toward Granville Island. It\'s flat, it\'s beautiful, and you\'ll pass more dogs than cars. By the time you loop back, you\'ll understand why people move here and never leave.',
      icon: Coffee,
    },
  ],
};

// Toronto Configuration (Example for easy city swapping)
export const torontoConfig: CityConfig = {
  cityName: 'Toronto',
  heroImage:
    'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2940&auto=format&fit=crop',
  headline: '48 Hours in Toronto',
  subheadline: 'Culture, food, and lakefront views. A quick escape to Canada\'s biggest city.',
  route: {
    from: 'YYC',
    to: 'YYZ',
    fromFull: 'Calgary',
    toFull: 'Toronto',
  },
  
  itinerary: [
    {
      id: 'saturday-morning',
      time: 'Saturday Morning',
      title: 'Market Mornings',
      subtitle: 'Fresh, local, authentic',
      location: 'St. Lawrence Market',
      description:
        'Arrive early. The peameal bacon sandwich from Carousel Bakery is legendary for a reason. Wander the stalls, sample cheese, grab fresh flowers, and watch the city wake up around you.',
      icon: Sunrise,
    },
    {
      id: 'saturday-evening',
      time: 'Saturday Evening',
      title: 'Elevated Dining',
      subtitle: 'Where food becomes art',
      location: 'Alo Restaurant - King West',
      description:
        'Book weeks in advance. This French tasting menu restaurant sits atop a historic building and has earned its spot as one of Canada\'s best. Every course is a conversation starter.',
      icon: Utensils,
    },
    {
      id: 'sunday-morning',
      time: 'Sunday Morning',
      title: 'The Waterfront',
      subtitle: 'Lake Ontario at your feet',
      location: 'Toronto Islands & Harbourfront',
      description:
        'Take the ferry to Ward\'s Island. Rent a bike, loop the island, watch sailboats drift past the skyline. Return to the mainland for brunch at Boxcar Social. Simple, perfect, Toronto.',
      icon: Coffee,
    },
  ],
};

// Default export for current active city
export const activeCityConfig = vancouverConfig;
