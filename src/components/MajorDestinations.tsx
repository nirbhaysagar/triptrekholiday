import { Link } from "react-router-dom";
import destination1 from "@/assets/destination-1.jpg";
import kashmir from "@/assets/destination/kashmir.jpg";
import kerala from "@/assets/destination/kerala.jpg";
import rajasthan from "@/assets/destination/rajasthan.jpg";
import himachal from "@/assets/destination/himachal.jpg";
import goa from "@/assets/destination/goa.jpg";

const destinations = [
  {
    id: 1,
    image: destination1,
    title: "Chardham",
    location: "Devbhoomi - Land of Gods",
    type: "large"
  },
  {
    id: 5,
    image: himachal,
    title: "Himachal",
    location: "Mountains Calling",
    type: "large"
  },
  {
    id: 3,
    image: kerala,
    title: "Kerala",
    location: "God's Own Country",
    type: "large"
  },
  {
    id: 8,
    image: kashmir,
    title: "India",
    location: "Incredible India",
    type: "small"
  },
  {
    id: 2,
    image: kashmir,
    title: "Kashmir",
    location: "Paradise on Earth",
    type: "small"
  },
  {
    id: 4,
    image: rajasthan,
    title: "Rajasthan",
    location: "Land of Kings",
    type: "small"
  },
  {
    id: 7,
    image: destination1,
    title: "Uttarakhand",
    location: "Devbhoomi",
    type: "small"
  },
  {
    id: 6,
    image: goa,
    title: "Goa",
    location: "Beaches & Party",
    type: "small"
  }
];

const MajorDestinations = () => {
  const renderCard = (destination: any, heightClass: string) => (
    <Link to={`/destination/${destination.id}`} key={destination.id} className="block w-full h-full">
      <div className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full`}>
        {/* Background Image */}
        <div className={`w-full ${heightClass} overflow-hidden relative`}>
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-4 text-white w-full">
          <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-tight text-white">
            {destination.title}
          </h3>
          <p className="text-sm text-white/90 font-medium">
            {destination.location}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <section id="destinations" className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Major Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our top-rated destinations curated just for you
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Row 1: 3 Large Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations.slice(0, 3).map(dest => (
                <div key={dest.id} className="w-full">
                  {renderCard(dest, "h-[450px]")}
                </div>
              ))}
            </div>

            {/* Row 2: 5 Small Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {destinations.slice(3, 8).map(dest => (
                <div key={dest.id} className="w-full">
                  {renderCard(dest, "h-[250px]")}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorDestinations;
