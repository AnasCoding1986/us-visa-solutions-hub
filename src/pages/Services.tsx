import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Plane,
  FileText,
  Globe,
  Baby,
  BookOpen,
  FileCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "visit-visa",
    icon: Plane,
    title: "US Visit Visa (DS-160)",
    description: "Complete assistance with B1/B2 visa applications",
    details: "Whether you're visiting family, attending business meetings, or traveling for tourism, we guide you through the entire DS-160 process. We ensure your application is complete, accurate, and optimized for approval.",
    includes: [
      "DS-160 form completion and review",
      "Document preparation guidance",
      "Interview preparation coaching",
      "Application status tracking",
      "Post-approval travel guidance",
    ],
  },
  {
    id: "uscis",
    icon: FileText,
    title: "USCIS Forms & Petitions",
    description: "Expert help with immigration and citizenship applications",
    details: "Navigate complex USCIS forms with confidence. From family-based immigration to citizenship applications, we provide comprehensive support for all your USCIS needs.",
    includes: [
      "Form I-130 (Family Petition)",
      "Form N-400 (Naturalization)",
      "Form N-600 (Certificate of Citizenship)",
      "Document gathering and organization",
      "Application submission assistance",
    ],
  },
  {
    id: "nvc",
    icon: Globe,
    title: "NVC Support & DS-260",
    description: "National Visa Center case handling and support",
    details: "Expert guidance through the NVC stage of your immigration journey. We help with DS-260 processing, document submission, and status changes to ensure smooth progress.",
    includes: [
      "DS-260 form completion",
      "Civil documents preparation",
      "Financial evidence organization",
      "NVC correspondence handling",
      "Case status monitoring",
    ],
  },
  {
    id: "birth-registration",
    icon: Baby,
    title: "Birth Registration & Certificates",
    description: "Registration and documentation services",
    details: "Complete birth registration services for children born outside the USA. We handle all paperwork and ensure proper documentation for future passport and citizenship applications.",
    includes: [
      "Birth certificate applications",
      "Embassy registration",
      "Document authentication",
      "Translation services",
      "Apostille services",
    ],
  },
  {
    id: "passport",
    icon: BookOpen,
    title: "Passport Services",
    description: "Multiple country passport assistance",
    details: "Comprehensive passport services for Bangladesh, USA, India, Afghanistan, Pakistan, and other countries. From new applications to renewals and urgent processing.",
    includes: [
      "New passport applications",
      "Passport renewals",
      "Name change documentation",
      "Lost/damaged passport replacement",
      "Expedited processing assistance",
    ],
  },
  {
    id: "notary",
    icon: FileCheck,
    title: "Notary Public Services",
    description: "Professional notarization and attestation",
    details: "As a licensed Notary Public, we provide reliable document notarization, affidavit preparation, and attestation services for legal, immigration, and personal needs.",
    includes: [
      "Document notarization",
      "Affidavit preparation and notarization",
      "Copy certification",
      "Oath administration",
      "Document attestation",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl opacity-90">
                Comprehensive immigration and documentation solutions tailored to your unique needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                      <div className="grid lg:grid-cols-3 gap-8 p-8">
                        {/* Left Column - Icon and Title */}
                        <div className="lg:col-span-1">
                          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-accent" />
                          </div>
                          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>

                        {/* Middle Column - Details */}
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold mb-3 text-lg">Overview</h4>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {service.details}
                          </p>
                        </div>

                        {/* Right Column - Includes */}
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold mb-3 text-lg">What's Included</h4>
                          <ul className="space-y-2 mb-6">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Button asChild className="w-full gradient-hero">
                            <Link to="/contact">
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation to discuss your immigration needs and get expert guidance
              </p>
              <Button asChild size="lg" className="gradient-hero">
                <Link to="/contact">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
