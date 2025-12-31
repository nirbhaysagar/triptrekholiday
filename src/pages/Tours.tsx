import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourPackages from "@/components/TourPackages";
import WeekendGateway from "@/components/WeekendGateway";
import DiscountsOffers from "@/components/DiscountsOffers";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tours = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-green-50 to-white">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Curated Tours for You</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Handpicked experiences designed to create unforgettable memories.
                        Choose from weekend getaways, spiritual journeys, and more.
                    </p>
                </div>
            </section>

            <div className="py-8">
                <TourPackages />
            </div>

            <div className="py-8 bg-gray-50">
                <WeekendGateway />
            </div>

            <div className="py-8">
                <DiscountsOffers />
            </div>

            <Footer />
        </div>
    );
};

export default Tours;
