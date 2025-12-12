import { MapPin, Mountain, Camera, Star, Clock } from "lucide-react";
import { useState } from "react";

// Import Uttarakhand-specific images
import chardham from "@/assets/uttarakhand-usp/chardham.jpg";
import dodham from "@/assets/uttarakhand-usp/dodham.jpg";
import kedarnath from "@/assets/uttarakhand-usp/kedarnath.jpg";
import nainital from "@/assets/uttarakhand-usp/nainital.jpg";
import valleyofflower from "@/assets/uttarakhand-usp/valleyofflower.jpg";
import auli from "@/assets/uttarakhand-usp/auli.jpg";
import rishikesh from "@/assets/uttarakhand-usp/rishikesh.jpg";

const uttarakhandDestinations = [
  {
    id: 1,
    name: "Chardham Yatra",
    image: chardham,
    description: "Complete Spiritual Journey",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    rating: 4.9,
    bestTime: "May – Oct",
    altitude: "3,133 m",
    idealFor: ["Pilgrimage", "Spiritual"],
    startsAt: "₹45,000",
    region: "Ex. Haridwar & Delhi",
    departurePoints: ["Haridwar", "Delhi"],
  },
  {
    id: 2,
    name: "DoDham Yatra",
    image: dodham,
    description: "Kedarnath & Badrinath",
    highlights: ["Kedarnath Temple", "Badrinath Temple", "Guptkashi", "Joshimath"],
    rating: 4.7,
    bestTime: "May – Oct",
    altitude: "3,133 m",
    idealFor: ["Pilgrimage", "Temples"],
    startsAt: "₹28,500",
    region: "Ex. Haridwar & Delhi",
    departurePoints: ["Haridwar", "Delhi"],
  },
  {
    id: 3,
    name: "Kedarnath Special",
    image: kedarnath,
    description: "Sacred Shiva Temple",
    highlights: ["Kedarnath Temple", "Gaurikund", "Sonprayag", "Trekking"],
    rating: 4.9,
    bestTime: "May – Oct",
    altitude: "3,583 m",
    idealFor: ["Pilgrimage", "Trekking"],
    startsAt: "₹18,500",
    region: "Ex. Haridwar & Delhi",
    departurePoints: ["Haridwar", "Delhi"],
  },
  {
    id: 4,
    name: "Nainital",
    image: nainital,
    description: "Lake District of India",
    highlights: ["Naini Lake", "Cable Car", "Tiffin Top", "Mall Road"],
    rating: 4.8,
    bestTime: "Mar – Jun",
    altitude: "2,084 m",
    idealFor: ["Families", "Leisure"],
    startsAt: "₹12,500",
    region: "Nainital, Uttarakhand",
  },
  {
    id: 5,
    name: "Valley of Flowers",
    image: valleyofflower,
    description: "Nature's Canvas",
    highlights: ["Trekking", "Wildflowers", "UNESCO Site", "Hemkund Sahib"],
    rating: 4.9,
    bestTime: "Jul – Sep",
    altitude: "3,500 m",
    idealFor: ["Trekking", "Nature"],
    startsAt: "₹15,800",
    region: "Chamoli, Uttarakhand",
  },
  {
    id: 6,
    name: "Auli Skiing",
    image: auli,
    description: "Skiing Paradise",
    highlights: ["Skiing", "Cable Car", "Snow Views", "Gurso Bugyal"],
    rating: 4.7,
    bestTime: "Dec – Mar",
    altitude: "2,800 m",
    idealFor: ["Skiing", "Snow"],
    startsAt: "₹22,000",
    region: "Chamoli, Uttarakhand",
  },
  {
    id: 7,
    name: "Rishikesh Adventure",
    image: rishikesh,
    description: "Yoga Capital & Adventure",
    highlights: ["River Rafting", "Ganga Aarti", "Yoga Retreats", "Bungee Jumping"],
    rating: 4.8,
    bestTime: "Oct – Mar",
    altitude: "372 m",
    idealFor: ["Adventure", "Spiritual"],
    startsAt: "₹8,900",
    region: "Rishikesh, Uttarakhand",
  },
];

const UttarakhandUSP = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Mountain className="w-5 h-5" />
              Our Speciality
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Uttarakhand
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Where the mountains touch the sky and every journey becomes a legend. 
              Experience the raw beauty and spiritual essence of India's most majestic state.
            </p>
          </div>

          {/* USP Stats with Clean Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Happy Travelers</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Local Support</div>
            </div>
          </div>

          {/* Scrollable Destinations */}
          <div className="relative">
            {/* Header */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Featured Destinations
              </h3>
              <p className="text-gray-600 text-lg">
                From spiritual retreats to adventure sports, discover what makes Uttarakhand legendary
              </p>
            </div>

            {/* Grid Container - 3 rows x 2 columns */}
            <div className="grid grid-cols-2 gap-6">
              {uttarakhandDestinations.map((destination) => {
                const isExpanded = expandedId === destination.id;
                return (
                  <div
                    key={destination.id}
                  >
                    <div
                      className="bg-white rounded-[22px] overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group cursor-pointer h-[400px]"
                      onMouseEnter={() => setExpandedId(destination.id)}
                      onMouseLeave={() => setExpandedId(null)}
                      onClick={() => window.location.href = `/usp/${destination.id}`}
                    >
                    {/* Full-image card with overlays occupying entire card */}
                    <div className="relative h-full">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${isExpanded ? 'scale-110' : 'scale-100'}`}
                      />
                      {/* Gradient to ensure legibility at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                      {/* Price pill and rating */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] px-3 py-1 rounded-full shadow-sm">
                        Price: On Demand
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-900">{destination.rating}</span>
                      </div>

                      {/* Bottom meta strip */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-white text-lg font-semibold drop-shadow">{destination.name}</h3>
                            <p className="text-white/90 text-xs drop-shadow">{destination.bestTime} • {destination.altitude}</p>
                          </div>
                        </div>
                      </div>

                      {/* Simple hover text overlay */}
                      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
                              window.location.href = `/usp/${destination.id}`;
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

export default UttarakhandUSP;
