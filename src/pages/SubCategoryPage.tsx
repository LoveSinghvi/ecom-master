import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button"; 
import { ShoppingCart } from "lucide-react";
import products from "./ProductData";

type Product = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  description: string;
};

const SubCategoryPage = () => {
  const { category, subcategory } = useParams();
  const { state } = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = state?.product as Product;

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Product data not found. Please go back and select a product again.
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleProductClick = () => {
    navigate(`/products/${category}/${subcategory}/${product.id}`, {
      state: { product }
    });
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div 
          className="cursor-pointer"
          onClick={handleProductClick}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4 dark:text-white">
            Category: {product.category}
          </p>
          <p className="text-gray-700 mb-4 dark:text-white">{product.description}</p>
          <p className="text-xl font-semibold text-primary mb-6">
            Price: ${product.price}
          </p>
          <div className="flex gap-4">
            <Button onClick={handleProductClick} variant="outline" className="flex-1">
              View Details
            </Button>
            <Button onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubCategoryPage;