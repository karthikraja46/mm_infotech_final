import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-white">
      <div className="container-professional">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">MM</span>
                </div>
                <div className="font-bold text-xl text-foreground">
                  MM Infotech Inc.
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                We specialize in Business Intelligence, Application Development, Clinical Data Analysis and Professional Services.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/mm-infotech-inc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
                </a>
                <a 
                  href="https://twitter.com/mminfotechinc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:text-white" />
                </a>
                <a 
                  href="mailto:Contact@mminfotechinc.com"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-foreground">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Business Intelligence
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Application Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Clinical Data Analysis
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Professional Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('careers')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold text-lg mb-6 text-foreground">Contact Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-muted-foreground text-sm">
                    MM INFOTECH INC 4819 Emperor Boulevard, Suite 400
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Durham, NC 27703, USA
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">

                <div>
                  <div className="text-muted-foreground text-sm">
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-muted-foreground text-sm">
                    Email: Contact@mminfotechinc.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} MM Infotech Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;