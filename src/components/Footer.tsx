import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/Trip-Trek-Logo-Final (1).png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <Link to="/">
                <img 
                  src={logo} 
                  alt="Trip Trek Holiday" 
                  className="h-12 w-auto object-contain mb-4"
                />
              </Link>
              <p className="text-accent-foreground/80 mb-4 leading-relaxed">
                Your trusted partner for unforgettable travel experiences around the world.
              </p>
            </div>

            {/* About */}
            <div id="about">
              <h4 className="font-heading font-semibold text-lg mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <a href="#testimonials" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm">
                    info@triptrekholiday.com
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm">
                    123 Travel Street, Adventure City
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-accent-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-accent-foreground/60 text-sm">
                © 2025 Trip Trek Holiday. All rights reserved.
              </p>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
