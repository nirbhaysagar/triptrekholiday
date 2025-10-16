import { Plane, Train, Bus, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import journeyImage from "@/assets/journey-road.jpg";

const services = [
  {
    icon: Plane,
    title: "Plane",
    description: "We provide the best and schedule according to the destination as per requirement.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Train,
    title: "Train",
    description: "We provide fast train and schedule according to the desired or better destination.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bus,
    title: "Bus",
    description: "We provide the bus with schedule according to the traveling on time as suggested.",
    color: "bg-earth-warm/10 text-earth-warm",
  },
  {
    icon: MapPin,
    title: "Local Transportation",
    description: "We provide local vehicle trips with schedules according to the application or on the destination.",
    color: "bg-ocean-deep/10 text-ocean-deep",
  },
];

const TransportServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-primary font-medium mb-2">Transport</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Effortless Travel
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Travel with ease and comfort. From private transfers to group tours, we ensure
                seamless transportation throughout your journey.
              </p>

              {/* Services Grid */}
              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={index}
                      className="p-5 hover:shadow-medium transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={journeyImage}
                  alt="Scenic mountain road journey"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <Card className="absolute bottom-8 right-8 p-6 bg-accent text-accent-foreground shadow-large max-w-xs">
                <p className="text-3xl font-heading font-bold mb-2">Let's Turn</p>
                <p className="text-lg">Reality!</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportServices;
