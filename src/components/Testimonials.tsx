import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import image1 from "@/assets/testimonials/image1.jpeg";
import image2 from "@/assets/testimonials/image2.jpeg";
import image3 from "@/assets/testimonials/image3.jpeg";
import image4 from "@/assets/testimonials/image4.jpeg";
import image5 from "@/assets/testimonials/image5.jpeg";
import image6 from "@/assets/testimonials/image6.jpeg";
import image7 from "@/assets/testimonials/image7.jpeg";
import image8 from "@/assets/testimonials/image8.jpeg";
import image9 from "@/assets/testimonials/image9.jpeg";
import image10 from "@/assets/testimonials/image10.jpeg";
import image11 from "@/assets/testimonials/image11.jpeg";
import image12 from "@/assets/testimonials/image12.jpeg";
import image13 from "@/assets/testimonials/image13.jpeg";
import image14 from "@/assets/testimonials/image14.jpeg";
import image15 from "@/assets/testimonials/image15.jpeg";
import image16 from "@/assets/testimonials/image16.jpeg";
import image17 from "@/assets/testimonials/image17.jpeg";
import image18 from "@/assets/testimonials/image18.jpeg";
import image19 from "@/assets/testimonials/image19.jpeg";
import image20 from "@/assets/testimonials/image20.jpeg";
import whatsappImage from "@/assets/testimonials/WhatsApp Image 2025-06-04 at 01.23.40.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Amazing experience in Uttarakhand! The team made our family trip to Nainital and Mussoorie absolutely perfect. The boat rides in Nainital and cable car in Mussoorie were highlights. Professional guides and excellent service.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    destination: "Nainital & Mussoorie",
    tourImage: "https://images.unsplash.com/photo-1551524164-6cf5a5c8b6a8?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Best travel experience ever! The Rishikesh adventure package was incredible. White water rafting on the Ganges and evening Ganga Aarti were perfectly organized. The camping experience was unforgettable!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    destination: "Rishikesh Adventure",
    tourImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Anita Singh",
    location: "Bangalore",
    rating: 5,
    text: "Trip Trek Holiday exceeded all expectations! Our Jim Corbett safari was unforgettable - we spotted tigers, elephants, and numerous birds. The team's knowledge of wildlife and local culture is outstanding.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    destination: "Jim Corbett Safari",
    tourImage: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Vikram Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Exceptional service and attention to detail. Our Valley of Flowers trek was perfectly planned and executed. Highly recommend for adventure seekers!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    destination: "Valley of Flowers",
    tourImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Wonderful spiritual journey to Haridwar and Rishikesh. The Ganga Aarti experience was magical. Trip Trek Holiday made everything seamless.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    destination: "Spiritual Tour",
    tourImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Amit Joshi",
    location: "Pune",
    rating: 5,
    text: "Fantastic skiing experience in Auli! The team's expertise in adventure sports is remarkable. Safety was always the priority. Will definitely book again.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    destination: "Auli Skiing",
    tourImage: "https://images.unsplash.com/photo-1551524164-6cf5a5c8b6a8?w=300&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Meera Iyer",
    location: "Chennai",
    rating: 5,
    text: "Outstanding hospitality and local knowledge! Our Chopta trek was challenging but the team's support made it enjoyable. Memories for a lifetime.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
    destination: "Chopta Trek",
    tourImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Arjun Mehta",
    location: "Jaipur",
    rating: 5,
    text: "Perfect family vacation in Uttarakhand! The kids loved the adventure activities and we enjoyed the scenic beauty. Professional and friendly service throughout.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    destination: "Family Adventure",
    tourImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=200&fit=crop",
  },
];

// Testimonial images array
const testimonialImages = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20
];

// Add custom styles for continuous scrolling animations
const scrollStyles = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  
  .animate-scroll-left {
    animation: scroll-left 40s linear infinite;
  }
  
  .animate-scroll-right {
    animation: scroll-right 40s linear infinite;
  }
  
  .animate-scroll-left:hover,
  .animate-scroll-right:hover {
    animation-play-state: paused;
  }
  
  .scroll-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  
  .scroll-container::before,
  .scroll-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 10;
    pointer-events: none;
  }
  
  .scroll-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
  
  .scroll-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
`;

const Testimonials = () => {
  // const scrollContainerRef = useRef<HTMLDivElement>(null); // Removed manual ref

  // Inject CSS styles into document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = scrollStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Manual JS scroll effect removed in favor of CSS marquee

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their unforgettable journeys.
            </p>
          </div>

          {/* Auto-scrolling Testimonials - Row 1 */}
          <div className="scroll-container mb-8">
            <div className="flex gap-6 animate-scroll-right" style={{ width: 'max-content' }}>
              {/* Duplicate testimonials for smoothness */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center border border-black">
                    <div className="p-8">
                      <div className="flex justify-center mb-4">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-center mb-6 leading-relaxed text-base italic">
                        "{testimonial.text}"
                      </p>
                      <div className="text-center border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-scrolling Testimonials - Row 2 */}
          <div className="scroll-container">
            <div className="flex gap-6 animate-scroll-right" style={{ width: 'max-content', animationDelay: '-10s' }}>
              {/* Duplicate testimonials - Offset */}
              {[...testimonials.slice(5), ...testimonials.slice(0, 5), ...testimonials].map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center border border-black">
                    <div className="p-8">
                      <div className="flex justify-center mb-4">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-center mb-6 leading-relaxed text-base italic">
                        "{testimonial.text}"
                      </p>
                      <div className="text-center border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Image Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Real Travel Moments
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Captured by our travelers during their amazing journeys
            </p>

            {/* Row 1 - Scrolls Left to Right */}
            <div className="scroll-container mb-6">
              <div className="flex gap-3 md:gap-4 pb-4 mb-4 animate-scroll-left" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[...Array(10)].map((_, index) => {
                  const testimonialImage = testimonialImages[index]; // image1 to image10
                  const testimonial = testimonials[index % testimonials.length]; // For text content
                  return (
                    <div key={`row1-${index}`} className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] w-60 flex-shrink-0">
                      <img
                        src={testimonialImage}
                        alt={`Testimonial ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div>
                            <p className="text-white font-semibold text-xs">{testimonial.destination}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 - Scrolls Right to Left */}
            <div className="scroll-container">
              <div className="flex gap-3 md:gap-4 pb-4 animate-scroll-right" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[...Array(10)].map((_, index) => {
                  const testimonialImage = testimonialImages[index + 10]; // image11 to image20
                  const testimonial = testimonials[(index + 2) % testimonials.length]; // For text content with offset
                  return (
                    <div key={`row2-${index}`} className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] w-60 flex-shrink-0">
                      <img
                        src={testimonialImage}
                        alt={`Testimonial ${index + 11}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div>
                            <p className="text-white font-semibold text-xs">{testimonial.destination}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Create Your Own Story?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of satisfied travelers who have experienced the magic of Uttarakhand with us.
              </p>
              <button
                className="bg-[#25D366] text-white px-8 py-3 rounded-full font-medium hover:bg-[#128C7E] transition-colors duration-200"
                onClick={() => window.open('https://wa.me/918178515133', '_blank')}
              >
                Contact on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
