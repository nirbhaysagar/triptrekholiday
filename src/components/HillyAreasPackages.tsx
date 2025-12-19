import { MapPin, Mountain, Camera, Star, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import shimla from "@/assets/pophillpackage/shimlamanali1.png";
import darjeeling from "@/assets/pophillpackage/darjandgangtok.png";
import mussorie from "@/assets/pophillpackage/mussorie.png";
import kasauli from "@/assets/pophillpackage/kasauli.png";
import munnar from "@/assets/pophillpackage/munnar1.png";

const hillyDestinations = [
  {
    id: 1,
    name: "Shimla Manali",
    image: shimla,
    description: "Queen of Hills & Adventure Valley",
    highlights: ["Mall Road", "Rohtang Pass", "Solang Valley", "Kufri", "Hadimba Temple"],
    rating: 4.8,
    bestTime: "Oct – Jun",
    altitude: "2,276 m",
    idealFor: ["Honeymoon", "Family", "Adventure"],
    startsAt: "₹24,500",
    region: "Himachal Pradesh",
  },
  {
    id: 2,
    name: "Darjeeling Gangtok",
    image: darjeeling,
    description: "Tea Gardens & Himalayan Views",
    highlights: ["Tiger Hill Sunrise", "Tsomgo Lake", "Nathula Pass", "Tea Estates", "Monasteries"],
    rating: 4.9,
    bestTime: "Mar – May, Oct – Dec",
    altitude: "1,650 m",
    idealFor: ["Sightseeing", "Culture", "Photography"],
    startsAt: "₹28,000",
    region: "West Bengal & Sikkim",
  },
  {
    id: 3,
    name: "Mussoorie Dhanaulti",
    image: mussorie,
    description: "Queen of Hills & Eco Retreat",
    highlights: ["Kempty Falls", "Gun Hill", "Dhanaulti Eco Park", "Camel's Back Road", "Lal Tibba"],
    rating: 4.7,
    bestTime: "Apr – Jun, Sep – Nov",
    altitude: "2,005 m",
    idealFor: ["Weekend", "Family", "Nature"],
    startsAt: "₹16,500",
    region: "Uttarakhand",
  },
  {
    id: 4,
    name: "Kasauli",
    image: kasauli,
    description: "Colonial Charm & Nature Trails",
    highlights: ["Monkey Point", "Sunset Point", "Christ Church", "Gilbert Trail", "Baptist Church"],
    rating: 4.6,
    bestTime: "Mar – Jun, Sep – Nov",
    altitude: "1,927 m",
    idealFor: ["Peaceful", "Nature", "Weekend"],
    startsAt: "₹15,500",
    region: "Himachal Pradesh",
  },
  {
    id: 5,
    name: "Munnar Thekkady",
    image: munnar,
    description: "Tea Gardens & Wildlife Sanctuary",
    highlights: ["Tea Plantations", "Periyar Wildlife", "Eravikulam National Park", "Spice Gardens", "Mattupetty Dam"],
    rating: 4.9,
    bestTime: "Sep – May",
    altitude: "1,600 m",
    idealFor: ["Nature", "Wildlife", "Photography"],
    startsAt: "₹24,500",
    region: "Kerala",
  },
];

const HillyAreasPackages = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const cardsPerView = 3;
  const totalCards = hillyDestinations.length;
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
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Hilly Areas Packages
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Escape to the serene mountains and discover breathtaking hill stations
              across India's most scenic landscapes.
            </p>
          </div>

          {/* Scrollable Destinations */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Popular Hill Packages
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  From tea gardens to snow peaks, explore India's finest hill stations
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={scrollPrev}
                  disabled={currentIndex === 0}
                  size="icon"
                  className="rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  onClick={scrollNext}
                  disabled={currentIndex >= maxIndex}
                  size="icon"
                  className="rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700"
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
              {hillyDestinations.map((destination) => {
                const isExpanded = expandedId === destination.id;
                const baseWidth = 304;
                const widthPx = isExpanded ? Math.round(baseWidth * 1.3) : baseWidth;
                return (
                  <div
                    key={destination.id}
                    className="flex-shrink-0 transition-[width] duration-1000 ease-out"
                    style={{ width: `${widthPx}px` }}
                    data-card-id={`card-${destination.id}`}
                  >
                    <div
                      className="bg-white rounded-[22px] overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-1000 ease-out group cursor-pointer h-[368px]"
                      onMouseEnter={() => setExpandedId(destination.id)}
                      onMouseLeave={() => setExpandedId(null)}
                      onClick={() => window.location.href = `/hilly/${destination.id}`}
                    >
                      <div className="relative h-full">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-[transform,filter] duration-1000 ease-out ${isExpanded ? 'blur-sm scale-105' : 'blur-0 scale-100'}`}
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

                        {/* Location Name Overlay */}
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {destination.name}
                          </h3>
                          <p className="text-xs text-white/90">
                            {destination.bestTime} • {destination.altitude}
                          </p>
                        </div>

                        {/* Hover overlay */}
                        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-1000 ease-out ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                          <div className="text-center text-white p-4">
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
                                window.location.href = `/hilly/${destination.id}`;
                              }}
                              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                            >
                              Explore Details
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

export default HillyAreasPackages;

