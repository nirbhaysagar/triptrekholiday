import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Sun, Palmtree, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { weekendTrips } from "@/data/weekendTrips";

const WeekendGateway = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const cardsPerView = 1; // For mobile mostly, but logic handles scroll
    const totalCards = weekendTrips.length;
    // Simple max index logic
    const maxIndex = totalCards - 1;

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = 320; // Approx card width + gap
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    };

    const scrollNext = () => {
        const nextIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(nextIndex);
    };

    const scrollPrev = () => {
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(prevIndex);
    };

    return (
        <section className="py-20 bg-[#FFFBF0] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-orange-200">
                        <Sun className="w-4 h-4 fill-orange-500" />
                        Every Friday - Fixed Departures
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Weekend <span className="text-orange-600 italic">Vibes</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Escape the routine. Curated short trips for your perfect weekend getaway.
                    </p>
                </div>

                {/* Navigation Buttons Row */}
                <div className="flex justify-end mb-6 gap-3 lg:mr-4">
                    <Button
                        onClick={scrollPrev}
                        disabled={currentIndex === 0}
                        size="icon"
                        className="rounded-full bg-orange-100 hover:bg-orange-200 border border-orange-300 text-orange-700"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        onClick={scrollNext}
                        disabled={currentIndex >= maxIndex - 2} // Allow dragging a bit, loose logic
                        size="icon"
                        className="rounded-full bg-orange-100 hover:bg-orange-200 border border-orange-300 text-orange-700"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {weekendTrips.map((trip) => {
                        const isExpanded = expandedId === trip.id;
                        // Increased base width for better visibility
                        const baseWidth = 320;
                        const widthPx = isExpanded ? Math.round(baseWidth * 1.2) : baseWidth;

                        return (
                            <div
                                key={trip.id}
                                className="flex-shrink-0 transition-[width] duration-500 ease-out"
                                style={{ width: `${widthPx}px` }}
                                onMouseEnter={() => setExpandedId(trip.id)}
                                onMouseLeave={() => setExpandedId(null)}
                            >
                                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative h-[520px] flex flex-col">
                                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                                        <img
                                            src={trip.image}
                                            alt={trip.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${trip.status === 'upcoming' ? 'grayscale opacity-90' : ''}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                        {trip.status === 'upcoming' && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                                                <span className="bg-white/95 text-gray-900 px-6 py-2 rounded-full font-bold text-sm tracking-widest shadow-xl border border-gray-200">
                                                    COMING SOON
                                                </span>
                                            </div>
                                        )}

                                        {/* Vibe Badge */}
                                        <div className="absolute top-4 left-4">
                                            <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 flex items-center gap-1 shadow-sm">
                                                <Palmtree className="w-3 h-3" />
                                                WEEKEND
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
                                            <Clock className="w-3 h-3" />
                                            {trip.duration}
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <h3 className="text-2xl font-bold mb-1 leading-tight group-hover:text-orange-200 transition-colors">
                                                {trip.title}
                                            </h3>
                                            <div className="flex items-center text-white/90 text-sm">
                                                <MapPin className="w-3.5 h-3.5 mr-1 text-orange-400" />
                                                {trip.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 flex-1 flex flex-col bg-white">
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Starting from</p>
                                                    <p className="text-xl font-bold text-gray-900">{trip.price}</p>
                                                </div>
                                                {trip.rating > 0 && (
                                                    <div className="flex items-center gap-1 bg-orange-50 px-2.5 py-1 rounded-lg">
                                                        <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                                                        <span className="text-sm font-bold text-gray-700">{trip.rating}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {trip.highlights && trip.highlights.length > 0 && (
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium mb-2 pl-0.5 uppercase tracking-wide">Places Covered</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {trip.highlights.slice(0, 3).map((highlight, idx) => (
                                                            <span key={idx} className="text-[11px] font-medium bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100">
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                        {trip.highlights.length > 3 && (
                                                            <span className="text-[11px] font-medium bg-gray-50 text-gray-400 px-2 py-1 rounded-md">
                                                                +{trip.highlights.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-auto">
                                            {trip.status === 'active' ? (
                                                <button
                                                    onClick={() => navigate(`/weekend-trip/${trip.id}`)}
                                                    className="w-full group/btn relative overflow-hidden bg-gray-50 text-gray-900 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 hover:border-orange-200 flex items-center justify-center gap-2"
                                                >
                                                    <span className="relative z-10">View Details</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                </button>
                                            ) : (
                                                <button disabled className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-medium cursor-not-allowed border border-gray-100">
                                                    Opens in April
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WeekendGateway;
