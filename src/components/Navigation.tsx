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
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "International", href: "/international" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium text-xl tracking-wide"
                >
                  {link.name}
                </Link>
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

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white h-screen w-full overflow-y-auto">
          <div className="flex flex-col min-h-screen">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Trip Trek Holiday"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-12 w-12 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-900" />
              </Button>
            </div>

            {/* Links */}
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center justify-between px-4 py-4 text-2xl font-semibold text-gray-900 hover:text-blue-600 hover:bg-blue-50/50 rounded-2xl transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer / CTA */}
            <div className="mt-auto px-6 pb-12 pt-6 bg-gray-50/50">
              <Button
                className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] py-7 text-xl font-bold rounded-2xl shadow-lg shadow-green-500/20 active:scale-[0.98] transition-all"
                onClick={() => {
                  window.open('https://wa.me/918178515133', '_blank');
                  setIsOpen(false);
                }}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
