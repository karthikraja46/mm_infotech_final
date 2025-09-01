import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "Services", href: "#services", type: "scroll" },
    { name: "About", href: "/about", type: "route" },
    { name: "Careers", href: "#careers", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  const handleNavigation = (item: { href: string; type: string }) => {
    if (item.type === "route") {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-primary hover:text-primary-light transition-colors duration-200"
            >
              MM Infotech Inc.
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => handleNavigation({ href: "#contact", type: "scroll" })}
              variant="default"
              className="ml-4"
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => handleNavigation({ href: "#contact", type: "scroll" })}
                  variant="default"
                  className="w-full"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;