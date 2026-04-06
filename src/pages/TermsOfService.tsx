import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <h1 className="text-4xl font-heading font-bold text-foreground mb-6">Terms of Services</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
        <p>
          <strong className="text-foreground">Welcome to LinkSoft</strong>
        </p>
        <p>
          LinkSoft is dedicated to streamlining payments and driving growth for merchants. By accessing or utilizing our payment gateway and software development services, you agree to comply with the terms and conditions set forth below. These terms establish a legally binding agreement between you (the "Merchant" or "User") and LinkSoft.
        </p>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">User Obligations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our services responsibly, in compliance with all applicable laws and regulations.</li>
            <li>Avoid any activity that could harm LinkSoft's reputation, interfere with the platform's functionality, or jeopardize its security.</li>
            <li>Refrain from attempting to alter, disassemble, decompile, or reverse-engineer LinkSoft's systems without prior written permission.</li>
            <li>Provide accurate, complete, and up-to-date information during account registration and comply with all "Know Your Customer" (KYC) requirements.</li>
            <li>Notify LinkSoft promptly of any unauthorized transactions or suspected security breaches.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Merchant Obligations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate in compliance with all relevant laws and standards.</li>
            <li>Ensure all transactions are genuine and authorized.</li>
            <li>Protect customer data and prevent unauthorized access through proper security measures.</li>
            <li>Notify LinkSoft of any changes in your business operations.</li>
            <li>Retain transaction records for at least five (5) years.</li>
            <li>Handle refunds, disputes, and complaints professionally.</li>
          </ul>
          <p className="font-semibold text-foreground">Prohibited uses include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transactions involving illegal/prohibited items like firearms, drugs, pornography, or gambling.</li>
            <li>Fraudulent or unauthorized transactions.</li>
            <li>Surcharging customers for specific payment methods.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Transactions and Settlements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Settlements will be processed within agreed timelines.</li>
            <li>Any delay will be communicated along with a revised schedule.</li>
            <li>Accurate transaction records must be maintained.</li>
            <li>LinkSoft may withhold/recover funds in case of fraud or regulatory issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Confidentiality and Data Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prevent unauthorized access to sensitive customer data.</li>
            <li>Ensure secure transmission and storage of payment data.</li>
            <li>LinkSoft is not responsible for breaches due to merchant negligence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Prohibited Activities</h2>
          <p>Using LinkSoft for the following is strictly prohibited:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Illegal goods or services.</li>
            <li>Fraud, money laundering, or financing unlawful operations.</li>
            <li>Sale of banned substances, pornography, or gambling.</li>
          </ul>
          <p>Violation may lead to service suspension and legal action.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Disputes and Chargebacks</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>LinkSoft is not liable for resolving merchant-customer disputes.</li>
            <li>Chargebacks will be communicated to the merchant.</li>
            <li>Merchants must provide proof to dispute chargebacks.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>LinkSoft logos, trademarks, and content are protected by law.</li>
            <li>Unauthorized use is prohibited.</li>
            <li>Reproducing or distributing system content is not allowed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Limitation of Liability</h2>
          <p>Services are provided "as is". LinkSoft is not responsible for damages due to system errors, delays, or third-party issues. Users assume all responsibility for using the platform.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Governing Law and Jurisdiction</h2>
          <p>These terms are governed by applicable law. Disputes will be handled exclusively by courts in the appropriate jurisdiction.</p>
        </section>
      </div>

      <div className="border-t border-border mt-16 pt-8 text-center">
        <p className="text-sm text-muted-foreground">© Copyright – LinkSoft 2025. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default TermsOfService;
