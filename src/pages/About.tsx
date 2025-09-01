import { CheckCircle, Users, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const expertise = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "Decades of combined experience in enterprise IT solutions and digital transformation across industries."
    },
    {
      icon: Users,
      title: "Expert Team", 
      description: "Our leadership team brings deep technical knowledge and strategic vision to every project."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Commitment to delivering high-quality solutions with rigorous testing and best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Staying ahead of technology trends to provide cutting-edge solutions for modern challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Company Expertise & Leadership
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Leading provider of cutting-edge, complete, end-to-end Business Intelligence solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <div className="mb-16 slide-up">
              <Card className="shadow-medium border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      MM Infotech Inc. provides cutting edge, complete, end-to-end Business Intelligence solutions. 
                      We are a leader in the Business Intelligence services market helping our clients solve 
                      high-performance "big-data" problems rooted in massive data volumes with complex information needs.
                    </p>
                    <p className="text-lg">
                      Our team of Business Intelligence resources has years of experience helping our clients 
                      progress through their technical, knowledge management and directional challenges. Our approach 
                      to Data Warehousing is unique since we view it as a means to an end, instead of the end itself.
                    </p>
                    <p className="text-lg">
                      MM Infotech partners with enterprise organizations to provide onsite and remote resources 
                      for short, medium and long-term projects. We are committed to providing our clients with 
                      innovation, imagination, and dedication which provides them with solutions tailored to 
                      their organization.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expertise Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Strengths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {expertise.map((item, index) => (
                  <Card 
                    key={item.title}
                    className="group hover:shadow-medium transition-all duration-500 border-border hover:border-primary/20 slide-up bg-card/50 backdrop-blur-sm"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leadership Section */}
            <div className="slide-up">
              <Card className="bg-gradient-primary text-primary-foreground shadow-strong">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-6">Leadership Excellence</h2>
                  <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
                    Our leadership team combines decades of enterprise experience with innovative thinking 
                    to deliver transformational Business Intelligence solutions. We understand that technology 
                    is only as powerful as the strategy behind it, and we are committed to guiding our clients 
                    through every step of their digital transformation journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;