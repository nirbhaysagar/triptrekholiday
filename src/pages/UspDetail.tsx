import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Mountain, MapPin, Phone, CheckCircle2, XCircle, MessageSquare, Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

// Import banner images
import chardhamBanner from "@/assets/banner-chardham.jpg";
import kedarnathBanner from "@/assets/kedarnath-banner.jpg";
import valleyofflowerBanner from "@/assets/valleyofflower-banner.jpg";
import auliBanner from "@/assets/auli-banner.jpg";
import nainitalBanner from "@/assets/nainital-banner.jpg";
import rishikeshBanner from "@/assets/rishikesh-banner.jpg";

// Import Gallery Images
import chardham1 from "@/assets/uttarakhand/chardham1.png";
import chardham2 from "@/assets/uttarakhand/chardham2.png";
import chardham3 from "@/assets/uttarakhand/chardham3.png";

import dodham1 from "@/assets/uttarakhand/dodham.png";
import dodham2 from "@/assets/uttarakhand/dodham2.png";
import dodham3 from "@/assets/uttarakhand/dodham3.png";

import kedarnath1 from "@/assets/uttarakhand/kedarnath1.png";
import kedarnath2 from "@/assets/uttarakhand/kedarnath2.png";
import kedarnath3 from "@/assets/uttarakhand/kedarnath3.png";

import nainital1 from "@/assets/uttarakhand/nainital1.png";
import nainital2 from "@/assets/uttarakhand/nainital2.png";
import nainital3 from "@/assets/uttarakhand/nainital3.png";

import valleyofflower1 from "@/assets/uttarakhand/valleyofflower.png";
import valleyofflower2 from "@/assets/uttarakhand/valleyofflower2.png";
import valleyofflower3 from "@/assets/uttarakhand/valleyofflower3.png";

import auli1 from "@/assets/uttarakhand/auli1.png";
import auli2 from "@/assets/uttarakhand/auli2.png";
import auli3 from "@/assets/uttarakhand/auli3.png";

import rishikesh1 from "@/assets/uttarakhand/rishikesh1.png";
import rishikesh2 from "@/assets/uttarakhand/rishikesh2.png";
import rishikesh3 from "@/assets/uttarakhand/rishikesh3.png";

const mockUsp = [
  {
    id: 1,
    name: "Chardham Yatra",
    image: chardhamBanner,
    images: [chardham1, chardham2, chardham3],
    rating: 4.9,
    bestTime: "May – Oct",
    altitude: "3,133 m",
    region: "Ex. Haridwar & Delhi",
    summary: "Complete spiritual journey to all four sacred dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath. A transformative pilgrimage experience.",
    highlights: ["Yamunotri Temple", "Gangotri Temple", "Kedarnath Temple", "Badrinath Temple", "Gaurikund", "Joshimath"],
    departurePoints: ["Haridwar", "Delhi"],
    departureInfo: {
      "Haridwar": {
        duration: "9 Days 8 Nights",
        price: "₹17,000",
        itinerary: [
          "Day 1: Arrival in Haridwar, drive to Barkot via Mussoorie, visit Kempty Falls",
          "Day 2: Trek to Yamunotri Temple, holy dip in Surya Kund, return to Barkot",
          "Day 3: Drive to Uttarkashi, visit Kashi Vishwanath Temple",
          "Day 4: Drive to Gangotri, holy dip in Ganges, return to Uttarkashi",
          "Day 5: Drive to Guptkashi via Tehri Dam, evening at leisure",
          "Day 6: Trek to Kedarnath Temple (16km), evening Aarti and Darshan",
          "Day 7: Morning Darshan, trek down to Gaurikund, drive to Pipalkoti/Joshimath",
          "Day 8: Drive to Badrinath, Darshan and Mana Village, return to Rudraprayag",
          "Day 9: Drive back to Haridwar via Rishikesh, drop at station/airport"
        ],
        includes: ["Accommodation in best properties", "All meals (breakfast, lunch, dinner)", "AC Transport", "Pilgrimage Guide", "All permits"],
        excludes: ["Flights/Trains", "Personal expenses", "Helicopter tickets", "Pony/Palki charges", "Insurance"]
      },
      "Delhi": {
        duration: "10 Days 9 Nights",
        price: "₹21,500",
        itinerary: [
          "Day 1: Pickup from Delhi, drive to Haridwar, evening Ganga Aarti",
          "Day 2: Drive to Barkot via Mussoorie & Kempty Falls",
          "Day 3: Trek to Yamunotri Temple, Darshan, return to Barkot",
          "Day 4: Drive to Uttarkashi, visit Kashi Vishwanath Temple",
          "Day 5: Drive to Gangotri Temple, Darshan, return to Uttarkashi",
          "Day 6: Drive to Guptkashi, medical checkup for Kedarnath",
          "Day 7: Trek to Kedarnath (16km), evening Aarti and Night Stay",
          "Day 8: Trek down, drive to Pipalkoti/Joshimath",
          "Day 9: Badrinath Darshan, Mana Village, drive to Srinagar",
          "Day 10: Drive back to Delhi via Rishikesh, drop at airport"
        ],
        includes: ["Pickup & Drop Delhi", "Accommodation", "All Meals", "AC Transport", "Guide", "Permits"],
        excludes: ["Flights", "Personal Expenses", "Helicopter", "Pony/Palki", "Tips"]
      }
    }
  },
  {
    id: 2,
    name: "DoDham Yatra",
    image: kedarnathBanner,
    images: [dodham1, dodham2, dodham3],
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
    images: [kedarnath1, kedarnath2, kedarnath3],
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
    images: [nainital1, nainital2, nainital3],
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
    images: [valleyofflower1, valleyofflower2, valleyofflower3],
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
    images: [auli1, auli2, auli3],
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
    images: [rishikesh1, rishikesh2, rishikesh3],
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

// Import necessary components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const UspDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockUsp.find(i => String(i.id) === id);

  // State for departure point selection
  const [selectedDeparture, setSelectedDeparture] = useState(
    item?.departurePoints?.[0] || ""
  );
  const [activeTab, setActiveTab] = useState("overview");

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

  // Dynamic Data Helpers
  const currentPrice = selectedDeparture && item.departureInfo?.[selectedDeparture]
    ? item.departureInfo[selectedDeparture].price
    : item.price;

  const currentDuration = selectedDeparture && item.departureInfo?.[selectedDeparture]
    ? item.departureInfo[selectedDeparture].duration
    : item.duration;

  const currentItinerary = selectedDeparture && item.departureInfo?.[selectedDeparture]
    ? item.departureInfo[selectedDeparture].itinerary
    : item.itinerary;

  const currentIncludes = selectedDeparture && item.departureInfo?.[selectedDeparture]
    ? item.departureInfo[selectedDeparture].includes
    : item.includes;

  const currentExcludes = selectedDeparture && item.departureInfo?.[selectedDeparture]
    ? item.departureInfo[selectedDeparture].excludes
    : item.excludes;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 1. Header & Breadcrumb Area */}
      <div className="pt-24 pb-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-4 pl-0 hover:bg-transparent text-gray-500 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <MapPin className="w-3 h-3 fill-current" /> {item.region}
                </span>
                {item.altitude && (
                  <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Mountain className="w-3 h-3" /> {item.altitude}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{item.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  <Star className="w-3.5 h-3.5 fill-current" /> {item.rating}
                </span>
                <span>(Verified Reviews)</span>
              </div>
            </div>
            <div className="text-right hidden lg:block">
              <p className="text-sm text-gray-500 mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-blue-600">{currentPrice}</p>
              <p className="text-xs text-gray-400">per person</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gallery Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          {/* Display exactly 3 images side by side */}
          {(item.images && item.images.length >= 3 ? item.images.slice(0, 3) : [item.image, item.image, item.image]).map((img, idx) => (
            <div key={idx} className="w-full h-auto">
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-auto object-contain rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="flex md:hidden gap-2 mt-2 overflow-x-auto pb-2 snap-x">
          {(item.images && item.images.length >= 3 ? item.images.slice(0, 3) : [item.image, item.image, item.image]).map((img, idx) => (
            <img key={idx} src={img} className="w-80 h-auto object-contain rounded-lg flex-shrink-0 snap-center" />
          ))}
        </div>
      </div>

      {/* 3. Main Content Layout */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN - Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Duration</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{currentDuration}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <Mountain className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Altitude</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.altitude || "N/A"}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Best Time</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.bestTime}</span>
              </div>
            </div>

            {/* Departure Point Selector (IF AVAILABLE) */}
            {item.departurePoints && item.departurePoints.length > 1 && (
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Departure Point</h3>
                <div className="flex flex-wrap gap-3">
                  {item.departurePoints.map((departure) => (
                    <button
                      key={departure}
                      onClick={() => setSelectedDeparture(departure)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${selectedDeparture === departure
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                      Ex. {departure}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Viewing package details for <strong>{selectedDeparture}</strong> departure.
                </p>
              </div>
            )}

            {/* Tabs Section */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <div className="border-b px-4">
                  <TabsList className="h-auto w-full justify-start bg-transparent p-0 gap-6 overflow-x-auto">
                    {["Overview", "Itinerary", "Inclusions", "Exclusions"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab.toLowerCase()}
                        className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none rounded-none py-4 px-2 text-base font-medium text-gray-600 hover:text-gray-900 bg-transparent"
                      >
                        {tab}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <div className="p-6">
                  {/* Overview */}
                  <TabsContent value="overview" className="mt-0">
                    <h3 className="text-xl font-bold mb-4">Trip Overview</h3>
                    <p className="text-gray-700 leading-7 mb-6">{item.summary}</p>
                    <h4 className="font-bold text-gray-900 mb-3">Highlights</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* Itinerary */}
                  <TabsContent value="itinerary" className="mt-0">
                    <h3 className="text-xl font-bold mb-6">Detailed Itinerary</h3>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {Array.isArray(currentItinerary) && typeof currentItinerary[0] === 'string' ? (
                        // Handle string array itinerary (e.g. from departureInfo)
                        currentItinerary.map((day: string, index: number) => {
                          // Try to parse "Day X: Title" style
                          const parts = day.split(':');
                          const dayTitle = parts[0];
                          const dayDesc = parts.slice(1).join(':').trim() || day;
                          return (
                            <AccordionItem key={index} value={`day-${index}`} className="border bg-gray-50 rounded-lg px-2">
                              <AccordionTrigger className="hover:no-underline px-2">
                                <div className="flex items-center text-left gap-3">
                                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">{dayTitle.includes("Day") ? dayTitle : `Day ${index + 1}`}</span>
                                  <span className="font-semibold text-gray-900 line-clamp-1">{dayDesc.substring(0, 50)}...</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-2 pb-4 pt-1 text-gray-600 ml-12 border-l-2 border-dashed border-gray-200 pl-4">
                                {dayDesc}
                              </AccordionContent>
                            </AccordionItem>
                          )
                        })
                      ) : (
                        // Handle object array itinerary (unlikely in this file based on mockUsp, but safety check)
                        <p>Itinerary format not supported.</p>
                      )}
                    </Accordion>
                  </TabsContent>

                  {/* Inclusions */}
                  <TabsContent value="inclusions" className="mt-0">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" /> Inclusions
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {currentIncludes?.map((incl: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 bg-green-50/50 p-3 rounded-lg border border-green-100">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{incl}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* Exclusions */}
                  <TabsContent value="exclusions" className="mt-0">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <XCircle className="text-red-600" /> Exclusions
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {currentExcludes?.map((excl: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 bg-red-50/50 p-3 rounded-lg border border-red-100">
                          <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{excl}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                </div>
              </Tabs>
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* 1. Price Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">Starting Price</p>
                  <div className="flex items-baseline gap-1">
                    <h2 className="text-3xl font-bold text-gray-900">{currentPrice}</h2>
                    <span className="text-gray-500 text-sm">/ Person</span>
                  </div>
                  <p className="text-green-600 text-xs font-semibold mt-1">Inclusive of taxes</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold shadow-blue-200 shadow-lg" onClick={() => window.open('https://wa.me/918178515133', '_blank')}>
                    Send Query
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 h-12 font-semibold">
                    Book Now
                  </Button>
                </div>
              </div>

              {/* 2. Helper Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center gap-2 h-auto py-3 border-gray-200" onClick={() => window.open('https://wa.me/918178515133', '_blank')}>
                  <MessageSquare className="w-4 h-4 text-green-600" />
                  <div className="text-left">
                    <span className="block text-[10px] text-gray-500 uppercase">Chat on</span>
                    <span className="block text-sm font-semibold text-gray-900">WhatsApp</span>
                  </div>
                </Button>
                <Button variant="outline" className="flex items-center gap-2 h-auto py-3 border-gray-200">
                  <Download className="w-4 h-4 text-red-500" />
                  <div className="text-left">
                    <span className="block text-[10px] text-gray-500 uppercase">Download</span>
                    <span className="block text-sm font-semibold text-gray-900">Itinerary</span>
                  </div>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 grid grid-cols-2 gap-y-4 gap-x-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">Top Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">24/7 Support</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UspDetail;

