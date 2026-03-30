import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import mobileImg from "@/assets/mobile-app.png";

const collections = [
  "Educational institutes — schools, colleges, universities for fee collection",
  "e-Commerce platforms offering clothing, groceries, etc.",
  "Marketplaces offering services",
  "Social media platforms offering subscriptions and e-goods",
];

const disbursements = [
  "Payrolls, commissions, vendors and refunds for any entity",
  "Refunds and reimbursements",
  "Digital services — web-designing, freelancing, content development",
];

const CollectionsSection = () => (
  <section className="py-24 section-gradient">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1 flex justify-center">
          <img src={mobileImg} alt="LinkSoft mobile app" loading="lazy" width={512} height={800} className="w-64 md:w-72 animate-float" />
        </motion.div>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">Collections for</h3>
            <div className="space-y-4">
              {collections.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">Disbursements for</h3>
            <div className="space-y-4">
              {disbursements.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-primary-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CollectionsSection;
