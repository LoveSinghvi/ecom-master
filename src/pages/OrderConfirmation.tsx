import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useState, useEffect } from 'react';

const OrderConfirmation = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">

      <Card className="max-w-2xl mx-auto p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Order Number</p>
            <p className="text-muted-foreground">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Estimated Delivery</p>
            <p className="text-muted-foreground">
              {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/profile">View Order Status</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderConfirmation;