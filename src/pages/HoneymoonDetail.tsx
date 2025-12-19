import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Heart, MapPin, Phone, CheckCircle2, XCircle, Calendar, MessageCircle, Download, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import images from honeymoonpackage folder
import kashmir1 from "@/assets/honeymoonpackage/kashmir1.png";
import kashmir2 from "@/assets/honeymoonpackage/kashmir2.png";
import kashmir3 from "@/assets/honeymoonpackage/kashmir3.png";
import goa1 from "@/assets/honeymoonpackage/goa1.png";
import goa2 from "@/assets/honeymoonpackage/goa2.png";
import goa3 from "@/assets/honeymoonpackage/goa3.png";
import kerala1 from "@/assets/honeymoonpackage/kerala1.png";
import kerala2 from "@/assets/honeymoonpackage/kerala2.png";
import kerala3 from "@/assets/honeymoonpackage/kerala3.png";
import shimla1 from "@/assets/honeymoonpackage/shimla1.png";
import shimla2 from "@/assets/honeymoonpackage/shimla2.png";
import shimla3 from "@/assets/honeymoonpackage/shimla3.png";
import andaman1 from "@/assets/honeymoonpackage/andaman1.png";
import andaman2 from "@/assets/honeymoonpackage/andaman2.png";
import andaman3 from "@/assets/honeymoonpackage/andaman3.png";
import lehladakh1 from "@/assets/honeymoonpackage/lehladakh1.png";
import lehladakh2 from "@/assets/honeymoonpackage/leh ladakh2.png";
import lehladakh3 from "@/assets/honeymoonpackage/lehladakh3.png";

const mockHoneymoon = [
  {
    id: 1,
    name: "Kashmir Honeymoon",
    images: [kashmir1, kashmir2, kashmir3],
    image: kashmir1,
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
    images: [goa1, goa2, goa3],
    image: goa1,
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
    images: [kerala1, kerala2, kerala3],
    image: kerala1,
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
    images: [shimla1, shimla2, shimla3],
    image: shimla1,
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
    images: [andaman1, andaman2, andaman3],
    image: andaman1,
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
    name: "Udaipur Royal Romance", // Fixed name (was Leh Ladakh copy)
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&h=600&fit=crop", // Fallback
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
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&h=600&fit=crop", // Fallback
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
    images: [lehladakh1, lehladakh2, lehladakh3],
    image: lehladakh1,
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
  const [activeTab, setActiveTab] = useState("overview");
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

      {/* 1. Header & Breadcrumb Area (Below Nav) */}
      <div className="pt-24 pb-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 pl-0 hover:bg-transparent text-gray-500 hover:text-pink-600 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-current" /> Honeymoon Special
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{item.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  <Star className="w-3.5 h-3.5 fill-current" /> {item.rating}
                </span>
                <span>({Math.floor(Math.random() * 50) + 50} Reviews)</span>
                <span>•</span>
                <span>{item.region}</span>
              </div>
            </div>
            <div className="text-right hidden lg:block">
              <p className="text-sm text-gray-500 mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-pink-600">{item.price}</p>
              <p className="text-xs text-gray-400">per couple</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gallery Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="hidden md:grid grid-cols-3 gap-4 h-auto">
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
        {/* Mobile View */}
        <div className="flex md:hidden gap-2 mt-2 overflow-x-auto pb-2 snap-x">
          {(item.images || [item.image, item.image, item.image]).slice(0, 3).map((img, idx) => (
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
                <Clock className="w-6 h-6 text-pink-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Duration</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.duration}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <MapPin className="w-6 h-6 text-pink-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Region</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.region}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Calendar className="w-6 h-6 text-pink-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Best Time</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.bestTime}</span>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <div className="border-b px-4">
                  <TabsList className="h-auto w-full justify-start bg-transparent p-0 gap-6 overflow-x-auto">
                    {["Overview", "Itinerary", "Inclusions", "Exclusions"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab.toLowerCase()}
                        className="data-[state=active]:border-b-2 data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 data-[state=active]:shadow-none rounded-none py-4 px-2 text-base font-medium text-gray-600 hover:text-gray-900 bg-transparent"
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

                    <h4 className="font-bold text-gray-900 mb-3">Romantic Highlights</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* Itinerary */}
                  <TabsContent value="itinerary" className="mt-0">
                    <h3 className="text-xl font-bold mb-6">Detailed Itinerary</h3>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {item.itinerary?.map((day, index) => {
                        // Parse "Day X: Title" from string if possible
                        const parts = day.split(':');
                        const dayTitle = parts[0];
                        const dayDesc = parts.slice(1).join(':').trim() || day;

                        return (
                          <AccordionItem key={index} value={`day-${index}`} className="border bg-gray-50 rounded-lg px-2">
                            <AccordionTrigger className="hover:no-underline px-2">
                              <div className="flex items-center text-left gap-3">
                                <span className="bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">{dayTitle}</span>
                                <span className="font-semibold text-gray-900 line-clamp-1">{dayDesc.substring(0, 50)}...</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-2 pb-4 pt-1 text-gray-600 ml-12 border-l-2 border-dashed border-gray-200 pl-4">
                              {dayDesc}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </TabsContent>

                  {/* Inclusions */}
                  <TabsContent value="inclusions" className="mt-0">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" /> Inclusions
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {item.includes?.map((incl, i) => (
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
                      {item.excludes?.map((excl, i) => (
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
                  <div className="inline-flex items-center gap-2 bg-pink-50 px-2 py-1 rounded-full mb-2">
                    <Heart className="w-3 h-3 text-pink-600 fill-pink-600" />
                    <span className="text-xs font-semibold text-pink-800">Honeymoon Special</span>
                  </div>
                  <p className="text-gray-500 text-sm">Starting Price</p>
                  <div className="flex items-baseline gap-1">
                    <h2 className="text-3xl font-bold text-gray-900">{item.price}</h2>
                    <span className="text-gray-500 text-sm">/ Pair</span>
                  </div>
                  <p className="text-green-600 text-xs font-semibold mt-1">Inclusive of all taxes</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white h-12 text-lg font-semibold shadow-pink-200 shadow-lg" onClick={() => window.open('https://wa.me/918178515133', '_blank')}>
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
                  <MessageCircle className="w-4 h-4 text-green-600" />
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
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-100 grid grid-cols-2 gap-y-4 gap-x-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-medium text-pink-900">Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-medium text-pink-900">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-medium text-pink-900">24/7 Support</span>
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

export default HoneymoonDetail;

