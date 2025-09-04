import React from 'react';
import { Target, Eye, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "100+", label: "IT Professionals" }
  ];

  const values = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Innovation Excellence",
      description: "We stay at the forefront of technology, continuously exploring and implementing cutting-edge solutions that drive business value."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Client Success Focus",
      description: "Your success is our mission. We work as an extension of your team, ensuring every project delivers measurable business outcomes."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Global Expertise",
      description: "Our diverse team of experts brings global perspectives and local insights to solve complex business challenges."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality through rigorous testing, best practices, and continuous improvement processes."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="text-section-title">About MM Infotech Inc.</h2>
          <p className="text-section-subtitle">
            With decades of combined IT expertise, our leadership team has built MM Infotech Inc. into a trusted partner for digital transformation and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Decades of IT Leadership
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded by industry veterans with over two decades of combined experience in enterprise IT solutions, MM Infotech Inc. has emerged as a trusted partner for organizations seeking to harness the power of artificial intelligence, data science, and modern data engineering.
              </p>
              <p>
                Our leadership team brings deep expertise from Fortune 500 companies, having led digital transformation initiatives across diverse industries including finance, healthcare, retail, and technology. This experience enables us to understand the unique challenges and opportunities that each industry presents.
              </p>
              <p>
                Through our offshore global delivery centers, we combine world-class talent with cost-effective solutions, ensuring our clients receive exceptional value while maintaining the highest standards of quality and security.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={aboutTeamImage} 
                alt="MM Infotech leadership team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-professional">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with transformative technology solutions that drive growth, innovation, and competitive advantage in the digital age.
            </p>
          </div>

          <div className="card-professional">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in AI-driven business solutions, setting new standards for innovation, quality, and client success in the IT consulting industry.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-professional animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;