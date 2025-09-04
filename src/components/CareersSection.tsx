import React from 'react';
import { Users, Briefcase, MapPin, Mail, CheckCircle, Calendar, DollarSign } from 'lucide-react';

const CareersSection = () => {
  const jobOpenings = [
    {
      title: "Clinical Data Manager",
      type: "Full Time",
      location: "Remote / New York",
      salary: "Competitive",
      description: "Serves as primary Data Manager contact for assigned studies, including representation on project teams and working with CRO's performing data management tasks for assigned study.",
      responsibilities: [
        "Coordinates, leads and performs clinical data management activities for assigned studies in accordance with Client's SOP's and policies",
        "Monitors data clean-up process performed by CRO's from study start-up through data archiving",
        "Provides data for analysis and coordinates activities including medical coding, data validation checks and database snapshots",
        "Prepares and distributes project status reports to project team and management",
        "Functions as DM team leader responsible for ensuring databases are validated and ready for transfer",
        "Creates and maintains project documentation, including Data Management Manual and CRF Completion Guidelines"
      ],
      qualifications: [
        "Bachelor degree in Pharmaceutical Science or a related field",
        "3+ years of clinical data management experience in biotechnology, pharmaceutical or health related industry",
        "Previous oncology and/or ophthalmology experience a plus",
        "Self directed and comfortable working in teams with the ability to work independently within tight deadlines",
        "Familiarity with all applicable regulations including CFR, GCP, and ICH Guidelines",
        "Strong analytical and project management skills",
        "Proficient with appropriate EDC applications and Microsoft Office applications",
        "Software proficiency with CDMS required. Experience with JMP and SAS a plus"
      ]
    },
    {
      title: "Senior Statistical Programmer",
      type: "Full Time", 
      location: "Remote / New York",
      salary: "Competitive",
      description: "A senior statistical programmer provides timely support to the study team on all programming matters according to the project strategies. As an integral part of a study, the incumbent provides project leadership and programming expertise.",
      responsibilities: [
        "Provides timely support to the study team on all programming matters according to project strategies",
        "Provides project leadership and programming expertise as an integral part of study teams", 
        "Develops and validates statistical programming deliverables including datasets, tables, listings, and figures",
        "Creates and maintains programming documentation and specifications",
        "Mentors junior programmers and provides technical guidance",
        "Collaborates with biostatisticians, data managers, and clinical teams"
      ],
      qualifications: [
        "Master's degree in Statistics, Biostatistics, Mathematics, Computer Science, or related field",
        "5+ years of statistical programming experience in pharmaceutical or biotechnology industry",
        "Advanced proficiency in SAS programming",
        "Experience with CDISC standards (SDTM, ADaM)",
        "Strong understanding of clinical trial processes and regulatory requirements",
        "Excellent problem-solving and analytical skills",
        "Strong communication and leadership abilities"
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Flexible Work",
      description: "Remote work options and flexible scheduling to maintain work-life balance"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement programs"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, retirement plans, and wellness programs"
    }
  ];

  return (
    <section id="careers" className="section-padding bg-background">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="text-section-title">Careers & Job Postings</h2>
          <p className="text-section-subtitle">
            Join our team of experts and help shape the future of AI, data science, and clinical research. We offer exciting opportunities for growth and innovation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Why Work With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-professional text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Current Openings
          </h3>
          
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="card-professional animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h4 className="text-2xl font-bold text-foreground">{job.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('mailto:info@mminfotech.com?subject=Application for ' + job.title, '_blank')}
                  className="btn-hero lg:ml-6 mt-4 lg:mt-0"
                >
                  Apply Now
                </button>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {job.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-foreground">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4 text-foreground">
                    Qualifications
                  </h5>
                  <ul className="space-y-2">
                    {job.qualifications.map((qualification, qualIndex) => (
                      <li key={qualIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {qualification}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Don't See a Perfect Match?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('mailto:Contact@mminfotechinc.com?subject=General Application', '_blank')}
                className="btn-hero flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Your Resume
              </button>
              <p className="text-muted-foreground">
                Email: <a href="mailto:Contact@mminfotechinc.com" className="text-primary hover:underline">Contact@mminfotechinc.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;