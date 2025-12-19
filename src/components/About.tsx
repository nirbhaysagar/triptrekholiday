import { Award, Globe, Users, Heart, Shield, Clock, Star, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "150+ destinations worldwide",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "100+ professional tour guides",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Unmatched experiences",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Quick & easy reservations",
  },
];

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (isPaused.current) return;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Left Side - Circular Scrolling Features */}
            <div className="relative">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Why Choose Us
                </h2>
              </div>

              {/* Auto-scrolling Cards */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-hidden scrollbar-hide"
                style={{ scrollBehavior: 'auto' }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 sm:space-x-6 pb-4 w-full sm:w-max">
                  {/* First set of cards */}
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={`first-${index}`}
                        className="flex-shrink-0 w-full sm:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {feature.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {/* Second set of cards for seamless loop */}
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={`second-${index}`}
                        className="hidden sm:block flex-shrink-0 w-full sm:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {feature.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
                  Crafting Extraordinary Adventures
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We're passionate about creating unforgettable travel experiences that connect you with the world's most beautiful destinations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With over 15 years of expertise and a network of local guides, we ensure every journey is safe, authentic, and truly memorable.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Expert Guides</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
