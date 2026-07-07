import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "/public/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border/60" : "bg-background border-b border-transparent"}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logoImg} alt="US Visa Solutions Logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-foreground">US Visa Solutions</span>
              <span className="text-xs text-muted-foreground">M Q Zaman</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 nav-link-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button asChild className="gradient-hero">
              <Link to="/contact">
                <FileCheck className="mr-2 h-4 w-4" />
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full gradient-hero mt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <FileCheck className="mr-2 h-4 w-4" />
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
