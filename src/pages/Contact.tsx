
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
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
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or services? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <ContactInfoItem icon={MapPin}>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Export Plaza, Business District<br />
                    New Delhi, 110001, India
                  </p>
                </ContactInfoItem>
                
                <ContactInfoItem icon={Phone}>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    +91 98765 43210<br />
                    +91 12345 67890
                  </p>
                </ContactInfoItem>
                
                <ContactInfoItem icon={Mail}>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    info@globalexports.com<br />
                    sales@globalexports.com
                  </p>
                </ContactInfoItem>
                
                <ContactInfoItem icon={Clock}>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </ContactInfoItem>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Connect With Us</h3>
                 <div className="flex space-x-4">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    <Facebook size={20} />
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    <Instagram size={20} />
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    <Twitter size={20} />
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    <Linkedin size={20} />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-muted/30 dark:bg-[hsl(var(--category-bg))]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office to see our product samples in person
            </p>
          </motion.div>
          
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Google Maps iframe would go here */}
            <div className="w-full h-full flex items-center justify-center bg-muted-foreground/10">
              <p className="text-muted-foreground"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56023.61205646883!2d77.03810094863276!3d28.645470299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031a60466935%3A0x174cb3137b7f661c!2sExport%20Experts%20Global!5e0!3m2!1sen!2sin!4v1747753258937!5m2!1sen!2sin" width="1400" height="400" ></iframe></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for contact info items
const ContactInfoItem = ({ 
  icon: Icon, 
  children 
}: { 
  icon: React.ElementType; 
  children: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="mr-4 text-primary">
        <Icon size={24} />
      </div>
      <div>{children}</div>
    </div>
  );
};

// Helper component for social buttons
const SocialButton = ({ 
  icon: Icon, 
  href 
}: { 
  icon: React.ElementType; 
  href: string;
}) => {
  return (
    <a 
      href={href}
      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <Icon size={18} />
    </a>
  );
};

export default Contact;
