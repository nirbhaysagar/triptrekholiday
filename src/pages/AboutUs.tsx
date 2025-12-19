import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Award, Users, Home, Plane, Footprints, Mountain, ThumbsUp, Smartphone, Filter, UsersRound, ArrowLeft } from "lucide-react";
import image1 from "@/assets/testimonials/image1.jpeg";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Trip Trek Holiday</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about creating unforgettable travel experiences that inspire,
              connect, and transform the way you explore the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Info Blocks */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Why Choose Us</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Block 1 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Home className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Handpicked Stays with Friendly Hosts</h3>
                        <p className="text-sm text-gray-600 leading-normal">All our accommodations are verified, pre-checked for quality and hygiene.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 2 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Plane className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">2500+ Trips Hosted PAN India & Abroad</h3>
                        <p className="text-sm text-gray-600 leading-normal">From group trips to custom tours exploring diverse landscapes, cultures & lots more.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 3 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Footprints className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Solo Travel Friendly Trips for All</h3>
                        <p className="text-sm text-gray-600 leading-normal">We provide absolutely safe and comfortable environment for solo travellers.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 4 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Mountain className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Trip Itineraries Curated with Love</h3>
                        <p className="text-sm text-gray-600 leading-normal">Trip plans handcrafted by destination experts for hassle-free travel experience.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 5 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Heart className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">8 Years of On-Ground Experience</h3>
                        <p className="text-sm text-gray-600 leading-normal">Being in Tourism industry for last 8 years, we put our heart in planning your trips.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 6 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <ThumbsUp className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Rated 4.8 Stars on Google Reviews</h3>
                        <p className="text-sm text-gray-600 leading-normal">Our growth lies in the memorable travel experiences we provide to our travellers.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 7 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Smartphone className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Hassle-Free Booking Process</h3>
                        <p className="text-sm text-gray-600 leading-normal">Simple and quick booking with instant confirmation and flexible payment options.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 8 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Filter className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Filtering Like-Minded Travellers</h3>
                        <p className="text-sm text-gray-600 leading-normal">Connect with fellow travellers who share similar interests and travel preferences.</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 9 */}
                  <div className="border border-blue-100 rounded-xl p-4 bg-white shadow-sm active:scale-[0.98] transition-transform duration-200">
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <UsersRound className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1 leading-tight">Experienced & Cool Trip Captains</h3>
                        <p className="text-sm text-gray-600 leading-normal">Our expert trip captains ensure your journey is safe, fun, and memorable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Our Story */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded with a passion for adventure and a commitment to excellence, Trip Trek Holiday
                    has been crafting extraordinary travel experiences for over a decade.
                  </p>
                  <p>
                    What started as a small team of travel enthusiasts has grown into a trusted name in
                    the industry, specializing in curated tours across India's most breathtaking destinations.
                  </p>
                  <p>
                    From the spiritual peaks of Uttarakhand to the serene backwaters of Kerala, we bring
                    you closer to the authentic heart of India, one unforgettable journey at a time.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-2xl h-96 mt-8 overflow-hidden group shadow-lg">
                  <img
                    src={image1}
                    alt="Our Journey"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for perfection in every journey we create
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
                <p className="text-gray-600 text-sm">
                  Fueled by our love for travel and exploration
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600 text-sm">
                  Premium experiences with attention to detail
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600 text-sm">
                  Building connections through shared adventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Tour Packages</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

