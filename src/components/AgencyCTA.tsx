import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgencyCTA = () => {
  return (
    <section className="py-6 sm:py-8 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left - Icon & Text */}
            <div className="flex items-center gap-3 sm:gap-4 text-white text-center md:text-left">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  Are you an agency?
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  Connect with us on TripTrekHolidayDMC community
                </p>
              </div>
            </div>

            {/* Right - CTA Button */}
            <a href="https://triptrekholidaydmc.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-white/90 px-5 sm:px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex-shrink-0 text-sm sm:text-base w-full md:w-auto">
                Join Community
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCTA;
