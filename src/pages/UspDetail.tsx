import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Mountain, MapPin, Phone, CheckCircle2, XCircle, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import { useState } from "react";

// Import banner images
import chardhamBanner from "@/assets/banner-chardham.jpg";
import kedarnathBanner from "@/assets/kedarnath-banner.jpg";
import valleyofflowerBanner from "@/assets/valleyofflower-banner.jpg";
import auliBanner from "@/assets/auli-banner.jpg";
import nainitalBanner from "@/assets/nainital-banner.jpg";
import rishikeshBanner from "@/assets/rishikesh-banner.jpg";

const mockUsp = [
  {
    id: 1,
    name: "Chardham Yatra",
    image: chardhamBanner,
    rating: 4.9,
    bestTime: "May – Oct",
    altitude: "3,133 m",
    region: "Ex. Haridwar & Delhi",
    summary: "Complete spiritual journey to all four sacred dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath. A transformative pilgrimage experience.",
    highlights: ["Yamunotri Temple", "Gangotri Temple", "Kedarnath Temple", "Badrinath Temple", "Gaurikund", "Joshimath"],
    departurePoints: ["Haridwar", "Delhi"],
    departureInfo: {
      "Haridwar": {
        duration: "10 Days 9 Nights",
        price: "₹17,000",
        itinerary: [
          "Day 1: Arrival in Haridwar, check-in hotel, evening Ganga Aarti at Har Ki Pauri",
          "Day 2: Drive to Barkot via Mussoorie, visit Kempty Falls, overnight stay",
          "Day 3: Trek to Yamunotri Temple, holy dip in Yamuna, return to Barkot",
          "Day 4: Drive to Uttarkashi, visit Gangotri Temple, return to Uttarkashi",
          "Day 5: Drive to Guptkashi via Tehri Dam, overnight stay",
          "Day 6: Trek to Kedarnath Temple (16km), darshan and overnight in Kedarnath",
          "Day 7: Return trek to Gaurikund, drive to Joshimath, overnight stay",
          "Day 8: Drive to Badrinath, visit temple and Mana village, overnight in Badrinath",
          "Day 9: Morning darshan at Badrinath, drive to Rudraprayag, overnight stay",
          "Day 10: Drive back to Haridwar, drop at railway station/airport"
        ],
        includes: ["Accommodation in hotels/camps", "All meals (breakfast, lunch, dinner)", "All transfers and sightseeing by AC vehicle", "Professional guide throughout the journey", "All temple entry fees and permits"],
        excludes: ["Flights to/from Haridwar", "Personal expenses and tips", "Travel insurance", "Helicopter services (optional)", "Any meals not mentioned"]
      },
      "Delhi": {
        duration: "12 Days 11 Nights",
        price: "₹21,500",
        itinerary: [
          "Day 1: Pickup from Delhi, drive to Haridwar, evening Ganga Aarti, overnight stay",
          "Day 2: Drive to Barkot via Mussoorie, visit Kempty Falls, overnight stay",
          "Day 3: Trek to Yamunotri Temple, holy dip in Yamuna, return to Barkot",
          "Day 4: Drive to Uttarkashi, visit Gangotri Temple, return to Uttarkashi",
          "Day 5: Drive to Guptkashi via Tehri Dam, overnight stay",
          "Day 6: Trek to Kedarnath Temple (16km), darshan and overnight in Kedarnath",
          "Day 7: Return trek to Gaurikund, drive to Joshimath, overnight stay",
          "Day 8: Drive to Badrinath, visit temple and Mana village, overnight in Badrinath",
          "Day 9: Morning darshan at Badrinath, drive to Rudraprayag, overnight stay",
          "Day 10: Drive to Rishikesh, visit Triveni Ghat, overnight stay",
          "Day 11: Morning yoga session, drive to Delhi, overnight stay",
          "Day 12: Drop at Delhi airport/railway station"
        ],
        includes: ["Pickup and drop in Delhi", "Premium accommodation", "All meals (breakfast, lunch, dinner)", "AC vehicle for all transfers", "Expert guide and support staff", "All permits and entry fees"],
        excludes: ["Flights to/from Delhi", "Personal expenses", "Travel insurance", "Helicopter services (optional)", "Tips and gratuities"]
      }
    }
  },
  {
    id: 2,
    name: "DoDham Yatra",
    image: kedarnathBanner,
    rating: 4.7,
    bestTime: "May – Oct",
    altitude: "3,133 m",
    region: "Ex. Haridwar & Delhi",
    summary: "Sacred journey to Kedarnath and Badrinath temples, the two most important dhams in the Char Dham circuit.",
    highlights: ["Kedarnath Temple", "Badrinath Temple", "Guptkashi", "Joshimath", "Trekking", "Pilgrimage"],
    departurePoints: ["Haridwar", "Delhi"],
    departureInfo: {
      "Haridwar": {
        duration: "7 Days 6 Nights",
        price: "₹11,500",
        itinerary: [
          "Day 1: Arrival in Haridwar, check-in hotel, evening Ganga Aarti, overnight stay",
          "Day 2: Drive to Guptkashi via Rudraprayag, overnight stay in Guptkashi",
          "Day 3: Drive to Gaurikund, trek to Kedarnath Temple (16km), overnight in Kedarnath",
          "Day 4: Morning darshan at Kedarnath, return trek to Gaurikund, drive to Joshimath",
          "Day 5: Drive to Badrinath, visit temple and Mana village, overnight in Badrinath",
          "Day 6: Morning darshan at Badrinath, drive to Rudraprayag, overnight stay",
          "Day 7: Drive back to Haridwar, drop at railway station/airport"
        ],
        includes: ["Accommodation", "Daily breakfast and dinner", "All transfers by vehicle", "Professional guide", "Temple entry fees"],
        excludes: ["Flights", "Lunch", "Personal expenses", "Helicopter services", "Tips"]
      },
      "Delhi": {
        duration: "9 Days 8 Nights",
        price: "₹14,500",
        itinerary: [
          "Day 1: Pickup from Delhi, drive to Haridwar, evening Ganga Aarti, overnight stay",
          "Day 2: Drive to Guptkashi via Rudraprayag, overnight stay in Guptkashi",
          "Day 3: Drive to Gaurikund, trek to Kedarnath Temple (16km), overnight in Kedarnath",
          "Day 4: Morning darshan at Kedarnath, return trek to Gaurikund, drive to Joshimath",
          "Day 5: Drive to Badrinath, visit temple and Mana village, overnight in Badrinath",
          "Day 6: Morning darshan at Badrinath, drive to Rudraprayag, overnight stay",
          "Day 7: Drive to Rishikesh, visit Triveni Ghat, overnight stay",
          "Day 8: Drive to Delhi, overnight stay",
          "Day 9: Drop at Delhi airport/railway station"
        ],
        includes: ["Pickup and drop in Delhi", "Accommodation", "Daily breakfast and dinner", "All transfers by AC vehicle", "Professional guide", "Temple entry fees"],
        excludes: ["Flights to/from Delhi", "Lunch", "Personal expenses", "Helicopter services", "Tips"]
      }
    }
  },
  {
    id: 3,
    name: "Kedarnath Special",
    image: kedarnathBanner,
    rating: 4.9,
    bestTime: "May – Oct",
    altitude: "3,583 m",
    region: "Ex. Haridwar & Delhi",
    summary: "Dedicated pilgrimage to the sacred Kedarnath temple, one of the 12 Jyotirlingas of Lord Shiva.",
    highlights: ["Kedarnath Temple", "Gaurikund", "Sonprayag", "Trekking", "Helicopter Option", "Darshan"],
    departurePoints: ["Haridwar", "Delhi"],
    departureInfo: {
      "Haridwar": {
        duration: "5 Days 4 Nights",
        price: "₹9,000",
        itinerary: [
          "Day 1: Arrival in Haridwar, check-in hotel, evening Ganga Aarti, overnight stay",
          "Day 2: Drive to Guptkashi via Rudraprayag, overnight stay in Guptkashi",
          "Day 3: Drive to Gaurikund, trek to Kedarnath Temple (16km), overnight in Kedarnath",
          "Day 4: Morning darshan at Kedarnath, return trek to Gaurikund, drive to Haridwar",
          "Day 5: Morning free time, drop at railway station/airport"
        ],
        includes: ["Accommodation in Haridwar and Kedarnath", "Daily meals", "All transfers", "Trekking guide", "Temple permits"],
        excludes: ["Flights", "Personal expenses", "Helicopter option", "Porter services", "Insurance"]
      },
      "Delhi": {
        duration: "6 Days 5 Nights",
        price: "₹11,500",
        itinerary: [
          "Day 1: Pickup from Delhi, drive to Haridwar, evening Ganga Aarti, overnight stay",
          "Day 2: Drive to Guptkashi via Rudraprayag, overnight stay in Guptkashi",
          "Day 3: Drive to Gaurikund, trek to Kedarnath Temple (16km), overnight in Kedarnath",
          "Day 4: Morning darshan at Kedarnath, return trek to Gaurikund, drive to Haridwar",
          "Day 5: Drive to Delhi, overnight stay",
          "Day 6: Drop at Delhi airport/railway station"
        ],
        includes: ["Pickup and drop in Delhi", "Accommodation in Haridwar and Kedarnath", "Daily meals", "All transfers by AC vehicle", "Trekking guide", "Temple permits"],
        excludes: ["Flights to/from Delhi", "Personal expenses", "Helicopter option", "Porter services", "Insurance"]
      }
    }
  },
  {
    id: 4,
    name: "Nainital",
    image: nainitalBanner,
    rating: 4.8,
    bestTime: "Mar – Jun",
    altitude: "2,084 m",
    region: "Nainital, Uttarakhand",
    summary: "Beautiful lake district with boating, cable car rides, and stunning viewpoints perfect for families.",
    highlights: ["Naini Lake", "Cable Car", "Tiffin Top", "Mall Road", "Boating", "Shopping"],
    duration: "3 Days 2 Nights",
    price: "₹12,500",
    itinerary: [
      "Day 1: Arrival in Nainital, check-in hotel, evening boating on Naini Lake, overnight stay",
      "Day 2: Morning cable car ride to Snow View Point, visit Tiffin Top, Mall Road shopping",
      "Day 3: Morning free time, check-out and departure"
    ],
    includes: ["Hotel accommodation", "Daily breakfast", "Local sightseeing transfers", "Cable car tickets", "Boating on Naini Lake"],
    excludes: ["Flights/trains", "Lunch and dinner", "Personal expenses", "Shopping", "Adventure activities"]
  },
  {
    id: 5,
    name: "Valley of Flowers",
    image: valleyofflowerBanner,
    rating: 4.9,
    bestTime: "Jul – Sep",
    altitude: "3,500 m",
    region: "Chamoli, Uttarakhand",
    summary: "UNESCO World Heritage site with breathtaking wildflowers and the sacred Hemkund Sahib gurudwara.",
    highlights: ["Wildflowers", "UNESCO Site", "Hemkund Sahib", "Trekking", "Nature", "Photography"],
    duration: "6 Days 5 Nights",
    price: "₹15,800",
    itinerary: [
      "Day 1: Arrival in Haridwar, drive to Joshimath, overnight stay",
      "Day 2: Drive to Govindghat, trek to Ghangaria (14km), overnight stay",
      "Day 3: Early morning trek to Valley of Flowers, explore wildflowers, return to Ghangaria",
      "Day 4: Trek to Hemkund Sahib (6km), visit gurudwara, return to Ghangaria",
      "Day 5: Trek back to Govindghat, drive to Joshimath, overnight stay",
      "Day 6: Drive back to Haridwar, drop at railway station/airport"
    ],
    includes: ["Accommodation in hotels/camps", "All meals during trek", "Trekking guide and support staff", "All permits and fees", "Transportation from Haridwar"],
    excludes: ["Flights to Haridwar", "Personal trekking gear", "Porter services", "Travel insurance", "Personal expenses"]
  },
  {
    id: 6,
    name: "Auli Skiing",
    image: auliBanner,
    rating: 4.7,
    bestTime: "Dec – Mar",
    altitude: "2,800 m",
    region: "Chamoli, Uttarakhand",
    summary: "India's premier skiing destination with world-class slopes, cable car rides, and snow-covered meadows.",
    highlights: ["Skiing", "Cable Car", "Snow Views", "Gurso Bugyal", "Winter Sports", "Mountain Views"],
    duration: "4 Days 3 Nights",
    price: "₹22,000",
    itinerary: [
      "Day 1: Arrival in Haridwar, drive to Joshimath, overnight stay",
      "Day 2: Drive to Auli, cable car ride to Auli top, skiing lessons and practice",
      "Day 3: Full day skiing at Auli slopes, visit Gurso Bugyal, overnight stay",
      "Day 4: Morning free time for skiing, drive back to Haridwar, departure"
    ],
    includes: ["Hotel accommodation in Auli", "Daily meals", "Cable car tickets", "Basic skiing equipment", "All transfers from Haridwar"],
    excludes: ["Flights to Haridwar", "Advanced skiing gear rental", "Skiing instructor (optional)", "Personal expenses", "Travel insurance"]
  },
  {
    id: 7,
    name: "Rishikesh Adventure",
    image: rishikeshBanner,
    rating: 4.8,
    bestTime: "Oct – Mar",
    altitude: "372 m",
    region: "Rishikesh, Uttarakhand",
    summary: "Yoga capital of the world with thrilling adventure sports, spiritual retreats, and Ganga Aarti ceremonies.",
    highlights: ["River Rafting", "Ganga Aarti", "Yoga Retreats", "Bungee Jumping", "Camping", "Spiritual"],
    duration: "4 Days 3 Nights",
    price: "₹8,900",
    itinerary: [
      "Day 1: Arrival in Rishikesh, check-in hotel, evening Ganga Aarti at Triveni Ghat",
      "Day 2: Morning yoga session, river rafting on Ganges, visit Beatles Ashram",
      "Day 3: Bungee jumping at Jumpin Heights, evening camping by the river",
      "Day 4: Morning meditation session, check-out and departure"
    ],
    includes: ["Hotel/camp accommodation", "Daily breakfast", "River rafting experience", "Yoga sessions", "Camping equipment"],
    excludes: ["Flights/trains", "Lunch and dinner", "Bungee jumping fees", "Personal expenses", "Adventure insurance"]
  },
];

const UspDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockUsp.find(i => String(i.id) === id);

  // State for departure point selection
  const [selectedDeparture, setSelectedDeparture] = useState(
    item?.departurePoints?.[0] || ""
  );

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-2xl font-semibold mt-6">Destination not found</h1>
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

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-32 left-6 inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Title & Meta Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-12">
          <div className="container mx-auto max-w-7xl">
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
                <Mountain className="w-4 h-4" />
                <span>{item.altitude}</span>
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
        {/* Departure Point Selector */}
        {item.departurePoints && item.departurePoints.length > 1 && (
          <div className="mb-8 sm:mb-12 bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Choose Departure Point:</h3>
            <div className="flex flex-wrap gap-3">
              {item.departurePoints.map((departure) => (
                <button
                  key={departure}
                  onClick={() => setSelectedDeparture(departure)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedDeparture === departure
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                >
                  Ex. {departure}
                </button>
              ))}
            </div>
            {selectedDeparture && item.departureInfo?.[selectedDeparture] && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 text-blue-800">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Departure from {selectedDeparture}</span>
                  <div className="ml-auto text-right">
                    <span className="text-2xl font-bold text-blue-600">
                      {item.departureInfo[selectedDeparture].price}
                    </span>
                    <span className="text-sm text-gray-600 ml-1">/ person</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Note:</span> These prices are for group tours. For personalized packages, please WhatsApp us your query.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Overview */}
        <div className="max-w-4xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Overview</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.summary}</p>
        </div>

        {/* Highlights & Details Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Tour Highlights */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {item.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Info</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Duration</span>
                <span className="font-semibold text-sm">
                  {selectedDeparture && item.departureInfo?.[selectedDeparture]?.duration || item.duration}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Best Time</span>
                <span className="font-semibold text-sm">{item.bestTime}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Altitude</span>
                <span className="font-semibold text-sm">{item.altitude}</span>
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
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {(selectedDeparture && item.departureInfo?.[selectedDeparture]?.includes || item.includes)?.map((include, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{include}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Not Included */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-7 h-7 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">What's Not Included</h3>
            </div>
            <ul className="space-y-3">
              {(selectedDeparture && item.departureInfo?.[selectedDeparture]?.excludes || item.excludes)?.map((exclude, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="itinerary" className="border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-gray-900">View Complete Day-wise Itinerary ({item.itinerary?.length} Days)</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pb-6">
                  {(selectedDeparture && item.departureInfo?.[selectedDeparture]?.itinerary || item.itinerary)?.map((day, index) => (
                    <div key={index} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
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
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-4xl font-bold mb-2">{item.price}</h3>
              <p className="text-white/80 text-lg">Starting price per person</p>
              <p className="text-white/60 text-sm mt-2">Inclusive of accommodation, meals, and guided tours</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                Book Now
              </button>
              <button
                onClick={() => window.open('https://wa.me/918178515133', '_blank')}
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-10 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UspDetail;

