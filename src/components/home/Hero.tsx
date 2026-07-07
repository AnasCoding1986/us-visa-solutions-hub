import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "/public/profile.jpg";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-primary-foreground space-y-8 relative"
          >
            {/* Subtle background treatment behind headline */}
            <div className="absolute -inset-6 bg-[radial-gradient(circle_at_left,rgba(15,23,42,0.45)_0%,transparent_70%)] opacity-90 pointer-events-none -z-10" />

            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-accent/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">Trusted U.S. Visa & Immigration Support</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Support for Your{" "}
              <span className="text-accent">Immigration Journey</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl opacity-90 max-w-2xl">
              Fast, Reliable, Trusted assistance for Visit Visas, USCIS & NVC Case Handling.
              Expert guidance every step of the way.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover hover:shadow-[0_0_20px_hsla(180,45%,58%,0.45)] hover:scale-[1.03] transition-all duration-200 group"
              >
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
              >
                <a
                  href="https://wa.me/14049888587?text=Hi,%20I%20would%20like%20to%20inquire%20about%20US%20visa%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact via WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Cases Handled</div>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover aspect-[4/5] group bg-primary/40">
              <img
                src={profileImg}
                alt="M Q Zaman - Immigration Consultant"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Vignette / Color-graded overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(15,23,42,0.8)] pointer-events-none" />
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl text-accent">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Licensed & Certified</div>
                  <div className="text-sm text-muted-foreground">Notary Public</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
