import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Products from './Products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();

  const categoryInfo = {
    textiles: {
      title: 'Textiles',
      description: 'Discover our exquisite collection...',
      image: '/images/txtttt.png',
      subcategories: [
        { 
          name: 'Sarees', 
          image: '/images/Saree.png',
          price: 250,
          description: 'Beautiful handcrafted sarees from skilled artisans'
        },
        { 
          name: 'Scarves', 
          image: '/images/Scarves.png',
          price: 150,
          description: 'Elegant scarves perfect for any occasion'
        },
        { 
          name: 'Fabrics', 
          image: '/images/Fabrics.png',
          price: 200,
          description: 'Premium quality fabrics for your needs'
        },
        { 
          name: 'Dupattas', 
          image: '/images/Dupattas.png',
          price: 180,
          description: 'Stylish dupattas to complement your outfit'
        },
        { 
          name: 'Shawls', 
          image: '/images/Shawls.png',
          price: 220,
          description: 'Warm and beautiful shawls for every season'
        },
      ]
    },
    jewellery: {
      title: 'Coming Soon...',
      description: '',
      image: '',
      subcategories: []
    },
    accessories: {
      title: 'Coming Soon...',
      description: '',
      image: '',
      subcategories: []
    }
  };

  if (!category || !categoryInfo[category as keyof typeof categoryInfo]) {
    return <Products />;
  }

  const currentCategory = categoryInfo[category as keyof typeof categoryInfo];
  const hasSubcategories = currentCategory.subcategories.length > 0;

  return (
    <div>
      {/* Category Banner */}
      <section className={`relative h-[40vh] overflow-hidden ${!currentCategory.image && 'bg-muted/20'}`}>
        {currentCategory.image ? (
          <img
            src={currentCategory.image}
            className="w-full h-full object-cover"
            alt={currentCategory.title}
          />
        ) : (
          <div className="w-full h-full" />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.title}</h1>
            {currentCategory.description && (
              <p className="max-w-2xl mx-auto px-4">{currentCategory.description}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Check if subcategories exist */}
      {hasSubcategories ? (
        <>
          {/* Subcategories */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Browse {currentCategory.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our range of {currentCategory.title.toLowerCase()} subcategories
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {currentCategory.subcategories.map((subcat, index) => (
                  <motion.div
                    key={subcat.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                   <Link 
  to={`/products/${category}/${subcat.name.toLowerCase()}/${subcat.name.toLowerCase()}`}
  state={{ product: {
    id: subcat.name,
    name: subcat.name,
    category: category,
    subcategory: subcat.name,
    image: subcat.image,
    price: subcat.price, 
    description: `Beautiful ${subcat.name} from our collection`
  }}}
>
  <Card className="overflow-hidden hover:shadow-lg transition-all">
    <div className="aspect-square overflow-hidden">
      <img
        src={subcat.image}
        alt={subcat.name}
        className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
    <CardContent className="p-4 text-center">
      <h3 className="font-semibold">{subcat.name}</h3>
    </CardContent>
  </Card>
</Link>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
  <Button size="lg" asChild>
    <Link to="/all-products">View All {currentCategory.title}</Link>
  </Button>
</div>
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="py-16 bg-muted/30 dark:bg-[hsl(var(--category-bg))]">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Featured {currentCategory.title}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our most popular and best-selling {currentCategory.title.toLowerCase()}
                </p>
              </motion.div>

              <div className="text-center py-16 bg-muted/10 rounded-lg dark:bg-[hsl(var(--category-bg))]">
                <p className="text-muted-foreground">
                  Product listings specific to {currentCategory.title} would be displayed here
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        // Coming Soon Section
        <section className="py-32 bg-muted/10 dark:bg-[hsl(var(--category-bg))]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center "
          >
            <h2></h2>
            <p>
            </p>
          </motion.div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground dark:bg-[hsl(var(--category-bg))] dark:text-white" >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Looking for Something Special?</h2>
            <p className="mb-8">
              We offer custom orders and wholesale opportunities. Contact our team to discuss your specific requirements.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
