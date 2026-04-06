import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center section-gradient overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-[150px] animate-pulse-glow" />
    </div>

    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary mb-6">
            ✦ Introducing LinkSoft
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-primary-foreground mb-6">
            Secured One-Click Checkout Solution for your{" "}
            <span className="text-accent">Businesses</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-lg mb-8">
            <strong className="text-primary-foreground">LinkSoft</strong> serves as a payment facilitation platform, bridging the gap between businesses and their customers, offering a secured and streamlined One-Click checkout solution while integrating key payment methods.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-secondary-glow gap-2">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <img src={heroImg} alt="LinkSoft payment platform" width={800} height={800} className="w-full max-w-lg animate-float" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
