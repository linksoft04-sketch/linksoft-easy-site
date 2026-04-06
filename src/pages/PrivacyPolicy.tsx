import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <h1 className="text-4xl font-heading font-bold text-foreground mb-6">Privacy Policy</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
        <p>
          At <strong className="text-foreground">LinkSoft</strong>, your privacy is our priority. This Privacy Policy outlines how we collect, use, store, and protect your information when you interact with our website and services, including payment gateway and software development services. By using our services, you agree to the practices described in this Privacy Policy.
        </p>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, business details, billing information.</li>
            <li><strong>Transaction Data:</strong> Payment amounts, dates, and payment method used.</li>
            <li><strong>Technical Data:</strong> Browser type, OS, usage data collected automatically.</li>
            <li><strong>Cookies and Tracking:</strong> Used to enhance your experience and track usage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain services</li>
            <li>To process transactions securely</li>
            <li>To communicate with you (support/marketing)</li>
            <li>To improve platform performance</li>
            <li>To comply with legal regulations (AML/KYC)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">3. Data Sharing and Disclosure</h2>
          <p>We share data only as needed:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Third-Party Providers:</strong> Payment processors, fraud detection, etc.</li>
            <li><strong>Regulatory Authorities:</strong> As required by law.</li>
            <li><strong>Business Transfers:</strong> Mergers, acquisitions, or asset transfers.</li>
          </ul>
          <p className="font-semibold text-foreground">We do not sell or rent your personal information for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">4. Data Security</h2>
          <p>We use encryption, access controls, and secure servers. While we strive for full security, no method is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">5. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access & Update:</strong> You can update your info by contacting us.</li>
            <li><strong>Portability:</strong> Request your data in portable format.</li>
            <li><strong>Deletion:</strong> Request deletion (where permitted by law).</li>
            <li><strong>Marketing Opt-Out:</strong> Unsubscribe from marketing emails anytime.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">6. Data Retention</h2>
          <p>We retain your information only as long as necessary for legal compliance and service delivery.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">7. Third-Party Links</h2>
          <p>Our site may include links to external sites. We are not responsible for their privacy practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">8. Updates to This Policy</h2>
          <p>We may update this policy. Updates will be posted on our website with the latest effective date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">9. Contact Us</h2>
          <p>If you have any questions or concerns about your privacy, please contact us directly.</p>
        </section>
      </div>

      <div className="border-t border-border mt-16 pt-8 text-center">
        <p className="text-sm text-muted-foreground">© Copyright – LinkSoft 2025. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
