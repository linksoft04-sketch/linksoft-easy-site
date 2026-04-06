import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <h1 className="text-4xl font-heading font-bold text-foreground mb-6">Refund Policy</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
        <p>
          At <strong className="text-foreground">LinkSoft</strong>, our role is to provide merchants with payment processing and software solutions. Refunds to end-customers (shoppers who buy from a merchant) are the sole responsibility of the merchant. LinkSoft does not issue refunds on behalf of merchants but provides transaction data to support merchants in handling customer disputes.
        </p>
        <p>
          For services purchased directly from LinkSoft (such as SaaS subscriptions or software development):
        </p>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Software Development Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full refund if project is canceled before development begins (minus admin/processing fees).</li>
            <li>Partial refund if some work is completed (based on agreed milestones).</li>
            <li>No refund once 80%+ of project is completed or delivered.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">SaaS and Subscription Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full refund within 7 days of purchase if unsatisfied.</li>
            <li>Refunds after 7 days only for outages, failures, or billing errors attributable to LinkSoft.</li>
            <li>No refunds once a billing cycle has started.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Custom Fintech & Payment Processing Solutions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Case-by-case assessment for custom solutions.</li>
            <li>Processing and setup fees are non-refundable unless a system error is proven.</li>
          </ul>
          <p className="font-semibold text-foreground">Non-Refundable Items:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Completed/delivered projects</li>
            <li>Fully utilized subscription periods</li>
            <li>Third-party licenses or integrations</li>
            <li>Cancellations outside the specified timelines</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Process</h2>
          <p>
            Refund requests must be submitted to <strong className="text-foreground">business@linksoft.com</strong> with invoice/order details and justification. Approved refunds are processed within 7–14 business days.
          </p>
        </section>

        <hr className="border-border" />

        <h1 className="text-4xl font-heading font-bold text-foreground">Return and Cancellation Policy</h1>

        <p>
          At <strong className="text-foreground">LinkSoft</strong>, we provide digital services and software solutions. There are no physical goods to return. Returns apply only in the following cases:
        </p>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Digital Services from LinkSoft</h2>
          <p>If deliverables (such as software, integrations, or reports) were not provided as agreed, clients may request a re-delivery or correction within 14 days of receipt.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Subscription Products</h2>
          <p>Users may request cancellation and refund in line with the Refund Policy above.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Merchant Deliverables</h2>
          <p>For products, services, or digital goods sold directly by merchants through the LinkSoft platform, merchants are solely responsible for their own return and exchange policies. LinkSoft does not handle returns for merchant deliverables but may provide transaction records to assist merchants in verifying purchases.</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground">Exclusions</h2>
          <p>Once digital deliverables are downloaded, accessed, or accepted in writing, they cannot be "returned."</p>
        </section>
      </div>

      <div className="border-t border-border mt-16 pt-8 text-center">
        <p className="text-sm text-muted-foreground">© Copyright – LinkSoft 2025. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default RefundPolicy;
