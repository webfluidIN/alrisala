import { Phone, Mail } from "lucide-react";
import logo from "@/assets/rts-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Al Risala Logo" 
              className="w-12 h-12 object-contain bg-white rounded-full p-1"
            />
            <div>
              <p className="font-bold text-lg">Al Risala</p>
              <p className="text-background/70 text-sm">Trading and Services W.L.L</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="tel:+97473373377"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+974 73373377</span>
            </a>
            <a 
              href="mailto:info@alrisalaqa.com"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@alrisalaqa.com</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Copyright */}
        <div className="text-center text-background/60 text-sm">
          <p>© {currentYear} Al Risala Trading and Services W.L.L. All rights reserved.</p>
          <p className="mt-1">State of Qatar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
