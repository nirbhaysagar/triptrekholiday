import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Heart, MapPin, Phone, CheckCircle2, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";

// Import images from honeymoon folder
import kashmir from "@/assets/honeymoon/kashmir.jpg";
import goa from "@/assets/honeymoon/goa.jpg";
import kerala from "@/assets/honeymoon/kerala.jpg";
import shimla from "@/assets/honeymoon/shimla.jpg";
import andaman from "@/assets/honeymoon/andaman.jpg";
import lehladakh from "@/assets/honeymoon/lehladakh.jpg";

const mockHoneymoon = [
  { 
    id: 1, 
    name: "Kashmir Honeymoon", 
    image: kashmir, 
    rating: 4.9, 
    bestTime: "Apr – Oct", 
    duration: "6 Days 5 Nights",
    region: "Jammu & Kashmir", 
    summary: "Experience paradise on earth with your loved one. Enjoy romantic shikara rides on Dal Lake, explore the stunning meadows of Gulmarg, and create magical memories in the valley of Kashmir.",
    highlights: ["Private Shikara Ride", "Gulmarg Gondola", "Pahalgam Valley", "Mughal Gardens", "Romantic Houseboat Stay", "Candlelight Dinner"],
    price: "₹35,000",
    itinerary: [
      "Day 1: Arrival in Srinagar, check-in houseboat, romantic shikara ride on Dal Lake",
      "Day 2: Srinagar sightseeing - Mughal Gardens, Shankaracharya Temple, evening at Boulevard Road",
      "Day 3: Full day excursion to Gulmarg, Gondola ride, snow activities, return to Srinagar",
      "Day 4: Drive to Pahalgam, visit Betaab Valley, Aru Valley, overnight in Pahalgam",
      "Day 5: Pahalgam to Srinagar, shopping at Lal Chowk, candlelight dinner",
      "Day 6: Check-out and departure from Srinagar"
    ],
    includes: ["Houseboat and hotel accommodation", "All meals", "Private AC vehicle", "Shikara ride", "Gondola tickets", "Candlelight dinner", "Room decoration"],
    excludes: ["Flights", "Pony rides in Pahalgam", "Adventure activities", "Personal expenses", "Tips"]
  },
  { 
    id: 2, 
    name: "Goa Beach Romance", 
    image: goa, 
    rating: 4.8, 
    bestTime: "Nov – Feb", 
    duration: "5 Days 4 Nights",
    region: "Goa", 
    summary: "Sun-kissed beaches, candlelight dinners by the sea, and vibrant nightlife. Perfect blend of relaxation and romance in India's favorite beach destination.",
    highlights: ["Beach Resort Stay", "Sunset Cruise", "Candlelight Beach Dinner", "Water Sports", "Beach Shacks", "Nightlife"],
    price: "₹28,000",
    itinerary: [
      "Day 1: Arrival in Goa, check-in beach resort, evening beach walk and welcome dinner",
      "Day 2: North Goa beaches - Calangute, Baga, Anjuna, Fort Aguada, sunset cruise",
      "Day 3: South Goa tour - Colva Beach, Palolem, candlelight dinner by the beach",
      "Day 4: Water sports at Baga Beach, spa session, evening at leisure",
      "Day 5: Morning free time, check-out and departure"
    ],
    includes: ["Beach resort accommodation", "Daily breakfast", "Sunset cruise", "Candlelight dinner", "Airport transfers", "Room decoration"],
    excludes: ["Flights", "Lunch and dinner (except candlelight)", "Water sports fees", "Spa charges", "Personal expenses"]
  },
  { 
    id: 3, 
    name: "Kerala Backwaters", 
    image: kerala, 
    rating: 4.9, 
    bestTime: "Sep – Mar", 
    duration: "6 Days 5 Nights",
    region: "Kerala", 
    summary: "Drift through serene backwaters in a luxury houseboat, enjoy Ayurvedic couple spa, and explore the misty hills of Munnar in God's Own Country.",
    highlights: ["Luxury Houseboat", "Munnar Tea Gardens", "Ayurvedic Couple Spa", "Alleppey Backwaters", "Kathakali Dance", "Sunset Views"],
    price: "₹32,000",
    itinerary: [
      "Day 1: Arrival in Cochin, drive to Munnar, check-in resort, evening tea estate walk",
      "Day 2: Munnar sightseeing - Tea Museum, Mattupetty Dam, Echo Point",
      "Day 3: Drive to Thekkady, spice plantation tour, Kathakali dance show",
      "Day 4: Drive to Alleppey, check-in luxury houseboat, backwater cruise with lunch",
      "Day 5: Houseboat to resort, Ayurvedic couple spa session, evening at leisure",
      "Day 6: Check-out, drive to Cochin for departure"
    ],
    includes: ["Resort and houseboat accommodation", "All meals on houseboat", "Breakfast at resorts", "Couple spa session", "All transfers", "Sightseeing"],
    excludes: ["Flights to Cochin", "Lunch and dinner at resorts", "Additional spa treatments", "Personal expenses", "Tips"]
  },
  { 
    id: 4, 
    name: "Shimla Manali Romance", 
    image: shimla, 
    rating: 4.7, 
    bestTime: "Oct – Jun", 
    duration: "6 Days 5 Nights",
    region: "Himachal Pradesh", 
    summary: "Snow-capped mountains, cozy cafes, and romantic walks on Mall Road. Perfect for couples seeking mountain romance and adventure.",
    highlights: ["Mall Road Shimla", "Rohtang Pass", "Solang Valley", "Private Igloo Stay", "Snow Activities", "Cozy Mountain Resorts"],
    price: "₹25,000",
    itinerary: [
      "Day 1: Arrival in Shimla, check-in hotel, evening Mall Road walk",
      "Day 2: Shimla local sightseeing - Kufri, Jakhu Temple, Ridge, romantic dinner",
      "Day 3: Drive to Manali, check-in resort, evening at Old Manali",
      "Day 4: Manali sightseeing - Hadimba Temple, Vashisht, Club House",
      "Day 5: Full day Solang Valley and Rohtang Pass, snow activities",
      "Day 6: Check-out and departure from Manali"
    ],
    includes: ["Hotel accommodation", "Daily breakfast and dinner", "All transfers", "Rohtang Pass permit", "Room decoration", "Honeymoon cake"],
    excludes: ["Flights", "Lunch", "Snow activity fees", "Personal expenses", "Tips"]
  },
  { 
    id: 5, 
    name: "Andaman Islands", 
    image: andaman, 
    rating: 5.0, 
    bestTime: "Oct – May", 
    duration: "7 Days 6 Nights",
    region: "Andaman & Nicobar", 
    summary: "Pristine beaches, crystal-clear waters, and secluded islands. Perfect tropical paradise for couples seeking privacy and adventure.",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Private Beach Dinner", "Island Hopping", "Coral Reefs", "Sunset Views"],
    price: "₹45,000",
    itinerary: [
      "Day 1: Arrival in Port Blair, Cellular Jail, Light & Sound Show",
      "Day 2: Ferry to Havelock Island, check-in beach resort, Radhanagar Beach sunset",
      "Day 3: Scuba diving at Elephant Beach, water sports, private beach dinner",
      "Day 4: Ferry to Neil Island, Natural Bridge, Bharatpur Beach, return to Havelock",
      "Day 5: Leisure day at resort, couple spa, beach activities",
      "Day 6: Ferry to Port Blair, shopping at Aberdeen Bazaar",
      "Day 7: Check-out and departure"
    ],
    includes: ["Beach resort accommodation", "All meals", "Ferry tickets", "Scuba diving session", "Private beach dinner", "All transfers"],
    excludes: ["Flights to Port Blair", "Additional water sports", "Extra diving sessions", "Personal expenses", "Tips"]
  },
  { 
    id: 6, 
    name: "Leh Ladakh Adventure", 
    image: lehladakh, 
    rating: 4.8, 
    bestTime: "Oct – Mar", 
    duration: "4 Days 3 Nights",
    region: "Rajasthan", 
    summary: "Royal romance in the City of Lakes. Stay in heritage hotels, enjoy boat rides on Lake Pichola, and dine like royalty with stunning palace views.",
    highlights: ["Lake Palace View", "Pichola Boat Ride", "City Palace", "Rooftop Dining", "Bagore Ki Haveli", "Heritage Hotels"],
    price: "₹30,000",
    itinerary: [
      "Day 1: Arrival in Udaipur, check-in heritage hotel, evening Lake Pichola boat ride",
      "Day 2: City Palace tour, Jagdish Temple, Saheliyon Ki Bari, rooftop candlelight dinner",
      "Day 3: Day trip to Kumbhalgarh Fort, evening cultural show at Bagore Ki Haveli",
      "Day 4: Morning leisure, shopping at local markets, departure"
    ],
    includes: ["Heritage hotel accommodation", "Daily breakfast", "Boat ride on Lake Pichola", "Candlelight dinner", "All transfers", "Cultural show tickets"],
    excludes: ["Flights", "Lunch and dinner (except candlelight)", "Palace entry fees", "Personal expenses", "Shopping"]
  },
  { 
    id: 7, 
    name: "Coorg Honeymoon", 
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=400&h=300&fit=crop", 
    rating: 4.7, 
    bestTime: "Oct – Mar", 
    duration: "5 Days 4 Nights",
    region: "Karnataka", 
    summary: "Romantic escape to coffee country. Stay in private villas amidst coffee estates, enjoy nature walks, and experience the tranquility of the Western Ghats.",
    highlights: ["Private Villa Stay", "Coffee Estate Walks", "Abbey Falls", "Raja's Seat Sunset", "Dubare Elephant Camp", "Romantic Dinners"],
    price: "₹22,000",
    itinerary: [
      "Day 1: Arrival in Bangalore, drive to Coorg, check-in private villa, coffee estate walk",
      "Day 2: Coorg sightseeing - Abbey Falls, Raja's Seat, Omkareshwara Temple",
      "Day 3: Visit Dubare Elephant Camp, river rafting, evening bonfire",
      "Day 4: Coffee plantation tour with tasting, visit Talacauvery, romantic dinner",
      "Day 5: Morning leisure, check-out and drive to Bangalore"
    ],
    includes: ["Private villa accommodation", "All meals", "Coffee plantation tour", "All transfers", "Bonfire evening", "Room decoration"],
    excludes: ["Flights", "Elephant activities fees", "Rafting charges", "Personal expenses", "Tips"]
  },
  { 
    id: 8, 
    name: "Leh Ladakh Adventure", 
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", 
    rating: 4.9, 
    bestTime: "May – Sep", 
    duration: "7 Days 6 Nights",
    region: "Ladakh", 
    summary: "For adventurous couples! Experience the raw beauty of high-altitude landscapes, camp under starry skies at Pangong Lake, and create unique memories in the land of passes.",
    highlights: ["Pangong Lake Camping", "Nubra Valley", "Khardung La Pass", "Monasteries", "Stargazing", "Magnetic Hill"],
    price: "₹42,000",
    itinerary: [
      "Day 1: Arrival in Leh, acclimatization day, evening Leh market walk",
      "Day 2: Leh local sightseeing - Shanti Stupa, Leh Palace, monasteries",
      "Day 3: Drive to Nubra Valley via Khardung La, camel safari, overnight in camps",
      "Day 4: Nubra to Pangong Lake, romantic lakeside camping under stars",
      "Day 5: Pangong to Leh via Changla Pass, evening at leisure",
      "Day 6: Day trip to Magnetic Hill, Sangam, Alchi Monastery",
      "Day 7: Check-out and departure from Leh"
    ],
    includes: ["Hotel and camp accommodation", "All meals", "AC vehicle (except high passes)", "All permits", "Camping equipment", "Camel safari"],
    excludes: ["Flights to Leh", "Oxygen cylinders (if needed)", "Personal expenses", "Tips", "Travel insurance"]
  },
];

const HoneymoonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockHoneymoon.find(i => String(i.id) === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-2xl font-semibold mt-6">Package not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Full-Width Image */}
      <div className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] w-full">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        {/* Heart Icon */}
        <div className="absolute top-8 right-8 bg-pink-100/90 backdrop-blur-sm rounded-full p-3">
          <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
        </div>

        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 left-8 inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Title & Meta Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-12">
          <div className="container mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 bg-pink-100/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
              <span className="text-sm font-medium text-pink-800">Honeymoon Special</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">{item.name}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/90">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 
                <span className="font-medium">{item.rating}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" /> 
                <span>{item.duration}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" /> 
                <span>{item.region}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Overview */}
        <div className="max-w-4xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Overview</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.summary}</p>
        </div>

        {/* Highlights & Details Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Tour Highlights */}
          <div className="lg:col-span-2 bg-pink-50 rounded-2xl p-6 sm:p-8 border border-pink-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Romantic Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {item.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <Heart className="w-4 h-4 text-pink-600 fill-pink-600 flex-shrink-0" />
                  <span className="text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Quick Info</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Duration</span>
                <span className="font-semibold text-sm">{item.duration}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Best Time</span>
                <span className="font-semibold text-sm">{item.bestTime}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Region</span>
                <span className="font-semibold text-sm">{item.region}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Rating</span>
                <span className="font-semibold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {item.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Inclusion & Exclusion */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* What's Included */}
          <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {item.includes?.map((include, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{include}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Not Included */}
          <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What's Not Included</h3>
            </div>
            <ul className="space-y-3">
              {item.excludes?.map((exclude, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{exclude}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Itinerary */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="itinerary" className="border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-base sm:text-lg font-semibold text-gray-900">View Complete Day-wise Itinerary ({item.itinerary?.length} Days)</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pb-6">
                  {item.itinerary?.map((day, index) => (
                    <div key={index} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-700 leading-relaxed">{day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Price & Booking CTA */}
        <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Honeymoon Special</span>
              </div>
              <h3 className="text-4xl font-bold mb-2">{item.price}</h3>
              <p className="text-white/80 text-lg">Starting price per couple</p>
              <p className="text-white/60 text-sm mt-2">Inclusive of romantic experiences, accommodation, and meals</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-white text-pink-600 hover:bg-white/90 px-10 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                Book Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneymoonDetail;

