import { Briefcase, Users, MapPin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobPostings = [
    {
      title: "Clinical Data Manager",
      department: "Data Management",
      location: "Durham, NC",
      type: "Full-time",
      description: "Serves as primary Data Manager contact for assigned studies, including representation on project teams and working with CRO's performing data management tasks.",
      requirements: [
        "Bachelor degree in Pharmaceutical Science or related field",
        "3+ years of clinical data management experience",
        "Familiarity with CFR, GCP, and ICH Guidelines",
        "Proficient with EDC applications and Microsoft Office",
        "Experience with CDMS required, JMP and SAS a plus"
      ]
    },
    {
      title: "Senior Statistical Programmer",
      department: "Statistical Programming",
      location: "Durham, NC", 
      type: "Full-time",
      description: "Provides timely support to study teams on all programming matters according to project strategies. Leads programming support for processing data from clinical studies.",
      requirements: [
        "MS in Statistics, Computer Science, Mathematics, Engineering, or Life Science",
        "3+ years of programming experience in clinical trial data",
        "Strong SAS programming skills in clinical data environment",
        "Understanding of relational database structure",
        "SAS Certification desirable"
      ]
    },
    {
      title: "Senior Project Manager",
      department: "Project Management",
      location: "Durham, NC",
      type: "Full-time", 
      description: "Coordinate with internal teams and third parties for project tasks. Ensure projects are delivered on-time, within scope and budget.",
      requirements: [
        "Bachelor's Degree in appropriate field",
        "12-15+ years of equivalent work experience",
        "Proven working experience in project management",
        "PMP/PRINCE II certification is a plus",
        "4+ years experience with SaaS based products"
      ]
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Professional Growth",
      description: "Work on cutting-edge Business Intelligence and clinical data projects with industry-leading clients."
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a team of experienced professionals with years of expertise in BI, data management, and application development."
    },
    {
      icon: MapPin,
      title: "Flexible Work Models",
      description: "We offer onsite and remote opportunities for short, medium, and long-term projects."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Careers & Job Postings
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MM Infotech partners with enterprise organizations to provide onsite and remote resources 
            for short, medium and long-term projects. Join our team of experts dedicated to innovation, 
            imagination, and delivering tailored solutions.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 slide-up">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                  <benefit.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Job Postings */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Current Openings</h3>
          
          {jobPostings.map((job, index) => (
            <Card 
              key={job.title}
              className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/20 bg-card backdrop-blur-sm slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h4>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Key Requirements:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:min-w-[200px]">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-border hover:bg-accent"
                      onClick={() => window.location.href = 'mailto:Contact@mminfotechinc.com?subject=Job Application - ' + job.title}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact HR
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <Card className="bg-gradient-primary text-primary-foreground p-8">
            <h3 className="text-2xl font-bold mb-4">Don't see a perfect match?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for talented professionals to join our team. 
              Send us your resume and let's discuss future opportunities.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = 'mailto:Contact@mminfotechinc.com?subject=Career Opportunities'}
              className="bg-white text-primary hover:bg-white/90"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Resume
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;