import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Mountain, MapPin, Phone, CheckCircle2, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";

// Import images from hillyarea folder
import shimla from "@/assets/hillyarea/shimla.jpg";
import darjeeling from "@/assets/hillyarea/darjeeling.jpg";
import mussorie from "@/assets/hillyarea/mussorie.jpg";
import ooty from "@/assets/hillyarea/ooty.jpg";

const mockHilly = [
  {
    id: 1,
    name: "Shimla Manali",
    image: shimla,
    rating: 4.8,
    bestTime: "Oct – Jun",
    altitude: "2,276 m",
    region: "Himachal Pradesh",
    summary: "Experience the charm of Shimla's colonial heritage and Manali's adventure paradise. From Mall Road shopping to Rohtang Pass skiing, this package offers the perfect blend of leisure and thrill.",
    highlights: ["Mall Road Shimla", "Rohtang Pass", "Solang Valley", "Kufri Fun World", "Hidimba Temple", "Vashisht Hot Springs"],
    duration: "6 Days 5 Nights",
    price: "₹18,500",
    itinerary: [
      "Day 1: Arrival in Shimla, check-in hotel, evening Mall Road exploration",
      "Day 2: Shimla local sightseeing - Jakhu Temple, Christ Church, Ridge, Kufri",
      "Day 3: Drive to Manali via Kullu Valley, check-in and evening leisure",
      "Day 4: Manali local sightseeing - Hadimba Temple, Vashisht, Old Manali",
      "Day 5: Full day excursion to Solang Valley and Rohtang Pass (if open)",
      "Day 6: Check-out and departure from Manali"
    ],
    includes: ["Hotel accommodation", "Daily breakfast and dinner", "All transfers by AC vehicle", "Sightseeing as per itinerary", "Driver allowances"],
    excludes: ["Flights/trains", "Lunch", "Adventure activities fees", "Rohtang Pass permits", "Personal expenses"]
  },
  {
    id: 2,
    name: "Darjeeling Gangtok",
    image: darjeeling,
    rating: 4.9,
    bestTime: "Mar – May",
    altitude: "1,650 m",
    region: "West Bengal & Sikkim",
    summary: "Witness the majestic sunrise over Kanchenjunga from Tiger Hill, explore Buddhist monasteries, and cruise around pristine Tsomgo Lake in this enchanting Himalayan journey.",
    highlights: ["Tiger Hill Sunrise", "Tsomgo Lake", "Nathula Pass", "Tea Estate Tour", "Rumtek Monastery", "MG Marg"],
    duration: "7 Days 6 Nights",
    price: "₹22,000",
    itinerary: [
      "Day 1: Arrival in Bagdogra, drive to Darjeeling, check-in and evening leisure",
      "Day 2: Early morning Tiger Hill sunrise, Batasia Loop, Ghoom Monastery, Zoo",
      "Day 3: Tea estate tour, Himalayan Railway ride, Mall Road shopping",
      "Day 4: Drive to Gangtok, check-in hotel, evening MG Marg walk",
      "Day 5: Full day Tsomgo Lake and Baba Mandir excursion",
      "Day 6: Gangtok local sightseeing - Rumtek Monastery, Handicraft Centre",
      "Day 7: Check-out, drive to Bagdogra and departure"
    ],
    includes: ["Accommodation in 3-star hotels", "All meals", "AC vehicle throughout", "All permits and fees", "Professional guide"],
    excludes: ["Flights to Bagdogra", "Nathula Pass permit (subject to availability)", "Personal expenses", "Tips", "Travel insurance"]
  },
  {
    id: 3,
    name: "Mussoorie Dhanaulti",
    image: mussorie,
    rating: 4.7,
    bestTime: "Apr – Jun",
    altitude: "2,005 m",
    region: "Uttarakhand",
    summary: "Perfect weekend getaway to the Queen of Hills. Enjoy stunning mountain views, colonial architecture, and peaceful nature walks in the serene pine forests of Dhanaulti.",
    highlights: ["Kempty Falls", "Gun Hill", "Mall Road", "Eco Park Dhanaulti", "Surkanda Devi Temple", "Adventure activities"],
    duration: "4 Days 3 Nights",
    price: "₹12,500",
    itinerary: [
      "Day 1: Arrival in Mussoorie, check-in hotel, evening Mall Road and Camel's Back Road walk",
      "Day 2: Mussoorie sightseeing - Kempty Falls, Gun Hill cable car, Company Garden",
      "Day 3: Drive to Dhanaulti, visit Eco Park, Surkanda Devi Temple, overnight in Dhanaulti",
      "Day 4: Check-out, leisure time, departure"
    ],
    includes: ["Accommodation", "Breakfast and dinner", "All transfers", "Cable car tickets", "Sightseeing"],
    excludes: ["Flights/trains", "Lunch", "Adventure activity fees", "Personal expenses", "Tips"]
  },
  {
    id: 4,
    name: "Ooty Coonoor",
    image: ooty,
    rating: 4.8,
    bestTime: "Oct – Mar",
    altitude: "2,240 m",
    region: "Tamil Nadu",
    summary: "Discover the Nilgiri Hills with tea gardens, colonial charm, and the famous toy train. Perfect blend of scenic beauty and pleasant climate year-round.",
    highlights: ["Botanical Garden", "Nilgiri Toy Train", "Doddabetta Peak", "Tea Factory Visit", "Sim's Park Coonoor", "Rose Garden"],
    duration: "5 Days 4 Nights",
    price: "₹16,800",
    itinerary: [
      "Day 1: Arrival in Coimbatore, drive to Ooty, check-in hotel, evening Ooty Lake visit",
      "Day 2: Ooty sightseeing - Botanical Garden, Rose Garden, Doddabetta Peak, Tea Factory",
      "Day 3: Toy Train ride to Coonoor, visit Sim's Park, Lamb's Rock, Dolphin's Nose",
      "Day 4: Day trip to Pykara Lake and Pykara Falls, evening shopping",
      "Day 5: Check-out, drive to Coimbatore for departure"
    ],
    includes: ["Hotel accommodation", "Daily breakfast", "Toy train tickets", "All sightseeing transfers", "Entry fees"],
    excludes: ["Flights to Coimbatore", "Lunch and dinner", "Personal expenses", "Shopping", "Tips"]
  },
  {
    id: 5,
    name: "Coorg Chikmagalur",
    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=400&h=300&fit=crop",
    rating: 4.7,
    bestTime: "Oct – Mar",
    altitude: "915 m",
    region: "Karnataka",
    summary: "Coffee lovers' paradise! Walk through sprawling coffee estates, trek to waterfalls, and enjoy the Western Ghats' misty mountains and aromatic plantations.",
    highlights: ["Coffee Plantation Tour", "Abbey Falls", "Mullayanagiri Peak", "Raja's Seat", "Hebbe Falls", "Bhadra Wildlife"],
    duration: "5 Days 4 Nights",
    price: "₹14,500",
    itinerary: [
      "Day 1: Arrival in Bangalore, drive to Coorg, check-in homestay, coffee plantation walk",
      "Day 2: Coorg sightseeing - Abbey Falls, Raja's Seat, Omkareshwara Temple, Madikeri Fort",
      "Day 3: Drive to Chikmagalur, visit Baba Budangiri, Mullayanagiri trek",
      "Day 4: Coffee estate tour, Hebbe Falls visit, leisure time",
      "Day 5: Check-out, drive to Bangalore for departure"
    ],
    includes: ["Homestay/hotel accommodation", "All meals", "Coffee plantation tour", "All transfers", "Trekking guide"],
    excludes: ["Flights", "Personal expenses", "Jeep safari fees", "Shopping", "Tips"]
  },
  {
    id: 6,
    name: "Munnar Thekkady",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    rating: 4.9,
    bestTime: "Sep – May",
    altitude: "1,600 m",
    region: "Kerala",
    summary: "Kerala's crown jewel with endless tea plantations, wildlife encounters at Periyar, and misty mountain peaks. Perfect for nature lovers and wildlife enthusiasts.",
    highlights: ["Tea Plantations", "Eravikulam National Park", "Periyar Wildlife Sanctuary", "Spice Plantation", "Mattupetty Dam", "Boat Safari"],
    duration: "6 Days 5 Nights",
    price: "₹19,500",
    itinerary: [
      "Day 1: Arrival in Cochin, drive to Munnar, check-in resort, evening tea estate walk",
      "Day 2: Munnar sightseeing - Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake",
      "Day 3: Visit Eravikulam National Park, Top Station viewpoint, photo point",
      "Day 4: Drive to Thekkady, check-in hotel, evening spice plantation tour",
      "Day 5: Periyar Lake boat safari, wildlife spotting, bamboo rafting",
      "Day 6: Check-out, drive to Cochin for departure"
    ],
    includes: ["Resort/hotel accommodation", "Daily breakfast and dinner", "All transfers", "National park entry", "Boat safari", "Plantation tours"],
    excludes: ["Flights to Cochin", "Lunch", "Bamboo rafting fees", "Elephant ride", "Personal expenses"]
  },
  {
    id: 7,
    name: "Mcleodganj Dharamshala",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=300&fit=crop",
    rating: 4.8,
    bestTime: "Mar – Jun",
    altitude: "1,475 m",
    region: "Himachal Pradesh",
    summary: "Experience Tibetan culture in Little Lhasa. Visit monasteries, trek to Triund, explore waterfalls, and immerse yourself in the spiritual atmosphere of the Dalai Lama's residence.",
    highlights: ["Dalai Lama Temple", "Triund Trek", "Bhagsu Waterfall", "Naddi Viewpoint", "Tibetan Museum", "St. John Church"],
    duration: "5 Days 4 Nights",
    price: "₹13,500",
    itinerary: [
      "Day 1: Arrival in Dharamshala, drive to Mcleodganj, check-in hotel",
      "Day 2: Mcleodganj sightseeing - Dalai Lama Temple, Bhagsunath Temple, Bhagsu Falls",
      "Day 3: Triund trek (9km one way), overnight camping at Triund",
      "Day 4: Trek back to Mcleodganj, visit Tibetan Museum, leisure evening",
      "Day 5: Check-out and departure"
    ],
    includes: ["Hotel accommodation", "Camping at Triund", "All meals during trek", "Trekking guide", "All transfers"],
    excludes: ["Flights", "Meals in Mcleodganj", "Trekking equipment", "Personal expenses", "Tips"]
  },
  {
    id: 8,
    name: "Mount Abu",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit=crop",
    rating: 4.6,
    bestTime: "Nov – Mar",
    altitude: "1,220 m",
    region: "Rajasthan",
    summary: "Rajasthan's only hill station offering respite from desert heat. Marvel at intricate Jain temples, enjoy boat rides on Nakki Lake, and witness spectacular sunsets.",
    highlights: ["Dilwara Temples", "Nakki Lake", "Sunset Point", "Guru Shikhar", "Wildlife Sanctuary", "Peace Park"],
    duration: "4 Days 3 Nights",
    price: "₹11,500",
    itinerary: [
      "Day 1: Arrival in Abu Road, drive to Mount Abu, check-in hotel, evening Nakki Lake boating",
      "Day 2: Visit Dilwara Temples, Guru Shikhar peak, Achalgarh Fort, sunset at Sunset Point",
      "Day 3: Wildlife Sanctuary visit, Peace Park, shopping at Nakki Lake market",
      "Day 4: Morning leisure, check-out and departure to Abu Road"
    ],
    includes: ["Hotel accommodation", "Daily breakfast", "All sightseeing transfers", "Boating tickets", "Entry fees"],
    excludes: ["Flights/trains to Abu Road", "Lunch and dinner", "Wildlife safari fees", "Personal expenses", "Tips"]
  },
];

const HillyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockHilly.find(i => String(i.id) === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-2xl font-semibold mt-6">Destination not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Full-Width Image */}
      <div className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-32 left-6 inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Title & Meta Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-12">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">{item.name}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/90">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{item.rating}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>{item.duration}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="w-4 h-4" />
                <span>{item.altitude}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>{item.region}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Overview */}
        <div className="max-w-4xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Overview</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.summary}</p>
        </div>

        {/* Highlights & Details Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Tour Highlights */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {item.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Quick Info</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Duration</span>
                <span className="font-semibold text-sm">{item.duration}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Best Time</span>
                <span className="font-semibold text-sm">{item.bestTime}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-sm">Altitude</span>
                <span className="font-semibold text-sm">{item.altitude}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Rating</span>
                <span className="font-semibold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {item.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Inclusion & Exclusion */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* What's Included */}
          <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {item.includes?.map((include, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{include}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Not Included */}
          <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What's Not Included</h3>
            </div>
            <ul className="space-y-3">
              {item.excludes?.map((exclude, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{exclude}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Itinerary */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="itinerary" className="border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-base sm:text-lg font-semibold text-gray-900">View Complete Day-wise Itinerary ({item.itinerary?.length} Days)</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pb-6">
                  {item.itinerary?.map((day, index) => (
                    <div key={index} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-700 leading-relaxed">{day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Price & Booking CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Price: On Demand</h3>
              <p className="text-white/80 text-lg">Get a quote for personalized pricing</p>
              <p className="text-white/60 text-sm mt-2">Inclusive of accommodation, meals, and guided tours</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                Book Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HillyDetail;

