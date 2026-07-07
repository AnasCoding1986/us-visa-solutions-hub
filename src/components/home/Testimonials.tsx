import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Atlanta, GA",
    rating: 5,
    text: "M Q Zaman made our family's visa process incredibly smooth. His expertise and attention to detail gave us confidence throughout. Highly recommended!",
  },
  {
    name: "Rajesh Patel",
    location: "Alpharetta, GA",
    rating: 5,
    text: "Professional, knowledgeable, and responsive. He handled my N-400 application with precision and I got my citizenship without any issues.",
  },
  {
    name: "Fatima Khan",
    location: "Duluth, GA",
    rating: 5,
    text: "Exceptional service for passport and document attestation. Fast turnaround and fair pricing. I trust him with all my family's documentation needs.",
  },
];

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Trusted by families and professionals across Georgia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden h-full p-6 card-hover flex flex-col justify-between bg-card">
                {/* Large decorative quotation mark watermark */}
                <div className="absolute top-2 right-4 text-8xl font-serif text-accent/10 pointer-events-none select-none leading-none">
                  ”
                </div>

                <div className="relative z-10 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed font-sans italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border mt-auto relative z-10">
                  <div className="font-sans font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-sans">{testimonial.location}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
