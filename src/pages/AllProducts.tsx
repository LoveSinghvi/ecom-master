import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { toast, useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "@/pages/CartContext";
import products from "@/pages/ProductData"; // ✅ import your product data

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AllProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

    // ✅ NEW: Add state for selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Track selected categories and subcategories
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  
const products = [
    { id: 1, name: "Banarasi Silk Saree", category: "Textiles", subCategory: "Sarees", price: 250, material: "Silk", image: "/images/Banarasi-saare.png" },
    { id: 5, name: "Embroidered Crop Top & Palazzo Co-ord Set", category: "Textiles", subCategory: "Crop Top & Palazzo", price: 350, material: "cotton", image: "/images/Organza-Saree.png" },
    { id: 2, name: "Bridal Elegance Lehenga", category: "Textiles", subCategory: "Lehenga", price: 350, material: "cotton", image: "/images/0.png" },
    { id: 3, name: "Lightweight Party Saree", category: "Textiles", subCategory: "Saree", price: 85, material: "silk", image: "/images/Party.png" },
    { id: 4, name: "Pashmina Shawl", category: "Textiles", subCategory: "Shawls", price: 180, material: "Pashmina Wool", image: "/images/Pashmina-Shawl.png" },
    { id: 6, name: "Phulkari Dupatta", category: "Textiles", subCategory: "Dupattas", price: 95, material: "Cotton", image: "/images/Phulkari-Dupatta.png" },
    { id: 7, name: "Painted Boho Pants", category: "Textiles", subCategory: "Pants", price: 40, material: "Silk", image: "/images/Pants.png" },
    { id: 8, name: "Embroidered Dress", category: "Textiles", subCategory: "Dress", price: 65, material: "Embroidered", image: "/images/Embroidered-Dress.png" },
    { id: 9, name: "Chanderi Cotton Fabric", category: "Textiles", subCategory: "Fabrics", price: 120, material: "Cotton", image: "/images/Chanderi-Cotton-Fabric.png" },
    { id: 10, name: "Textured Beige Kurta Set", category: "Textiles", subCategory: "Kurta", price: 75, material: "cotton", image: "/images/Kurta.png" },
    { id: 11, name: "Hand Block Printed Scarf", category: "Textiles", subCategory: "Scarves", price: 45, material: "Cotton", image: "/images/Hand-Block-Printed-Scarf.png" },
    { id: 12, name: "Black Shirt with Festive Detailing", category: "Textiles", subCategory: "Shirt", price: 160, material: "Silk", image: "/images/Rani.png" },
  ];

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-low-to-high" },
    { label: "Price: High to Low", value: "price-high-to-low" },
    { label: "Popularity", value: "popularity" },
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image
    });
    setAddedProduct(product.name);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
    setTimeout(() => setAddedProduct(null), 2000);
  };

   // Modify filteredProducts to include category filtering
  const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.material.toLowerCase().includes(searchTerm.toLowerCase());

  const noCategorySelected= Object.keys(selectedFilters).length===0;
   if (noCategorySelected) {
    return matchesSearch;
  }
  const categorySelected = product.category in selectedFilters;
  const subCategories = selectedFilters[product.category] || [];

  const subCategoryMatch =
    subCategories.length === 0 || subCategories.includes(product.subCategory);

  return matchesSearch && categorySelected && subCategoryMatch;
});


// Build a map of categories -> subcategories
const categoryMap: Record<string, Set<string>> = {};

products.forEach((product) => {
  if (!categoryMap[product.category]) {
    categoryMap[product.category] = new Set();
  }
  categoryMap[product.category].add(product.subCategory);
});

//checkbox toggles
const toggleCategory = (category: string) => {
  setSelectedFilters((prev) => {
    const updated = { ...prev };
    if (updated[category]) {
      delete updated[category]; // Deselect category
    } else {
      updated[category] = []; // Select category with no subcategories yet
    }
    return updated;
  });
};

const toggleSubCategory = (category: string, subCategory: string) => {
  setSelectedFilters((prev) => {
    const updated = { ...prev };
    const currentSubs = updated[category] || [];

    if (currentSubs.includes(subCategory)) {
      updated[category] = currentSubs.filter((s) => s !== subCategory);
    } else {
      updated[category] = [...currentSubs, subCategory];
    }
    return updated;
  });
};

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-to-high":
        return a.price - b.price;
      case "price-high-to-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[hsl(var(--category-bg))]">
      <div className="container mx-auto px-4 py-10 dark:bg-[hsl(var(--category-bg))]">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          All Products
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 px-2">
          Explore our complete collection of handcrafted items from skilled artisans across India.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 " >
          {/* Sidebar Filters */}
          <motion.aside
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="lg:w-1/4 w-full space-y-10 p-6 rounded-2xl bg-gray-50 shadow-md dark:bg-[#111622] lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto"
>
            <div className="relative group ">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-hover:text-primary transition" size={20} />
              <Input
                placeholder="Search handcrafted products..."
                className="pl-12 w-full h-12 text-lg rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/40 transition duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold text-gray-550">
                Sort by:
              </label>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full h-12 text-base rounded-xl border-gray-300 focus:ring-2 focus:ring-primary/40 transition">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
  <label className="text-base font-semibold text-gray-550">
    Filter by Category:
  </label>
  <div className="space-y-1">
    {Object.entries(categoryMap).map(([category, subCategories]) => (
      <div key={category}>
        {/* Category Checkbox */}
        <label className="flex items-center space-x-2 text-sm text-gray-550">
          <input
            type="checkbox"
            checked={category in selectedFilters}
            onChange={() => toggleCategory(category)}
            className="form-checkbox h-4 w-4 text-primary focus:ring-primary"
          />
          <span>{category}</span>
        </label>

        {/* Subcategories under selected category */}
        {selectedFilters[category] && (
          <div className="ml-6 mt-1 space-y-1">
            {[...subCategories].map((sub) => (
              <label key={sub} className="flex items-center space-x-2 text-xs text-gray-300">
                <input
                  type="checkbox"
                  checked={selectedFilters[category].includes(sub)}
                  onChange={() => toggleSubCategory(category, sub)}
                  className="form-checkbox h-3.5 w-3.5 text-primary"
                />
                <span>{sub}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

          </motion.aside>

          {/* Product Grid */}
          <section className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
            {sortedProducts.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground text-lg font-semibold">
                No matching products found.
              </p>
            ) : (
              sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full flex cursor-pointer"
                  onClick={() =>
                    navigate(`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}/${product.id}`, {
                      state: { product }
                    })
                  }
                >
                  <Card className="overflow-hidden h-full flex flex-col transition-all border border-gray-200 hover:shadow-xl rounded-2xl hover:-translate-y-1 hover:scale-[1.01] duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 "
                      />
                      <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded shadow-lg dark:text-black">
                        ${product.price}
                      </span>
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col ">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                        <h3 className="font-medium text-lg truncate">{product.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1 truncate">{product.material}</p>
                      </div>
                      <div
                        className="mt-auto pt-4 flex justify-between gap-3 "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <Link to={`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}/${product.id}`} state={{ product }}>
                            Details
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className={` dark:text-black flex-1 flex items-center justify-center gap-1 rounded-md transition-all duration-200 ${
                            addedProduct === product.name
                              ? "bg-green-500 text-white scale-95 "
                              : "bg-primary text-white hover:bg-primary/90"
                          }`}
                          disabled={addedProduct === product.name}
                        >
                          <ShoppingCart size={16} />
                          {addedProduct === product.name ? "Added" : "Add"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;