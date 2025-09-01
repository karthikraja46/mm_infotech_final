import { Shield, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const expertise = [
    {
      icon: Shield,
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
      icon: TrendingUp,
      title: "Innovation Focus",
      description: "Staying ahead of technology trends to provide cutting-edge solutions for modern challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Company Expertise & Leadership
            </h2>
            <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                MM Infotech Inc. provides cutting edge, complete, end-to-end Business Intelligence solutions. 
                We are a leader in the Business Intelligence services market helping our clients solve 
                high-performance "big-data" problems rooted in massive data volumes with complex information needs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team of Business Intelligence resources has years of experience helping our clients progress 
                through their technical, knowledge management and directional challenges. Our approach to Data 
                Warehousing is unique since we view it as a means to an end, instead of the end itself.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                MM Infotech partners with enterprise organizations to provide onsite and remote resources for 
                short, medium and long-term projects. We are committed to providing our clients with innovation, 
                imagination, and dedication which provides them with solutions tailored to their organization.
              </p>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up">
            {expertise.map((item, index) => (
              <Card 
                key={item.title}
                className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                    <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;