import { motion } from "framer-motion";
import { Zap, Monitor, TrendingUp } from "lucide-react";

const goals = [
  { icon: Zap, title: "Simplify Payment Processes", desc: "We aim to streamline pay-in and payout operations by offering fast, secure, and user-friendly solutions. Our goal is to eliminate complexity and enhance the overall efficiency of financial transactions." },
  { icon: Monitor, title: "Enhance Digital Experiences", desc: "Through our cutting-edge development services, we help businesses create powerful digital platforms that are scalable, intuitive, and aligned with today's user expectations." },
  { icon: TrendingUp, title: "Drive Business Growth", desc: "We focus on delivering solutions that increase transaction volume, boost user engagement, and support operational scalability, helping businesses unlock new revenue streams." },
];

const GoalsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Goals</h2>
        <p className="text-muted-foreground italic">
          "We are driven by a commitment to innovation, excellence, and customer success. Our goals reflect our mission to reshape the digital payments landscape."
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {goals.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-secondary/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-secondary" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-3">{title}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GoalsSection;
