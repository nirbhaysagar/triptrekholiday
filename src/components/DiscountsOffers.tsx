import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Globe } from "lucide-react";
import kashmirImg from "@/assets/offer/kashmir.png";
import manaliImg from "@/assets/offer/manali.png";
import chardhamImg from "@/assets/offer/charhdam.png";

const DiscountsOffers = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Discounts & Offers
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                        A curated list of the most popular travel packages based on different destinations.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative px-12 md:px-24">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">

                            {/* Card 1: Kashmir (Blue/Cyan theme) */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300 border-4 border-yellow-400">
                                    <div className="absolute inset-0">
                                        <img src={kashmirImg} alt="Kashmir" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* Card 2: Manali (Orange/Yellow theme) */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300 border-4 border-yellow-400">
                                    <div className="absolute inset-0">
                                        <img src={manaliImg} alt="Manali" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* Card 3: Chardham (Green theme) */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300 border-4 border-yellow-400">
                                    <div className="absolute inset-0">
                                        <img src={chardhamImg} alt="Chardham" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                        <CarouselPrevious className="-left-12 lg:-left-24 h-14 w-14 border-none bg-blue-100/80 hover:bg-blue-200 text-blue-600 shadow-md backdrop-blur-sm" />
                        <CarouselNext className="-right-12 lg:-right-24 h-14 w-14 border-none bg-blue-100/80 hover:bg-blue-200 text-blue-600 shadow-md backdrop-blur-sm" />
                    </Carousel>

                    {/* Dynamic Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === current - 1 ? "w-8 bg-blue-500" : "w-2 bg-gray-300 hover:bg-gray-400"
                                    }`}
                                onClick={() => api?.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountsOffers;
