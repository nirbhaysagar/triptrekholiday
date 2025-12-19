import { useParams, useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar, CheckCircle2, XCircle, Star, Phone, Download, MessageCircle, ChevronLeft, Shield, Plane, Users, Wallet } from "lucide-react";
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

// Import placeholder images
import thailandImage from "@/assets/destination-1.jpg";
import nepalImage from "@/assets/destination-2.jpg";
import baliImage from "@/assets/destination-3.jpg";

const internationalTours = [
  {
    id: 1,
    name: "Thailand Paradise",
    image: thailandImage,
    description: "Experience the vibrant culture, stunning beaches, and rich heritage of Thailand - the Land of Smiles.",
    overview: "Thailand offers a perfect blend of tropical beaches, ancient temples, bustling cities, and delicious cuisine. From the bustling streets of Bangkok to the pristine beaches of Phuket, this tour promises unforgettable memories.",
    highlights: ["Bangkok Temples", "Pattaya Beaches", "Phuket Islands", "Thai Cuisine", "Night Markets", "Elephant Sanctuary"],
    itinerary: [
      "Day 1: Arrival in Bangkok, city tour and temple visits",
      "Day 2: Floating markets and traditional Thai massage",
      "Day 3: Travel to Pattaya, beach activities",
      "Day 4: Coral Island tour and water sports",
      "Day 5: Travel to Phuket, island hopping",
      "Day 6: Departure"
    ],
    includes: ["Hotel accommodation", "All meals", "Airport transfers", "Local guide", "Entry fees", "Transportation"],
    notIncludes: ["International flights", "Visa fees", "Personal expenses", "Travel insurance"],
    bestTime: "Nov - Apr",
    duration: "6 Days 5 Nights",
    rating: 4.8,
    reviews: 156,
    price: "₹35,000",
    region: "Thailand",
    visaRequired: true,
    currency: "THB",
    groupSize: "8-12 people",
    difficulty: "Easy",
    idealFor: ["Beach", "Culture", "Food", "Adventure"],
    activities: ["Beach activities", "Temple visits", "Island hopping", "Shopping", "Spa treatments"],
  },
  {
    id: 2,
    name: "Nepal Adventure",
    image: nepalImage,
    description: "Discover the majestic Himalayas, ancient temples, and rich culture of Nepal - the roof of the world.",
    overview: "Nepal is a land of stunning mountain peaks, ancient temples, and warm hospitality. Experience the beauty of the Himalayas, explore UNESCO World Heritage sites, and immerse yourself in the rich Buddhist and Hindu culture.",
    highlights: ["Kathmandu Valley", "Pokhara Lakes", "Mount Everest View", "Trekking", "Buddhist Monasteries", "Annapurna Range"],
    itinerary: [
      "Day 1: Arrival in Kathmandu, city tour",
      "Day 2: Explore ancient temples and stupas",
      "Day 3: Travel to Pokhara, boat ride on Phewa Lake",
      "Day 4: Sunrise view from Sarangkot, trekking",
      "Day 5: Annapurna Base Camp trek",
      "Day 6: Return to Kathmandu, shopping",
      "Day 7: Departure"
    ],
    includes: ["Hotel accommodation", "All meals", "Airport transfers", "Trekking guide", "Entry fees", "Domestic notes"],
    notIncludes: ["International flights", "Trekking equipment", "Personal expenses", "Travel insurance"],
    bestTime: "Mar - May, Oct - Dec",
    duration: "7 Days 6 Nights",
    rating: 4.9,
    reviews: 89,
    price: "₹28,500",
    region: "Nepal",
    visaRequired: false,
    currency: "NPR",
    groupSize: "6-10 people",
    difficulty: "Moderate",
    idealFor: ["Adventure", "Nature", "Photography", "Trekking"],
    activities: ["Trekking", "Mountain views", "Temple visits", "Cultural experiences", "Photography"],
  },
  {
    id: 3,
    name: "Bali Retreat",
    image: baliImage,
    description: "Immerse yourself in the tropical paradise of Bali with its stunning beaches, lush rice terraces, and rich culture.",
    overview: "Bali offers a perfect escape with its beautiful beaches, ancient temples, lush rice terraces, and vibrant arts scene. Experience the unique blend of Hindu culture, tropical landscapes, and modern luxury.",
    highlights: ["Ubud Rice Terraces", "Bali Temples", "Seminyak Beach", "Volcano Tours", "Spa & Wellness", "Traditional Dance"],
    itinerary: [
      "Day 1: Arrival in Denpasar, transfer to Seminyak",
      "Day 2: Beach day and water sports",
      "Day 3: Ubud rice terraces and temple visits",
      "Day 4: Volcano trekking and hot springs",
      "Day 5: Traditional village tour and spa",
      "Day 6: Departure"
    ],
    includes: ["Hotel accommodation", "All meals", "Airport transfers", "Local guide", "Entry fees", "Spa treatments"],
    notIncludes: ["International flights", "Visa fees", "Personal expenses", "Travel insurance"],
    bestTime: "Apr - Oct",
    duration: "5 Days 4 Nights",
    rating: 4.7,
    reviews: 210,
    price: "₹42,000",
    region: "Indonesia",
    visaRequired: true,
    currency: "IDR",
    groupSize: "8-12 people",
    difficulty: "Easy",
    idealFor: ["Beach", "Wellness", "Culture", "Couples"],
    activities: ["Beach activities", "Temple visits", "Rice terrace tours", "Volcano trekking", "Spa treatments"],
  },
];

const InternationalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const tour = internationalTours.find(t => t.id === parseInt(id || '0'));

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <Navigation />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />

      {/* 1. Header & Breadcrumb Area */}
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{tour.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  <Star className="w-3.5 h-3.5 fill-current" /> {tour.rating}
                </span>
                <span>({tour.reviews || 50} Reviews)</span>
                <span>•</span>
                <span>{tour.region}</span>
              </div>
            </div>
            <div className="text-right hidden lg:block">
              <p className="text-sm text-gray-500 mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-blue-600">{tour.price}</p>
              <p className="text-xs text-gray-400">per person</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Gallery Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          {/* Main Large Image */}
          <div className="md:col-span-2 md:row-span-2 relative h-full">
            <img src={tour.image} alt={tour.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
          </div>
          {/* Secondary Images - Repeating same for demo */}
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="relative h-full overflow-hidden hidden md:block">
              <img src={tour.image} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
            </div>
          ))}
        </div>
        {/* Mobile Grid */}
        <div className="flex md:hidden gap-2 mt-2 overflow-x-auto pb-2 snap-x">
          {[1, 2, 3].map((_, idx) => (
            <img key={idx} src={tour.image} className="w-60 h-40 object-cover rounded-lg flex-shrink-0 snap-center" />
          ))}
        </div>
      </div>

      {/* 3. Main Content Layout */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Info Cards - Custom for International */}
            <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Duration</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{tour.duration}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <Plane className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Visa</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{tour.visaRequired ? "Required" : "On Arrival"}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Users className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Group Size</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{tour.groupSize}</span>
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
                    <p className="text-gray-700 leading-7 mb-6">{tour.overview}</p>

                    <h4 className="font-bold text-gray-900 mb-3">Highlights</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {tour.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-bold text-gray-900 mb-3">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.idealFor.map((tag, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Itinerary */}
                  <TabsContent value="itinerary" className="mt-0">
                    <h3 className="text-xl font-bold mb-6">Detailed Itinerary</h3>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {tour.itinerary.map((day, index) => {
                        const parts = day.split(':');
                        const dayTitle = parts[0] || `Day ${index + 1}`;
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
                      {tour.includes.map((incl, i) => (
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
                      {tour.notIncludes.map((excl, i) => (
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

              {/* Price Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">Starting Price</p>
                  <div className="flex items-baseline gap-1">
                    <h2 className="text-3xl font-bold text-gray-900">{tour.price}</h2>
                    <span className="text-gray-500 text-sm">/ Per Person</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Currency: {tour.currency}</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold shadow-blue-200 shadow-lg" onClick={() => window.open(`https://wa.me/918178515133?text=${encodeURIComponent(`Hi, I am interested in ${tour.name}`)}`, '_blank')}>
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
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">Best Price</span>
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

export default InternationalDetail;
