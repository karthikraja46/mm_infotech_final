import React from 'react';
import { ArrowLeft, Globe, Users, Award, Briefcase, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import globalDeliveryIcon from '@/assets/global-delivery-icon.jpg';

const ProfessionalServices = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Consultants",
      description: "Highly skilled consultants with deep expertise in Business Intelligence and programming language development across multiple platforms."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Delivery",
      description: "24/7 support through our strategically located offshore delivery centers ensuring continuous project progress."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Expertise",
      description: "Extensive experience with leading BI tools and development technologies used by Fortune 500 companies."
    }
  ];

  const services = [
    "Business Objects & Crystal Reports",
    "Siebel Analytics & Oracle BI",
    "Data Warehousing Solutions",
    "JAVA-J2EE Development",
    ".NET Framework Development",
    "SharePoint Solutions",
    "SQL Server Integration",
    "Custom BI Applications"
  ];

  const consultingAreas = [
    {
      title: "Business Intelligence Consulting",
      description: "Strategic BI implementation, dashboard development, and analytics solutions tailored to your business needs.",
      technologies: ["Business Objects", "Crystal Reports", "Tableau", "Power BI"]
    },
    {
      title: "Application Development",
      description: "Custom application development using modern technologies and best practices for scalable solutions.",
      technologies: ["JAVA-J2EE", ".NET", "SharePoint", "Web Applications"]
    },
    {
      title: "Data Solutions",
      description: "Comprehensive data warehousing, ETL processes, and database optimization services.",
      technologies: ["SQL Server", "Oracle", "Data Warehousing", "ETL Tools"]
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics, custom reporting solutions, and data visualization services.",
      technologies: ["Siebel Analytics", "Oracle BI", "Custom Dashboards", "KPI Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary">
          <div className="container-professional">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="w-12 h-12 text-primary mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Professional Services
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We offer highly skilled consultants in Business Intelligence and programming language development with expertise across multiple platforms and technologies.
                </p>
                
                <button 
                  onClick={() => navigate('/#contact')}
                  className="btn-hero"
                >
                  Hire Our Experts
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={globalDeliveryIcon} 
                  alt="Professional Services"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Why Choose Our Consultants?</h2>
              <p className="text-section-subtitle">
                Access world-class expertise and proven methodologies to accelerate your business transformation initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="card-professional text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-secondary">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Our Core Technologies</h2>
              <p className="text-section-subtitle">
                Expertise across industry-leading platforms and development technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Areas Section */}
        <section className="section-padding bg-background">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Consulting Areas</h2>
              <p className="text-section-subtitle">
                Comprehensive consulting services across key technology domains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="card-professional animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <Briefcase className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{area.title}</h3>
                      <p className="text-muted-foreground mb-4">{area.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Delivery Model */}
        <section className="section-padding bg-secondary">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Global Delivery Model</h2>
              <p className="text-section-subtitle">
                Leveraging our global presence to deliver cost-effective, high-quality solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "24/7", label: "Support Coverage", icon: <Globe className="w-8 h-8 text-primary" /> },
                { metric: "50+", label: "IT Professionals", icon: <Users className="w-8 h-8 text-primary" /> },
                { metric: "15+", label: "Years Experience", icon: <Award className="w-8 h-8 text-primary" /> },
                { metric: "100+", label: "Projects Delivered", icon: <Briefcase className="w-8 h-8 text-primary" /> }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.metric}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-professional">
            <div className="text-center">
              <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Expert Consultants for Your Project?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's discuss how our experienced consultants can help accelerate your business intelligence and development initiatives.
                </p>
                <button 
                  onClick={() => navigate('/#contact')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Expert Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalServices;