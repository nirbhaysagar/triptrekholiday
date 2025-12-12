import { Heart, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

// Import local honeymoon images
import kashmir from "@/assets/honeymoon/kashmir.jpg";
import goa from "@/assets/honeymoon/goa.jpg";
import kerala from "@/assets/honeymoon/kerala.jpg";
import shimla from "@/assets/honeymoon/shimla.jpg";
import andaman from "@/assets/honeymoon/andaman.jpg";
import lehladakh from "@/assets/honeymoon/lehladakh.jpg";

const honeymoonDestinations = [
  {
    id: 1,
    name: "Kashmir Honeymoon",
    image: kashmir,
    description: "Paradise on Earth for Lovers",
    highlights: ["Shikara Ride on Dal Lake", "Gulmarg Gondola", "Pahalgam Valley", "Mughal Gardens", "Romantic Houseboats"],
    rating: 4.9,
    bestTime: "Apr – Oct",
    duration: "7D/6N",
    idealFor: ["Romantic", "Luxury", "Photography"],
    startsAt: "₹42,500",
    region: "Jammu & Kashmir",
  },
  {
    id: 2,
    name: "Goa Beach Romance",
    image: goa,
    description: "Sun, Sand & Eternal Love",
    highlights: ["Luxury Beach Resorts", "Private Candlelight Dinner", "Water Sports", "Sunset Cruise", "Spa Sessions"],
    rating: 4.8,
    bestTime: "Nov – Feb",
    duration: "5D/4N",
    idealFor: ["Beach", "Party", "Adventure"],
    startsAt: "₹34,500",
    region: "Goa",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: kerala,
    description: "Floating Paradise Romance",
    highlights: ["Luxury Houseboat Stay", "Alleppey Backwaters", "Munnar Tea Gardens", "Ayurvedic Couple Spa", "Traditional Kathakali"],
    rating: 4.9,
    bestTime: "Sep – Mar",
    duration: "6D/5N",
    idealFor: ["Romantic", "Nature", "Wellness"],
    startsAt: "₹38,500",
    region: "Kerala",
  },
  {
    id: 4,
    name: "Shimla Manali Romance",
    image: shimla,
    description: "Snow-Capped Mountain Love",
    highlights: ["Snow Activities", "Cozy Mountain Stays", "Mall Road Strolls", "Rohtang Pass", "Solang Valley"],
    rating: 4.7,
    bestTime: "Oct – Jun",
    duration: "6D/5N",
    idealFor: ["Mountains", "Adventure", "Winter"],
    startsAt: "₹29,500",
    region: "Himachal Pradesh",
  },
  {
    id: 5,
    name: "Andaman Islands",
    image: andaman,
    description: "Tropical Island Paradise",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Island Hopping", "Private Beach Resorts", "Sunset Views"],
    rating: 5.0,
    bestTime: "Oct – May",
    duration: "7D/6N",
    idealFor: ["Beach", "Adventure", "Water Sports"],
    startsAt: "₹52,500",
    region: "Andaman & Nicobar",
  },
  {
    id: 6,
    name: "Leh Ladakh Adventure",
    image: lehladakh,
    description: "High Altitude Romance & Adventure",
    highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Ancient Monasteries", "Desert Camping"],
    rating: 4.9,
    bestTime: "May – Sep",
    duration: "8D/7N",
    idealFor: ["Adventure", "Photography", "Unique"],
    startsAt: "₹48,500",
    region: "Ladakh",
  },
];

const HoneymoonPackages = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const cardsPerView = 3;
  const totalCards = honeymoonDestinations.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 304;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white text-gray-900 relative overflow-hidden">
      {/* Decorative Hearts */}
      <div className="absolute top-10 left-10 opacity-10">
        <Heart className="w-32 h-32 text-pink-400" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Heart className="w-40 h-40 text-rose-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Heart className="w-5 h-5" />
              Romantic Getaways
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Honeymoon Packages
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Begin your journey of love with unforgettable romantic escapes crafted 
              specially for newlyweds and couples.
            </p>
          </div>

          {/* Scrollable Destinations */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Romantic Destinations
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Handpicked destinations perfect for creating memories together
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={scrollPrev}
                  disabled={currentIndex === 0}
                  size="icon"
                  className="rounded-full bg-pink-100 hover:bg-pink-200 border border-pink-300 text-pink-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  onClick={scrollNext}
                  disabled={currentIndex >= maxIndex}
                  size="icon"
                  className="rounded-full bg-pink-100 hover:bg-pink-200 border border-pink-300 text-pink-700"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-hidden pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {honeymoonDestinations.map((destination) => {
                const isExpanded = expandedId === destination.id;
                const baseWidth = 304;
                const widthPx = isExpanded ? Math.round(baseWidth * 1.3) : baseWidth;
                return (
                  <div
                    key={destination.id}
                    className="flex-shrink-0 transition-[width] duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{ width: `${widthPx}px` }}
                    data-card-id={`card-${destination.id}`}
                  >
                    <div
                      className="bg-white rounded-[22px] overflow-hidden border border-pink-200 hover:border-pink-300 hover:shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group cursor-pointer h-[368px]"
                      onMouseEnter={() => setExpandedId(destination.id)}
                      onMouseLeave={() => setExpandedId(null)}
                      onClick={() => window.location.href = `/honeymoon/${destination.id}`}
                    >
                    <div className="relative h-full">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isExpanded ? 'blur-sm scale-105' : 'blur-0 scale-100'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                      {/* Price pill */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] px-3 py-1 rounded-full shadow-sm">
                        Price: On Demand
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-900">{destination.rating}</span>
                      </div>

                      {/* Heart icon */}
                      <div className="absolute top-3 left-3 bg-pink-100/90 backdrop-blur-sm rounded-full p-2">
                        <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
                      </div>

                      {/* Location Name Overlay */}
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {destination.name}
                        </h3>
                        <p className="text-xs text-white/90">
                          {destination.duration} • {destination.bestTime}
                        </p>
                      </div>

                      {/* Hover overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-pink-600/40 to-rose-600/40 flex items-center justify-center transition-opacity duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className="text-center text-white p-4">
                          <Sparkles className="w-8 h-8 mx-auto mb-3 animate-pulse" />
                          <h4 className="text-lg font-semibold mb-2">{destination.name}</h4>
                          <p className="text-sm text-white/90 mb-3">{destination.description}</p>
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {destination.idealFor?.map((tag: string, i: number) => (
                              <span key={i} className="px-2 py-1 text-xs bg-white/20 rounded-full">{tag}</span>
                            ))}
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = `/honeymoon/${destination.id}`;
                            }}
                            className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          >
                            Explore Package
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HoneymoonPackages;

