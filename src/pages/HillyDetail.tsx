import { useParams, useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar, CheckCircle2, XCircle, Star, Phone, Download, MessageCircle, ChevronLeft, Shield } from "lucide-react";
import { useState } from "react";
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

// Import images from pophillpackage folder
import shimla1 from "@/assets/pophillpackage/shimlamanali1.png";
import shimla2 from "@/assets/pophillpackage/shimlamanali2.png";
import shimla3 from "@/assets/pophillpackage/shimlamanli3.png";

import darjeeling1 from "@/assets/pophillpackage/darjandgangtok.png";
import darjeeling2 from "@/assets/pophillpackage/darjandgangtok2.png";
import darjeeling3 from "@/assets/pophillpackage/darjandgangtok3.png";

import mussorie1 from "@/assets/pophillpackage/mussorie.png";
import mussorie2 from "@/assets/pophillpackage/mussorie1.png";
import mussorie3 from "@/assets/pophillpackage/mussorie2.png";

import kasauli1 from "@/assets/pophillpackage/kasauli.png";
import kasauli2 from "@/assets/pophillpackage/kasauli2.png";
import kasauli3 from "@/assets/pophillpackage/kasauli3.png";

import munnar1 from "@/assets/pophillpackage/munnar1.png";
import munnar2 from "@/assets/pophillpackage/munnar2.png";
import munnar3 from "@/assets/pophillpackage/munnar3.png";

