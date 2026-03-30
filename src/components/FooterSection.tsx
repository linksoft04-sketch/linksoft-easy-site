const FooterSection = () => (
  <footer className="section-gradient py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <span className="text-2xl font-heading font-bold text-primary-foreground">LinkSoft</span>
          <p className="text-sm text-primary-foreground/60 mt-4 max-w-xs">
            LinkSoft Platform aims to create a cutting-edge digital checkout solution tailored for e-commerce merchants and digital platforms. Offering a secure, efficient, and user-friendly payment experience.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["About", "Services", "Pricing", "Contact", "FAQ"].map((l) => (
              <li key={l}><button className="hover:text-primary-foreground transition-colors">{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer", "Support"].map((l) => (
              <li key={l}><button className="hover:text-primary-foreground transition-colors">{l}</button></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-sm text-primary-foreground/50">© Copyright – LinkSoft 2025. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
