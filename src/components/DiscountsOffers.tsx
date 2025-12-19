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

                            {/* Card 1: Family Travel Tour (Blue/Cyan) */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300">
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe] to-[#00f2fe]"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                                        <div className="absolute top-6 right-6 opacity-20 transform rotate-12">
                                            <Plane className="w-24 h-24" />
                                        </div>

                                        <p className="font-handwriting text-2xl mb-1 transform -rotate-6 ml-4 text-gray-800 font-bold">SAVE</p>
                                        <h3 className="text-4xl font-extrabold mb-0 leading-none drop-shadow-md">
                                            40% <span className="text-2xl font-bold">OFF</span>
                                        </h3>
                                        <p className="text-lg font-bold mb-4 ml-1 drop-shadow-sm">Family Travel Tour</p>

                                        <Button variant="secondary" className="w-fit rounded-full px-6 py-1 text-sm font-bold shadow-lg hover:bg-white/90">
                                            Apply Now
                                        </Button>
                                    </div>

                                    {/* Placeholder Image Overlay (Simulating the people) */}
                                    <div className="absolute bottom-0 right-0 w-1/2 h-4/5 bg-contain bg-no-repeat bg-bottom z-10 opacity-90"
                                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=300&h=300')" }}>
                                        {/* Real app would use a transparent cutout image of a family here */}
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* Card 2: Bali Indonesia (Orange/Yellow) */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300">
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#f9d423] to-[#ff4e50]"></div>

                                    <div className="absolute inset-0 p-6 text-white z-20">
                                        <h3 className="text-4xl font-black mb-0 leading-tight tracking-tight uppercase text-yellow-100/90 mix-blend-overlay">Bali</h3>
                                        <h3 className="text-3xl font-black mb-4 leading-tight tracking-tight uppercase -mt-2">Indonesia</h3>

                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="bg-white/20 backdrop-blur-sm p-1 rounded-full">
                                                <div className="bg-yellow-400 text-black text-xs font-bold w-12 h-12 rounded-full flex flex-col items-center justify-center leading-none">
                                                    <span>04</span>
                                                    <span className="text-[0.6rem]">Days</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider opacity-80">Total Price</p>
                                                <p className="text-3xl font-bold text-white">$299.00</p>
                                            </div>
                                        </div>
                                        <p className="text-xs font-medium opacity-80 mt-1 border-t border-white/30 pt-2 inline-block">Per Person Only</p>
                                    </div>

                                    {/* Placeholder Image Overlay */}
                                    <div className="absolute bottom-0 right-0 w-3/5 h-full bg-cover bg-center opacity-80 mix-blend-overlay"
                                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80')" }}>
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* Card 3: Travel Around the World (Green/Mint) */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300">
                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-bl from-[#43e97b] to-[#38f9d7]"></div>

                                    <div className="absolute inset-0 p-6 flex flex-col text-white z-20">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-black text-3xl uppercase leading-none mb-1 text-teal-800">Travel</h3>
                                                <p className="text-xs font-bold text-teal-700 tracking-[0.2em] mb-1">AROUND THE</p>
                                                <h3 className="font-black text-4xl uppercase leading-none mb-4 text-blue-600">World</h3>
                                            </div>

                                            <div className="bg-blue-600 text-white rounded-full p-3 w-16 h-16 flex flex-col items-center justify-center -mr-2 transform rotate-12 shadow-md">
                                                <span className="text-lg font-bold leading-none">30%</span>
                                                <span className="text-[0.5rem] font-bold uppercase">OFF</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto bg-white/30 backdrop-blur-md rounded-full py-2 px-4 w-fit flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-teal-800" />
                                            <span className="text-sm font-bold text-teal-800 uppercase">View All Tours</span>
                                        </div>
                                    </div>

                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                </div>
                            </CarouselItem>

                            {/* Duplicate Cards for Loop Effect */}
                            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="relative h-64 rounded-[2rem] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                                    <p className="text-gray-400 font-bold">More Offers Coming Soon</p>
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
