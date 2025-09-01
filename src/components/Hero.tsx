import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional IT consulting team working on advanced technology solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Complete End-to-End
            <span className="block text-transparent bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text">
              Business Intelligence Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in{" "}
            <span className="font-semibold text-white">Business Intelligence</span>,{" "}
            <span className="font-semibold text-white">Application Development</span>,{" "}
            <span className="font-semibold text-white">Clinical Data Analysis</span> and{" "}
            <span className="font-semibold text-white">Professional Services</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-strong"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:border-blue-200 font-semibold px-8 py-4 text-lg"
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;