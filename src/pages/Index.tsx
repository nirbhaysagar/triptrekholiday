
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AgencyCTA from "@/components/AgencyCTA";
import MajorDestinations from "@/components/MajorDestinations";
import WeekendGateway from "@/components/WeekendGateway";
import About from "@/components/About";
import UttarakhandUSP from "@/components/UttarakhandUSP";
import HillyAreasPackages from "@/components/HillyAreasPackages";
import HoneymoonPackages from "@/components/HoneymoonPackages";
import TourPackages from "@/components/TourPackages";
import InternationalTours from "@/components/InternationalTours";
import Testimonials from "@/components/Testimonials";
import TransportServices from "@/components/TransportServices";
import Footer from "@/components/Footer";
import DiscountsOffers from "@/components/DiscountsOffers";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Best Uttarakhand Tour Packages | Chardham Yatra, Hill Stations & Adventure Tours"
        description="Plan your dream Uttarakhand trip with Trip Trek Holiday. Specialized in Chardham Yatra, Dodham Yatra, Kedarnath, Nainital, Rishikesh, Auli & more."
        url="https://triptrekholiday.com/"
      />
      <Navigation />
      <Hero />
      <div className="h-32" /> {/* Spacer for Hero Search Overlap */}
      <DiscountsOffers />
      <MajorDestinations />
      <WeekendGateway />
      <About />
      <TourPackages />
      <UttarakhandUSP />
      <HillyAreasPackages />
      <HoneymoonPackages />
      <InternationalTours />
      <Testimonials />
      <TransportServices />
      <AgencyCTA />
      <Footer />
    </div>
  );
};

export default Index;
