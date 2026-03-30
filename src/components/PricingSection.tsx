import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Pricing</h2>
        <p className="text-muted-foreground">
          At LinkSoft, we understand that every business is unique, which is why our pricing is flexible and customized to fit your specific needs and operational requirements.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {[
          { name: "Personal", features: ["Basic Advice", "Auto Investing", "No Account Limits", "Cashback Guarantee", "24/7 Customer Support"], highlighted: false },
          { name: "Premium", features: ["Professional Advice", "Auto Investing", "No Account Limits", "Cashback Guarantee", "24/7 Customer Support"], highlighted: true },
        ].map(({ name, features, highlighted }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-8 border ${highlighted ? "section-gradient border-secondary/30 text-primary-foreground" : "bg-card border-border text-foreground"}`}
          >
            <h3 className="text-2xl font-heading font-bold mb-4">{name}</h3>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className={`text-sm flex items-center gap-2 ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${highlighted ? "bg-accent" : "bg-secondary"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
