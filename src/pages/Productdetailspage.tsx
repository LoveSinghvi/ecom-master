import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/pages/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from "lucide-react";
import products from "@/pages/ProductData";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Find product by ID from the product data
  const product = products.find((item) => item.id === Number(id));

  // If product not found
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

  return (
    <div className="min-h-screen bg-white dark:bg-black px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Product Image */}
        <div className="col-span-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Center: Product Info */}
        <div className="col-span-1 space-y-4">
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-muted-foreground text-sm">{product.material}</p>
          <div className="text-base text-gray-500">
            {product.category} / {product.subCategory}
          </div>
          <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
        </div>

        {/* Right: Purchase/Delivery Box */}
        <div className="col-span-1 border rounded-lg p-6 shadow-sm space-y-4">
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-sm text-gray-500">FREE delivery: Tue, 3 June</p>
          <p className="text-sm text-gray-500">
            Sold by: <span className="font-medium">CraftSeller</span>
          </p>
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
