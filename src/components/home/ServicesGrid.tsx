import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Plane,
  FileText,
  Globe,
  Baby,
  BookOpen,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "US Visit Visa (DS-160)",
    description: "Complete assistance with B1/B2 visa applications and DS-160 form preparation.",
    href: "/services/visit-visa",
    color: "accent",
  },
  {
    icon: FileText,
    title: "USCIS Forms",
    description: "Expert help with I-130, N-400, N-600 and other immigration forms.",
    href: "/services/uscis",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "NVC Support",
    description: "DS-260 processing, document support and status change assistance.",
    href: "/services/nvc",
    color: "gold",
  },
  {
    icon: Baby,
    title: "Birth Registration",
    description: "Birth certificate registration and passport services outside USA.",
    href: "/services/birth-registration",
    color: "accent",
  },
  {
    icon: BookOpen,
    title: "Passport Services",
    description: "Bangladesh, USA, India, Afghanistan and other countries.",
    href: "/services/passport",
    color: "secondary",
  },
  {
    icon: FileCheck,
    title: "Notary Public",
    description: "Affidavit preparation, document attestation and notarization.",
    href: "/services/notary",
    color: "gold",
  },
];

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive immigration and documentation services tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-6 hover:shadow-hover transition-smooth group">
                  <div className="flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className={`h-7 w-7 text-${service.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-smooth">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-accent/10"
                    >
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="gradient-hero">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
