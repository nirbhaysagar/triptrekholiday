import { Plane, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import placeholder images (you can replace these with actual images)
import thailandImage from "@/assets/destination-1.jpg";
import nepalImage from "@/assets/destination-2.jpg";
import baliImage from "@/assets/destination-3.jpg";

const internationalDestinations = [
  {
    id: 1,
    name: "Thailand Paradise",
    image: thailandImage,
    description: "Land of Smiles & Tropical Beaches",
    highlights: ["Bangkok Temples", "Pattaya Beaches", "Phuket Islands", "Thai Cuisine", "Night Markets"],
    rating: 4.8,
    bestTime: "Nov – Apr",
    duration: "6D/5N",
    idealFor: ["Beach", "Culture", "Adventure"],
    startsAt: "₹35,000",
    region: "Thailand",
    visaRequired: true,
    currency: "THB",
  },
  {
    id: 2,
    name: "Nepal Adventure",
    image: nepalImage,
    description: "Himalayan Kingdom & Mount Everest",
    highlights: ["Kathmandu Valley", "Pokhara Lakes", "Mount Everest View", "Trekking", "Buddhist Monasteries"],
    rating: 4.9,
    bestTime: "Mar – May, Oct – Dec",
    duration: "7D/6N",
    idealFor: ["Trekking", "Adventure", "Culture"],
    startsAt: "₹28,500",
    region: "Nepal",
    visaRequired: false,
    currency: "NPR",
  },
  {
    id: 3,
    name: "Bali Retreat",
    image: baliImage,
    description: "Island of Gods & Tropical Paradise",
    highlights: ["Ubud Rice Terraces", "Bali Temples", "Seminyak Beach", "Volcano Tours", "Spa & Wellness"],
    rating: 4.7,
    bestTime: "Apr – Oct",
    duration: "5D/4N",
    idealFor: ["Beach", "Wellness", "Culture"],
    startsAt: "₹42,000",
    region: "Indonesia",
    visaRequired: true,
    currency: "IDR",
  },
];

const InternationalTours = () => {

  return (
    <section id="international" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            International Tours - Coming Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting international destinations coming soon! Stay tuned for amazing tours to Thailand, Nepal, and Bali.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {internationalDestinations.map((destination) => (
              <div
                key={destination.id}
                className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden opacity-75 cursor-not-allowed"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Coming Soon Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
                      Coming Soon
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                      <span className="text-white text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                      <p className="text-gray-600 text-sm">{destination.description}</p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                        {destination.highlights.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            +{destination.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>📍 {destination.region}</span>
                      <span>⏱️ {destination.duration}</span>
                    </div>

                    {/* Best Time */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">Best Time to Visit:</p>
                      <p className="text-sm text-gray-700">{destination.bestTime}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <div className="flex-1 bg-gray-400 text-white text-sm py-2 rounded-lg text-center cursor-not-allowed">
                        Coming Soon
                      </div>
                      <div className="flex-1 bg-gray-400 text-white text-sm py-2 rounded-lg text-center cursor-not-allowed">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in these upcoming international tours?</p>
          <Button
            onClick={() => window.open('https://wa.me/918178515133', '_blank')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full"
          >
            <Plane className="w-5 h-5 mr-2" />
            Get Notified When Available
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternationalTours;
