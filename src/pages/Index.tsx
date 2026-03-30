import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import GoalsSection from "@/components/GoalsSection";
import CollectionsSection from "@/components/CollectionsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProductsSection />
    <AboutSection />
    <GoalsSection />
    <CollectionsSection />
    <PricingSection />
    <ContactSection />
    <FooterSection />
  </div>
);

export default Index;
