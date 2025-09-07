import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useCart } from '@/pages/CartContext';

type Product = {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  material: string;
  price: number;
  image: string;
};

const sampleProducts: Product[] = [
  
   {
    id: 1,
    name: "Banarasi Silk Saree",
    category: "Textiles",
    subCategory: "Sarees",
    price: 250,
    material: "Silk",
    image: "/images/Banarasi-saare.png",
  },
  {
    id: 2, name: "Embroidered Crop Top & Palazzo Co-ord Set", category: "Textiles", subCategory: "Crop Top & Palazzo", price: 350, material: "cotton", image: "/images/Organza-Saree.png"
  },
  {
    id: 3,
    name: "Lightweight Party Saree",
    category: "Textiles",
    subCategory: "Saree",
    price: 85,
    material: "silk",
    image: "/images/Party.png",
  }
];

const Products = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlSearchQuery = searchParams.get('search') || '';

  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchTerm, setSearchTerm] = useState(urlSearchQuery);
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [selectedMaterials, setSelectedMaterials] = useState(['All']);
  const [sortOption, setSortOption] = useState('newest');

  const products = sampleProducts;

  const categories = ['All', 'Textiles', 'Jewellery', 'Accessories'];
  const materials = ['All', 'Silk', 'Cotton', 'Silver', 'Gold Plated', 'Leather', 'Fabric', 'Pashmina Wool', 'Oxidized Silver'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (category === 'All' && checked) {
      setSelectedCategories(['All']);
    } else if (checked) {
      const newCategories = selectedCategories.filter(c => c !== 'All').concat(category);
      setSelectedCategories(newCategories);
    } else {
      const newCategories = selectedCategories.filter(c => c !== category);
      setSelectedCategories(newCategories.length === 0 ? ['All'] : newCategories);
    }
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (material === 'All' && checked) {
      setSelectedMaterials(['All']);
    } else if (checked) {
      const newMaterials = selectedMaterials.filter(m => m !== 'All').concat(material);
      setSelectedMaterials(newMaterials);
    } else {
      const newMaterials = selectedMaterials.filter(m => m !== material);
      setSelectedMaterials(newMaterials.length === 0 ? ['All'] : newMaterials);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    if (searchTerm) {
      searchParams.set('search', searchTerm);
    } else {
      searchParams.delete('search');
    }
    window.history.replaceState({}, '', `${location.pathname}?${searchParams.toString()}`);
  };

  const clearAllFilters = () => {
    setPriceRange([0, 500]);
    setSelectedCategories(['All']);
    setSelectedMaterials(['All']);
    setSearchTerm('');
    setSortOption('newest');
    window.history.replaceState({}, '', location.pathname);
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart`,
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.material.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategories.includes('All') || selectedCategories.includes(product.category);
    const matchesMaterial = selectedMaterials.includes('All') || selectedMaterials.includes(product.material);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-to-high':
        return a.price - b.price;
      case 'price-high-to-low':
        return b.price - a.price;
      case 'popularity':
        return 0;
      default:
        return 0;
    }
  });

  const ProductCard = ({ product, index }: { product: Product; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
        <div className="aspect-square overflow-hidden">
           <Link to={`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}/${product.id}`}>
            <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
          />
              </Link>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between mb-1">
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <p className="text-sm font-medium">${product.price}</p>
          </div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.material}</p>
          <div className="mt-3 flex justify-between items-center">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}/${product.id}`}>
                Details
              </Link>
            </Button>
            <Button size="sm" onClick={() => handleAddToCart(product)}>
              <ShoppingCart size={16} className="mr-1" /> Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="px-4 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {sortedProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
