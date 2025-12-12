import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PackageDetail from "./pages/PackageDetail";
import DestinationDetail from "./pages/DestinationDetail";
import UspDetail from "./pages/UspDetail";
import HillyDetail from "./pages/HillyDetail";
import HoneymoonDetail from "./pages/HoneymoonDetail";
import InternationalDetail from "./pages/InternationalDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import WeekendTripDetail from "./pages/WeekendTripDetail";
import Career from "./pages/Career";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/weekend-trip/:id" element={<WeekendTripDetail />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/usp/:id" element={<UspDetail />} />
          <Route path="/hilly/:id" element={<HillyDetail />} />
          <Route path="/honeymoon/:id" element={<HoneymoonDetail />} />
          <Route path="/international/:id" element={<InternationalDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/career" element={<Career />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
