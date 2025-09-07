import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/pages/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import products from "./ProductData";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = state?.product || products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product not found
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
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75"
              onClick={() => setSelectedImage(0)}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
              {product.category} - {product.subCategory}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
            <span className="text-sm text-green-600 font-medium">
              20% OFF
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              {product.description}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-3"
                >
                  -
                </Button>
                <span className="px-4">{quantity}</span>
                <Button
                  variant="ghost"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3"
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Material</h3>
              <p className="text-gray-600 dark:text-gray-400">{product.material}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Free delivery on orders above $100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
