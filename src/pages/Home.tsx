import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/pages/CartContext";
import { FaShippingFast, FaMoneyBillAlt, FaHeadset, FaMoneyCheckAlt } from "react-icons/fa";

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedProductId, setAddedProductId] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      title: "Discover Luxury Exports",
      subtitle: "Premium Textiles, Jewellery & Accessories",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      title: "Handcrafted Jewellery",
      subtitle: "Exquisite Designs for Every Occasion",
    },
    {
      image: "/images/text.png",
      title: "Premium Textiles",
      subtitle: "Traditional Craftsmanship Meets Modern Design",
    },
  ];

  const features = [
  {
    id: 1,
    icon: <FaShippingFast className="text-4xl text-blue-600" />,
    title: "Fast Delivery",
    description: "We provide export-import data instantly once payment gets confirmed.",
  },
  {
    id: 2,
    icon: <FaMoneyBillAlt className="text-4xl text-green-600" />,
    title: "Customized Pricing",
    description: "Give fewer amounts and get the best import-export data services.",
  },
  {
    id: 3,
    icon: <FaHeadset className="text-4xl text-orange-500" />,
    title: "Dedicated Sales Support",
    description: "Give individual attention to the clients to understand their needs.",
  },
  {
    id: 4,
    icon: <FaMoneyCheckAlt className="text-4xl text-teal-600" />,
    title: "Money Back Guarantee",
    description: "100% Money Back Guarantee for Customer's Satisfaction.",
  },
];

  const categories = [
    {
      name: "Textiles",
      description: "Exquisite sarees, scarves, and traditional weaves",
      icon: "🧵",
      link: "/products/textiles",
      image: "/images/Textiles.png",
    },
    {
      name: "Jewellery",
      description: "Stunning kundan, oxidized, and meenakari designs",
      icon: "💎",
      link: "/products/jewellery",
      image: "/images/Jewellery.png",
    },
    {
      name: "Accessories",
      description: "Elegant clutches, belts, and stoles",
      icon: "👜",
      link: "/products/accessories",
      image: "/images/Accessories.png",
    },
  ];
  
const offerScetion = [
    {
      id: 1,
      name: "",
      category: "",
      price: 250,
      image: "/images/off-8.png",
    },
    {
      id: 2,
      name: "",
      category: "",
      price: 120,
      image: "/images/off-1.png",
    },
    {
      id: 3,
      name: "",
      category: "",
      price: 85,
      image: "/images/off-2.png",
    },
    {
      id: 4,
      name: "",
      category: "",
      price: 180,
      image: "/images/off-3.png",
    },
    {
      id: 5,
      name: "",
      category: "",
      price: 0,
      image: "/images/off-6.png",
    },
    {
      id: 6,
      name: "",
      category: "",
      price: 85,
      image: "/images/off-4.png",
    },
    {
      id: 7,
      name: "",
      category: "",
      price: 180,
      image: "/images/off-7.png",
    },
    {
      id: 8,
      name: "",
      category: "",
      price: 0,
      image: "/images/off-5.png",
    },
  ];