const mockHilly = [
  {
    id: 1,
    name: "Shimla Manali",
    image: shimla1,
    images: [shimla1, shimla2, shimla3, shimla1], // Fallback/Repeat for grid
    rating: 4.8,
    reviews: 120,
    bestTime: "Oct – Jun",
    altitude: "2,276 m",
    region: "Himachal Pradesh",
    summary: "Experience the charm of Shimla's colonial heritage and Manali's adventure paradise. From Mall Road shopping to Rohtang Pass skiing, this package offers the perfect blend of leisure and thrill.",
    highlights: ["Mall Road Shimla", "Rohtang Pass", "Solang Valley", "Kufri Fun World", "Hidimba Temple", "Vashisht Hot Springs"],
    duration: "6 Days 5 Nights",
    price: "₹18,500",
    itinerary: [
      "Day 1: Arrival in Shimla, check-in hotel, evening Mall Road exploration",
      "Day 2: Shimla local sightseeing - Jakhu Temple, Christ Church, Ridge, Kufri",
      "Day 3: Drive to Manali via Kullu Valley, check-in and evening leisure",
      "Day 4: Manali local sightseeing - Hadimba Temple, Vashisht, Old Manali",
      "Day 5: Full day excursion to Solang Valley and Rohtang Pass (if open)",
      "Day 6: Check-out and departure from Manali"
    ],
    includes: ["Hotel accommodation", "Daily breakfast and dinner", "All transfers by AC vehicle", "Sightseeing as per itinerary", "Driver allowances"],
    excludes: ["Flights/trains", "Lunch", "Adventure activities fees", "Rohtang Pass permits", "Personal expenses"]
  },
  {
    id: 2,
    name: "Darjeeling Gangtok",
    image: darjeeling1,
    images: [darjeeling1, darjeeling2, darjeeling3, darjeeling1],
    rating: 4.9,
    reviews: 98,
    bestTime: "Mar – May",
    altitude: "1,650 m",
    region: "West Bengal & Sikkim",
    summary: "Witness the majestic sunrise over Kanchenjunga from Tiger Hill, explore Buddhist monasteries, and cruise around pristine Tsomgo Lake in this enchanting Himalayan journey.",
    highlights: ["Tiger Hill Sunrise", "Tsomgo Lake", "Nathula Pass", "Tea Estate Tour", "Rumtek Monastery", "MG Marg"],
    duration: "7 Days 6 Nights",
    price: "₹22,000",
    itinerary: [
      "Day 1: Arrival in Bagdogra, drive to Darjeeling, check-in and evening leisure",
      "Day 2: Early morning Tiger Hill sunrise, Batasia Loop, Ghoom Monastery, Zoo",
      "Day 3: Tea estate tour, Himalayan Railway ride, Mall Road shopping",
      "Day 4: Drive to Gangtok, check-in hotel, evening MG Marg walk",
      "Day 5: Full day Tsomgo Lake and Baba Mandir excursion",
      "Day 6: Gangtok local sightseeing - Rumtek Monastery, Handicraft Centre",
      "Day 7: Check-out, drive to Bagdogra and departure"
    ],
    includes: ["Accommodation in 3-star hotels", "All meals", "AC vehicle throughout", "All permits and fees", "Professional guide"],
    excludes: ["Flights to Bagdogra", "Nathula Pass permit (subject to availability)", "Personal expenses", "Tips", "Travel insurance"]
  },
  {
    id: 3,
    name: "Mussoorie Dhanaulti",
    image: mussorie1,
    images: [mussorie1, mussorie2, mussorie3, mussorie1],
    rating: 4.7,
    reviews: 85,
    bestTime: "Apr – Jun",
    altitude: "2,005 m",
    region: "Uttarakhand",
    summary: "Perfect weekend getaway to the Queen of Hills. Enjoy stunning mountain views, colonial architecture, and peaceful nature walks in the serene pine forests of Dhanaulti.",
    highlights: ["Kempty Falls", "Gun Hill", "Mall Road", "Eco Park Dhanaulti", "Surkanda Devi Temple", "Adventure activities"],
    duration: "4 Days 3 Nights",
    price: "₹12,500",
    itinerary: [
      "Day 1: Arrival in Mussoorie, check-in hotel, evening Mall Road and Camel's Back Road walk",
      "Day 2: Mussoorie sightseeing - Kempty Falls, Gun Hill cable car, Company Garden",
      "Day 3: Drive to Dhanaulti, visit Eco Park, Surkanda Devi Temple, overnight in Dhanaulti",
      "Day 4: Check-out, leisure time, departure"
    ],
    includes: ["Accommodation", "Breakfast and dinner", "All transfers", "Cable car tickets", "Sightseeing"],
    excludes: ["Flights/trains", "Lunch", "Adventure activity fees", "Personal expenses", "Tips"]
  },
  {
    id: 4,
    name: "Kasauli",
    image: kasauli1,
    images: [kasauli1, kasauli2, kasauli3, kasauli1],
    rating: 4.6,
    reviews: 80,
    bestTime: "Mar – Jun",
    altitude: "1,927 m",
    region: "Himachal Pradesh",
    summary: "A small, quiet and beautiful hill station with colonial charm. Famous for its Monkey Point, Christ Church, and Gilbert Trail, Kasauli offers panoramic views and peaceful nature walks.",
    highlights: ["Monkey Point", "Sunset Point", "Christ Church", "Gilbert Trail", "Baptist Church", "Toy Train Ride"],
    duration: "3 Days 2 Nights",
    price: "₹15,500",
    itinerary: [
      "Day 1: Arrival in Kasauli, check-in hotel, evening Mall Road walk",
      "Day 2: Kasauli sightseeing - Monkey Point, Christ Church, Sunset Point",
      "Day 3: Gilbert Trail nature walk, check-out and departure"
    ],
    includes: ["Hotel accommodation", "Daily breakfast & dinner", "Sightseeing transfers", "Entry fees"],
    excludes: ["Flights/Trains", "Lunch", "Personal expenses", "Tips"]
  },
  {
    id: 5,
    name: "Munnar Thekkady",
    image: munnar1,
    images: [munnar1, munnar2, munnar3, munnar1],
    rating: 4.9,
    reviews: 140,
    bestTime: "Sep – May",
    altitude: "1,600 m",
    region: "Kerala",
    summary: "Tea gardens, misty hills, and wildlife encounters. Explore the best of Kerala's hill stations with a visit to Eravikulam National Park and Periyar Wildlife Sanctuary.",
    highlights: ["Tea Plantations", "Periyar Wildlife", "Eravikulam National Park", "Spice Gardens", "Mattupetty Dam"],
    duration: "5 Days 4 Nights",
    price: "₹24,500",
    itinerary: [
      "Day 1: Arrival in Cochin, drive to Munnar, check-in, tea museum visit",
      "Day 2: Munnar sightseeing - Eravikulam Park, Mattupetty Dam, Echo Point",
      "Day 3: Drive to Thekkady, spice plantation tour, Periyar Lake boat ride",
      "Day 4: Morning nature walk, drive back to Cochin for departure"
    ],
    includes: ["Resort stay", "All meals", "All transfers", "Safari tickets"],
    excludes: ["Flights", "Personal expenses", "Tips"]
  },
  {
    id: 6,
    name: "Munnar Thekkady",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 150,
    bestTime: "Sep – May",
    altitude: "1,600 m",
    region: "Kerala",
    summary: "Kerala's crown jewel with endless tea plantations, wildlife encounters at Periyar, and misty mountain peaks. Perfect for nature lovers and wildlife enthusiasts.",
    highlights: ["Tea Plantations", "Eravikulam National Park", "Periyar Wildlife Sanctuary", "Spice Plantation", "Mattupetty Dam", "Boat Safari"],
    duration: "6 Days 5 Nights",
    price: "₹19,500",
    itinerary: [
      "Day 1: Arrival in Cochin, drive to Munnar, check-in resort, evening tea estate walk",
      "Day 2: Munnar sightseeing - Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake",
      "Day 3: Visit Eravikulam National Park, Top Station viewpoint, photo point",
      "Day 4: Drive to Thekkady, check-in hotel, evening spice plantation tour",
      "Day 5: Periyar Lake boat safari, wildlife spotting, bamboo rafting",
      "Day 6: Check-out, drive to Cochin for departure"
    ],
    includes: ["Resort/hotel accommodation", "Daily breakfast and dinner", "All transfers", "National park entry", "Boat safari", "Plantation tours"],
    excludes: ["Flights to Cochin", "Lunch", "Bamboo rafting fees", "Elephant ride", "Personal expenses"]
  },
  {
    id: 7,
    name: "Mcleodganj Dharamshala",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 90,
    bestTime: "Mar – Jun",
    altitude: "1,475 m",
    region: "Himachal Pradesh",
    summary: "Experience Tibetan culture in Little Lhasa. Visit monasteries, trek to Triund, explore waterfalls, and immerse yourself in the spiritual atmosphere of the Dalai Lama's residence.",
    highlights: ["Dalai Lama Temple", "Triund Trek", "Bhagsu Waterfall", "Naddi Viewpoint", "Tibetan Museum", "St. John Church"],
    duration: "5 Days 4 Nights",
    price: "₹13,500",
    itinerary: [
      "Day 1: Arrival in Dharamshala, drive to Mcleodganj, check-in hotel",
      "Day 2: Mcleodganj sightseeing - Dalai Lama Temple, Bhagsunath Temple, Bhagsu Falls",
      "Day 3: Triund trek (9km one way), overnight camping at Triund",
      "Day 4: Trek back to Mcleodganj, visit Tibetan Museum, leisure evening",
      "Day 5: Check-out and departure"
    ],
    includes: ["Hotel accommodation", "Camping at Triund", "All meals during trek", "Trekking guide", "All transfers"],
    excludes: ["Flights", "Meals in Mcleodganj", "Trekking equipment", "Personal expenses", "Tips"]
  },
  {
    id: 8,
    name: "Mount Abu",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 65,
    bestTime: "Nov – Mar",
    altitude: "1,220 m",
    region: "Rajasthan",
    summary: "Rajasthan's only hill station offering respite from desert heat. Marvel at intricate Jain temples, enjoy boat rides on Nakki Lake, and witness spectacular sunsets.",
    highlights: ["Dilwara Temples", "Nakki Lake", "Sunset Point", "Guru Shikhar", "Wildlife Sanctuary", "Peace Park"],
    duration: "4 Days 3 Nights",
    price: "₹11,500",
    itinerary: [
      "Day 1: Arrival in Abu Road, drive to Mount Abu, check-in hotel, evening Nakki Lake boating",
      "Day 2: Visit Dilwara Temples, Guru Shikhar peak, Achalgarh Fort, sunset at Sunset Point",
      "Day 3: Wildlife Sanctuary visit, Peace Park, shopping at Nakki Lake market",
      "Day 4: Morning leisure, check-out and departure to Abu Road"
    ],
    includes: ["Hotel accommodation", "Daily breakfast", "All sightseeing transfers", "Boating tickets", "Entry fees"],
    excludes: ["Flights/trains to Abu Road", "Lunch and dinner", "Wildlife safari fees", "Personal expenses", "Tips"]
  },
];

const HillyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockHilly.find(i => String(i.id) === id);
  const [activeTab, setActiveTab] = useState("overview");

  if (!item) return <div className="min-h-screen grid place-items-center">Package not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />

      {/* 1. Header & Breadcrumb Area (Below Nav) */}
      <div className="pt-24 pb-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-4 pl-0 hover:bg-transparent text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{item.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  <Star className="w-3.5 h-3.5 fill-current" /> {item.rating}
                </span>
                <span>({item.reviews || 50} Reviews)</span>
                <span>•</span>
                <span>{item.region}</span>
              </div>
            </div>
            <div className="text-right hidden lg:block">
              <p className="text-sm text-gray-500 mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-blue-600">{item.price}</p>
              <p className="text-xs text-gray-400">per person</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gallery Grid - Using single image repeated for now as mock data has only 1 */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          {/* Display exactly 3 images side by side */}
          {(item.images && item.images.length > 0
            ? [...item.images, ...item.images, ...item.images] // Repeat to ensure we have enough
            : [item.image, item.image, item.image]
          ).slice(0, 3).map((img, idx) => (
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
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Duration</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.duration}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <MapPin className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Region</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{item.region}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Calendar className="w-6 h-6 text-blue-600 mb-2" />
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
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* Itinerary */}
                  <TabsContent value="itinerary" className="mt-0">
                    <h3 className="text-xl font-bold mb-6">Detailed Itinerary</h3>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {item.itinerary.map((day, index) => {
                        // Parse "Day X: Title" from string if possible, or just use full string
                        const parts = day.split(':');
                        const dayTitle = parts[0];
                        const dayDesc = parts.slice(1).join(':').trim() || day;

                        return (
                          <AccordionItem key={index} value={`day-${index}`} className="border bg-gray-50 rounded-lg px-2">
                            <AccordionTrigger className="hover:no-underline px-2">
                              <div className="flex items-center text-left gap-3">
                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">{dayTitle}</span>
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
                      {item.includes.map((incl, i) => (
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
                      {item.excludes.map((excl, i) => (
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
                    <h2 className="text-3xl font-bold text-gray-900">{item.price}</h2>
                    <span className="text-gray-500 text-sm">/ Per Person</span>
                  </div>
                  <p className="text-green-600 text-xs font-semibold mt-1">5% OFF for Group Bookings</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold shadow-blue-200 shadow-lg" onClick={() => window.open('https://wa.me/918178515133', '_blank')}>
                    Send Query Here
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
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 grid grid-cols-2 gap-y-4 gap-x-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">Govt. Regd.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">4.8/5 Rated</span>
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

export default HillyDetail;

