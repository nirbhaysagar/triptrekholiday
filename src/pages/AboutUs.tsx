import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Award, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Trip Trek Holiday</h1>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
              </div>
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
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
            <div className="grid md:grid-cols-4 gap-8 text-center">
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

