import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Briefcase, Heart, Rocket, Users } from "lucide-react";

const Career = () => {
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
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Join Our Team</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Build the future of travel with us. We are looking for passionate individuals to help people explore the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Culture / Values */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <Rocket className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth & Impact</h3>
                                <p className="text-gray-600">Work on challenges that matter. We believe in continuous learning and growing together.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                    <Heart className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
                                <p className="text-gray-600">We value your time and well-being. Flexible working hours and remote options available.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                    <Users className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Great Culture</h3>
                                <p className="text-gray-600">Join a diverse team of travelers, dreamers, and doers who support each other.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>

                        <div className="space-y-4">
                            {/* Position Card 1 */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Travel Consultant</h3>
                                    <p className="text-gray-500 text-sm">Remote / Full-time</p>
                                </div>
                                <button disabled className="inline-flex items-center justify-center px-6 py-2 bg-gray-100 text-gray-400 rounded-full font-medium cursor-not-allowed border border-gray-200 text-sm">
                                    Coming Soon
                                </button>
                            </div>

                            {/* Position Card 2 */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Social Media Manager</h3>
                                    <p className="text-gray-500 text-sm">Delhi / Hybrid</p>
                                </div>
                                <button disabled className="inline-flex items-center justify-center px-6 py-2 bg-gray-100 text-gray-400 rounded-full font-medium cursor-not-allowed border border-gray-200 text-sm">
                                    Coming Soon
                                </button>
                            </div>

                            {/* Position Card 3 */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Business Development Executive</h3>
                                    <p className="text-gray-500 text-sm">Noida / On-site</p>
                                </div>
                                <button disabled className="inline-flex items-center justify-center px-6 py-2 bg-gray-100 text-gray-400 rounded-full font-medium cursor-not-allowed border border-gray-200 text-sm">
                                    Coming Soon
                                </button>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-4">Don't see a role that fits? Send us your CV anyway!</p>
                            <a href="mailto:careers@triptrekholiday.com" className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-2">
                                <Briefcase className="w-4 h-4" /> careers@triptrekholiday.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Career;
