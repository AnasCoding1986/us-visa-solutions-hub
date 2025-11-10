import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of visa services do you offer?",
    answer: "We provide comprehensive assistance for US Visit Visas (B1/B2), USCIS forms (I-130, N-400, N-600), NVC support (DS-260), and various passport services. We also handle birth registrations and notary services.",
  },
  {
    question: "How long does the visa application process take?",
    answer: "Processing times vary by visa type and individual circumstances. Visit visas typically take 3-6 weeks after submission, while USCIS forms can take several months. We'll provide specific timelines during your consultation.",
  },
  {
    question: "What documents do I need to bring?",
    answer: "Required documents vary by service. Generally, you'll need valid identification, previous immigration documents, financial records, and supporting evidence for your application. We'll provide a detailed checklist after your initial consultation.",
  },
  {
    question: "Do you offer services in multiple languages?",
    answer: "Yes! We provide services in English, Bengali, Hindi, Urdu, and several other languages to ensure clear communication throughout your immigration journey.",
  },
  {
    question: "How much do your services cost?",
    answer: "Our fees vary depending on the complexity of your case and the services required. We offer transparent, competitive pricing and will provide a detailed quote during your consultation. Contact us for specific pricing information.",
  },
  {
    question: "Can you help if my application was previously denied?",
    answer: "Yes, we have experience handling denied applications. We'll review your case, identify the reasons for denial, and develop a strategy to strengthen your reapplication or appeal.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-card border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-card rounded-xl shadow-card">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Contact us for personalized assistance with your immigration needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-hero">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
