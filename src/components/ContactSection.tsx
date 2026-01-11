import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+974 73373377",
      href: "tel:+97473373377",
      description: "Call us for inquiries"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@alrisalaqa.com",
      href: "mailto:info@alrisalaqa.com",
      description: "Send us an email"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "State of Qatar",
      href: null,
      description: "Based in Qatar"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us today. We're here to help with all your service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.label}
                </h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-primary hover:text-primary/80 font-medium transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-primary font-medium mb-2">{info.value}</p>
                )}
                <p className="text-muted-foreground text-sm">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
