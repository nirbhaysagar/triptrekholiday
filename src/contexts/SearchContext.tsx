import { createContext, useContext, useState, ReactNode } from 'react';

export interface SearchFilters {
  destination: string;
  duration: string;
  priceRange: string;
  activity: string;
  groupSize: string;
  type: string;
}

export interface SearchResult {
  id: string;
  type: 'package' | 'destination' | 'hilly' | 'honeymoon' | 'usp' | 'hotel' | 'visa' | 'experience';
  title: string;
  description: string;
  price: string;
  duration: string;
  destination: string;
  rating: number;
  image: string;
  activities?: string[];
}

interface SearchContextType {
  searchQuery: string;
  filters: SearchFilters;
  searchResults: SearchResult[];
  isSearching: boolean;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  performSearch: () => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    destination: '',
    duration: '',
    priceRange: '',
    activity: '',
    groupSize: '',
    type: '',
  });
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Mock data for search - in real app, this would come from API
  const allPackages: SearchResult[] = [
    // Tour Packages
    {
      id: '1',
      type: 'package',
      title: 'Uttarakhand Adventure',
      description: 'Experience the breathtaking beauty of Uttarakhand with curated treks and panoramic viewpoints.',
      price: '₹24,999',
      duration: '5 Days 4 Nights',
      destination: 'Uttarakhand',
      rating: 5.0,
      image: '/src/assets/destination-1.jpg',
      activities: ['Trekking', 'Camping', 'Sightseeing']
    },
    {
      id: '2',
      type: 'package',
      title: 'Goa Adventure',
      description: 'Explore the beaches and culture of Goa with adventure activities.',
      price: '₹15,999',
      duration: '4 Days 3 Nights',
      destination: 'Goa',
      rating: 4.9,
      image: '/src/assets/destination-2.jpg',
      activities: ['Beach', 'Water Sports', 'Nightlife']
    },
    {
      id: '3',
      type: 'package',
      title: 'Kashmir Paradise',
      description: 'Discover the heaven on earth with stunning valleys and lakes.',
      price: '₹25,999',
      duration: '6 Days 5 Nights',
      destination: 'Kashmir',
      rating: 5.0,
      image: '/src/assets/destination-3.jpg',
      activities: ['Sightseeing', 'Boating', 'Photography']
    },
    {
      id: '4',
      type: 'package',
      title: 'Kerala Backwaters',
      description: 'Cruise through the serene backwaters and enjoy nature.',
      price: '₹18,999',
      duration: '5 Days 4 Nights',
      destination: 'Kerala',
      rating: 4.8,
      image: '/src/assets/destination-4.jpg',
      activities: ['Houseboat', 'Backwaters', 'Ayurveda']
    },
    {
      id: '5',
      type: 'package',
      title: 'Himachal Adventure',
      description: 'Mountain adventures in the beautiful hills of Himachal Pradesh.',
      price: '₹22,999',
      duration: '5 Days 4 Nights',
      destination: 'Himachal Pradesh',
      rating: 5.0,
      image: '/src/assets/destination-5.jpg',
      activities: ['Trekking', 'Skiing', 'Mountain Views']
    },
    {
      id: '6',
      type: 'package',
      title: 'Rajasthan Heritage',
      description: 'Explore the royal heritage and desert landscapes.',
      price: '₹19,999',
      duration: '6 Days 5 Nights',
      destination: 'Rajasthan',
      rating: 4.9,
      image: '/src/assets/destination-6.jpg',
      activities: ['Palaces', 'Desert Safari', 'Culture']
    },
    // Hilly Packages
    {
      id: '7',
      type: 'hilly',
      title: 'Shimla Manali',
      description: 'Classic hill station experience with snow-capped mountains.',
      price: '₹18,500',
      duration: '5 Days 4 Nights',
      destination: 'Himachal Pradesh',
      rating: 4.8,
      image: '/src/assets/hillyarea/shimla.jpg',
      activities: ['Hill Station', 'Snow', 'Mall Road']
    },
    {
      id: '8',
      type: 'hilly',
      title: 'Darjeeling Gangtok',
      description: 'Tea gardens and mountain views in the Eastern Himalayas.',
      price: '₹22,000',
      duration: '6 Days 5 Nights',
      destination: 'West Bengal',
      rating: 4.9,
      image: '/src/assets/hillyarea/darjeeling.jpg',
      activities: ['Tea Gardens', 'Toy Train', 'Sunrise']
    },
    {
      id: '9',
      type: 'hilly',
      title: 'Mussoorie Dhanaulti',
      description: 'Queen of Hills with colonial charm and adventure activities.',
      price: '₹16,500',
      duration: '4 Days 3 Nights',
      destination: 'Uttarakhand',
      rating: 4.7,
      image: '/src/assets/hillyarea/mussorie.jpg',
      activities: ['Cable Car', 'Adventure Sports', 'Colonial Heritage']
    },
    {
      id: '10',
      type: 'hilly',
      title: 'Kasauli',
      description: 'Peaceful hill station with colonial architecture and nature trails.',
      price: '₹14,000',
      duration: '3 Days 2 Nights',
      destination: 'Himachal Pradesh',
      rating: 4.6,
      image: '/src/assets/hillyarea/ooty.jpg',
      activities: ['Nature Walks', 'Colonial Architecture', 'Peaceful']
    },
    {
      id: '11',
      type: 'hilly',
      title: 'Munnar Thekkady',
      description: 'Tea plantations and wildlife in the Western Ghats.',
      price: '₹17,500',
      duration: '4 Days 3 Nights',
      destination: 'Kerala',
      rating: 4.8,
      image: '/src/assets/hillyarea/darjeeling.jpg',
      activities: ['Tea Plantations', 'Wildlife', 'Spice Gardens']
    },
    // Honeymoon Packages
    {
      id: '12',
      type: 'honeymoon',
      title: 'Kashmir Honeymoon',
      description: 'Romantic getaway in the paradise on earth.',
      price: '₹35,000',
      duration: '6 Days 5 Nights',
      destination: 'Kashmir',
      rating: 5.0,
      image: '/src/assets/honeymoon/kashmir.jpg',
      activities: ['Romantic', 'Houseboat', 'Shikara Ride']
    },
    {
      id: '13',
      type: 'honeymoon',
      title: 'Goa Beach Romance',
      description: 'Beachside romance with luxury resorts and sunset views.',
      price: '₹28,000',
      duration: '5 Days 4 Nights',
      destination: 'Goa',
      rating: 4.9,
      image: '/src/assets/honeymoon/goa.jpg',
      activities: ['Beach', 'Sunset', 'Luxury Resort']
    },
    {
      id: '14',
      type: 'honeymoon',
      title: 'Kerala Backwaters',
      description: 'Romantic houseboat cruise through serene backwaters.',
      price: '₹32,000',
      duration: '6 Days 5 Nights',
      destination: 'Kerala',
      rating: 4.8,
      image: '/src/assets/honeymoon/kerala.jpg',
      activities: ['Houseboat', 'Backwaters', 'Romantic Dinner']
    },
    {
      id: '15',
      type: 'honeymoon',
      title: 'Shimla Manali Romance',
      description: 'Mountain romance with snow and cozy stays.',
      price: '₹25,000',
      duration: '5 Days 4 Nights',
      destination: 'Himachal Pradesh',
      rating: 4.7,
      image: '/src/assets/honeymoon/shimla.jpg',
      activities: ['Snow', 'Mountain Views', 'Cozy Stays']
    },
    {
      id: '16',
      type: 'honeymoon',
      title: 'Andaman Islands',
      description: 'Tropical paradise with pristine beaches and marine life.',
      price: '₹38,000',
      duration: '7 Days 6 Nights',
      destination: 'Andaman',
      rating: 4.9,
      image: '/src/assets/honeymoon/andaman.jpg',
      activities: ['Beaches', 'Scuba Diving', 'Marine Life']
    },
    {
      id: '17',
      type: 'honeymoon',
      title: 'Leh Ladakh Adventure',
      description: 'High-altitude romance in the land of high passes.',
      price: '₹42,000',
      duration: '8 Days 7 Nights',
      destination: 'Ladakh',
      rating: 5.0,
      image: '/src/assets/honeymoon/lehladakh.jpg',
      activities: ['High Altitude', 'Adventure', 'Unique Landscape']
    },
    // USP Packages
    {
      id: '18',
      type: 'usp',
      title: 'Chardham from Haridwar',
      description: 'Sacred pilgrimage to the four holy shrines of Uttarakhand.',
      price: '₹45,000',
      duration: '10 Days 9 Nights',
      destination: 'Uttarakhand',
      rating: 5.0,
      image: '/src/assets/destination-1.jpg',
      activities: ['Pilgrimage', 'Spiritual', 'Temples']
    },
    {
      id: '19',
      type: 'usp',
      title: 'Jim Corbett Safari',
      description: 'Wildlife adventure in India\'s oldest national park.',
      price: '₹22,000',
      duration: '4 Days 3 Nights',
      destination: 'Uttarakhand',
      rating: 4.8,
      image: '/src/assets/destination-1.jpg',
      activities: ['Wildlife Safari', 'Nature', 'Photography']
    },
    {
      id: '20',
      type: 'usp',
      title: 'Valley of Flowers Trek',
      description: 'Alpine meadow trek in the UNESCO World Heritage site.',
      price: '₹28,000',
      duration: '6 Days 5 Nights',
      destination: 'Uttarakhand',
      rating: 4.9,
      image: '/src/assets/destination-1.jpg',
      activities: ['Trekking', 'Flowers', 'UNESCO Site']
    },
    {
      id: '21',
      type: 'usp',
      title: 'Auli Skiing Adventure',
      description: 'Skiing adventure in India\'s premier ski destination.',
      price: '₹35,000',
      duration: '5 Days 4 Nights',
      destination: 'Uttarakhand',
      rating: 4.7,
      image: '/src/assets/destination-1.jpg',
      activities: ['Skiing', 'Snow', 'Adventure Sports']
    },
    {
      id: '22',
      type: 'usp',
      title: 'Rishikesh Adventure',
      description: 'Adventure capital with river rafting and yoga.',
      price: '₹18,000',
      duration: '4 Days 3 Nights',
      destination: 'Uttarakhand',
      rating: 4.8,
      image: '/src/assets/destination-1.jpg',
      activities: ['River Rafting', 'Yoga', 'Adventure']
    },
    // Hotels
    {
      id: '23',
      type: 'hotel',
      title: 'Taj Mahal Palace',
      description: 'Luxury heritage hotel overlooking the Gateway of India.',
      price: '₹25,000',
      duration: '1 Night',
      destination: 'Mumbai',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Luxury', 'Sea View', 'Spa']
    },
    {
      id: '24',
      type: 'hotel',
      title: 'The Leela Goa',
      description: 'Beachside luxury resort with private beach access.',
      price: '₹22,000',
      duration: '1 Night',
      destination: 'Goa',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Beach', 'Resort', 'Pool']
    },
    // Visa
    {
      id: '25',
      type: 'visa',
      title: 'Dubai Tourist Visa',
      description: '30 Days Tourist Visa with insurance included.',
      price: '₹6,500',
      duration: '30 Days',
      destination: 'Dubai',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea936a7d40c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Visa Assistance', 'Insurance']
    },
    {
      id: '26',
      type: 'visa',
      title: 'Thailand Tourist Visa',
      description: 'Express visa processing for Thailand holidays.',
      price: '₹4,500',
      duration: '60 Days',
      destination: 'Thailand',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Express Processing', 'Documentation']
    },
    // Experience
    {
      id: '27',
      type: 'experience',
      title: 'Scuba Diving in Andaman',
      description: 'Explore the vibrant coral reefs of Havelock Island.',
      price: '₹4,500',
      duration: '2 Hours',
      destination: 'Andaman',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Scuba', 'Adventure', 'Marine Life']
    },
    {
      id: '28',
      type: 'experience',
      title: 'Hot Air Balloon Ride',
      description: 'Float over the pink city of Jaipur at sunrise.',
      price: '₹12,000',
      duration: '1 Hour',
      destination: 'Jaipur',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Adventure', 'Sunrise', 'Aerial View']
    }
  ];

  const performSearch = () => {
    setIsSearching(true);

    // Simulate API delay
    setTimeout(() => {
      let results = allPackages;

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        results = results.filter(pkg =>
          pkg.title.toLowerCase().includes(query) ||
          pkg.description.toLowerCase().includes(query) ||
          pkg.destination.toLowerCase().includes(query) ||
          pkg.activities?.some(activity => activity.toLowerCase().includes(query))
        );
      }

      // Filter by destination
      if (filters.destination) {
        results = results.filter(pkg =>
          pkg.destination.toLowerCase().includes(filters.destination.toLowerCase())
        );
      }

      // Filter by duration
      if (filters.duration) {
        results = results.filter(pkg => {
          const duration = pkg.duration.toLowerCase();
          switch (filters.duration) {
            case '1-3':
              return duration.includes('2 nights') || duration.includes('3 nights');
            case '4-7':
              return duration.includes('4 nights') || duration.includes('5 nights') ||
                duration.includes('6 nights') || duration.includes('7 nights');
            case '8-14':
              return duration.includes('8 nights') || duration.includes('9 nights') ||
                duration.includes('10 nights') || duration.includes('11 nights') ||
                duration.includes('12 nights') || duration.includes('13 nights') ||
                duration.includes('14 nights');
            default:
              return true;
          }
        });
      }

      // Filter by price range
      if (filters.priceRange) {
        results = results.filter(pkg => {
          const price = parseInt(pkg.price.replace(/[₹,]/g, ''));
          switch (filters.priceRange) {
            case 'under-20k':
              return price < 20000;
            case '20k-30k':
              return price >= 20000 && price <= 30000;
            case '30k-40k':
              return price >= 30000 && price <= 40000;
            case 'above-40k':
              return price > 40000;
            default:
              return true;
          }
        });
      }

      // Filter by activity
      if (filters.activity) {
        results = results.filter(pkg =>
          pkg.activities?.some(activity =>
            activity.toLowerCase().includes(filters.activity.toLowerCase())
          )
        );
      }

      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilters({
      destination: '',
      duration: '',
      priceRange: '',
      activity: '',
      groupSize: '',
      type: '',
    });
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        filters,
        searchResults,
        isSearching,
        setSearchQuery,
        setFilters: updateFilters,
        performSearch,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
