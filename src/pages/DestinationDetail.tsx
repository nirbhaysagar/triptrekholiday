import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Star, Package, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import destination images
import destination1 from "@/assets/destination-1.jpg";
import kashmir from "@/assets/destination/kashmir.jpg";
import kerala from "@/assets/destination/kerala.jpg";
import rajasthan from "@/assets/destination/rajasthan.jpg";
import himachal from "@/assets/destination/himachal.jpg";
import goa from "@/assets/destination/goa.jpg";

// Import package images for Uttarakhand
import chardham from "@/assets/uttarakhand-usp/chardham.jpg";
import kedarnath from "@/assets/uttarakhand-usp/kedarnath.jpg";
import valleyofflower from "@/assets/uttarakhand-usp/valleyofflower.jpg";
import auli from "@/assets/uttarakhand-usp/auli.jpg";
import rishikesh from "@/assets/uttarakhand-usp/rishikesh.jpg";
import nainital from "@/assets/uttarakhand-usp/nainital.jpg";
import mussorie from "@/assets/mussorie.jpg";
import jimcorbett from "@/assets/jimcorbett.jpg";
import jaisalmer from "@/assets/other/jaisalmer.png";
import udaipur from "@/assets/other/udaipur1.png";
import munnar from "@/assets/pophillpackage/munnar1.png";

