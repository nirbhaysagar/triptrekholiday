import { ArrowRight, MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.jpg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  "Uttarakhand",
  "Kashmir", 
  "Kerala",
  "Himachal Pradesh",
  "Rajasthan",
  "Goa",
  "Sikkim",
  "Ladakh",
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentDestination((prev) => (prev + 1) % destinations.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle search
  const handleSearch = () => {
    // Navigate to tour packages section
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('search', searchQuery);
    if (selectedDestination) params.set('destination', selectedDestination);
    if (selectedDuration) params.set('duration', selectedDuration);
    if (selectedBudget) params.set('budget', selectedBudget);
    
    // Scroll to tour packages section
    navigate(`/#tour${params.toString() ? '?' + params.toString() : ''}`);
    
    // Scroll to section after navigation
    setTimeout(() => {
      const element = document.getElementById('tour');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle popular search click
  const handlePopularSearch = (item: string) => {
    setSearchQuery(item);
    navigate(`/#tour`);
    setTimeout(() => {
      const element = document.getElementById('tour');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Hero Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Majestic mountain landscape with turquoise lake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 sm:mb-8 leading-[0.9] tracking-tight">
            Your Next<br />
            <span className="text-white/80">Adventure Awaits</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Discover extraordinary destinations and create memories that last a lifetime.
          </p>

          {/* Animated Destination Loop */}
          <div className="mb-8 sm:mb-12 text-center">
            <p className="text-white/60 text-sm mb-2">Explore</p>
            <div className="h-12 flex items-center justify-center overflow-hidden">
              <h3 
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
              >
                {destinations[currentDestination]}
              </h3>
            </div>
          </div>

          {/* Tour Search Card - Compact Transparent Design */}
          <div className="mt-8 sm:mt-12 max-w-5xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-5 md:p-6">
              {/* First Row - Search Bar and Filters */}
              <div className="flex flex-col md:flex-row gap-3">
                {/* Search Input - Larger */}
                <div className="relative md:flex-[2]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Search destinations, packages, or activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-12 pr-4 py-3 text-base rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                  />
                </div>

                {/* Destination */}
                <div className="md:flex-1">
                  <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                    <SelectTrigger className="w-full py-3 text-sm rounded-xl bg-white/20 backdrop-blur-sm border-white/30 text-white focus:ring-white/50 h-auto">
                      <MapPin className="w-4 h-4 mr-2 text-white/70" />
                      <SelectValue placeholder="Destination" className="text-white" />
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

                {/* Duration */}
                <div className="md:flex-1">
                  <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                    <SelectTrigger className="w-full py-3 text-sm rounded-xl bg-white/20 backdrop-blur-sm border-white/30 text-white focus:ring-white/50 h-auto">
                      <Calendar className="w-4 h-4 mr-2 text-white/70" />
                      <SelectValue placeholder="Duration" className="text-white" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3days">3 Days</SelectItem>
                      <SelectItem value="5days">5 Days</SelectItem>
                      <SelectItem value="7days">7 Days</SelectItem>
                      <SelectItem value="10days">10 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div className="md:flex-1">
                  <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                    <SelectTrigger className="w-full py-3 text-sm rounded-xl bg-white/20 backdrop-blur-sm border-white/30 text-white focus:ring-white/50 h-auto">
                      <Users className="w-4 h-4 mr-2 text-white/70" />
                      <SelectValue placeholder="Budget" className="text-white" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Under ₹20K</SelectItem>
                      <SelectItem value="mid">₹20K-₹40K</SelectItem>
                      <SelectItem value="high">₹40K-₹60K</SelectItem>
                      <SelectItem value="premium">Above ₹60K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Popular Searches with Search Button */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-white/60 text-xs font-medium">Popular:</span>
                  {["Chardham", "Nainital", "Rishikesh", "Auli"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handlePopularSearch(item)}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-full border border-white/20 transition-all cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                  <div className="flex-1"></div>
                  <Button 
                    onClick={handleSearch}
                    className="bg-white hover:bg-white/90 text-blue-600 font-semibold py-2 px-6 text-sm rounded-xl transition-all shadow-lg hover:shadow-xl h-auto"
                  >
                    <Search className="h-4 w-4 mr-2" /> Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
