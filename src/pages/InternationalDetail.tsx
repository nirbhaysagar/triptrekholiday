import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Clock, Users, MapPin, Plane, Globe, Calendar, DollarSign, MessageSquare, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import placeholder images
import thailandImage from "@/assets/destination-1.jpg";
import nepalImage from "@/assets/destination-2.jpg";
import baliImage from "@/assets/destination-3.jpg";

const internationalTours = [
  {
    id: 1,
    name: "Thailand Paradise",
    image: thailandImage,
    description: "Experience the vibrant culture, stunning beaches, and rich heritage of Thailand - the Land of Smiles.",
    overview: "Thailand offers a perfect blend of tropical beaches, ancient temples, bustling cities, and delicious cuisine. From the bustling streets of Bangkok to the pristine beaches of Phuket, this tour promises unforgettable memories.",
    highlights: ["Bangkok Temples", "Pattaya Beaches", "Phuket Islands", "Thai Cuisine", "Night Markets", "Elephant Sanctuary"],
    itinerary: [
      "Day 1: Arrival in Bangkok, city tour and temple visits",
      "Day 2: Floating markets and traditional Thai massage",
      "Day 3: Travel to Pattaya, beach activities",
      "Day 4: Coral Island tour and water sports",
      "Day 5: Travel to Phuket, island hopping",
      "Day 6: Departure"
    ],
    includes: ["Hotel accommodation", "All meals", "Airport transfers", "Local guide", "Entry fees", "Transportation"],
    notIncludes: ["International flights", "Visa fees", "Personal expenses", "Travel insurance"],
    bestTime: "November to April (cool season)",
    duration: "6 Days 5 Nights",
    rating: 4.8,
    price: "₹35,000",
    region: "Thailand",
    visaRequired: true,
    currency: "THB",
    groupSize: "8-12 people",
    difficulty: "Easy",
    idealFor: ["Beach lovers", "Culture enthusiasts", "Food lovers", "Adventure seekers"],
    activities: ["Beach activities", "Temple visits", "Island hopping", "Shopping", "Spa treatments"],
  },
  {
    id: 2,
    name: "Nepal Adventure",
    image: nepalImage,
    description: "Discover the majestic Himalayas, ancient temples, and rich culture of Nepal - the roof of the world.",
    overview: "Nepal is a land of stunning mountain peaks, ancient temples, and warm hospitality. Experience the beauty of the Himalayas, explore UNESCO World Heritage sites, and immerse yourself in the rich Buddhist and Hindu culture.",
    highlights: ["Kathmandu Valley", "Pokhara Lakes", "Mount Everest View", "Trekking", "Buddhist Monasteries", "Annapurna Range"],
    itinerary: [
      "Day 1: Arrival in Kathmandu, city tour",
      "Day 2: Explore ancient temples and stupas",
      "Day 3: Travel to Pokhara, boat ride on Phewa Lake",
      "Day 4: Sunrise view from Sarangkot, trekking",
      "Day 5: Annapurna Base Camp trek",
      "Day 6: Return to Kathmandu, shopping",
      "Day 7: Departure"
    ],
    includes: ["Hotel accommodation", "All meals", "Airport transfers", "Trekking guide", "Entry fees", "Domestic flights"],
    notIncludes: ["International flights", "Trekking equipment", "Personal expenses", "Travel insurance"],
    bestTime: "March to May, October to December",
    duration: "7 Days 6 Nights",
    rating: 4.9,
    price: "₹28,500",
    region: "Nepal",
    visaRequired: false,
    currency: "NPR",
    groupSize: "6-10 people",
    difficulty: "Moderate",
    idealFor: ["Adventure seekers", "Nature lovers", "Photography enthusiasts", "Trekking enthusiasts"],
    activities: ["Trekking", "Mountain views", "Temple visits", "Cultural experiences", "Photography"],
  },
  {
    id: 3,
    name: "Bali Retreat",
    image: baliImage,
    description: "Immerse yourself in the tropical paradise of Bali with its stunning beaches, lush rice terraces, and rich culture.",
    overview: "Bali offers a perfect escape with its beautiful beaches, ancient temples, lush rice terraces, and vibrant arts scene. Experience the unique blend of Hindu culture, tropical landscapes, and modern luxury.",
    highlights: ["Ubud Rice Terraces", "Bali Temples", "Seminyak Beach", "Volcano Tours", "Spa & Wellness", "Traditional Dance"],
    itinerary: [
      "Day 1: Arrival in Denpasar, transfer to Seminyak",
      "Day 2: Beach day and water sports",
      "Day 3: Ubud rice terraces and temple visits",
      "Day 4: Volcano trekking and hot springs",
      "Day 5: Traditional village tour and spa",
      "Day 6: Departure"
    ],
    includes: ["Hotel accommodation", "All meals", "Airport transfers", "Local guide", "Entry fees", "Spa treatments"],
    notIncludes: ["International flights", "Visa fees", "Personal expenses", "Travel insurance"],
    bestTime: "April to October (dry season)",
    duration: "5 Days 4 Nights",
    rating: 4.7,
    price: "₹42,000",
    region: "Indonesia",
    visaRequired: true,
    currency: "IDR",
    groupSize: "8-12 people",
    difficulty: "Easy",
    idealFor: ["Beach lovers", "Wellness seekers", "Culture enthusiasts", "Couples"],
    activities: ["Beach activities", "Temple visits", "Rice terrace tours", "Volcano trekking", "Spa treatments"],
  },
];

const InternationalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: '',
    message: ''
  });

  const tour = internationalTours.find(t => t.id === parseInt(id || '0'));

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">The international tour you're looking for doesn't exist.</p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmitQuote = () => {
    const message = `Hi, I'm interested in ${tour.name} (${tour.duration}) for ${tour.price}.

Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Travel Date: ${formData.travelDate}
- Number of Guests: ${formData.guests}
- Message: ${formData.message}`;

    window.open(`https://wa.me/918178515133?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-32 left-6 z-10 inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.name}</h1>
            <p className="text-xl md:text-2xl mb-6">{tour.description}</p>
            <div className="flex items-center justify-center gap-6 text-lg">
              <span className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {tour.region}
              </span>
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {tour.duration}
              </span>
              <span className="flex items-center">
                <Star className="w-5 h-5 mr-2 fill-yellow-400" />
                {tour.rating}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tour.overview}</p>
            </Card>

            {/* Highlights */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Itinerary */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-3">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{day}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Activities */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Activities</h2>
              <div className="flex flex-wrap gap-2">
                {tour.activities.map((activity, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {activity}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{tour.price}</h3>
                <p className="text-gray-600">per person</p>
              </div>

              <div className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Get Quote for {tour.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="travelDate">Preferred Travel Date</Label>
                        <Input
                          id="travelDate"
                          name="travelDate"
                          type="date"
                          value={formData.travelDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          value={formData.guests}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any specific requirements or questions..."
                        />
                      </div>
                      <Button onClick={handleSubmitQuote} className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Quote Request
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  className="w-full bg-[#25D366] hover:bg-[#128C7E]"
                  onClick={() => window.open(`https://wa.me/918178515133?text=${encodeURIComponent(`Hi, I'm interested in ${tour.name} (${tour.duration}) for ${tour.price}.`)}`, '_blank')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact on WhatsApp
                </Button>
              </div>
            </Card>

            {/* Tour Details */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Tour Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Duration: {tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Group Size: {tour.groupSize}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Region: {tour.region}</span>
                </div>
                <div className="flex items-center">
                  <Plane className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Visa: {tour.visaRequired ? 'Required' : 'Not Required'}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Currency: {tour.currency}</span>
                </div>
              </div>
            </Card>

            {/* Best Time */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
              <p className="text-gray-700">{tour.bestTime}</p>
            </Card>

            {/* Ideal For */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Ideal For</h3>
              <div className="flex flex-wrap gap-2">
                {tour.idealFor.map((type, index) => (
                  <Badge key={index} variant="outline">
                    {type}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Includes & Excludes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-green-700">What's Included</h3>
            <ul className="space-y-2">
              {tour.includes.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-red-700">What's Not Included</h3>
            <ul className="space-y-2">
              {tour.notIncludes.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InternationalDetail;
