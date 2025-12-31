import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MajorDestinations from "@/components/MajorDestinations";
import HillyAreasPackages from "@/components/HillyAreasPackages";
import UttarakhandUSP from "@/components/UttarakhandUSP";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Destinations = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-24 left-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Explore Our Destinations</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        From the snow-capped peaks of the Himalayas to the spiritual banks of the Ganges,
                        discover the perfect destination for your next adventure.
                    </p>
                </div>
            </section>

            <div className="py-8">
                <MajorDestinations />
            </div>

            <div className="py-8 bg-gray-50">
                <HillyAreasPackages />
            </div>

            <div className="py-8">
                <UttarakhandUSP />
            </div>

            <Footer />
        </div>
    );
};

export default Destinations;
