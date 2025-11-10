import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Globe, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Services in English, Bengali, Hindi, Urdu, and more",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized attention to every case and client",
    },
    {
      icon: Award,
      title: "Licensed Professional",
      description: "Certified Notary Public and immigration specialist",
    },
    {
      icon: Clock,
      title: "10+ Years Experience",
      description: "Proven track record of successful cases",
    },
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About M Q Zaman</h1>
              <p className="text-xl opacity-90">
                Your trusted partner in US immigration and documentation services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">MQZ</span>
                    </div>
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Dedicated to Your Immigration Success
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 10 years of experience in US immigration services, M Q Zaman has helped
                    hundreds of families and individuals navigate the complex world of visas, citizenship,
                    and immigration documentation.
                  </p>
                  <p>
                    Based in Norcross, Georgia, our practice serves clients throughout the Atlanta
                    metropolitan area and beyond. We understand that immigration journeys are deeply
                    personal, and we treat each case with the care, attention, and expertise it deserves.
                  </p>
                  <p>
                    As a licensed Notary Public and multilingual professional, we bridge cultural and
                    linguistic barriers to provide clear, reliable guidance. Whether you're applying for
                    your first US visa, seeking citizenship, or need document services, we're here to
                    make the process as smooth and stress-free as possible.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience, dedication, and results you can trust
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full p-6 text-center hover:shadow-hover transition-smooth">
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
                <p className="text-lg text-muted-foreground">
                  Conveniently located in Norcross, Georgia
                </p>
              </div>

              <Card className="overflow-hidden shadow-card">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-muted-foreground mb-4">Interactive Map Placeholder</p>
                    <p className="text-sm text-muted-foreground">
                      763 Omaha Dr, Norcross, GA 30093
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-muted-foreground">
                        763 Omaha Dr<br />
                        Norcross, GA 30093
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Contact</h4>
                      <p className="text-muted-foreground">
                        Email: mqzaman763@gmail.com<br />
                        Languages: English, Bengali, Hindi, Urdu
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
