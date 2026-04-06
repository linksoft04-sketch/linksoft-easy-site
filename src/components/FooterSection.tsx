import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="section-gradient py-16">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <span className="text-2xl font-heading font-bold text-primary-foreground">LinkSoft</span>
        <p className="text-sm text-primary-foreground/60 mt-4 max-w-xl">
          LinkSoft Platform aims to create a cutting-edge digital checkout solution tailored for e-commerce merchants and digital platforms. Offering a secure, efficient, and user-friendly payment experience.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mb-8 text-sm">
        <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Services →</Link>
        <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy →</Link>
        <Link to="/refund-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Refund, Return and Cancellation Policy →</Link>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-sm text-primary-foreground/50">© Copyright – LinkSoft 2025. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
