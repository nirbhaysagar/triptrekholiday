import { ArrowRight, MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.jpg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";

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
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

          {/* Tour Search Card */}
          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      className="w-full pl-12 pr-4 py-3 text-base rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-full py-3 text-base rounded-xl border-gray-300 focus:ring-blue-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Destination" />
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
                <Select>
                  <SelectTrigger className="w-full py-3 text-base rounded-xl border-gray-300 focus:ring-blue-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3days">3 Days</SelectItem>
                    <SelectItem value="5days">5 Days</SelectItem>
                    <SelectItem value="7days">7 Days</SelectItem>
                    <SelectItem value="10days">10 Days</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base rounded-xl transition-colors">
                  <Search className="h-5 w-5 mr-2" /> Search Tours
                </Button>
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
