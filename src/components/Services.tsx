import { Brain, BarChart3, Database, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Business Intelligence (BI) provides insight into customer behavior, product profitability, campaign performance, operations cost structures, and many other factors that affect business performance.",
      features: ["Business Objects - Crystal - Xcelsius", "Siebel Analytics - Oracle BI", "Cognos", "Data-based Business Decisions"]
    },
    {
      icon: Brain,
      title: "Application Development",
      description: "We provide both end-to-end solutions (Analysis to Maintenance) and specific design/development services with expertise in host-centric or n-tier client-server architecture.",
      features: ["JAVA - J2EE", ".NET Development", "Documentum", "Web Methods"]
    },
    {
      icon: Database,
      title: "Clinical Data Analysis",
      description: "Specialized clinical data management services for biotechnology, pharmaceutical and health-related industries with expertise in regulatory compliance.",
      features: ["Clinical Data Management", "Database Validation", "CRF Design", "Regulatory Compliance"]
    },
    {
      icon: Globe,
      title: "Professional Services",
      description: "Highly skilled consultants in Business Intelligence and programming language development with data warehousing expertise.",
      features: ["Data Warehousing with Informatica", "OWB, Data Integrator", "Expert Consultants", "Flexible Engagement Models"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive IT solutions that drive digital transformation 
            and accelerate business growth across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-medium transition-all duration-500 border-border hover:border-primary/20 slide-up bg-card/50 backdrop-blur-sm ${
                index % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;