
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    
    <footer className="bg-[#111622] text-white pt-12 pb-6 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 ">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Exports</h3>
            <p className="text-sm opacity-80 mb-4">
              Premium handcrafted treasures from India to the world.
            </p>
            <div className="flex space-x-4">
  <a
  href="https://facebook.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors cursor-pointer"
>
  <Facebook size={20} />
</a>

<a
  href="https://instagram.com/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors cursor-pointer"
>
  <Instagram size={20} />
</a>

<a
  href="https://twitter.com/yourhandle"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors cursor-pointer"
>
  <Twitter size={20} />
</a>

<a
  href="https://linkedin.com/in/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors cursor-pointer"
>
  <Linkedin size={20} />
</a>

</div>

          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100">Blog</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
              <li><Link to="/faq" className="opacity-80 hover:opacity-100">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/textiles" className="opacity-80 hover:opacity-100">Textiles</Link></li>
              <li><Link to="/products/jewellery" className="opacity-80 hover:opacity-100">Jewellery</Link></li>
              <li><Link to="/products/accessories" className="opacity-80 hover:opacity-100">Accessories</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to receive updates on new arrivals and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                required 
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary" type="submit">
                <Mail size={16} className="mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-sm text-center opacity-70">
          <p>&copy; {new Date().getFullYear()}  Global Exports. All rights reserved, "Developed by ⁓ DevNad Pvt. Ltd" </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
