import { useParams, useNavigate } from "react-router-dom";
import { Clock, Users, ArrowLeft, Star, MapPin, CheckCircle2, XCircle, Phone } from "lucide-react";
import { weekendTrips } from "@/data/weekendTrips";
import Navigation from "@/components/Navigation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const WeekendTripDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const trip = weekendTrips.find(t => String(t.id) === id);

    if (!trip) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <div className="container mx-auto px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Trip Not Found</h1>
                    <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 hover:underline">Go Back</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
                <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-32 left-6 z-10 inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
                    <div className="container mx-auto">
                        <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            <Clock className="w-4 h-4" /> {trip.duration}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                            {trip.title}
                        </h1>
                        <div className="flex items-center text-white/90 text-lg">
                            <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                            {trip.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 -mt-10 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Overview Card */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {trip.overview}
                            </p>

                            {trip.highlights && (
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {trip.highlights.map((highlight, idx) => (
                                        <span key={idx} className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium border border-orange-100">
                                            ✨ {highlight}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Itinerary */}
                        {trip.itinerary && trip.itinerary.length > 0 && (
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {trip.itinerary.map((day, idx) => (
                                        <AccordionItem key={idx} value={`item-${idx}`}>
                                            <AccordionTrigger className="text-left font-medium text-gray-900 data-[state=open]:text-orange-600">
                                                {day.split(':')[0]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-600">
                                                {day.split(':')[1] || day}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 sticky top-32 shadow-lg border border-gray-100">
                            <div className="mb-6">
                                <span className="text-gray-500 text-sm">Starting from</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-gray-900">{trip.price}</span>
                                    <span className="text-gray-500 text-sm">/person</span>
                                </div>
                            </div>

                            <button
                                onClick={() => window.open('https://wa.me/918178515133', '_blank')}
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg mb-4 transition-colors flex items-center justify-center gap-2 shadow-green-200 shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                Book via WhatsApp
                            </button>

                            <div className="space-y-6 mt-8">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        What's Included
                                    </h3>
                                    <ul className="space-y-2">
                                        {trip.includes && trip.includes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        Exclusions
                                    </h3>
                                    <ul className="space-y-2">
                                        {trip.excludes && trip.excludes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WeekendTripDetail;
