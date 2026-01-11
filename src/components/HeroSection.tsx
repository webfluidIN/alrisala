import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from "lucide-react";
import logo from "@/assets/rts-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Al Risala Trading and Services Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Al Risala
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
            Trading and Services
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 shadow-sm">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground font-medium">State of Qatar</span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Your trusted partner for comprehensive business solutions including cleaning services, 
            event planning, trading, and professional support services.
          </p>

          {/* CTA Button */}
          <a href="#contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Contact Us
            </Button>
          </a>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
