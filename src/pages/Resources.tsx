import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, FileText, CheckSquare } from "lucide-react";

const blogPosts = [
  {
    title: "US Visit Visa: Complete Guide for 2024",
    excerpt: "Everything you need to know about applying for a B1/B2 visitor visa, from eligibility to interview preparation.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Visa Guides",
  },
  {
    title: "N-400 Naturalization Checklist",
    excerpt: "Step-by-step checklist for preparing your US citizenship application and what documents you'll need.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Citizenship",
  },
  {
    title: "Understanding the NVC Process",
    excerpt: "A comprehensive guide to the National Visa Center stage of your immigration journey.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Immigration",
  },
  {
    title: "Document Translation Requirements",
    excerpt: "Learn about translation requirements for immigration documents and how to ensure proper certification.",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Documentation",
  },
  {
    title: "Passport Services: What You Need",
    excerpt: "Complete guide to passport applications, renewals, and expedited processing for multiple countries.",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "Passports",
  },
  {
    title: "Common USCIS Form Mistakes to Avoid",
    excerpt: "Top mistakes people make when filing USCIS forms and how to avoid delays in your application.",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Immigration",
  },
];

const Resources = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Guides</h1>
              <p className="text-xl opacity-90">
                Helpful information, tips, and checklists for your immigration journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center">
                    <FileText className="h-20 w-20 text-accent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4 w-fit">
                      Featured Guide
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Complete Guide to US Immigration in 2024
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Everything you need to know about the immigration process, from initial applications
                      to final approvals. This comprehensive guide covers all major visa categories and
                      common scenarios.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <span>March 20, 2024</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        15 min read
                      </span>
                    </div>
                    <Button className="gradient-hero w-fit">
                      Read Full Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 pb-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
                <p className="text-muted-foreground">
                  Stay informed with our latest guides and immigration updates
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-hover transition-smooth group">
                      <div className="aspect-video bg-gradient-to-br from-accent/10 to-gold/10 flex items-center justify-center">
                        <CheckSquare className="h-12 w-12 text-accent group-hover:scale-110 transition-smooth" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-3 w-fit">
                          {post.category}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-smooth">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                          <span>{post.date}</span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
                Need Personalized Guidance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                While our resources are helpful, nothing beats personalized advice for your specific situation.
              </p>
              <Button asChild size="lg" className="gradient-hero">
                <Link to="/contact">
                  Schedule a Consultation
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

export default Resources;
