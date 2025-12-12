import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Trip Trek Holiday's services, you agree to be bound by these
                  Terms and Conditions. If you do not agree with any part of these terms, please do
                  not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Booking and Reservations</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  All bookings are subject to availability and confirmation. By making a booking, you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Confirm that all information provided is accurate and complete</li>
                  <li>Agree to pay the total amount as specified in your booking confirmation</li>
                  <li>Understand that prices are subject to change until full payment is received</li>
                  <li>Accept responsibility for all travelers listed in your booking</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>A deposit is required at the time of booking</li>
                  <li>Full payment must be received 30 days before departure</li>
                  <li>Accepted payment methods include credit cards and bank transfers</li>
                  <li>All prices are in USD unless otherwise stated</li>
                  <li>Additional charges may apply for special requests or services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Cancellation fees apply as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>More than 60 days before departure: 10% of total cost</li>
                  <li>30-60 days before departure: 25% of total cost</li>
                  <li>15-29 days before departure: 50% of total cost</li>
                  <li>Less than 15 days before departure: 100% of total cost</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Travel Documents</h2>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for ensuring that you have all necessary travel documents,
                  including valid passports, visas, and health certificates. We are not liable for
                  any issues arising from incomplete or invalid documentation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Travel Insurance</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strongly recommend purchasing comprehensive travel insurance covering medical
                  expenses, trip cancellation, baggage loss, and personal liability. Trip Trek Holiday
                  is not responsible for costs arising from unforeseen circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we take every care to ensure your safety and satisfaction, Trip Trek Holiday
                  acts only as an agent for transportation, accommodation, and other services. We are
                  not liable for any injury, loss, damage, or delay caused by circumstances beyond our
                  control.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Changes to Itinerary</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify itineraries due to weather conditions, safety concerns,
                  or other unforeseen circumstances. We will make every effort to provide comparable
                  alternatives.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-gray-700 mt-3">
                  Email: legal@triptrekholiday.com<br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;