// Destination data with about info and related packages
const destinationData = [
  {
    id: 1,
    title: "Chardham Yatra",
    location: "Devbhoomi - Land of Gods",
    image: destination1,
    banner: destination1,
    about: {
      description: "Perform the sacred Chardham Yatra in the Himalayas. Visit Yamunotri, Gangotri, Kedarnath, and Badrinath to cleanse your soul and experience divine spirituality.",
      highlights: [
        "Yamunotri & Gangotri Temples",
        "Kedarnath Trek",
        "Badrinath Temple Darshan",
        "Scenic Himalayas",
        "Ganga Aarti"
      ],
      bestTime: "April to June & September to October",
      idealDuration: "10-12 days",
      popularActivities: ["Pilgrimage", "Trekking", "Camping", "Sightseeing"]
    },
    packages: [
      {
        id: 1,
        name: "Complete Chardham Yatra",
        price: "On Request",
        rating: 5.0,
        duration: "10 Days 9 Nights",
        image: chardham,
        features: ["All Meals", "AC Transport", "Hotel Stay", "Pilgrimage Guide"],
        link: "/usp/1"
      },
      {
        id: 2,
        name: "Do Dham Yatra (Kedarnath & Badrinath)",
        price: "On Request",
        rating: 4.9,
        duration: "6 Days 5 Nights",
        image: kedarnath,
        features: ["Helicopter Option", "VIP Darshan", "Meals", "Stay"],
        link: "/usp/2"
      },
      {
        id: 3,
        name: "Kedarnath Yatra",
        price: "On Request",
        rating: 4.9,
        duration: "4 Days 3 Nights",
        image: kedarnath,
        features: ["Trekking", "Camping", "Darshan", "Meals"],
        link: "/usp/3"
      }
    ]
  },
  {
    id: 2,
    title: "Kashmir",
    location: "Paradise on Earth",
    image: kashmir,
    banner: kashmir,
    about: {
      description: "Kashmir, often called 'Paradise on Earth', is a stunning valley surrounded by snow-capped mountains. Known for its pristine lakes, lush meadows, and rich Mughal heritage, it's a dream destination for nature lovers and honeymooners.",
      highlights: [
        "Dal Lake and houseboat stays",
        "Gulmarg's snow-covered slopes",
        "Pahalgam's scenic beauty",
        "Traditional Kashmiri handicrafts",
        "Delicious Wazwan cuisine"
      ],
      bestTime: "April to October & December to February (for snow)",
      idealDuration: "5-7 days",
      popularActivities: ["Houseboat Stay", "Gondola Ride", "Skiing", "Shikara Ride", "Shopping", "Photography"]
    },
    packages: [
      {
        id: 1,
        name: "Kashmir Paradise Tour",
        price: "₹28,500",
        rating: 4.9,
        duration: "6 Days 5 Nights",
        image: kashmir,
        features: ["Houseboat Stay", "All Meals", "Transport", "Guide"],
        link: "/honeymoon/1"
      },
      {
        id: 2,
        name: "Gulmarg Skiing Package",
        price: "₹35,000",
        rating: 4.8,
        duration: "5 Days 4 Nights",
        image: kashmir,
        features: ["Ski Equipment", "Instructor", "Accommodation", "Meals"],
        link: "/honeymoon/1"
      }
    ]
  },
  {
    id: 3,
    title: "Kerala",
    location: "God's Own Country",
    image: kerala,
    banner: kerala,
    about: {
      description: "Kerala, 'God's Own Country', is a tropical paradise with backwaters, beaches, and lush greenery. Famous for its Ayurvedic treatments, Kathakali performances, and serene backwater cruises, it offers a unique cultural and natural experience.",
      highlights: [
        "Backwaters and houseboat cruises",
        "Ayurvedic wellness retreats",
        "Spice plantations and tea gardens",
        "Traditional Kathakali and Mohiniyattam",
        "Beaches of Kovalam and Varkala"
      ],
      bestTime: "October to March",
      idealDuration: "6-8 days",
      popularActivities: ["Backwater Cruise", "Ayurveda", "Beach Relaxation", "Spice Tour", "Wildlife Safari", "Cultural Shows"]
    },
    packages: [
      {
        id: 1,
        name: "Kerala Backwaters Honeymoon",
        price: "₹32,000",
        rating: 4.9,
        duration: "6 Days 5 Nights",
        image: kerala,
        features: ["Houseboat", "Munnar", "Ayurveda", "Candlelight Dinner"],
        link: "/honeymoon/3"
      },
      {
        id: 2,
        name: "Munnar Thekkady Tour",
        price: "₹19,500",
        rating: 4.9,
        duration: "6 Days 5 Nights",
        image: munnar,
        features: ["Tea Estates", "Periyar Wildlife", "Boat Safari", "Nature"],
        link: "/hilly/6"
      },
      {
        id: 3,
        name: "Kerala Hill Station Special",
        price: "₹24,500",
        rating: 4.8,
        duration: "5 Days 4 Nights",
        image: munnar,
        features: ["Eravikulam Park", "Spice Plantations", "Mattupetty Dam"],
        link: "/hilly/5"
      }
    ]
  },
  {
    id: 4,
    title: "Rajasthan",
    location: "Land of Kings & Palaces",
    image: rajasthan,
    banner: rajasthan,
    about: {
      description: "Rajasthan, the 'Land of Kings', is a vibrant state known for its magnificent palaces, forts, and rich royal heritage. Experience the grandeur of Rajputana architecture, colorful festivals, and warm hospitality in this desert state.",
      highlights: [
        "Majestic forts and palaces",
        "Desert safari in Jaisalmer",
        "Pushkar camel fair",
        "Traditional Rajasthani cuisine",
        "Colorful festivals and folk music"
      ],
      bestTime: "October to March",
      idealDuration: "7-10 days",
      popularActivities: ["Palace Tours", "Desert Safari", "Camel Ride", "Folk Music", "Shopping", "Photography"]
    },
    packages: [
      {
        id: 1,
        name: "Jaisalmer",
        price: "₹7,499",
        rating: 4.9,
        duration: "3 Days 2 Nights",
        image: jaisalmer,
        features: ["Fort Stay", "Camel Safari", "Cultural Program", "Meals"],
        link: "/weekend-trip/3"
      },
      {
        id: 2,
        name: "Udaipur & Mount Abu",
        price: "₹8,999",
        rating: 4.8,
        duration: "4 Days 3 Nights",
        image: udaipur,
        features: ["City Palace", "Lake Pichola", "Mount Abu", "Meals"],
        link: "/weekend-trip/4"
      }
    ]
  },
  {
    id: 5,
    title: "Himachal Pradesh",
    location: "Adventure & Serenity",
    image: himachal,
    banner: himachal,
    about: {
      description: "Himachal Pradesh is a mountain state offering stunning landscapes, adventure sports, and serene hill stations. From the bustling streets of Shimla to the peaceful valleys of Manali, it's perfect for both adventure enthusiasts and nature lovers.",
      highlights: [
        "Scenic hill stations like Shimla and Manali",
        "Adventure sports in Solang Valley",
        "Tibetan monasteries in Dharamshala",
        "Toy train rides",
        "Apple orchards and local handicrafts"
      ],
      bestTime: "March to June & September to November",
      idealDuration: "5-7 days",
      popularActivities: ["Trekking", "Paragliding", "Skiing", "Toy Train", "Temple Visits", "Camping"]
    },
    packages: [
      {
        id: 1,
        name: "Shimla Manali Tour",
        price: "₹25,000",
        rating: 4.8,
        duration: "6 Days 5 Nights",
        image: himachal,
        features: ["Hill Stations", "All Meals", "Transport", "Guide"],
        link: "/hilly/1"
      },
      {
        id: 2,
        name: "Manali Adventure Package",
        price: "₹28,000",
        rating: 4.7,
        duration: "5 Days 4 Nights",
        image: himachal,
        features: ["Adventure Sports", "Accommodation", "Meals", "Equipment"],
        link: "/hilly/1"
      }
    ]
  },
  {
    id: 6,
    title: "Goa",
    location: "Beach Paradise of India",
    image: goa,
    banner: goa,
    about: {
      description: "Goa is India's smallest state but biggest party destination. With its pristine beaches, Portuguese heritage, vibrant nightlife, and delicious seafood, it's the perfect place to unwind and have fun.",
      highlights: [
        "Stunning beaches like Baga, Calangute, and Anjuna",
        "Portuguese architecture in Old Goa",
        "Vibrant nightlife and beach parties",
        "Water sports and adventure activities",
        "Fresh seafood and Goan cuisine"
      ],
      bestTime: "November to March",
      idealDuration: "4-6 days",
      popularActivities: ["Beach Relaxation", "Water Sports", "Nightlife", "Shopping", "Heritage Tours", "Seafood"]
    },
    packages: [
      {
        id: 1,
        name: "Goa Beach Paradise",
        price: "₹18,000",
        rating: 4.6,
        duration: "5 Days 4 Nights",
        image: goa,
        features: ["Beach Resort", "Breakfast", "Water Sports", "Transport"],
        link: "/honeymoon/2"
      },
      {
        id: 2,
        name: "Goa Adventure & Fun",
        price: "₹22,000",
        rating: 4.7,
        duration: "4 Days 3 Nights",
        image: goa,
        features: ["Adventure Sports", "Accommodation", "Meals", "Equipment"],
        link: "/honeymoon/2"
      }
    ]
  },
  {
    id: 7,
    title: "Uttarakhand",
    location: "Devbhoomi - Land of Beauty",
    image: destination1,
    banner: destination1,
    about: {
      description: "Uttarakhand offers a perfect blend of nature, adventure, and spirituality. From the lakes of Nainital to the skiing slopes of Auli and the jungles of Jim Corbett.",
      highlights: [
        "Hill Stations (Mussoorie, Nainital)",
        "Adventure (Rishikesh, Auli)",
        "Wildlife (Jim Corbett)",
        "Scenic Treasure (Valley of Flowers)"
      ],
      bestTime: "All year round (except monsoons)",
      idealDuration: "5-8 days",
      popularActivities: ["Trekking", "Rafting", "Safari", "Camping", "Sightseeing"]
    },
    packages: [
      {
        id: 1,
        name: "Valley of Flowers Trek",
        price: "On Request",
        rating: 4.9,
        duration: "6 Days",
        image: valleyofflower,
        features: ["Trek", "Nature", "Meals", "Stay"],
        link: "/usp/5"
      },
      {
        id: 2,
        name: "Jim Corbett Safari",
        price: "On Request",
        rating: 4.8,
        duration: "3 Days",
        image: jimcorbett,
        features: ["Safari", "Wildlife", "Stay", "Meals"],
        link: "/package/2"
      },
      {
        id: 3,
        name: "Auli Skiing",
        price: "On Request",
        rating: 4.7,
        duration: "4 Days",
        image: auli,
        features: ["Skiing", "Snow", "Adventure"],
        link: "/usp/6"
      },
      {
        id: 4,
        name: "Nainital Lake Tour",
        price: "On Request",
        rating: 4.6,
        duration: "3 Days",
        image: nainital,
        features: ["Lakes", "Boating", "Sightseeing"],
        link: "/usp/4"
      }
    ]
  },
  {
    id: 8,
    title: "India",
    location: "Incredible India",
    image: destination1, // You might want a specific India banner 
    banner: destination1,
    about: {
      description: "Explore the vast and diverse landscapes of India. From the Himalayas in the north to the beaches of the south, India offers an endless array of experiences.",
      highlights: [
        "Diverse Culture",
        "Historical Monuments",
        "Cuisine",
        "Festivals",
        "Natural Beauty"
      ],
      bestTime: "October to March",
      idealDuration: "14-21 days",
      popularActivities: ["Sightseeing", "Cultural Tours", "Food Walks", "Heritage Walks"]
    },
    packages: [
      {
        id: 1,
        name: "Golden Triangle Tour",
        price: "On Request",
        rating: 4.9,
        duration: "6 Days",
        image: rajasthan,
        features: ["Delhi", "Agra", "Jaipur", "Culture"],
        link: "/package/101"
      },
      {
        id: 2,
        name: "Best of North India",
        price: "On Request",
        rating: 4.8,
        duration: "10 Days",
        image: himachal,
        features: ["Himalayas", "Culture", "Adventure"],
        link: "/package/102"
      }
    ]
  }
];

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinationData.find(d => String(d.id) === id);

  if (!destination) {
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={destination.banner}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-32 left-6 z-10 inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                {destination.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                {destination.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              About {destination.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {destination.about.description}
            </p>

            {/* Highlights Grid */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {destination.about.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Best Time to Visit</h4>
                </div>
                <p className="text-gray-600">{destination.about.bestTime}</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Ideal Duration</h4>
                </div>
                <p className="text-gray-600">{destination.about.idealDuration}</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Popular Activities</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {destination.about.popularActivities.slice(0, 3).map((activity, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Packages Section */}
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                  Related Packages
                </h2>
                <p className="text-gray-600">
                  Explore our curated packages for {destination.title}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destination.packages.map((pkg) => (
                <Link key={pkg.id} to={pkg.link}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-gray-900 font-semibold">
                          {pkg.rating} <Star className="w-3 h-3 inline ml-1 fill-yellow-400 text-yellow-400" />
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {pkg.name}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {pkg.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-lg font-bold text-gray-900">Price: On Demand</p>
                          <p className="text-xs text-gray-500">Contact us for pricing</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;

