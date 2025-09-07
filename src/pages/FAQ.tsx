
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  // FAQ Data
  const faqData = {
    shipping: [
      {
        question: "What shipping options are available?",
        answer: "We offer standard international shipping, express shipping, and bulk freight options. Shipping methods and timelines vary based on destination and order size."
      },
      {
        question: "How long will it take for my order to arrive?",
        answer: "Standard shipping typically takes 7-14 business days, while express shipping takes 3-5 business days. Actual delivery times may vary based on customs clearance and local delivery conditions."
      },
      {
        question: "Do you ship to all countries?",
        answer: "We ship to most countries worldwide. However, there might be restrictions for certain locations due to customs regulations. Please contact us to verify shipping availability to your location."
      },
      {
        question: "Are shipping costs included in the product price?",
        answer: "No, shipping costs are calculated separately at checkout based on weight, dimensions, shipping method, and destination."
      }
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of delivery for unused items in their original packaging. Custom orders and sale items are not eligible for return unless defective."
      },
      {
        question: "How do I initiate a return?",
        answer: "Please contact our customer service at returns@globalexports.com with your order number and reason for return. We'll provide you with a return authorization and instructions."
      },
      {
        question: "Who pays for return shipping?",
        answer: "For defective items, we cover the return shipping costs. For other returns, customers are responsible for return shipping charges unless otherwise agreed upon."
      }
    ],
    orders: [
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your shipment through our website or the carrier's tracking portal."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "Orders can be modified within 24 hours of placement. Please contact customer service immediately if you need to make changes."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, wire transfers, and letters of credit for larger orders. All transactions are secured with SSL encryption."
      },
      {
        question: "Do you offer wholesale pricing?",
        answer: "Yes, we offer special pricing for wholesale customers. Please register for a business account or contact our sales team for more information."
      }
    ],
    care: [
      {
        question: "How should I care for silk textiles?",
        answer: "We recommend dry cleaning for most silk items. If hand washing, use cold water with mild detergent, avoid wringing, and dry flat away from direct sunlight."
      },
      {
        question: "How do I maintain the quality of handcrafted jewellery?",
        answer: "Store jewellery pieces separately to prevent scratches. Clean with a soft cloth, avoid exposure to perfumes or chemicals, and keep away from moisture."
      },
      {
        question: "Can I iron embroidered fabrics?",
        answer: "Iron embroidered fabrics on the reverse side using low heat. Place a thin cloth between the iron and fabric to protect delicate embroidery work."
      }
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 dark:bg-[hsl(var(--category-bg))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6 text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, returns, and more
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="shipping" className="max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="care">Product Care</TabsTrigger>
              </TabsList>
              
              {Object.entries(faqData).map(([category, questions]) => (
                <TabsContent key={category} value={category}>
                  <Accordion type="single" collapsible className="w-full">
                    {questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
          
          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you couldn't find the answer to your question, please don't hesitate to contact our customer support team.
            </p>
            <div className="flex justify-center gap-4">
              <a href="mailto:support@globalexports.com" className="text-primary hover:underline">
                support@globalexports.com
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="tel:+919876543210" className="text-primary hover:underline">
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
