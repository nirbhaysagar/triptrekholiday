import { ArrowUpRight, MousePointerClick, Percent, Award, MapPin } from "lucide-react";
import dodhamImg from "@/assets/uttarakhand/dodham.png";
import manaliImg from "@/assets/manali.jpg";

const DiscountsOffers = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto space-y-8">

                {/* Top Row: Two Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Blue - Chardham/Kedarnath */}
                    <div className="relative h-[300px] sm:h-[350px] rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#4CA1FF] to-[#1877F2] text-white p-8 flex flex-col justify-center group shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                        <div className="relative z-10 max-w-[60%]">
                            <p className="font-handwriting text-2xl mb-1 opacity-90 italic">Spiritual Journey</p>
                            <h3 className="text-3xl sm:text-5xl font-black mb-4 uppercase leading-none text-[#CDF0EA] drop-shadow-md">
                                Chardham <br /> Offer
                            </h3>
                            <div className="inline-block bg-[#D1F2EB] text-[#1877F2] font-bold px-4 py-1.5 rounded-full mb-6">
                                9D/8N Ex. Haridwar
                            </div>

                            <div className="flex flex-col gap-1 border-l-4 border-white/30 pl-4">
                                <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Total Price</span>
                                <span className="text-4xl font-extrabold text-[#FFE162] filter drop-shadow-sm">₹15,999</span>
                                <span className="text-xs opacity-75">Per Person Only</span>
                            </div>
                        </div>

                        {/* Image decoration */}
                        <div className="absolute right-[-20px] bottom-[-20px] w-1/2 h-full z-0">
                            <img src={dodhamImg} alt="Kedarnath" className="w-full h-full object-cover rounded-tl-[3rem] shadow-[-10px_-10px_20px_rgba(0,0,0,0.2)] transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Card 2: Orange - Egypt/Manali style */}
                    <div className="relative h-[300px] sm:h-[350px] rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#FFB300] to-[#FF8F00] text-white p-8 flex flex-col justify-center group shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                        <div className="relative z-10 max-w-[60%]">
                            <p className="font-handwriting text-2xl mb-1 opacity-90 italic">Winter Offer</p>
                            <h3 className="relative z-20 text-3xl sm:text-5xl font-black mb-4 uppercase leading-none !text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                                Manali <br /> Hills
                            </h3>
                            <div className="inline-block bg-white text-[#FF8F00] font-bold px-4 py-1.5 rounded-full mb-6 relative">
                                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] w-8 h-8 flex items-center justify-center rounded-full font-bold animate-pulse">Hot</span>
                                6D/5N Ex. Delhi
                            </div>

                            <div className="flex flex-col gap-1 border-l-4 border-white/30 pl-4">
                                <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Total Price</span>
                                <span className="text-4xl font-extrabold text-white filter drop-shadow-sm">₹5,500</span>
                                <span className="text-xs opacity-75">Per Person Only</span>
                            </div>
                        </div>

                        {/* Image decoration */}
                        <div className="absolute right-[-20px] bottom-[-20px] w-1/2 h-full z-0">
                            <img src={manaliImg} alt="Manali" className="w-full h-full object-cover rounded-tl-[3rem] shadow-[-10px_-10px_20px_rgba(0,0,0,0.2)] transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Features Panel */}
                <div className="bg-[#FFF8F0] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    {/* Background Pattern (Subtle) */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1877F2_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Heading */}
                        <div className="max-w-md">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                To Go Your Desire Place Through our <span className="relative z-10 inline-block px-2">TripTrek <svg className="absolute w-full h-full left-0 top-0 -z-10 text-yellow-300" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,80 Q50,100 100,70" stroke="currentColor" strokeWidth="20" fill="none" opacity="0.6" /></svg></span>.
                            </h2>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#FFBC3B] flex items-center justify-center text-gray-900 shadow-md">
                                    <MousePointerClick className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-xl text-gray-900">One Click Booking</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    You can hassle-free and fast tour & travel package booking by TripTrek.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md">
                                    <Percent className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-xl text-gray-900">Deals & Discounts</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Agencies have special discounts on flights, hotels, & packages.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#F2C94C] flex items-center justify-center text-gray-900 shadow-md">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-xl text-gray-900">Local Guidance</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Travel agencies have experienced professionals guidance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* View All Link */}
                    <div className="absolute top-8 right-8 hidden md:block">
                        <a href="/tours" className="flex items-center gap-1 font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            View All Package <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DiscountsOffers;
