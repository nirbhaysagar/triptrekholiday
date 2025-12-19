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
    <section id="home" className="relative h-[85vh] flex flex-col justify-center items-center overflow-visible">
      {/* Hero Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Mountain/Adventure Theme Video */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-mountain-range-at-sunset-33633-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full pb-20">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-5xl mx-auto drop-shadow-lg">
          Discover Your Next Great Adventure
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
          Explore the world's most breathtaking destinations with TripTrek.
          Unforgettable journeys, tailored just for you.
        </p>
      </div>

      {/* Search Card - Absolutely Positioned Overlap */}
      <div className="absolute bottom-0 translate-y-1/2 left-4 right-4 z-20">
        <div className="w-full max-w-6xl mx-auto">
          <Tabs defaultValue="tours" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-transparent border-0 p-0 h-auto flex gap-2 mb-0 justify-start md:justify-center flex-wrap">
              <TabsTrigger
                value="tours"
                className="data-[state=active]:bg-[#1877F2] data-[state=active]:text-white bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-6 py-3 h-auto text-base font-semibold shadow-lg transition-all border border-white/20 hover:bg-white"
              >
                <span className="mr-2">🎒</span> Tours
              </TabsTrigger>
              <TabsTrigger
                value="hotels"
                className="data-[state=active]:bg-[#1877F2] data-[state=active]:text-white bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-6 py-3 h-auto text-base font-semibold shadow-lg transition-all border border-white/20 hover:bg-white"
              >
                <span className="mr-2">🛏️</span> Hotels
              </TabsTrigger>
              <TabsTrigger
                value="visa"
                className="data-[state=active]:bg-[#1877F2] data-[state=active]:text-white bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-6 py-3 h-auto text-base font-semibold shadow-lg transition-all border border-white/20 hover:bg-white"
              >
                <span className="mr-2">🛂</span> Visa
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-[#1877F2] data-[state=active]:text-white bg-white/90 backdrop-blur-sm text-gray-700 rounded-full px-6 py-3 h-auto text-base font-semibold shadow-lg transition-all border border-white/20 hover:bg-white"
              >
                <span className="mr-2">🎫</span> Experience
              </TabsTrigger>
            </TabsList>

            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl mt-4 max-w-6xl mx-auto ring-1 ring-black/5 relative">

              {/* TOURS TAB */}
              <TabsContent value="tours" className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Destination</p>
                        <Select value={destination} onValueChange={setDestination}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
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

                  <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="w-full text-left">
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Date</p>
                              <p className="text-lg font-semibold text-gray-900 truncate">
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

                  <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <List className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Tour Type</p>
                        <Select value={tourType} onValueChange={setTourType}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
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
                </div>
              </TabsContent>

              {/* HOTELS TAB */}
              <TabsContent value="hotels" className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <Hotel className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Destination</p>
                        <Select value={hotelLocation} onValueChange={setHotelLocation}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
                            <SelectValue placeholder="Where to stay?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="goa">Goa</SelectItem>
                            <SelectItem value="jaipur">Jaipur</SelectItem>
                            <SelectItem value="manali">Manali</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="w-full text-left">
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Check In</p>
                              <p className="text-lg font-semibold text-gray-900 truncate">
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

                  <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Guests</p>
                        <Select value={guests} onValueChange={setGuests}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
                            <SelectValue placeholder="Guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* VISA TAB */}
              <TabsContent value="visa" className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Country</p>
                        <Select value={visaCountry} onValueChange={setVisaCountry}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dubai">Dubai</SelectItem>
                            <SelectItem value="thailand">Thailand</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                            <SelectItem value="malaysia">Malaysia</SelectItem>
                            <SelectItem value="vietnam">Vietnam</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Visa Type</p>
                        <Select value={visaType} onValueChange={setVisaType}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
                            <SelectValue placeholder="Type of Visa" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tourist">Tourist Visa</SelectItem>
                            <SelectItem value="business">Business Visa</SelectItem>
                            <SelectItem value="transit">Transit Visa</SelectItem>
                            <SelectItem value="student">Student Visa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* EXPERIENCE TAB */}
              <TabsContent value="experience" className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                        <Select value={activityLocation} onValueChange={setActivityLocation}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
                            <SelectValue placeholder="Where?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rishikesh">Rishikesh</SelectItem>
                            <SelectItem value="manali">Manali</SelectItem>
                            <SelectItem value="goa">Goa</SelectItem>
                            <SelectItem value="andaman">Andaman</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-gray-200 hidden md:block"></div>

                  <div className="flex-1 w-full border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        <List className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Activity</p>
                        <Select value={activityType} onValueChange={setActivityType}>
                          <SelectTrigger className="w-full p-0 h-auto border-0 focus:ring-0 shadow-none bg-transparent text-gray-900 text-lg font-semibold">
                            <SelectValue placeholder="What to do?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rafting">River Rafting</SelectItem>
                            <SelectItem value="bungee">Bungee Jumping</SelectItem>
                            <SelectItem value="scuba">Scuba Diving</SelectItem>
                            <SelectItem value="paragliding">Paragliding</SelectItem>
                            <SelectItem value="camping">Camping</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Common Search Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleSearch}
                  className="bg-[#1877F2] hover:bg-[#1666d6] text-white px-12 py-7 rounded-xl text-xl font-bold shadow-xl shadow-blue-500/30 transition-all w-full md:w-auto flex items-center justify-center transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <Search className="w-6 h-6 mr-3" />
                  SEARCH NOW
                </Button>
              </div>

            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero;
