import { MapPin, Calendar, Search, List, Hotel, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";


import herovideo from "@/assets/herovideo.mp4";

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tours");
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Tours state
  const [destination, setDestination] = useState("");
  const [tourType, setTourType] = useState("");

  // Hotels state
  const [hotelLocation, setHotelLocation] = useState("");
  const [guests, setGuests] = useState("2");

  // Visa state
  const [visaCountry, setVisaCountry] = useState("");
  const [visaType, setVisaType] = useState("");

  // Experience state
  const [activityType, setActivityType] = useState("");
  const [activityLocation, setActivityLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('type', activeTab);

    if (activeTab === 'tours') {
      if (destination) params.set('destination', destination);
      if (tourType) params.set('category', tourType);
      if (date) params.set('date', date.toISOString());
    } else if (activeTab === 'hotels') {
      if (hotelLocation) params.set('destination', hotelLocation);
      if (guests) params.set('guests', guests);
      if (date) params.set('checkin', date.toISOString());
    } else if (activeTab === 'visa') {
      if (visaCountry) params.set('country', visaCountry);
      if (visaType) params.set('visaType', visaType);
    } else if (activeTab === 'experience') {
      if (activityLocation) params.set('location', activityLocation);
      if (activityType) params.set('activity', activityType);
    }

    navigate(`/search?${params.toString()}`);
  };

  return (
    <section id="home" className="relative pt-32 pb-32 lg:pb-40 bg-gray-50/50">

      {/* Boxed Hero Container */}
      <div className="container mx-auto px-4 lg:px-[25px]">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] md:h-[600px] w-full mx-auto">

          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={herovideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-20 md:pb-36">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight max-w-4xl">
              All-in-one Travel Booking.
            </h1>
            <p className="text-lg sm:text-xl text-navy-100 font-medium max-w-2xl text-white/90">
              Explore the world's most breathtaking destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Search Interface */}
      <div className="relative -mt-32 md:-mt-48 z-30 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Tab Triggers */}
          <Tabs defaultValue="tours" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList className="bg-white p-1.5 rounded-full shadow-lg border border-gray-100 h-auto inline-flex">
                <TabsTrigger value="tours" className="rounded-full px-6 py-2.5 data-[state=active]:bg-[#1877F2] data-[state=active]:text-white text-gray-600 font-semibold gap-2 transition-all">
                  <span className="text-lg">🎒</span> Tours
                </TabsTrigger>
                <TabsTrigger value="hotels" className="rounded-full px-6 py-2.5 data-[state=active]:bg-[#1877F2] data-[state=active]:text-white text-gray-600 font-semibold gap-2 transition-all">
                  <span className="text-lg">🛏️</span> Hotels
                </TabsTrigger>
                <TabsTrigger value="visa" className="rounded-full px-6 py-2.5 data-[state=active]:bg-[#1877F2] data-[state=active]:text-white text-gray-600 font-semibold gap-2 transition-all">
                  <span className="text-lg">🛂</span> Visa
                </TabsTrigger>
                <TabsTrigger value="experience" className="rounded-full px-6 py-2.5 data-[state=active]:bg-[#1877F2] data-[state=active]:text-white text-gray-600 font-semibold gap-2 transition-all">
                  <span className="text-lg">🎫</span> Experience
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Search Form Card */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100">
              {/* TOURS TAB */}
              <TabsContent value="tours" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Destination */}
                  <div className="md:col-span-4 border border-gray-200 rounded-xl p-3 hover:border-blue-400 transition-colors group bg-gray-50/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Destination</p>
                        <Select value={destination} onValueChange={setDestination}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 font-bold text-lg">
                            <SelectValue placeholder="Where to?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                            <SelectItem value="kashmir">Kashmir</SelectItem>
                            <SelectItem value="kerala">Kerala</SelectItem>
                            <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                            <SelectItem value="rajasthan">Rajasthan</SelectItem>
                            <SelectItem value="goa">Goa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="md:col-span-3 border border-gray-200 rounded-xl p-3 hover:border-blue-400 transition-colors group bg-gray-50/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="w-full text-left cursor-pointer">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Date</p>
                              <p className="text-lg font-bold text-gray-900 truncate">
                                {date ? format(date, "d MMM yyyy") : "Select Date"}
                              </p>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="md:col-span-3 border border-gray-200 rounded-xl p-3 hover:border-blue-400 transition-colors group bg-gray-50/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                        <List className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Tour Type</p>
                        <Select value={tourType} onValueChange={setTourType}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 font-bold text-lg">
                            <SelectValue placeholder="All Categories" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="honeymoon">Honeymoon</SelectItem>
                            <SelectItem value="religious">Religious</SelectItem>
                            <SelectItem value="wildlife">Wildlife</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="md:col-span-2">
                    <Button
                      onClick={handleSearch}
                      className="w-full bg-[#1877F2] hover:bg-blue-700 text-white h-[72px] rounded-xl text-lg font-bold shadow-blue-200 shadow-lg"
                    >
                      <Search className="w-5 h-5 mr-2" /> SEARCH
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* HOTELS TAB - Simplified structure for brevity, following same pattern */}
              <TabsContent value="hotels" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-xl p-3 bg-gray-50/50">
                      <p className="text-xs font-bold text-gray-400 uppercase">Destination</p>
                      <Select value={hotelLocation} onValueChange={setHotelLocation}><SelectTrigger className="bg-transparent border-0 font-bold text-lg p-0"><SelectValue placeholder="Where?" /></SelectTrigger><SelectContent><SelectItem value="goa">Goa</SelectItem><SelectItem value="delhi">Delhi</SelectItem></SelectContent></Select>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 bg-gray-50/50">
                      <p className="text-xs font-bold text-gray-400 uppercase">Check In</p>
                      <p className="font-bold text-lg text-gray-900 py-1">{date ? format(date, "d MMM") : "Select"}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 bg-gray-50/50">
                      <p className="text-xs font-bold text-gray-400 uppercase">Guests</p>
                      <Select value={guests} onValueChange={setGuests}><SelectTrigger className="bg-transparent border-0 font-bold text-lg p-0"><SelectValue placeholder="2 Guests" /></SelectTrigger><SelectContent><SelectItem value="2">2 Guests</SelectItem></SelectContent></Select>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Button onClick={handleSearch} className="w-full bg-[#1877F2] text-white h-[72px] rounded-xl font-bold">SEARCH</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visa" className="mt-0">
                <div className="text-center py-8 text-gray-500">Select a country to view visa requirements. (Placeholder for full form)</div>
              </TabsContent>
              <TabsContent value="experience" className="mt-0">
                <div className="text-center py-8 text-gray-500">Explore activities near you. (Placeholder for full form)</div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero;
