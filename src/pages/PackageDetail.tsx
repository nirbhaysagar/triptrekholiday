import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar, CheckCircle2, XCircle, Star, Phone, Download, MessageCircle, Send, ArrowRight, Shield, ChevronLeft } from "lucide-react";
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

import { packages } from "@/data/packages";

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find(p => String(p.id) === id);
  const [activeTab, setActiveTab] = useState("overview");

  if (!pkg) return <div className="min-h-screen grid place-items-center">Package not found</div>;

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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{pkg.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  <Star className="w-3.5 h-3.5 fill-current" /> {pkg.rating}
                </span>
                <span>({pkg.reviews} Reviews)</span>
                <span>•</span>
                <span>{pkg.pickup}</span>
              </div>
            </div>
            <div className="text-right hidden lg:block">
              <p className="text-sm text-gray-500 mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-blue-600">{pkg.price}</p>
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
            <img src={pkg.images[0]} alt="Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
          </div>
          {/* Secondary Images */}
          {pkg.images.slice(1, 5).map((img, idx) => (
            <div key={idx} className="relative h-full overflow-hidden hidden md:block">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
            </div>
          ))}
          {/* Mobile View - just show main or swipe? For now hidden secondaries on mobile or stacked? Grid handles it. */}
        </div>
        <div className="flex md:hidden gap-2 mt-2 overflow-x-auto pb-2 snap-x">
          {pkg.images.slice(1).map((img, idx) => (
            <img key={idx} src={img} className="w-60 h-40 object-cover rounded-lg flex-shrink-0 snap-center" />
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
                <span className="font-semibold text-gray-900 text-sm md:text-base">{pkg.duration}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2 border-r last:border-0 border-gray-100">
                <MapPin className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Pickup & Drop</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{pkg.pickup}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-2">
                <Calendar className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">Category</span>
                <span className="font-semibold text-gray-900 text-sm md:text-base">{pkg.category}</span>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <div className="border-b px-4">
                  <TabsList className="h-auto w-full justify-start bg-transparent p-0 gap-6 overflow-x-auto">
                    {["Overview", "Itinerary", "Inclusions", "Exclusions", "Batches"].map((tab) => (
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
                    <p className="text-gray-700 leading-7">{pkg.overview}</p>
                  </TabsContent>

                  {/* Itinerary */}
                  <TabsContent value="itinerary" className="mt-0">
                    <h3 className="text-xl font-bold mb-6">Detailed Itinerary</h3>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {pkg.itinerary.map((day) => (
                        <AccordionItem key={day.day} value={`day-${day.day}`} className="border bg-gray-50 rounded-lg px-2">
                          <AccordionTrigger className="hover:no-underline px-2">
                            <div className="flex items-center text-left gap-3">
                              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Day {day.day}</span>
                              <span className="font-semibold text-gray-900">{day.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-2 pb-4 pt-1 text-gray-600 ml-12 border-l-2 border-dashed border-gray-200 pl-4">
                            {day.desc}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>

                  {/* Inclusions */}
                  <TabsContent value="inclusions" className="mt-0">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" /> Inclusions
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 bg-green-50/50 p-3 rounded-lg border border-green-100">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{item}</span>
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
                      {pkg.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 bg-red-50/50 p-3 rounded-lg border border-red-100">
                          <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* Batches */}
                  <TabsContent value="batches" className="mt-0">
                    <h3 className="text-xl font-bold mb-4">Upcoming Batches</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-100 text-gray-600 text-sm">
                            <th className="p-3 rounded-l-lg">Date</th>
                            <th className="p-3">Availability</th>
                            <th className="p-3 rounded-r-lg">Action</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {pkg.batches.map((batch, i) => (
                            <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                              <td className="p-3 font-medium">{batch}</td>
                              <td className="p-3 text-green-600 font-semibold">Available</td>
                              <td className="p-3">
                                <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Book</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
                    <h2 className="text-3xl font-bold text-gray-900">{pkg.price}</h2>
                    <span className="text-gray-500 text-sm">/ Per Person</span>
                  </div>
                  <p className="text-green-600 text-xs font-semibold mt-1">5% OFF for Group Bookings</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold shadow-blue-200 shadow-lg">
                    Send Query Here
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50 h-12 font-semibold">
                    Book Now
                  </Button>
                </div>
              </div>

              {/* 2. Price Summary Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Price Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-dashed pb-2">
                    <span className="text-gray-600">Double Occupancy</span>
                    <span className="font-semibold text-gray-900">{pkg.prices.double}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-dashed pb-2">
                    <span className="text-gray-600">Triple Occupancy</span>
                    <span className="font-semibold text-gray-900">{pkg.prices.triple}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Quad Occupancy</span>
                    <span className="font-semibold text-gray-900">{pkg.prices.quad}</span>
                  </div>
                </div>
              </div>

              {/* 3. Helper Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center gap-2 h-auto py-3 border-gray-200">
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

export default PackageDetail;
