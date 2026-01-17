import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy"
        description="Read our Privacy Policy to understand how we collect, use, and protect your personal information at Trip Trek Holiday."
      />
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Trip Trek Holiday, we are committed to protecting your privacy and ensuring the
                  security of your personal information. This Privacy Policy outlines how we collect,
                  use, and safeguard your data when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Name, email address, and contact details</li>
                  <li>Travel preferences and booking information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Feedback and survey responses</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use the collected information for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Processing and managing your bookings</li>
                  <li>Providing customer support and responding to inquiries</li>
                  <li>Sending booking confirmations and travel updates</li>
                  <li>Improving our services and personalizing your experience</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell your personal information. We may share your data with trusted
                  service providers who assist us in operating our business, such as payment
                  processors and accommodation providers, only to the extent necessary to provide
                  our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us at:
                </p>
                <p className="text-gray-700 mt-3">
                  Email: privacy@triptrekholiday.com<br />
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

export default PrivacyPolicy;

