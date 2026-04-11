import AnimatedSection from "@/components/AnimatedSection";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Kaktus Booking",
  description: "Privacy Policy for Kaktus Booking mobile app and web platform.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Shield size={14} />
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-dark">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-4 text-gray-500 text-sm">
              Last updated: November 1, 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">1. General Information</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                This Privacy Policy explains how personal data is collected, used, and protected from users of the
                &quot;Kaktus Booking&quot; platform. The platform is managed by Burncode MMC and applies only to Kaktus
                Booking services.
              </p>
              <p>
                By using the platform, users consent to their personal information being processed according to this
                policy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">2. Collected Information</h2>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-dark">User-provided data:</h3>
              <ul>
                <li>Name and surname</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Profile photo (if added)</li>
                <li>Reservation details (date, service type, selected salon, etc.)</li>
              </ul>
              <h3 className="text-lg font-semibold text-dark">Automatically collected data:</h3>
              <ul>
                <li>IP address and device information</li>
                <li>Pages viewed and platform activities</li>
                <li>Geographic location (only with user permission)</li>
              </ul>
              <h3 className="text-lg font-semibold text-dark">Salon and partner information:</h3>
              <ul>
                <li>Business name, address, tax number, service lists, and payment information</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">3. Data Usage Purposes</h2>
            <div className="prose prose-gray max-w-none">
              <p>Data is used for:</p>
              <ul>
                <li>Creating and managing reservations</li>
                <li>Improving user experience and personalized offerings</li>
                <li>Technical support and customer service</li>
                <li>Measuring service quality and analytics</li>
                <li>Legal compliance</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">4. Data Sharing</h2>
            <div className="prose prose-gray max-w-none">
              <p>Data is shared only with:</p>
              <ul>
                <li>Selected salons/specialists for service delivery</li>
                <li>Technical partners (payment processors, SMS services)</li>
                <li>Government agencies when legally required</li>
              </ul>
              <p>The platform does not sell personal data for advertising purposes.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">5. Data Retention</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Data is kept only as long as necessary. When users delete accounts, personal information is removed
                within 30 days, except records required by law.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">6. Data Security</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Security measures include SSL encryption, secure servers, limited internal access, and monitoring
                systems. However, internet transmission cannot be completely guaranteed secure.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">7. User Rights</h2>
            <div className="prose prose-gray max-w-none">
              <p>Users can:</p>
              <ul>
                <li>Request access to their personal data</li>
                <li>Request corrections or deletion</li>
                <li>Object to processing or withdraw consent</li>
                <li>Delete their account and associated data</li>
              </ul>
              <p>
                Requests should be sent to:{" "}
                <a href="mailto:support@kaktusbooking.az" className="text-primary hover:underline">
                  support@kaktusbooking.az
                </a>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">8. Cookies</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                The platform uses cookies to improve user experience. Users can delete or disable cookies through
                browser settings.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">9. Child Data Protection</h2>
            <div className="prose prose-gray max-w-none">
              <p>Kaktus Booking is not intended for persons under 16 years old.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">10. Changes</h2>
            <div className="prose prose-gray max-w-none">
              <p>This policy may be updated periodically. Changes take effect upon publication.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">11. Terms of Use</h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li>
                  <strong>Service Nature:</strong> The platform acts as an intermediary for booking beauty and wellness
                  services. It is not responsible for salon quality or service delivery.
                </li>
                <li>
                  <strong>Registration:</strong> Users are responsible for the accuracy of provided information.
                </li>
                <li>
                  <strong>Payments:</strong> Salon-specific policies apply. Kaktus acts only as a technical mediator.
                </li>
                <li>
                  <strong>Cancellations:</strong> Follow individual salon policies. The platform provides no
                  compensation.
                </li>
                <li>
                  <strong>Liability Limitations:</strong> The platform is not liable for service quality, pricing errors,
                  or technical failures.
                </li>
                <li>
                  <strong>Intellectual Property:</strong> All content is owned by Burncode MMC and protected by
                  copyright.
                </li>
                <li>
                  <strong>Policy Changes:</strong> The platform reserves the right to modify terms at any time.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-bold text-dark mb-4">12. Contact</h2>
            <div className="prose prose-gray max-w-none">
              <p>
                For privacy questions:{" "}
                <a href="mailto:info@kaktusbooking.app" className="text-primary hover:underline">
                  info@kaktusbooking.app
                </a>{" "}
                |{" "}
                <a
                  href="https://www.kaktusbooking.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.kaktusbooking.app
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
