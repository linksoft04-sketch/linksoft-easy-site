import { motion } from "framer-motion";
import { CheckCircle, Wallet, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

const features = [
  "Online Payment", "Platform Support", "Secured Transactions",
  "Responsive Web App", "Divide Group Payments", "Lock Protection",
];

const ProductsSection = () => (
  <section id="products" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Products Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl section-gradient p-8 text-primary-foreground"
        >
          <h3 className="text-2xl font-heading font-bold mb-6">LinkSoft's Products:</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <ArrowDownToLine size={18} className="text-accent" /> Collections (Pay-In Service)
              </div>
              <p className="text-sm text-primary-foreground/70 ml-6">• Mobile wallets</p>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <ArrowUpFromLine size={18} className="text-accent" /> Disbursements (Pay-Out Service)
              </div>
              <p className="text-sm text-primary-foreground/70 ml-6">• Mobile wallets &nbsp; • IBFT</p>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl card-glass border border-border p-8"
        >
          <div className="grid gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl card-glass border border-border p-8"
        >
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">LinkSoft's Solution:</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our Solution offers a comprehensive suite of fintech solutions designed to streamline transactions, enhance payment experiences, and support business growth across industries. From seamless collections to instant payouts, our platform delivers efficiency, security, and scalability, powered by our One-Click checkout solution.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
