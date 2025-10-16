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
    title: "Uttarakhand",
    location: "Devbhoomi - Land of Gods",
    type: "horizontal" // Left half top
  },
  {
    id: 2,
    image: kashmir,
    title: "Kashmir",
    location: "Paradise on Earth",
    type: "square" // Left half bottom left
  },
  {
    id: 3,
    image: kerala,
    title: "Kerala",
    location: "God's Own Country",
    type: "square" // Left half bottom right
  },
  {
    id: 4,
    image: rajasthan,
    title: "Rajasthan",
    location: "Land of Kings & Palaces",
    type: "vertical" // Right half left
  },
  {
    id: 5,
    image: himachal,
    title: "Himachal Pradesh",
    location: "Adventure & Serenity",
    type: "square" // Right half top right
  },
  {
    id: 6,
    image: goa,
    title: "Goa",
    location: "Beach Paradise of India",
    type: "square" // Right half bottom right
  },
];

const MajorDestinations = () => {
  const renderCard = (destination: any, className: string = "") => (
    <div className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${className}`}>
      {/* Background Image */}
      <div className="w-full h-full overflow-hidden relative">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Text Content - Bottom Left */}
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl md:text-2xl font-semibold mb-1 tracking-tight">
          {destination.title}
        </h3>
        <p className="text-sm md:text-base text-white/90">
          {destination.location}
        </p>
      </div>
    </div>
  );

  return (
    <section id="destinations" className="py-20 pb-80 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover extraordinary places that will inspire your next adventure.
            </p>
          </div>

          {/* Complex Masonry Layout - Mobile Friendly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            
            {/* Left Half */}
            <div className="grid grid-cols-1 grid-rows-2 gap-4 lg:gap-6 h-auto">
              {/* Top: Horizontal Card */}
              <div className="row-span-1 h-36 lg:h-auto min-h-[120px]">
                {renderCard(destinations[0], "h-full")}
              </div>
              
              {/* Bottom: Two Square Cards */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4 row-span-1">
                <div className="h-28 lg:h-auto min-h-[100px]">
                  {renderCard(destinations[1], "h-full")}
                </div>
                <div className="h-28 lg:h-auto min-h-[100px]">
                  {renderCard(destinations[2], "h-full")}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 h-auto">
              {/* Left: Vertical Card */}
              <div className="col-span-1 h-56 lg:h-auto min-h-[150px]">
                {renderCard(destinations[3], "h-full")}
              </div>
              
              {/* Right: Two Square Cards Stacked */}
              <div className="grid grid-rows-2 gap-3 lg:gap-4 col-span-1">
                <div className="h-28 lg:h-auto min-h-[100px]">
                  {renderCard(destinations[4], "h-full")}
                </div>
                <div className="h-28 lg:h-auto min-h-[100px]">
                  {renderCard(destinations[5], "h-full")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorDestinations;
