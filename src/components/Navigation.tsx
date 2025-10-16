import { useState, useEffect } from "react";
import { Menu, X, Plane, Truck, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Trip-Trek-Logo-Final (1).png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBookHovered, setIsBookHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Tours", href: "#tour" },
    { name: "International", href: "#international" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const navClasses = isScrolled || isHovered || isOpen
    ? "bg-white/30 backdrop-blur-sm border-b border-gray-200/30"
    : "bg-transparent border-b border-transparent";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            <div 
              className="relative ml-4"
            onMouseEnter={() => setIsBookHovered(true)}
            onMouseLeave={() => setIsBookHovered(false)}
            >
              <Button 
                className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200"
                onClick={() => window.open('https://wa.me/918178515133', '_blank')}
              >
                WhatsApp Us
              </Button>
              {/* Animated Scene - Caravan with Palm Trees */}
              <div 
                className={`absolute -right-20 top-1/2 -translate-y-1/2 transition-all duration-500 flex items-center gap-1 ${
                  isBookHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <Palmtree className="w-5 h-5 text-green-600 animate-pulse" />
                <Truck className="w-7 h-7 text-gray-700 animate-bounce" />
                <Palmtree className="w-4 h-4 text-green-600 animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200/30">
          <div className="px-6 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3 text-base font-medium rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
