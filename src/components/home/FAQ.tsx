import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="relative overflow-hidden bg-card rounded-lg pl-7 pr-6 shadow-card border-0 group hover:bg-accent/[0.03] data-[state=open]:bg-accent/[0.03] transition-colors duration-250"
              >
                {/* Accent bar that slides in on hover and remains on open */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent transition-transform duration-250 ease-out -translate-x-full group-hover:translate-x-0 group-data-[state=open]:translate-x-0" />

                <AccordionTrigger className="text-left font-serif font-medium py-5 hover:no-underline hover:text-accent data-[state=open]:text-accent transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-sans pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-card rounded-xl card-hover">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Still have questions?</h3>
            <p className="text-muted-foreground mb-6 font-sans">
              We're here to help. Contact us for personalized assistance with your immigration needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-hero hover:opacity-95 hover:scale-[1.02] transition-all duration-200">
                <Link to="/contact" className="font-sans">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover:bg-accent/10 border-accent/30 text-accent transition-colors duration-200 group">
                <a href="https://wa.me/14049888587?text=Hi,%20I%20have%20additional%20questions%20about%20my%20case" target="_blank" rel="noopener noreferrer" className="font-sans">
                  <MessageCircle className="mr-2 h-5 w-5 animate-subtle-pulse" />
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
