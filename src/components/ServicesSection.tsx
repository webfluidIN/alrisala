import { 
  Sparkles, 
  Building, 
  Waves, 
  Droplets, 
  FileText, 
  Languages, 
  Handshake,
  PartyPopper,
  Hotel,
  FileStack,
  Smartphone,
  Printer
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Cleaning Services",
      services: [
        { icon: Building, name: "Building & General Cleaning", description: "Comprehensive cleaning solutions for commercial and residential buildings" },
        { icon: Sparkles, name: "Newly Constructed Buildings", description: "Post-construction cleaning and preparation services" },
        { icon: Waves, name: "Road Cleaning", description: "Professional road and pavement cleaning services" },
        { icon: Waves, name: "Sea & Beach Cleaning", description: "Coastal and beach area cleaning and maintenance" },
        { icon: Droplets, name: "Tank Cleaning", description: "Water tank and storage facility cleaning services" },
      ]
    },
    {
      title: "Business Services",
      services: [
        { icon: FileText, name: "Transaction Processing", description: "Efficient processing of business transactions and documents" },
        { icon: Languages, name: "Translation Services", description: "Professional translation for business documents and communications" },
        { icon: Handshake, name: "Commercial Brokerage", description: "Expert commercial brokerage and business facilitation" },
      ]
    },
    {
      title: "Events & Hospitality",
      services: [
        { icon: PartyPopper, name: "Event & Wedding Planning", description: "Full-service event planning and coordination" },
        { icon: Hotel, name: "Hospitality Services", description: "Premium hospitality and guest services" },
      ]
    },
    {
      title: "Trading & Printing",
      services: [
        { icon: FileStack, name: "Paper Products Trading", description: "Trading in quality paper products and supplies" },
        { icon: Smartphone, name: "Mobile Phone Accessories", description: "Trading in mobile phone accessories and gadgets" },
        { icon: Printer, name: "Printing Services", description: "Photocopying, computer printing, and document services" },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business and personal needs
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex}
                    className="hover:shadow-lg transition-all hover:-translate-y-1 border-border"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
