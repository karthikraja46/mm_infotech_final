import React from 'react';
import { ArrowRight, Brain, BarChart3, Database, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aiIcon from '@/assets/ai-icon.jpg';
import dataScienceIcon from '@/assets/data-science-icon.jpg';
import dataEngineeringIcon from '@/assets/data-engineering-icon.jpg';
import globalDeliveryIcon from '@/assets/global-delivery-icon.jpg';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      image: dataScienceIcon,
      title: "Business Intelligence",
      description: "Business Intelligence is an important component in today's business information systems environment. We provide strategic BI solutions that offer insight into customer behavior, product profitability, and operational efficiency.",
      features: [
        "Data-based Business Decisions",
        "Customer Behavior Analytics",
        "Performance Monitoring",
        "Strategic BI Implementation"
      ],
      path: "/business-intelligence"
    },
    {
      icon: <Brain className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      image: aiIcon,
      title: "Application Development",
      description: "We provide both end-to-end solutions PLC (Analysis to Maintenance) and specific design/development services. Our expertise spans host-centric or n-tier client-server architecture across different environments.",
      features: [
        "End-to-End Solutions",
        "Client-Server Architecture",
        "Software Development Life Cycle",
        "High-Speed Data Connectivity"
      ],
      path: "/application-development"
    },
    {
      icon: <Database className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      image: dataEngineeringIcon,
      title: "Clinical Data Analysis",
      description: "Specialized in clinical data management and analysis for pharmaceutical and biotechnology companies. We ensure data quality and regulatory compliance throughout the process.",
      features: [
        "Clinical Data Management",
        "Regulatory Compliance",
        "Data Validation & Quality",
        "Statistical Analysis"
      ],
      path: "/clinical-data-analysis"
    },
    {
      icon: <Globe className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      image: globalDeliveryIcon,
      title: "Professional Services",
      description: "We offer highly skilled consultants in Business Intelligence and programming language development with expertise across multiple platforms and technologies.",
      features: [
        "Business Objects & Crystal",
        "Siebel Analytics & Oracle BI",
        "Data Warehousing Solutions",
        "JAVA-J2EE & .NET Development"
      ],
      path: "/professional-services"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Our Core Services</h2>
          <p className="text-section-subtitle">
            We deliver comprehensive IT solutions that drive innovation, optimize operations, and accelerate digital transformation for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => navigate(service.path)}
                className="w-full bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise in Business Intelligence, Application Development, and Clinical Data Analysis can accelerate your digital transformation journey.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;