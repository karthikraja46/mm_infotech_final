import React from 'react';
import { ArrowLeft, Brain, Code, Layers, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aiIcon from '@/assets/ai-icon.jpg';

const ApplicationDevelopment = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "End-to-End Solutions",
      description: "Complete software development lifecycle from analysis to maintenance with comprehensive project management."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Scalable Architecture",
      description: "Host-centric or n-tier client-server architecture designed for performance and scalability across different environments."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "High-Speed Connectivity",
      description: "Optimized data connectivity solutions ensuring fast and reliable communication between system components."
    }
  ];

  const technologies = [
    "JAVA-J2EE Development",
    ".NET Framework",
    "Client-Server Architecture",
    "Web Application Development",
    "Mobile Application Development",
    "Database Integration",
    "API Development & Integration",
    "Cloud-Native Applications"
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
                  <Brain className="w-12 h-12 text-primary mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Application Development
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We provide both end-to-end solutions PLC (Analysis to Maintenance) and specific design/development services. Our expertise spans host-centric or n-tier client-server architecture across different environments.
                </p>
                
                <button 
                  onClick={() => navigate('/#contact')}
                  className="btn-hero"
                >
                  Start Your Project
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={aiIcon} 
                  alt="Application Development Services"
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
              <h2 className="text-section-title">Our Development Approach</h2>
              <p className="text-section-subtitle">
                Comprehensive application development services tailored to meet your specific business requirements and technical needs.
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

        {/* Technologies Section */}
        <section className="section-padding bg-secondary">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Technologies & Expertise</h2>
              <p className="text-section-subtitle">
                Cutting-edge technologies and proven methodologies to deliver robust, scalable applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-background">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Development Process</h2>
              <p className="text-section-subtitle">
                Our structured approach ensures quality delivery and client satisfaction at every stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Analysis", desc: "Requirements gathering and technical analysis" },
                { step: "02", title: "Design", desc: "System architecture and UI/UX design" },
                { step: "03", title: "Development", desc: "Coding, testing, and quality assurance" },
                { step: "04", title: "Maintenance", desc: "Ongoing support and enhancement" }
              ].map((phase, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
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
                  Ready to Build Your Next Application?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create a custom application solution that meets your business needs.
                </p>
                <button 
                  onClick={() => navigate('/#contact')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
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

export default ApplicationDevelopment;