import React from 'react';
import { ArrowLeft, BarChart3, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dataScienceIcon from '@/assets/data-science-icon.jpg';

const BusinessIntelligence = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights that drive strategic business decisions and improve operational efficiency."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Customer Analytics",
      description: "Understand customer behavior patterns, preferences, and trends to enhance customer experience and retention."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Performance Monitoring",
      description: "Real-time monitoring of key performance indicators to track business performance and identify improvement opportunities."
    }
  ];

  const features = [
    "Strategic BI Implementation",
    "Data Visualization & Dashboards",
    "Real-time Analytics",
    "Predictive Analytics",
    "Data Warehousing",
    "ETL Process Development",
    "Self-Service BI Solutions",
    "Mobile BI Applications"
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
                  <BarChart3 className="w-12 h-12 text-primary mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Business Intelligence
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Business Intelligence is an important component in today's business information systems environment. We provide strategic BI solutions that offer insight into customer behavior, product profitability, and operational efficiency.
                </p>
                
                <button 
                  onClick={() => navigate('/#contact')}
                  className="btn-hero"
                >
                  Get Started Today
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={dataScienceIcon} 
                  alt="Business Intelligence Solutions"
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
              <h2 className="text-section-title">Why Choose Our BI Solutions?</h2>
              <p className="text-section-subtitle">
                Our Business Intelligence solutions transform your data into powerful insights that drive growth and competitive advantage.
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

        {/* Features Section */}
        <section className="section-padding bg-secondary">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Our BI Capabilities</h2>
              <p className="text-section-subtitle">
                Comprehensive business intelligence services to meet all your data analytics needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
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
                  Ready to Unlock Your Data's Potential?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Let's discuss how our Business Intelligence solutions can transform your data into actionable insights that drive business growth.
                </p>
                <button 
                  onClick={() => navigate('/#contact')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Your BI Journey
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

export default BusinessIntelligence;