import { Building2, Users, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Registered LLC",
      description: "Officially registered company in the State of Qatar"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Dedicated to exceeding client expectations"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Consistent, professional, and dependable"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Committed to excellence in every service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Al Risala
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Al Risala Trading and Services W.L.L is a registered Limited Liability Company 
            based in the State of Qatar. We provide a comprehensive range of professional 
            services designed to meet the diverse needs of businesses and individuals across 
            Qatar. From specialized cleaning solutions to event planning, trading, and 
            business support services, we are committed to delivering excellence in every 
            project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