const featuredProducts = [
    {
      id: 1,
      name: "Banarasi Silk Saree",
      category: "Textiles",
      price: 250,
      image: "/images/Banarasi-saare.png",
    },
    {
      id: 2,
      name: "Bridal Elegance Lehenga",
      category: "Textiles",
      price: 120,
      image: "/images/0.png",
    },
    {
      id: 3,
      name: "Lightweight Party Saree",
      category: "Textiles",
      price: 85,
      image: "/images/Party.png",
    },
    {
      id: 4,
      name: "Pashmina Shawl",
      category: "Textiles",
      price: 180,
      image: "/images/Pashmina-Shawl.png",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Retailer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content:
        "The quality of textiles and the attention to detail in every piece is exceptional. Our customers love the authentic craftsmanship.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Boutique Owner",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content:
        "Working with Luxe Exports has transformed our jewelry collection. Their designs are unique and the service is impeccable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content:
        "The accessories range has added a perfect touch of elegance to our interior projects. Highly recommended!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (
    product: typeof featuredProducts[0],
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation(); // Prevent card click navigation
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedProductId(product.id);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });

    setTimeout(() => setAddedProductId(null), 2000);
  };

  const navigateToDetails = (product: typeof featuredProducts[0]) => {
    const categoryPath = product.category.toLowerCase();
    // Map products to their correct subcategories based on the categoryInfo structure
    const subcategoryMap = {
      'Banarasi Silk Saree': 'sarees',
      'Meenakari Earrings': 'earrings',
      'Embroidered Clutch': 'bags',
      'Pashmina Shawl': 'shawls'
    };
    
    const subcategory = subcategoryMap[product.name as keyof typeof subcategoryMap] || 'sarees';
    navigate(`/products/${categoryPath}/${subcategory}/${product.id}`, {
      state: { product }
    });
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with video background */}
     <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroSlides[currentSlide].image}')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <button
            onClick={prevSlide}
            className="absolute left-4 p-2 bg-white/30 rounded-full hover:bg-white/50"
          >
            <ChevronLeft className="text-white" />
          </button>
          <div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p className="text-xl mb-6">
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <Button className="bg-white text-black hover:text-white font-semibold rounded-full px-6 py-2 dark:hover:bg-[#111622]">
              <Link to="/products">Explore Collection</Link>
            </Button>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-4 p-2 bg-white/30 rounded-full hover:bg-white/50"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>


{/* offer Section*/}

  <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerScetion.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
               
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover  "
                    />
                  </div>
                 
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      
     <section className="py-16 bg-gray-50 dark:bg-[hsl(var(--category-bg))] ">
      
  <div className="container mx-auto px-4">
    
    <h2 className="text-4xl font-bold text-center mb-12">Shop By Category</h2>
    <div className="grid md:grid-cols-3 gap-6">
       
      {categories.map((category, i) => (
                    <Link to={category.link}>

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition dark:bg-[#111622]"
        >
          <Link to={category.link}><img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          /></Link>
          <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
          <p className="text-gray-600 dark:text-white mb-2 text-sm">{category.description}</p>  
          <Button variant="outline" asChild>
            <Link to={category.link}>Explore</Link>
          </Button>
        </motion.div>
      </Link>))}
    </div>
  </div>
</section>


      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full dark:bg-[#111622]"
                  onClick={() => navigateToDetails(product)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500 "
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <h3 className="font-semibold mt-1">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium">${product.price}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(event) => {
                            event.stopPropagation();
                            navigateToDetails(product);
                          }}
                        >
                          Details
                        </Button>
                        <Button
                          size="sm"
                          onClick={(event) => handleAddToCart(product, event)}
                          className={`flex items-center justify-center transition-transform duration-300 ${
                            addedProductId === product.id
                              ? "scale-110"
                              : ""
                          }`}
                          disabled={addedProductId === product.id}
                        >
                          <ShoppingCart size={16} className="mr-1" />
                          {addedProductId === product.id ? "Added" : "Add"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<section className="w-full">
  <div className="relative w-full overflow-hidden">
    <div className="relative w-full h-[80vh]">
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
        <div className="text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg md:text-xl">Explore authentic handcrafted products</p>
        </div>
      </div>

      {/* Video background */}
      <video
        className="w-full h-full object-cover"
        src="/Website_Home_Page.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  </div>
</section>
 

 <section className="py-16 bg-gray-50 dark:bg-[hsl(var(--category-bg))]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Company Policies</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl text-center shadow-md dark:bg-[#111622]"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

 
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50  dark:bg-[hsl(var(--category-bg))]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md dark:bg-[#111622]"
              >
                <div className="flex items-center gap-4 mb-4 ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
