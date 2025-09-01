import { Brain, BarChart3, Database, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const services = [
    { name: "Business Intelligence", icon: BarChart3 },
    { name: "Application Development", icon: Brain },
    { name: "Clinical Data Analysis", icon: Database },
    { name: "Professional Services", icon: Globe }
  ];

  const quickLinks = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "Services", href: "#services", type: "scroll" },
    { name: "About", href: "/about", type: "route" },
    { name: "Careers", href: "#careers", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" }
  ];

  const handleNavigation = (link: { href: string; type: string }) => {
    if (link.type === "route") {
      navigate(link.href);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 md:py-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">MM Infotech Inc.</h3>
            <p className="text-blue-100 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Leading provider of cutting-edge, complete, end-to-end Business Intelligence solutions. 
              We specialize in Business Intelligence, Application Development, Clinical Data Analysis 
              and Professional Services.
            </p>
            <div className="space-y-2 text-blue-100 text-sm md:text-base">
              <p className="break-all sm:break-normal">📧 Contact@mminfotechinc.com</p>
              <p>📞 +1 (919) 555-0100</p>
              <p>📍 Durham, NC 27703, USA</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center text-blue-100 hover:text-white transition-colors duration-200">
                  <service.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © {currentYear} MM Infotech Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-blue-100 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;