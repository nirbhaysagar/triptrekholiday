import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";
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
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="https://whatsapp.com/channel/0029Vb7RHZR5fM5c6qT4BL3K" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-3 rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-green-500/20" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /> </svg>
                </a>
                <a href="https://www.instagram.com/triptrekholiday/" target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] p-3 rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-pink-500/20" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/triptrekholiday/" target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] p-3 rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-blue-500/20" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>

                <a href="https://www.facebook.com/triptrekholiday" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-3 rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-blue-600/20" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCbrUCYd2V6dXeaQbuMCsaNQ" target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] p-3 rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-red-500/20" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
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
                <li>
                  <Link to="/career" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                    Career
                  </Link>
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
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-accent-foreground/80 text-sm">
                    <a href="tel:+918178515133" className="hover:text-accent-foreground transition-colors">+91 8178515133</a>
                    <br />
                    <a href="tel:+916397677754" className="hover:text-accent-foreground transition-colors">+91 6397677754</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-foreground/80 text-sm">
                    Office No. 1536, Gaur City Mall, Sector 4,<br />
                    Greater Noida West - 201318,<br />
                    Uttar Pradesh
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
