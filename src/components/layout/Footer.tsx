import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logoImg from "/public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "US Visit Visa", href: "/services/visit-visa" },
    { name: "USCIS Forms", href: "/services/uscis" },
    { name: "NVC Support", href: "/services/nvc" },
    { name: "Passport Services", href: "/services/passport" },
  ];

  const resources = [
    { name: "Blog", href: "/resources" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoImg} alt="US Visa Solutions Logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold">US Visa Solutions</span>
                <span className="text-xs opacity-80">M Q Zaman</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Professional Support for Visit Visas, USCIS & NVC Case Handling—Fast, Reliable, Trusted.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-smooth"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-smooth"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>763 Omaha Dr, Norcross, GA 30093</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:mqzaman763@gmail.com"
                  className="hover:opacity-100 transition-smooth"
                >
                  mqzaman763@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+14049888587"
                  className="hover:opacity-100 transition-smooth"
                >
                  +1 (404) 988-8587
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} US Visa Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link to="/privacy" className="hover:opacity-100 transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
