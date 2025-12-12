import { Star, Clock, Users, Shield, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Uttarakhand-specific images
import chardham from "@/assets/uttarakhand-usp/chardham.jpg";
import kedarnath from "@/assets/uttarakhand-usp/kedarnath.jpg";
import valleyofflower from "@/assets/uttarakhand-usp/valleyofflower.jpg";
import auli from "@/assets/uttarakhand-usp/auli.jpg";
import rishikesh from "@/assets/uttarakhand-usp/rishikesh.jpg";
import nainital from "@/assets/uttarakhand-usp/nainital.jpg";
import mussorie from "@/assets/mussorie.jpg";
import jimcorbett from "@/assets/jimcorbett.jpg";

const packages = [
  {
    id: 1,
    image: chardham,
    name: "Chardham Yatra Package",
    price: "₹45,000",
    rating: 5.0,
    duration: "10 Days 9 Nights",
    features: ["All Meals", "AC Transport", "Hotel Stay", "Pilgrimage Guide"],
    departurePoints: ["Delhi", "Haridwar"],
  },
  {
    id: 2,
    image: jimcorbett,
    name: "Jim Corbett Wildlife Safari",
    price: "₹18,500",
    rating: 4.8,
    duration: "3 Days 2 Nights",
    features: ["Jungle Safari", "Accommodation", "All Meals", "Naturalist Guide"],
  },
  {
    id: 3,
    image: valleyofflower,
    name: "Valley of Flowers Trek",
    price: "₹28,000",
    rating: 4.9,
    duration: "6 Days 5 Nights",
    features: ["Trekking Guide", "Camping", "Meals", "Transportation"],
  },
  {
    id: 4,
    image: auli,
    name: "Auli Skiing Adventure",
    price: "₹35,000",
    rating: 4.7,
    duration: "5 Days 4 Nights",
    features: ["Ski Equipment", "Instructor", "Accommodation", "All Meals"],
  },
  {
    id: 5,
    image: rishikesh,
    name: "Rishikesh Adventure Camp",
    price: "₹15,000",
    rating: 4.9,
    duration: "4 Days 3 Nights",
    features: ["River Rafting", "Camping", "Adventure Sports", "Meals"],
  },
  {
    id: 6,
    image: mussorie,
    name: "Mussoorie & Dhanaulti",
    price: "₹16,500",
    rating: 4.6,
    duration: "4 Days 3 Nights",
    features: ["Hill Station", "Cable Car", "Accommodation", "Breakfast"],
  },
  {
    id: 7,
    image: nainital,
    name: "Nainital & Bhimtal",
    price: "₹14,500",
    rating: 4.7,
    duration: "3 Days 2 Nights",
    features: ["Lake City", "Boat Ride", "Accommodation", "Meals"],
  },
  {
    id: 8,
    image: chardham,
    name: "Patagonia",
    price: "$734",
    rating: 4.8,
    duration: "7 Days 6 Nights",
    features: ["Accommodation", "Professional Guide"],
  },
];

const TourPackages = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cardsPerView = 4; // Number of cards visible at once
  const totalCards = packages.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 280; // Approximate card width including gap
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
    <section id="tour" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of unforgettable travel experiences.
            </p>
          </div>

          {/* Scrollable Package Cards */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 mb-6">
              <Button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={scrollNext}
                disabled={currentIndex >= maxIndex}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="flex-shrink-0 w-64"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">
                        Popular
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                          {pkg.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-900">
                            {pkg.rating}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Clock className="w-3 h-3 text-blue-600" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Users className="w-3 h-3 text-blue-600" />
                          <span>{pkg.features[0]}</span>
                        </div>
                        {pkg.departurePoints && (
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <MapPin className="w-3 h-3 text-blue-600" />
                            <span>Ex. {pkg.departurePoints.join(", ")}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Link to={`/package/${pkg.id}`} className="flex-1 bg-gray-900 text-white hover:bg-gray-800 text-sm py-2 rounded-md text-center">
                          View Details
                        </Link>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                          Book
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
