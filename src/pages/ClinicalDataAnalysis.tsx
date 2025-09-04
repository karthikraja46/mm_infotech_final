import React from 'react';
import { ArrowLeft, Database, Shield, Award, Activity, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dataEngineeringIcon from '@/assets/data-engineering-icon.jpg';

const ClinicalDataAnalysis = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Clinical Data Management",
      description: "Comprehensive clinical data management services ensuring data integrity, quality, and traceability throughout the study lifecycle."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Regulatory Compliance",
      description: "Full compliance with FDA, ICH-GCP, and international regulatory standards for pharmaceutical and biotechnology studies."
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Statistical Analysis",
      description: "Advanced statistical analysis and reporting for clinical trials, including efficacy and safety assessments."
    }
  ];

  const services = [
    "Clinical Data Management",
    "Regulatory Compliance Support",
    "Data Validation & Quality Control",
    "Statistical Programming (SAS)",
    "Medical Coding Support",
    "Database Design & Validation",
    "CDISC Standards Implementation",
    "Clinical Study Reports"
  ];

  const expertise = [
    { area: "Oncology Studies", description: "Specialized expertise in oncology clinical trials and data analysis" },
    { area: "Ophthalmology Research", description: "Comprehensive support for ophthalmology clinical studies" },
    { area: "Phase I-IV Trials", description: "Complete lifecycle support for all phases of clinical development" },
    { area: "Biostatistics", description: "Advanced biostatistical analysis and interpretation" }
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
                  <Database className="w-12 h-12 text-primary mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Clinical Data Analysis
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Specialized in clinical data management and analysis for pharmaceutical and biotechnology companies. We ensure data quality and regulatory compliance throughout the process.
                </p>
                
                <button 
                  onClick={() => navigate('/#contact')}
                  className="btn-hero"
                >
                  Discuss Your Study
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={dataEngineeringIcon} 
                  alt="Clinical Data Analysis Services"
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
              <h2 className="text-section-title">Clinical Excellence</h2>
              <p className="text-section-subtitle">
                Comprehensive clinical data services that ensure regulatory compliance and accelerate drug development timelines.
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
              <h2 className="text-section-title">Our Clinical Services</h2>
              <p className="text-section-subtitle">
                End-to-end clinical data services supporting pharmaceutical and biotechnology research.
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

        {/* Expertise Section */}
        <section className="section-padding bg-background">
          <div className="container-professional">
            <div className="text-center mb-16">
              <h2 className="text-section-title">Specialized Expertise</h2>
              <p className="text-section-subtitle">
                Deep domain knowledge across multiple therapeutic areas and study phases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="card-professional animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{item.area}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="section-padding bg-secondary">
          <div className="container-professional">
            <div className="text-center">
              <h2 className="text-section-title mb-8">Regulatory Standards</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['FDA CFR Part 11', 'ICH-GCP', 'CDISC Standards', 'ISO 27001'].map((standard, index) => (
                  <div 
                    key={index} 
                    className="card-professional text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground">{standard}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-professional">
            <div className="text-center">
              <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Accelerate Your Clinical Development
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Partner with our experienced clinical data experts to ensure regulatory compliance and accelerate your drug development timeline.
                </p>
                <button 
                  onClick={() => navigate('/#contact')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Clinical Project
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

export default ClinicalDataAnalysis;