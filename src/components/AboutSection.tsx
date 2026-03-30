import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Of Experience" },
  { value: "10K+", label: "Total Transactions" },
  { value: "500+", label: "Active Users" },
  { value: "200+", label: "Positive Reviews" },
];

const values = [
  { icon: Eye, title: "Our Vision", desc: "To become a global leader in payment technology, transforming how businesses and users connect, transact, and grow through cutting-edge solutions, continuous innovation, and unparalleled customer service." },
  { icon: Target, title: "Our Mission", desc: "To simplify and enhance financial transactions by delivering secure, innovative, and user-friendly payment solutions, empowering businesses to grow, adapt, and succeed in a dynamic economy." },
  { icon: Heart, title: "Our Values", desc: "We value bold innovation, unwavering trust, and a relentless focus on our customers. Through collaboration, accountability, and a drive for excellence, we aim to deliver meaningful impact and long-term success." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-medium text-secondary uppercase tracking-widest">About Company</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6 text-foreground">
          Empowering Merchants with LinkSoft: A Seamless <span className="text-gradient">One-Click Checkout</span> Integration
        </h2>
        <p className="text-muted-foreground">
          At LinkSoft, we are committed to transforming the way businesses manage and process payments. We specialize in delivering secure, scalable, and user-centric solutions tailored to meet the diverse and evolving needs of today's business landscape.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {values.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass rounded-2xl border border-border p-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Icon size={24} className="text-primary" />
            </div>
            <h4 className="font-heading font-bold text-lg mb-3 text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ value, label }, i) => (
          <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">{value}</div>
            <p className="text-sm text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
