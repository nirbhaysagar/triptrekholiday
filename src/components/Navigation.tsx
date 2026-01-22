import { useState, useEffect } from "react";
import { Menu, X, Plane, Truck, Palmtree, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Trip-Trek-Logo-Final (1).png";

const offers = [
  "One-Click Booking, Upto FLAT 30% Discount on Honeymoon Tours",
  "Enjoy Family Holiday Packages with Flexible Payment Options",
  "Early Bird Special: Get 10% Off on International Packages",
  "Book Now & Get Free Travel Insurance on Select Packages"
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookHovered, setIsBookHovered] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextOffer = () => {
    setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOfferIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "International", href: "/international" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-sans">
      {/* Top Notification Bar */}
      <div className="bg-[#1877F2] text-white py-2 hidden md:block relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between text-sm font-medium">

          {/* Central Offer Carousel */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 w-full justify-center max-w-2xl px-4">
            <button onClick={prevOffer} className="p-1 hover:bg-white/20 rounded-full transition-colors" aria-label="Previous Offer">
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold shrink-0">New</span>
              <span className="truncate transition-all duration-500 ease-in-out inline-block min-w-[300px] text-center">
                {offers[currentOfferIndex]}
              </span>
            </div>

            <button onClick={nextOffer} className="p-1 hover:bg-white/20 rounded-full transition-colors" aria-label="Next Offer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Side Support - Pushed to edge */}
          <div className="flex items-center gap-4 ml-auto relative z-10 bg-[#1877F2] pl-4">
            <a href="tel:+918178515133" className="hover:text-blue-100 transition-colors">+91 8178515133</a>
            <span className="w-px h-3 bg-white/30"></span>
            <Link to="/contact" className="hover:text-blue-100 transition-colors">Support</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Trip Trek Holiday"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-900 hover:text-[#1877F2] font-semibold text-base transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-100">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-[#1877F2] hover:bg-blue-50 rounded-full"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                className="bg-gray-900 text-white hover:bg-[#1877F2] px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-blue-200"
                onClick={() => window.open('https://wa.me/918178515133', '_blank')}
              >
                Login
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white h-screen w-full overflow-y-auto pt-20">
          {/* Content same as before but adjusted for white bg */}
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xl font-semibold text-gray-900 py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full mt-4 bg-[#1877F2] text-white py-6 text-lg rounded-xl"
              onClick={() => { window.open('https://wa.me/918178515133', '_blank'); setIsOpen(false); }}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
