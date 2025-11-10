import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FileSearch, FileEdit, Send } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Assess",
    description: "We review your case, documents, and eligibility to provide the best guidance.",
  },
  {
    icon: FileEdit,
    number: "02",
    title: "Prepare",
    description: "We help complete forms, gather documents, and prepare your application meticulously.",
  },
  {
    icon: Send,
    number: "03",
    title: "Submit",
    description: "We ensure your application is submitted correctly and track its progress.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent 3-step process to handle your immigration needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="relative h-full p-8 text-center hover:shadow-hover transition-smooth group">
                  {/* Step number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg shadow-card">
                      {step.number}
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-smooth">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-border" />
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
