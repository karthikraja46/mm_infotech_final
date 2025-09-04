import React from 'react';
import { Code, Cloud, Shield, Zap, Users, Award } from 'lucide-react';

const ExpertiseSection = () => {
  const expertiseCategories = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Advanced Programming",
      description: "Mastery in Python, R, Java, JavaScript, and cutting-edge frameworks for scalable solutions.",
      technologies: ["Python", "R", "Java", "JavaScript", "React", "Node.js"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Platforms", 
      description: "Certified expertise across major cloud platforms for enterprise-grade deployments.",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-level security protocols and compliance with international standards.",
      technologies: ["GDPR", "HIPAA", "SOC 2", "ISO 27001", "Data Encryption", "Access Control"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "High-performance computing and optimization for large-scale data processing.",
      technologies: ["Apache Spark", "Hadoop", "Kafka", "Redis", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Leadership",
      description: "Experienced in leading cross-functional teams and managing complex projects.",
      technologies: ["Agile", "Scrum", "DevOps", "Project Management", "Team Building", "Mentoring"]
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Industry Recognition",
      description: "Proven track record with industry certifications and successful project deliveries.",
      technologies: ["AWS Certified", "Google Cloud Professional", "Microsoft Azure", "Databricks", "Snowflake", "Tableau"]
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare & Life Sciences", 
    "Retail & E-commerce",
    "Manufacturing",
    "Technology",
    "Government & Public Sector"
  ];

  const certifications = [
    { count: "15+", label: "AWS Certifications" },
    { count: "10+", label: "Azure Certifications" },
    { count: "8+", label: "Google Cloud Certs" },
    { count: "5+", label: "Vendor Partnerships" }
  ];

  return (
    <section id="expertise" className="section-padding gradient-subtle">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Our Technical Expertise</h2>
          <p className="text-section-subtitle">
            Our team combines decades of hands-on experience with the latest technologies to deliver world-class solutions across diverse industries and use cases.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseCategories.map((category, index) => (
            <div
              key={index}
              className="card-professional animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Experience */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 border border-border shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Industry Experience
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            We've successfully delivered solutions across multiple industries, understanding the unique challenges and requirements of each sector.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Certified Partners & Expertise
          </h3>
          <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our team holds industry-leading certifications and maintains strategic partnerships with major technology providers to ensure we deliver cutting-edge solutions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {cert.count}
                </div>
                <div className="text-muted-foreground font-medium">
                  {cert.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;