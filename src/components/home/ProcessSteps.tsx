import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            A simple, transparent 3-step process to handle your immigration needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative">
                <Card className="relative h-full p-8 pt-12 text-center card-hover group flex flex-col justify-between bg-card">
                  {/* Step number badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-sans font-bold text-lg shadow-card">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex flex-col h-full items-center justify-center">
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-serif font-semibold mb-4 group-hover:text-accent transition-colors duration-200">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  {/* SVG Animated Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[40%] -right-[20px] w-[32px] h-4 z-20 overflow-visible pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 32 4" fill="none">
                        <motion.path
                          d="M 0 2 L 32 2"
                          stroke="hsl(var(--accent))"
                          strokeWidth="2"
                          strokeDasharray="32"
                          initial={{ strokeDashoffset: shouldReduceMotion ? 0 : 32 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: shouldReduceMotion ? 0 : (index * 0.15) + 0.35,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;
