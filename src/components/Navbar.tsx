import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-2xl font-heading font-bold text-gradient cursor-pointer" onClick={() => scrollTo("hero")}>
          LinkSoft
        </span>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "Products", "About", "Pricing", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 btn-secondary-glow">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {["Home", "Products", "About", "Pricing", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
