import { useParams, Link, useNavigate } from "react-router-dom";
import { Clock, Users, ArrowLeft, Star, Shield, Phone, CheckCircle2, XCircle, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";

// Import banner images
import chardhamBanner from "@/assets/banner-chardham.jpg";
import kedarnathBanner from "@/assets/kedarnath-banner.jpg";
import valleyofflowerBanner from "@/assets/valleyofflower-banner.jpg";
import auliBanner from "@/assets/auli-banner.jpg";
import rishikeshBanner from "@/assets/rishikesh-banner.jpg";

// Temporary mock - reuse the same structure as in TourPackages
const mockPackages = [
  { 
    id: 1, 
    name: "Chardham Yatra Package", 
    price: "₹45,000", 
    rating: 5.0, 
    duration: "10 Days 9 Nights", 
    features: ["All Meals", "AC Transport", "Hotel Stay", "Pilgrimage Guide"], 
    image: chardhamBanner, 
    overview: "Embark on a sacred journey to the four holy shrines of Uttarakhand - Yamunotri, Gangotri, Kedarnath, and Badrinath. This spiritual pilgrimage offers divine blessings, breathtaking mountain views, and profound spiritual experiences.",
    departurePoints: ["Delhi", "Haridwar"],
    departureInfo: {
      "Delhi": {
        itinerary: [
          "Day 1: Delhi to Haridwar (220 km) - Arrive in Haridwar, evening Ganga Aarti",
          "Day 2: Haridwar to Barkot (200 km) - Drive to Barkot via Mussoorie",
          "Day 3: Barkot to Yamunotri (50 km) - Trek to Yamunotri temple, return to Barkot",
          "Day 4: Barkot to Uttarkashi (200 km) - Drive to Uttarkashi, visit Kashi Vishwanath temple",
          "Day 5: Uttarkashi to Gangotri (100 km) - Drive to Gangotri, temple darshan, return to Uttarkashi",
          "Day 6: Uttarkashi to Guptkashi (200 km) - Drive to Guptkashi",
          "Day 7: Guptkashi to Kedarnath (30 km) - Helicopter/trek to Kedarnath, temple darshan",
          "Day 8: Kedarnath to Joshimath (200 km) - Return from Kedarnath, drive to Joshimath",
          "Day 9: Joshimath to Badrinath (50 km) - Visit Badrinath temple, return to Joshimath",
          "Day 10: Joshimath to Delhi (300 km) - Return journey to Delhi"
        ],
        includes: ["AC Transport from Delhi", "All meals", "Hotel accommodation", "Pilgrimage guide", "Helicopter tickets (if opted)", "Temple entry fees"],
        price: "₹45,000"
      },
      "Haridwar": {
        itinerary: [
          "Day 1: Haridwar to Barkot (200 km) - Arrive in Haridwar, drive to Barkot",
          "Day 2: Barkot to Yamunotri (50 km) - Trek to Yamunotri temple, return to Barkot",
          "Day 3: Barkot to Uttarkashi (200 km) - Drive to Uttarkashi, visit Kashi Vishwanath temple",
          "Day 4: Uttarkashi to Gangotri (100 km) - Drive to Gangotri, temple darshan, return to Uttarkashi",
          "Day 5: Uttarkashi to Guptkashi (200 km) - Drive to Guptkashi",
          "Day 6: Guptkashi to Kedarnath (30 km) - Helicopter/trek to Kedarnath, temple darshan",
          "Day 7: Kedarnath to Joshimath (200 km) - Return from Kedarnath, drive to Joshimath",
          "Day 8: Joshimath to Badrinath (50 km) - Visit Badrinath temple, return to Joshimath",
          "Day 9: Joshimath to Haridwar (250 km) - Return journey to Haridwar",
          "Day 10: Haridwar departure - Morning Ganga Aarti, departure"
        ],
        includes: ["AC Transport from Haridwar", "All meals", "Hotel accommodation", "Pilgrimage guide", "Helicopter tickets (if opted)", "Temple entry fees"],
        price: "₹42,000"
      }
    }
  },
  { id: 2, name: "Jim Corbett Wildlife Safari", price: "₹18,500", rating: 4.8, duration: "3 Days 2 Nights", features: ["Jungle Safari", "Accommodation", "All Meals", "Naturalist Guide"], image: kedarnathBanner, overview: "Experience the thrill of spotting tigers, elephants, and diverse wildlife in India's first national park.", itinerary: ["Arrival and check-in", "Evening safari", "Morning safari", "Departure"], includes: ["Accommodation", "All meals", "Safari tickets", "Naturalist guide"], notIncludes: ["Transportation", "Personal expenses", "Camera charges"] },
  { id: 3, name: "Valley of Flowers Trek", price: "₹28,000", rating: 4.9, duration: "6 Days 5 Nights", features: ["Trekking Guide", "Camping", "Meals", "Transportation"], image: valleyofflowerBanner, overview: "Discover the enchanting Valley of Flowers, a UNESCO World Heritage Site with rare Himalayan flora.", itinerary: ["Arrival in Haridwar", "Drive to Joshimath", "Trek to Ghangaria", "Valley of Flowers exploration", "Return trek", "Departure"], includes: ["Accommodation", "All meals", "Trekking guide", "Transportation"], notIncludes: ["Personal trekking gear", "Personal expenses", "Travel insurance"] },
];

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = mockPackages.find(p => String(p.id) === id);
  const [selectedDeparture, setSelectedDeparture] = useState(pkg?.departurePoints?.[0] || "");

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-2xl font-semibold mt-6">Package not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          {/* Left - Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
          </div>

          {/* Right - Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">{pkg.name}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-700 mb-6">
              <div className="inline-flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {pkg.rating}
              </div>
              <div className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4 text-blue-600" /> {pkg.duration}
              </div>
              <div className="inline-flex items-center gap-1">
                <Users className="w-4 h-4 text-blue-600" /> Guided
              </div>
            </div>

            {/* Departure Point Selector */}
            {pkg.departurePoints && pkg.departurePoints.length > 1 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Departure Point:</h3>
                <div className="flex gap-3">
                  {pkg.departurePoints.map((departure) => (
                    <button
                      key={departure}
                      onClick={() => setSelectedDeparture(departure)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedDeparture === departure
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Ex. {departure}
                    </button>
                  ))}
                </div>
                {selectedDeparture && pkg.departureInfo?.[selectedDeparture] && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 text-blue-800">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">Departure from {selectedDeparture}</span>
                      <span className="ml-auto font-bold">{pkg.departureInfo[selectedDeparture].price}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <p className="text-gray-700 leading-relaxed mb-8">{pkg.overview}</p>

            {/* Inclusion & Exclusion */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* What's Included */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-gray-900">What's Included</h3>
                </div>
                <ul className="space-y-2">
                  {(selectedDeparture && pkg.departureInfo?.[selectedDeparture]?.includes || pkg.includes).map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-gray-900">What's Not Included</h3>
                </div>
                <ul className="space-y-2">
                  {pkg.notIncludes.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Detailed Itinerary</h3>
              <Accordion type="single" collapsible className="w-full">
                {(selectedDeparture && pkg.departureInfo?.[selectedDeparture]?.itinerary || pkg.itinerary).map((step, idx) => (
                  <AccordionItem key={idx} value={`day-${idx + 1}`}>
                    <AccordionTrigger>
                      {step}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>
                          Expect a balanced pace with curated stops and scenic viewpoints. We handle
                          permits, timings, and local coordination so you can focus on the experience.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Transfers and guidance by local experts</li>
                          <li>Recommended meal spots and hydration breaks</li>
                          <li>Safety briefings and contingency planning</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {selectedDeparture && pkg.departureInfo?.[selectedDeparture]?.price || pkg.price}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedDeparture ? `Price from ${selectedDeparture}` : 'Starting price per person'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="#" className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center font-semibold">
                  Book Now
                </Link>
                <button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;

