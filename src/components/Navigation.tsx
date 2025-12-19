import { useState, useEffect } from "react";
import { Menu, X, Plane, Truck, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Trip-Trek-Logo-Final (1).png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isHovered, setIsHovered] = useState(false); // Removed as requested
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

  const navClasses = isScrolled || isOpen
    ? "bg-white/30 backdrop-blur-sm border-b border-gray-200/30"
    : "bg-transparent border-b border-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Trip Trek Holiday"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-8 bg-white/40 backdrop-blur-md px-10 py-3 rounded-full border border-white/30 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium text-xl tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div
              className="relative ml-4"
              onMouseEnter={() => setIsBookHovered(true)}
              onMouseLeave={() => setIsBookHovered(false)}
            >
              <Button
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-6 py-2.5 text-lg font-medium rounded-full transition-all duration-200"
                onClick={() => window.open('https://wa.me/918178515133', '_blank')}
              >
                WhatsApp Us
              </Button>
              {/* Animated Scene - Caravan with Palm Trees */}
              <div
                className={`absolute -right-20 top-1/2 -translate-y-1/2 transition-all duration-500 flex items-center gap-1 ${isBookHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
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
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/30 overflow-y-auto">
          <div className="px-6 pt-4 pb-6 space-y-2 flex flex-col h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-4 text-2xl font-medium text-black hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 border-b border-gray-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 mt-auto pb-10">
              <Button
                className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] py-6 text-xl font-medium rounded-xl shadow-lg"
                onClick={() => {
                  window.open('https://wa.me/918178515133', '_blank');
                  setIsOpen(false);
                }}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
